"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { type IBlog } from "@/models/Blog";

interface CircularFeaturedCarouselProps {
  blogs: IBlog[];
}

const CENTER_WIDTH = 1124;
const SIDE_WIDTH = 1087;
const GAP = 58;
const SIDE_OFFSET = 18;
const PITCH = 562 + GAP + 543.5;

const NAV_BUTTON_SPREAD = 130;

export default function CircularFeaturedCarousel({
  blogs,
}: CircularFeaturedCarouselProps) {
  const featuredBlogs = blogs.slice(0, 3);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (featuredBlogs.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredBlogs.length]);

  if (!featuredBlogs.length) return null;

  const dynamicCenterWidth = isMobile
    ? window.innerWidth * 0.95
    : isTablet
    ? 700
    : CENTER_WIDTH;
  const dynamicSideWidth = isMobile ? 0 : isTablet ? 500 : SIDE_WIDTH;

  const dynamicPitch = isMobile
    ? 0
    : dynamicCenterWidth / 2 + GAP + (dynamicSideWidth * 0.85) / 2;

  return (
    <div className="relative mx-auto h-[500px] sm:h-[650px] lg:h-[800px] w-full max-w-[1920px] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[calc(50%-20px)]">
        <div className="relative h-full w-full">
          {featuredBlogs.map((blog, index) => {
            const length = featuredBlogs.length;
            const diff = (index - currentSlide + length) % length;
            let position = "hidden";

            if (diff === 0) position = "center";
            else if (diff === 1 && !isMobile) position = "right";
            else if (diff === length - 1 && !isMobile) position = "left";
            else {
              position = "hidden";
            }

            const isCenter = position === "center";

            const xPos = isCenter
              ? 0
              : position === "right"
              ? dynamicPitch
              : -dynamicPitch;

            return (
              <motion.div
                key={blog.slug}
                initial={false}
                animate={{
                  x: xPos,
                  scale: isCenter ? 1 : 0.85,
                  zIndex: isCenter ? 20 : 10,
                  opacity: isCenter ? 1 : position === "hidden" ? 0 : 0.6,
                }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  width: isCenter ? dynamicCenterWidth : dynamicSideWidth,
                  height: isCenter
                    ? isMobile
                      ? 400
                      : isTablet
                      ? 450
                      : 599
                    : 536,
                  marginTop: isCenter ? 0 : SIDE_OFFSET,
                }}
                onClick={() => setCurrentSlide(index)}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group relative block h-full w-full overflow-hidden rounded-[20px]"
                  draggable={false}
                >
                  {blog.thumbnail ? (
                    <Image
                      src={`/images/${blog.thumbnail}`}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={isCenter}
                      draggable={false}
                      suppressHydrationWarning
                    />
                  ) : (
                    <div className="h-full w-full bg-zinc-800" />
                  )}

                  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-transparent via-transparent to-black/90" />
                  <motion.div
                    className="absolute bottom-0 left-[42px] z-10 flex flex-col gap-2 pb-[35px]"
                    animate={{ opacity: isCenter ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="max-w-[896px] font-['Space_Grotesk'] text-3xl font-normal text-white">
                      {blog.title}
                    </h2>

                    <div className="flex items-center gap-2 text-white">
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

                      <div className="flex items-center gap-4">
                        <span className="font-['Poppins'] text-xl font-normal text-white">
                          {blog.author.name}
                        </span>

                        <div className="h-[5px] w-[5px] rounded-full bg-white" />

                        <span className="font-['Poppins'] text-xl font-normal text-neutral-100">
                          {blog.tags[0] || "Blog"}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 z-30">
        {featuredBlogs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "bg-black" : "bg-zinc-200"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div
        className={`absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none z-30 ${
          isMobile ? "hidden" : ""
        }`}
        style={{ maxWidth: dynamicCenterWidth + NAV_BUTTON_SPREAD }}
      >
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length
            )
          }
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-3xl bg-white transition-colors hover:bg-zinc-50"
          aria-label="Previous slide"
        >
          <div className="relative h-6 w-6 overflow-hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
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

        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length)
          }
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-3xl bg-white transition-colors hover:bg-zinc-50"
          aria-label="Next slide"
        >
          <div className="relative h-6 w-6 overflow-hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
    </div>
  );
}
