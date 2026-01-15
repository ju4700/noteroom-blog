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
// Center-to-Center Pitch = CenterHalf + Gap + SideHalf
const PITCH = 562 + GAP + 543.5; // Starts at 1163.5

// Adjust this value to change the distance between the Previous/Next buttons
// The total width of the button container will be CENTER_WIDTH + NAV_BUTTON_SPREAD
// Increasing this number pushes buttons further apart. Decreasing it brings them closer.
const NAV_BUTTON_SPREAD = 130;

export default function CircularFeaturedCarousel({
  blogs,
}: CircularFeaturedCarouselProps) {
  // Limit to only 3 items as requested
  const featuredBlogs = blogs.slice(0, 3);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play interval
  useEffect(() => {
    // Only autoplay if there are enough slides to rotate
    if (featuredBlogs.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredBlogs.length]);

  if (!featuredBlogs.length) return null;

  return (
    <div className="relative mx-auto h-[800px] w-full max-w-[1920px] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[calc(50%-20px)]">
        <div className="relative h-full w-full">
          {featuredBlogs.map((blog, index) => {
            const length = featuredBlogs.length;
            // Calculate relative position based on current index
            // We want indices to wrap around: 0 -> length-1

            // Logic adapted from user snippet to determine position slots
            const diff = (index - currentSlide + length) % length;
            let position = "hidden"; // Default to hidden

            if (diff === 0) position = "center";
            else if (diff === 1) position = "right";
            else if (diff === length - 1) position = "left";
            else {
              position = "hidden";
            }

            const isCenter = position === "center";

            const xOffset = PITCH;
            const xPos = isCenter
              ? 0
              : position === "right"
              ? xOffset
              : -xOffset;

            return (
              <motion.div
                key={blog.slug}
                initial={false}
                animate={{
                  x: xPos,
                  scale: 1,
                  zIndex: isCenter ? 20 : 10,
                  opacity: isCenter ? 1 : position === "hidden" ? 0 : 1,
                }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  width: isCenter ? CENTER_WIDTH : SIDE_WIDTH,
                  height: isCenter ? 599 : 536,
                  marginTop: isCenter ? 0 : SIDE_OFFSET,
                }}
                onClick={() => setCurrentSlide(index)}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group relative block h-full w-full overflow-hidden rounded-[20px]"
                  draggable={false}
                >
                  {/* Background Image */}
                  {blog.thumbnail ? (
                    <Image
                      src={`/images/${blog.thumbnail}`}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={isCenter}
                      draggable={false}
                    />
                  ) : (
                    <div className="h-full w-full bg-zinc-800" />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-transparent via-transparent to-black/90" />

                  {/* Content Overlay */}
                  <motion.div
                    className="absolute bottom-0 left-[42px] z-10 flex flex-col gap-6 pb-[58px]"
                    animate={{ opacity: isCenter ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="max-w-[896px] font-['Space_Grotesk'] text-3xl font-normal text-white">
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
                        <span className="font-['Poppins'] text-xl font-normal text-white">
                          {blog.author.name}
                        </span>

                        <div className="h-[5px] w-[5px] rounded-full bg-white" />

                        <span className="font-['Poppins'] text-xl font-normal text-neutral-500">
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

      {/* Pagination Dots */}
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

      {/* Navigation Buttons: Dynamically sized based on CENTER_WIDTH */}
      <div
        className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none z-30"
        style={{ maxWidth: CENTER_WIDTH + NAV_BUTTON_SPREAD }}
      >
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length
            )
          }
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-3xl bg-neutral-100 transition-colors hover:bg-neutral-200"
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
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-3xl bg-neutral-100 transition-colors hover:bg-neutral-200"
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
