"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";

import CircularGalleryWrapper from "@/components/ui/CircularGalleryWrapper";

const ColorBends = dynamic(() => import("@/components/ui/ColorBends"), {
  ssr: false,
});

export default function AboutContent() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]">
        <div className="absolute inset-0 opacity-10">
          <ColorBends
            colors={[
              "#3C62AD",
              "#3C62AD",
              "#3C62AD",
              "#3C62AD",
              "#3C62AD",
              "#3C62AD",
            ]}
            rotation={45}
            speed={0.5}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.1}
            transparent
          />
        </div>
      </div>

      <main className="relative z-10 flex flex-col items-center gap-12 md:gap-20 px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <motion.section
          className="w-full flex flex-col items-center gap-12 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-space-grotesk text-black"
            variants={itemVariants}
          >
            About Note-Room
          </motion.h1>
        </motion.section>

        <motion.section
          className="w-full h-[600px] relative -mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full">
            <CircularGalleryWrapper
              items={[
                { image: "/about/grid/Science.jpg", text: "Science" },
                { image: "/about/grid/Philosophy.jpg", text: "Philosophy" },
                { image: "/about/grid/Technology.jpg", text: "Technology" },
                { image: "/about/grid/Artistry.jpg", text: "Arts" },
                { image: "/about/grid/Behaviour.jpg", text: "Human Mind" },
                { image: "/about/grid/History.jpg", text: "History" },
                { image: "/about/grid/Learning.jpg", text: "Learning" },
                { image: "/about/grid/Nature.jpg", text: "Nature" },
                { image: "/about/grid/Learning.jpg", text: "Ideas" },
                { image: "/about/grid/Architecture.jpg", text: "Architecture" },
              ]}
              bend={0}
              textColor="#000000"
              borderRadius={0.05}
              font="bold 30px 'Space Grotesk'"
              itemHeight={1250}
            />
          </div>
        </motion.section>

        <motion.section
          className="w-full max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p
            className="text-black text-base sm:text-lg md:text-xl font-light font-poppins leading-8 md:leading-10 text-center px-2"
            variants={itemVariants}
          >
            NoteRoom is a knowledge-based social ;<br /> a place for the
            curious, built for those who seek ideas rather than noise. <br /> It
            exists so you can think while the rest of the internet competes for
            your attention with distractions. <br /> Here, your intellect is
            reflected back to you, giving you space to think deeply, solve
            meaningfully, and share your own work of understanding. <br /> This
            is not a feed that consumes you, but a room that respects your focus
            and rewards curiosity. We are not small, we are built of knowledge
            workers, and they are the ones that truly matter.
          </motion.p>
        </motion.section>

        <motion.section
          className="w-full max-w-6xl flex flex-col items-center gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="w-full flex flex-col md:flex-row justify-between items-center gap-6"
            variants={itemVariants}
          >
            <h2 className="text-xl md:text-2xl font-medium font-space-grotesk text-black leading-9">
              Neil DeGrasse Tyson&apos;s 10 years back
            </h2>
            <Image
              src="/about/about.png"
              alt="About decoration"
              width={128}
              height={128}
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </motion.div>

          <motion.div
            className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg relative"
            variants={itemVariants}
          >
            <iframe
              src="https://www.youtube.com/embed/YEA6m0oACMI?rel=0"
              title="Neil DeGrasse Tyson"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        <motion.section
          className="w-full max-w-4xl flex flex-col items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-normal font-space-grotesk text-black text-center"
            variants={itemVariants}
          >
            Social Media as Fuel for Curiosity
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-inter text-black/50 leading-6 md:leading-7 text-center px-2"
            variants={itemVariants}
          >
            &ldquo;Social Media can be especially potent as a vessel for not
            only delivering information but stimulating people to become curious
            once again&rdquo;
          </motion.p>
        </motion.section>

        <motion.section
          className="w-full max-w-4xl flex flex-col items-end gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p
            className="text-base md:text-lg lg:text-xl font-normal font-inter text-black self-start"
            variants={itemVariants}
          >
            Lastly,
          </motion.p>

          <motion.p
            className="text-base md:text-lg lg:text-xl font-light font-inter text-black leading-8 md:leading-10 italic"
            variants={itemVariants}
          >
            The future is open. It is not predetermined and thus cannot be
            predicted, except by accident. The possibilities that lie ahead are
            boundless. When I say, &lsquo;Optimism is a moral duty,&rsquo; this
            is not because I believe that our future is predetermined for the
            better, but because the future depends on ourselves, and we all have
            the duty, instead of predicting something bad, to support the
            realization of the possible best. If we suppose that a better world
            is not possible, we shall not act to achieve it. If we suppose that
            peace is not possible, we are contributing to war.
          </motion.p>

          <motion.p
            className="text-base md:text-lg lg:text-xl font-normal font-poppins text-black text-right"
            variants={itemVariants}
          >
            -Karl Popper
          </motion.p>
        </motion.section>
      </main>
    </div>
  );
}
