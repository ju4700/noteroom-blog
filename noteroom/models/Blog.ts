import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlogContent {
  index: string;
  title: string;
  contents: string[];
}

export interface IBlogAuthor {
  name: string;
  avatar: string;
}

export interface IBlog extends Document {
  slug: string;
  title: string;
  tags: string[];
  thumbnail: string;
  content: IBlogContent[];
  author: IBlogAuthor;
  readTime: string;
  publishedAt: Date;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogContentSchema = new Schema<IBlogContent>(
  {
    index: { type: String, required: true },
    title: { type: String, required: true },
    contents: [{ type: String }],
  },
  { _id: false }
);

const BlogAuthorSchema = new Schema<IBlogAuthor>(
  {
    name: { type: String, required: true },
    avatar: { type: String, default: '' },
  },
  { _id: false }
);

const BlogSchema = new Schema<IBlog>(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [{ type: String }],
    thumbnail: { type: String, default: '' },
    content: [BlogContentSchema],
    author: BlogAuthorSchema,
    readTime: { type: String, default: '5 mins' },
    publishedAt: { type: Date, default: Date.now },
    featured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Create indexes for common queries
BlogSchema.index({ publishedAt: -1 });
BlogSchema.index({ featured: 1, publishedAt: -1 });

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
