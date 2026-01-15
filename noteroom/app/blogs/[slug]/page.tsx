import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogBySlug, getAllBlogs, formatBlogDate } from "@/lib/blogs";
import BlogCard from "@/components/blog/BlogCard";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper to get prefix logic (consistent with BlogCard)
const getPrefix = (title: string) => {
  const t = title.toLowerCase();
  if (t.startsWith("why")) return "Why's";
  if (t.startsWith("what")) return "What's";
  if (t.startsWith("how")) return "How's";
  return "Blog";
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description:
      blog.content[0]?.contents[0]?.substring(0, 160) ||
      `Read ${blog.title} on NoteRoom`,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = await getAllBlogs();
  const moreArticles = allBlogs.filter((b) => b.slug !== slug).slice(0, 4);

  const prefix = getPrefix(blog.title);
  const firstSection = blog.content[0];
  const firstParagraph = firstSection?.contents[0] || "";
  const firstLetter = firstParagraph.charAt(0);
  const restOfFirstParagraph = firstParagraph.slice(1);

  return (
    <div className="relative w-full bg-white overflow-x-hidden pt-[49px]">
      {/* Container to handle width and centering */}
      <div className="max-w-[1860px] mx-auto min-h-screen px-[76px] pb-20">
        {/* Navigation Breadcrumb Area */}
        <div className="mb-[200px] flex flex-col items-center">
          <div className="mb-12 flex items-center gap-2">
            <span className="text-stone-500 text-2xl font-semibold font-['Inter'] tracking-wide">
              Blog /{" "}
            </span>
            <span className="text-black text-2xl font-semibold font-['Inter'] tracking-wide">
              {prefix}
            </span>
          </div>

          <h1 className="max-w-[715px] text-center text-black text-6xl font-medium font-['Space_Grotesk'] leading-[76.80px]">
            {blog.title}
          </h1>

          {/* Author Section */}
          <div className="mt-20 flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-zinc-300 overflow-hidden relative">
                {blog.author.avatar && (
                  <Image
                    src={`/images/${blog.author.avatar}`}
                    alt={blog.author.name}
                    fill
                    className="object-cover"
                  />
                )}
                {!blog.author.avatar && (
                  <div className="flex h-full items-center justify-center text-xs font-bold text-zinc-600">
                    {blog.author.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="text-black text-xl font-normal font-['Inter']">
                {blog.author.name}
              </div>
            </div>
            <div className="text-neutral-500 text-sm font-medium font-['Inter'] uppercase">
              {formatBlogDate(new Date(blog.publishedAt))}
            </div>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="relative w-[1560px] mx-auto h-[800px] mb-24 -mt-26">
          <div className="absolute inset-0 rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            {blog.thumbnail && (
              <Image
                src={`/images/${blog.thumbnail}`}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            )}
            {/* Gradient Overlay for Consistency with design */}
            <div className="absolute inset-0 bg-linear-to-b from-white/0 to-black/40" />
          </div>
        </div>

        {/* Blog Content Section */}
        <div className="max-w-[1200px] mx-auto space-y-16 mb-40">
          {/* First Paragraph with Raised Cap (Text wraps underneath) */}
          <div className="font-['Inter'] text-black text-3xl font-normal leading-[1.6]">
            <span className="inline-block text-black text-9xl font-normal leading-[0.5] align-baseline mr-1">
              {firstLetter}
            </span>
            {restOfFirstParagraph}
          </div>

          {/* Remaining Content */}
          <div className="space-y-12 font-['Inter']">
            {blog.content.map((section, idx) => (
              <div key={idx} className="space-y-12">
                {idx === 0 ? (
                  // Skip the first paragraph of the first section as it's the dropcap above
                  section.contents.slice(1).map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-black/80 text-2xl font-normal leading-[1.7]"
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <div className="space-y-8">
                    <h2 className="text-black text-4xl font-semibold font-['Space_Grotesk'] pt-6 mb-4">
                      {section.title}
                    </h2>
                    {section.contents.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-black/80 text-2xl font-normal leading-[1.7]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* More Articles Section */}
        <div className="max-w-[1507px] mx-auto">
          <div className="flex items-center justify-center gap-5 mb-12">
            <h3 className="text-black/60 text-2xl font-semibold font-['Space_Grotesk']">
              More Articles
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-x-3.5 gap-y-12 pb-20">
            {moreArticles.map((article) => (
              <BlogCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                tags={article.tags}
                thumbnail={article.thumbnail}
                author={article.author}
                publishedAt={article.publishedAt as unknown as string}
                readTime={article.readTime}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
