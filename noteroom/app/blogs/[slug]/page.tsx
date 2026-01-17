import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogBySlug, getAllBlogs, formatBlogDate } from "@/lib/blogs";
import BlogCard from "@/components/blog/BlogCard";
import DarkVeilWrapper from "@/components/ui/DarkVeilWrapper";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

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
    <div className="relative w-full bg-transparent overflow-x-hidden pt-[49px]">
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]" />
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]">
        <DarkVeilWrapper />
      </div>
      <div className="max-w-[1860px] mx-auto min-h-screen px-4 sm:px-10 lg:px-[76px] pb-20">
        <div className="mb-12 sm:mb-24 lg:mb-[200px] flex flex-col items-center">
          <div className="mb-8 lg:mb-12 flex items-center gap-2">
            <span className="text-stone-500 text-lg sm:text-2xl font-semibold font-['Inter'] tracking-wide">
              Blog /{" "}
            </span>
            <span className="text-black text-lg sm:text-2xl font-semibold font-['Inter'] tracking-wide">
              {prefix}
            </span>
          </div>

          <h1 className="max-w-[1000px] text-center text-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium font-['Space_Grotesk'] leading-tight lg:leading-[1.2]">
            {blog.title}
          </h1>

          <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-zinc-300 overflow-hidden relative">
                {blog.author.avatar && (
                  <Image
                    src={`/images/${blog.author.avatar}`}
                    alt={blog.author.name}
                    fill
                    className="object-cover"
                  />
                )}
                {!blog.author.avatar && (
                  <div className="flex h-full items-center justify-center text-[10px] sm:text-xs font-bold text-zinc-600">
                    {blog.author.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="text-black text-base sm:text-lg lg:text-xl font-normal font-['Inter']">
                {blog.author.name}
              </div>
            </div>
            <div className="text-neutral-500 text-[10px] sm:text-xs lg:text-sm font-medium font-['Inter'] uppercase tracking-wider">
              {formatBlogDate(new Date(blog.publishedAt))}
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[1560px] mx-auto aspect-video mb-12 sm:mb-20 lg:mb-24 -mt-6 sm:-mt-12 lg:-mt-26">
          <div className="absolute inset-0 rounded-lg sm:rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            {blog.thumbnail && (
              <Image
                src={`/images/${blog.thumbnail}`}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-linear-to-b from-white/0 to-black/40" />
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto space-y-8 sm:space-y-16 mb-24 lg:mb-40">
          <div className="font-['Inter'] text-black text-base sm:text-lg lg:text-xl font-normal leading-relaxed lg:leading-[1.6]">
            <span className="inline-block text-black text-4xl sm:text-6xl lg:text-8xl font-normal leading-[0.5] align-baseline mr-1">
              {firstLetter}
            </span>
            {restOfFirstParagraph}
          </div>

          <div className="space-y-8 sm:space-y-12 font-['Inter']">
            {blog.content.map((section, idx) => (
              <div key={idx} className="space-y-8 lg:space-y-12">
                {idx === 0 ? (
                  section.contents.slice(1).map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-black/80 text-base sm:text-lg lg:text-xl font-normal leading-relaxed lg:leading-[1.7]"
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <div className="space-y-4 sm:space-y-8">
                    <h2 className="text-black text-lg sm:text-xl lg:text-2xl font-semibold font-['Space_Grotesk'] pt-4 lg:pt-6 mb-1 lg:mb-4">
                      {section.title}
                    </h2>
                    {section.contents.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-black/80 text-base sm:text-lg lg:text-xl font-normal leading-relaxed lg:leading-[1.7]"
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

        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-center justify-center gap-5 mb-8 lg:mb-12">
            <h3 className="text-black/60 text-xl sm:text-2xl font-semibold font-['Space_Grotesk']">
              More Articles
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-start gap-x-4 gap-y-6 sm:gap-y-8 pb-20">
            {moreArticles.map((article) => (
              <div
                key={article.slug}
                className="w-full max-w-[480px] sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1rem)]"
              >
                <BlogCard
                  slug={article.slug}
                  title={article.title}
                  tags={article.tags}
                  thumbnail={article.thumbnail}
                  author={article.author}
                  publishedAt={article.publishedAt as unknown as string}
                  readTime={article.readTime}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
