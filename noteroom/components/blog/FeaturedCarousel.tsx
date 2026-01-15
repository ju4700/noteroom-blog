"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { type IBlog } from "@/models/Blog";

interface FeaturedCarouselProps {
  blogs: IBlog[];
}

export default function FeaturedCarousel({ blogs }: FeaturedCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!blogs.length) return null;

  return (
    <div className="relative mx-auto w-full max-w-[1920px]">
      {/* Carousel Viewport */}
      <div className="overflow-visible" ref={emblaRef}>
        <div className="flex touch-pan-y items-center gap-8 py-8 pl-[max(0px,calc(50%-562px))]">
          {blogs.map((blog, index) => (
            <div
              key={blog.slug}
              className="relative flex min-w-0 flex-[0_0_1124px]"
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="group relative block h-[599px] w-full overflow-hidden rounded-[20px]"
              >
                {/* Background Image */}
                {blog.thumbnail ? (
                  <Image
                    src={`/images/${blog.thumbnail}`}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index === 0}
                  />
                ) : (
                  <div className="h-full w-full bg-zinc-800" />
                )}

                {/* Gradient Overlay - Exact from Figma */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-white/0 via-zinc-800/80 to-black blur-[0.95px]" />

                {/* Content Overlay */}
                <div className="absolute bottom-[60px] left-[42px] z-10 flex flex-col gap-8">
                  <h2 className="max-w-[900px] font-['Space_Grotesk'] text-3xl font-normal text-white">
                    {blog.title}
                  </h2>

                  <div className="flex items-center gap-4 text-white">
                    {/* Author Avatar */}
                    <div className="relative h-8 w-8 overflow-hidden rounded-3xl bg-zinc-700">
                      {blog.author.avatar ? (
                        <Image
                          src={`/images/${blog.author.avatar}`}
                          alt={blog.author.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs font-bold text-white">
                          {blog.author.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-8">
                      {/* Author Name */}
                      <span className="font-['Poppins'] text-xl font-normal text-white">
                        {blog.author.name}
                      </span>

                      {/* Separator Dot */}
                      <div className="h-[5px] w-[5px] rounded-full bg-white" />

                      {/* Category / Tag */}
                      <span className="font-['Poppins'] text-xl font-normal text-neutral-500">
                        {blog.tags[0] || "Blog"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Absolute positioning resembling design */}
      <div className="contain-layout absolute left-1/2 top-1/2 flex w-full max-w-[1240px] -translate-x-1/2 -translate-y-1/2 justify-between px-4 pointer-events-none">
        {/* Prev Button */}
        <button
          onClick={scrollPrev}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-3xl bg-neutral-100 transition-colors hover:bg-neutral-200"
          aria-label="Previous slide"
        >
          <div className="relative h-6 w-6 overflow-hidden">
            {/* Custom Arrow Shape using SVG equivalent of outline */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                d="M10 17L15 12L10 7"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-3xl bg-neutral-100 transition-colors hover:bg-neutral-200"
          aria-label="Next slide"
        >
          <div className="relative h-6 w-6 overflow-hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17L15 12L10 7"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Pagination Dots - Centered below */}
      <div className="mt-8 flex justify-center gap-4">
        <div className="h-4 w-4 rounded-full bg-zinc-200" />
        <div className="h-4 w-4 rounded-full bg-black" />
        <div className="h-4 w-4 rounded-full bg-zinc-200" />
      </div>
    </div>
  );
}
