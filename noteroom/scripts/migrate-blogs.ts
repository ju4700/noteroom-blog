/**
 * Blog Migration Script
 * 
 * This script migrates existing JSON blog files to MongoDB.
 * Run with: npx tsx scripts/migrate-blogs.ts
 * 
 * Make sure MONGODB_URI is set in .env.local before running.
 */

import * as fs from 'fs';
import * as path from 'path';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

// Blog schema (duplicated here to avoid import issues)
const BlogContentSchema = new mongoose.Schema({
  index: { type: String, required: true },
  title: { type: String, required: true },
  contents: [{ type: String }],
}, { _id: false });

const BlogAuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, default: '' },
}, { _id: false });

const BlogSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  tags: [{ type: String }],
  thumbnail: { type: String, default: '' },
  content: [BlogContentSchema],
  author: BlogAuthorSchema,
  readTime: { type: String, default: '5 mins' },
  publishedAt: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false },
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

interface OldBlogItem {
  type: string;
  data: {
    command?: string;
    text?: string;
    tags?: string[];
    items?: Array<{
      index: string;
      title: string;
      contents: string[];
    }>;
  };
}

interface AllBlogItem {
  route: string;
  title: string;
  tags: string[];
  thm: string;
  author: {
    name: string;
    pfp: string;
  };
  published_at: string;
  slide?: boolean;
}

async function migrateBlog(filePath: string, allBlogsData: AllBlogItem[]) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const blogData: OldBlogItem[] = JSON.parse(content);
  
  // Extract data from the old format
  const header = blogData.find(obj => obj.type === 'header');
  const title = header?.data as unknown as string || 'Untitled';
  
  const tagsItem = blogData.find(obj => obj.data?.command === 'tag');
  const tags = tagsItem?.data?.tags || [];
  
  const byItem = blogData.find(obj => obj.data?.command === 'by');
  const authorName = byItem?.data?.text || 'Unknown';
  
  const pfpItem = blogData.find(obj => obj.data?.command === 'pfp');
  const authorAvatar = pfpItem?.data?.text || '';
  
  const rdtimeItem = blogData.find(obj => obj.data?.command === 'rdtime');
  const readTime = rdtimeItem?.data?.text || '5 mins';
  
  const dateItem = blogData.find(obj => obj.data?.command === 'date');
  const publishedAt = dateItem?.data?.text ? new Date(dateItem.data.text) : new Date();
  
  const thmItem = blogData.find(obj => obj.data?.command === 'thm');
  const thumbnail = thmItem?.data?.text || '';
  
  const idxItem = blogData.find(obj => obj.data?.command === 'idx');
  const contentSections = idxItem?.data?.items || [];
  
  // Get slug from filename
  const fileName = path.basename(filePath, '.blog.json');
  
  // Check if this blog is featured (has slide: true in all.blog.json)
  const allBlogEntry = allBlogsData.find(b => b.route === fileName);
  const featured = allBlogEntry?.slide || false;
  
  return {
    slug: fileName,
    title,
    tags,
    thumbnail,
    content: contentSections.map(section => ({
      index: section.index,
      title: section.title,
      contents: section.contents,
    })),
    author: {
      name: authorName,
      avatar: authorAvatar,
    },
    readTime,
    publishedAt,
    featured,
  };
}

async function main() {
  const MONGODB_URI = process.env.MONGODB_URI;
  
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI not found in .env.local');
    console.log('Please add your MongoDB connection string to .env.local');
    process.exit(1);
  }
  
  console.log('🔌 Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected to MongoDB');
  
  // Path to deprecated blogs folder
  const deprecatedPath = path.join(process.cwd(), '..', 'deprecated', 'blogs');
  
  if (!fs.existsSync(deprecatedPath)) {
    console.error('❌ Deprecated blogs folder not found at:', deprecatedPath);
    process.exit(1);
  }
  
  // Read all.blog.json for featured status
  const allBlogsPath = path.join(deprecatedPath, 'all.blog.json');
  let allBlogsData: AllBlogItem[] = [];
  
  if (fs.existsSync(allBlogsPath)) {
    allBlogsData = JSON.parse(fs.readFileSync(allBlogsPath, 'utf-8'));
  }
  
  // Get all blog JSON files
  const blogFiles = fs.readdirSync(deprecatedPath)
    .filter(file => file.endsWith('.blog.json') && file !== 'all.blog.json');
  
  console.log(`📚 Found ${blogFiles.length} blog files to migrate`);
  
  for (const file of blogFiles) {
    const filePath = path.join(deprecatedPath, file);
    console.log(`\n📝 Migrating: ${file}`);
    
    try {
      const blogData = await migrateBlog(filePath, allBlogsData);
      
      // Upsert the blog (update if exists, insert if not)
      await Blog.findOneAndUpdate(
        { slug: blogData.slug },
        blogData,
        { upsert: true, new: true }
      );
      
      console.log(`   ✅ Migrated: ${blogData.title}`);
    } catch (error) {
      console.error(`   ❌ Error migrating ${file}:`, error);
    }
  }
  
  console.log('\n🎉 Migration complete!');
  
  // Show summary
  const count = await Blog.countDocuments();
  console.log(`📊 Total blogs in database: ${count}`);
  
  await mongoose.disconnect();
  console.log('🔌 Disconnected from MongoDB');
}

main().catch(console.error);
