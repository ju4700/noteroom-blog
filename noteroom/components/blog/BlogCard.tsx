import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  slug: string;
  title: string;
  tags: string[];
  thumbnail: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime?: string;
}

export default function BlogCard({
  slug,
  title,
  thumbnail,
  publishedAt,
}: BlogCardProps) {
  const getPrefix = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.startsWith("why")) return "Why’s";
    if (lower.startsWith("what")) return "What’s";
    if (lower.startsWith("how")) return "How’s";
    return "Blog";
  };

  const prefix = getPrefix(title);

  const dateObj = new Date(publishedAt);
  const day = String(dateObj.getUTCDate()).padStart(2, "0");
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
  const year = dateObj.getUTCFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  return (
    <article className="group inline-flex w-full max-w-[400px] flex-col justify-start items-start gap-3.5 mb-12 sm:mb-20">
      <Link href={`/blogs/${slug}`} className="w-full">
        <div
          className="w-full h-72 rounded-[9.52px] overflow-hidden relative"
          suppressHydrationWarning
        >
          {thumbnail ? (
            <Image
              src={`/images/${thumbnail}`}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-100">
              <span className="text-4xl opacity-20">📝</span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-start items-start gap-5 mt-3.5">
          <div className="self-stretch h-14 justify-start items-center overflow-hidden">
            <h3 className="text-black text-xl font-medium font-['Space_Grotesk'] leading-tight group-hover:text-cyan-600 transition-colors line-clamp-2">
              {title}
            </h3>
          </div>
          <div className="self-stretch flex justify-between items-start text-neutral-500 text-base font-normal font-['Inter'] -mt-5">
            <span>
              {prefix} - {formattedDate}
            </span>
            <span></span>
          </div>
        </div>
      </Link>
    </article>
  );
}
