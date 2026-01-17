import type { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import CircularFeaturedCarousel from "@/components/blog/CircularFeaturedCarousel";
import { getAllBlogs, getFeaturedBlogs, formatBlogDate } from "@/lib/blogs";
import DarkVeilWrapper from "@/components/ui/DarkVeilWrapper";

export const metadata: Metadata = {
  title: "Our Blog",
  description:
    "Explore the What, Why and How's of everyday learning journey with NoteRoom's blog. Insights, tips, and stories for curious minds.",
  keywords: [
    "NoteRoom blog",
    "learning blog",
    "student tips",
    "education insights",
    "curiosity",
    "study hacks",
  ],
  openGraph: {
    title: "Our Blog | NoteRoom",
    description:
      "Explore the What, Why and How's of everyday learning journey with NoteRoom's blog. Insights, tips, and stories for curious minds.",
    type: "website",
    url: "https://noteroom.co/blogs",
  },
  twitter: {
    title: "Our Blog | NoteRoom",
    description:
      "Explore the What, Why and How's of everyday learning journey with NoteRoom's blog. Insights, tips, and stories for curious minds.",
  },
};

export const revalidate = 60;

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  const featured = await getFeaturedBlogs();
  const carouselBlogs = featured.length > 0 ? featured : blogs.slice(0, 5);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent pb-20 mb-20">
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]">
        <DarkVeilWrapper />
      </div>
      <section className="container-custom pt-24 sm:pt-32 pb-4 text-center">
        <h1 className="mb-3 font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900">
          Blog
        </h1>
        <p className="font-['Inter'] text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto px-4">
          What, Why and How&apos;s of everyday learning journey
        </p>
      </section>

      <section className="relative z-10 mb-16">
        <CircularFeaturedCarousel blogs={carouselBlogs} />
      </section>

      <section className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-y-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="w-full max-w-[480px] sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1rem)]"
            >
              <BlogCard
                slug={blog.slug}
                title={blog.title}
                tags={blog.tags}
                thumbnail={blog.thumbnail}
                author={blog.author}
                publishedAt={formatBlogDate(new Date(blog.publishedAt))}
                readTime={blog.readTime}
              />
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl">
              No blogs found.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
