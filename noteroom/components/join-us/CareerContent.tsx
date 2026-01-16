"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import ColorBends from "@/components/ui/ColorBends";

import GlareHover from "@/components/ui/GlareHover";

export default function CareerContent() {
  const perks = [
    [
      { text: "Creative Freedom" },
      { text: "Rapid Pace" },
      { text: "No Useless Meetings" },
    ],
    [
      { text: "Remote work" },
      { text: "Technical feasibility" },
      { text: "Working Independently" },
      { text: "Strong Community", font: "font-poppins" },
    ],
    [
      { text: "Retreats" },
      { text: "Mental Wellbeing Support" },
      { text: "Competitive Salary" },
    ],
  ];

  const roles = [
    "LLM Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "User Experience Designer",
    "User Interface Designer",
    "Content Creator",
    "SEO & Discovery Specialist",
    "Graphic Designer",
    "Marketing Specialist",
  ];

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

  const cardHoverVariants: Variants = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Animated Background */}
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

      <main className="container mx-auto px-6 py-20 flex flex-col items-center gap-20">
        {/* Hero Section */}
        <motion.section
          className="w-full flex flex-col items-center gap-12 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-normal font-space-grotesk text-black"
            variants={itemVariants}
          >
            Ideas live here. So do we.
          </motion.h1>

          {/* Hero Image with Fluid Glass Effect */}
          <motion.div
            className="w-full max-w-6xl h-[400px] md:h-[600px] bg-gray-100 rounded-[20px] overflow-hidden relative shadow-sm"
            variants={itemVariants}
          >
            <Image
              src="/about/heroimage.jpg"
              alt="Career Hero"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.section>

        {/* Mission Text */}
        <motion.section
          className="w-full max-w-4xl flex flex-col gap-6 text-left md:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p
            className="text-2xl md:text-3xl font-light font-inter text-black leading-relaxed"
            variants={itemVariants}
          >
            NoteRoom is a social media designed for making people smarter and
            more creative. Its sole purpose is to make social experience
            co-exist with people’s focus and intention in life.
          </motion.p>
          <motion.p
            className="text-base md:text-lg font-normal font-inter text-black/50"
            variants={itemVariants}
          >
            Joining our team, you’ll become a part of shaping how future
            generation of people think and interact with the internet.
          </motion.p>
        </motion.section>

        {/* Perks Section */}
        <motion.section
          className="w-full flex flex-col items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl font-normal font-space-grotesk text-center text-black"
            variants={itemVariants}
          >
            Perks
          </motion.h1>

          <motion.div
            className="flex flex-col items-center gap-8 w-full max-w-6xl"
            variants={containerVariants}
          >
            {perks.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="flex flex-wrap justify-center items-center gap-6 md:gap-14 w-full"
                variants={itemVariants}
              >
                {row.map((perk, perkIndex) => (
                  <motion.div
                    key={perkIndex}
                    variants={cardHoverVariants}
                    whileHover="hover"
                    className="w-60 h-14 px-10 py-3 rounded-2xl outline-1 -outline-offset-1 outline-black/30 flex justify-center items-center bg-transparent backdrop-blur-[2px] cursor-default"
                  >
                    <span
                      className={`text-black/60 text-base font-normal whitespace-nowrap ${
                        perk.font || "font-inter"
                      }`}
                    >
                      {perk.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Roles Available Section */}
        <motion.section
          className="w-full max-w-[1123px] flex flex-col items-center gap-12 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-5xl font-normal font-space-grotesk text-center text-black"
            variants={itemVariants}
          >
            Roles Available
          </motion.h2>

          <div className="w-full flex flex-col gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full h-24"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <GlareHover
                  width="100%"
                  height="100%"
                  borderRadius="16px"
                  background="rgba(255, 255, 255, 0.4)"
                  borderColor="rgba(0,0,0,0.3)"
                  glareOpacity={0.3}
                  glareColor="#3F8BC8"
                  transitionDuration={1000}
                >
                  <div className="w-full px-7 flex justify-between items-center bg-transparent">
                    <span className="text-black/90 text-xl font-normal font-inter text-center md:text-left">
                      {role}
                    </span>

                    {/* Arrow Icon */}
                    <div className="w-9 h-9 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                      <Image
                        src="/career/arrow.png"
                        alt="Arrow"
                        width={36}
                        height={36}
                        className="w-9 h-9 object-contain"
                      />
                    </div>
                  </div>
                </GlareHover>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 text-black/60 text-xl font-normal font-inter text-center max-w-2xl leading-relaxed"
          >
            Even if these job titles don’t depict you, you can still offer us
            what value you could be providing. We’ll be happy to consider it, if
            it’s a real fit.
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
