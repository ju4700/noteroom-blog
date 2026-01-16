import type { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import CircularFeaturedCarousel from "@/components/blog/CircularFeaturedCarousel";
import { getAllBlogs, getFeaturedBlogs, formatBlogDate } from "@/lib/blogs";
import DarkVeil from "@/components/ui/DarkVeil";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  const featured = await getFeaturedBlogs();
  const carouselBlogs = featured.length > 0 ? featured : blogs.slice(0, 5);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent pb-20">
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]">
        <DarkVeil />
      </div>
      <section className="container-custom pt-32 pb-4 text-center">
        <h1 className="mb-3 font-['Space_Grotesk'] text-5xl font-medium tracking-tight text-gray-900 md:text-6xl">
          Blog
        </h1>
        <p className="font-['Inter'] text-xl text-gray-500">
          What, Why and How&apos;s of everyday learning journey
        </p>
      </section>

      <section className="relative z-10 mb-16">
        <CircularFeaturedCarousel blogs={carouselBlogs} />
      </section>

      <section className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogs.map((blog) => (
            <div key={blog.slug} className="flex justify-center">
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
            <p className="text-gray-500">No blogs found.</p>
          </div>
        )}
      </section>
    </div>
  );
}
