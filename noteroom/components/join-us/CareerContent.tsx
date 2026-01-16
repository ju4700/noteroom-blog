"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
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

  interface Role {
    title: string;
    responsibilities: string;
    requirements: string;
  }

  const roles: Role[] = [
    {
      title: "LLM Engineer",
      responsibilities:
        "You will design and implement LLM-powered features that drive the core experience of NoteRoom. This includes optimizing model performance, reducing latency, and building robust RAG pipelines. You'll also work on prompt engineering systems to ensure our AI interactions are helpful, accurate, and context-aware.",
      requirements:
        "We are looking for an engineer with hands-on experience using OpenAI, Anthropic, or similar APIs. Strong proficiency in Python or TypeScript is essential, along with a deep understanding of embeddings and vector databases.",
    },
    {
      title: "Frontend Engineer",
      responsibilities:
        "As a Frontend Engineer, you will build responsive and performant web interfaces that delight our users. You will master complex UI interactions, implement smooth animations with Framer Motion, and collaborate closely with designers to ensure every pixel is perfect.",
      requirements:
        "You should have expert-level proficiency in React, Next.js, and TypeScript. Experience with Tailwind CSS is a must, and a strong eye for design details will set you apart.",
    },
    {
      title: "Backend Engineer",
      responsibilities:
        "You will architect and build scalable APIs and services that power the NoteRoom platform. Your work will involve managing database architecture, optimizing query performance, and ensuring our authentication and security protocols follow industry best practices.",
      requirements:
        "We need someone with strong experience in Node.js, Python, or Go. Familiarity with PostgreSQL or MongoDB is crucial, as is a good understanding of cloud infrastructure on AWS or GCP.",
    },
    {
      title: "User Experience Designer",
      responsibilities:
        "You will be the voice of the user, conducting research and usability testing to inform our product decisions. You'll create user flows, wireframes, and prototypes that define the information architecture and interaction patterns of NoteRoom.",
      requirements:
        "We require 3+ years of UX design experience and proficiency in Figma. A strong portfolio demonstrating your user-centered design process is essential.",
    },
    {
      title: "User Interface Designer",
      responsibilities:
        "Your role is to create visually stunning and cohesive designs that elevate our brand. You will develop and maintain our design system, ensuring consistency across the platform, and collaborate with engineers to bring your visions to life.",
      requirements:
        "You must have a strong visual design portfolio and expert-level skills in Figma. A deep understanding of modern design trends, typography, and accessibility standards is required.",
    },
    {
      title: "Content Creator",
      responsibilities:
        "You will produce engaging written and visual content that tells the NoteRoom story. This involves developing content strategies that align with our brand voice, managing our editorial calendar, and creating pieces that resonate with our community.",
      requirements:
        "Excellent storytelling and writing skills are non-negotiable. Experience with content management systems and a solid understanding of SEO principles will be highly valued.",
    },
    {
      title: "SEO & Discovery Specialist",
      responsibilities:
        "You will drive organic growth by developing and executing comprehensive SEO strategies. Your role involves analyzing traffic data to identify opportunities, researching high-impact keywords, and optimizing our site structure for maximum visibility.",
      requirements:
        "A proven track record in SEO is required, along with experience using analytics tools like GA4 and Search Console. You should understand the technical aspects of site performance and indexing.",
    },
    {
      title: "Graphic Designer",
      responsibilities:
        "You will create compelling visual assets for our social media channels, marketing campaigns, and product interfaces. You'll design illustrations and graphics that maintain our brand consistency and catch the eye of our audience.",
      requirements:
        "Proficiency in Adobe Creative Suite or Figma is expected. We are looking for a designer with a diverse portfolio who can work quickly without sacrificing quality.",
    },
    {
      title: "Marketing Specialist",
      responsibilities:
        "You will plan and execute marketing campaigns that drive user acquisition and engagement. This includes managing our social media presence, analyzing campaign performance metrics, and optimizing our strategies for better ROI.",
      requirements:
        "Experience in digital marketing involves knowledge of automation tools and strong analytical skills. You should be a clear communicator who can craft compelling messages.",
    },
  ];

  const [expandedRole, setExpandedRole] = useState<number | null>(null);
  const APPLY_LINK = "https://tally.so/r/3NdQoQ";

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
            {roles.map((role, index) => {
              const isExpanded = expandedRole === index;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  layout
                  className="w-full"
                >
                  {/* Role Header */}
                  <div
                    onClick={() => setExpandedRole(isExpanded ? null : index)}
                    className="cursor-pointer"
                  >
                    <GlareHover
                      width="100%"
                      height="96px"
                      borderRadius={isExpanded ? "16px 16px 0 0" : "16px"}
                      background="rgba(255, 255, 255, 0.4)"
                      borderColor="rgba(0,0,0,0.3)"
                      glareOpacity={0.3}
                      glareColor="#3F8BC8"
                      transitionDuration={1000}
                    >
                      <div className="w-full h-full px-7 flex justify-between items-center bg-transparent">
                        <span className="text-black/90 text-xl font-normal font-inter text-center md:text-left">
                          {role.title}
                        </span>

                        {/* Arrow Icon - rotates when expanded */}
                        <motion.div
                          className="w-9 h-9 relative flex items-center justify-center opacity-70"
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Image
                            src="/career/arrow.png"
                            alt="Arrow"
                            width={36}
                            height={36}
                            className="w-9 h-9 object-contain"
                          />
                        </motion.div>
                      </div>
                    </GlareHover>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-white/60 backdrop-blur-sm rounded-b-2xl border border-t-0 border-black/20"
                      >
                        <div className="p-8 flex flex-col gap-8">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-base font-medium font-inter text-black mb-2 opacity-90">
                              Responsibilities
                            </h4>
                            <p className="text-sm md:text-[15px] font-light font-inter text-black/70 leading-relaxed">
                              {role.responsibilities}
                            </p>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-base font-medium font-inter text-black mb-2 opacity-90">
                              Requirements
                            </h4>
                            <p className="text-sm md:text-[15px] font-light font-inter text-black/70 leading-relaxed">
                              {role.requirements}
                            </p>
                          </div>

                          {/* Apply Now Button */}
                          <Link
                            href={APPLY_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-end mt-4 px-8 py-3 bg-[#3F8BC8] hover:bg-[#3578A8] text-white font-inter font-medium rounded-full transition-colors"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
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
