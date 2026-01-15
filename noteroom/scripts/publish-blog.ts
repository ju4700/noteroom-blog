/**
 * Publish Blog Script
 * 
 * Publishes or updates a blog post from a JSON file.
 * Usage: npm run publish-blog <filename-in-content-blogs>
 * Example: npm run publish-blog my-new-post.json
 */

import * as fs from 'fs';
import * as path from 'path';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Blog from '../models/Blog';

// Load environment variables
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

async function publishBlog() {
  const MONGODB_URI = process.env.MONGODB_URI;
  
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI not found in .env.local');
    process.exit(1);
  }

  // Get filename from arguments
  const fileName = process.argv[2];
  
  if (!fileName) {
    console.error('❌ Please provide a filename.');
    console.log('Usage: npm run publish-blog <filename>');
    process.exit(1);
  }

  const filePath = path.join(process.cwd(), 'content', 'blogs', fileName);

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  console.log('🔌 Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected');

  try {
    console.log(`📖 Reading ${fileName}...`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const blogData = JSON.parse(content);

    // Basic validation
    if (!blogData.slug || !blogData.title) {
      throw new Error('Missing required fields: slug or title');
    }

    console.log(`📝 Publishing "${blogData.title}"...`);

    // Upsert the blog
    const result = await Blog.findOneAndUpdate(
      { slug: blogData.slug },
      blogData,
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log(`✅ Successfully published!`);
    console.log(`🔗 Slug: ${result?.slug}`);
    console.log(`📅 Published: ${result?.publishedAt}`);
    
  } catch (error) {
    console.error('❌ Error publishing blog:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected');
  }
}

publishBlog().catch(console.error);
