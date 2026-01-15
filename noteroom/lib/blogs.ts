import connectToDatabase from './mongodb';
import Blog, { IBlog } from '@/models/Blog';

export async function getAllBlogs(): Promise<IBlog[]> {
  const conn = await connectToDatabase();
  
  // Return empty array if database not connected
  if (!conn) {
    return [];
  }
  
  const blogs = await Blog.find({})
    .sort({ publishedAt: -1 })
    .lean();
  
  return blogs.map(serializeBlog);
}

export async function getFeaturedBlogs(): Promise<IBlog[]> {
  const conn = await connectToDatabase();
  
  if (!conn) {
    return [];
  }
  
  const blogs = await Blog.find({ featured: true })
    .sort({ publishedAt: -1 })
    .limit(5)
    .lean();
  
  return blogs.map(serializeBlog);
}

export async function getBlogBySlug(slug: string): Promise<IBlog | null> {
  const conn = await connectToDatabase();
  
  if (!conn) {
    return null;
  }
  
  const blog = await Blog.findOne({ slug }).lean();
  
  return blog ? serializeBlog(blog) : null;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const conn = await connectToDatabase();
  
  if (!conn) {
    return [];
  }
  
  const blogs = await Blog.find({}, { slug: 1 }).lean();
  
  return blogs.map((blog) => blog.slug);
}

// Helper to serialize Mongoose document to plain object
function serializeBlog(blog: any): IBlog {
  return {
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt?.toISOString(),
    updatedAt: blog.updatedAt?.toISOString(),
    publishedAt: blog.publishedAt?.toISOString(),
  };
}

// Helper to format blog date
export function formatBlogDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
