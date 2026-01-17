"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const ColorBends = dynamic(() => import("@/components/ui/ColorBends"), {
  ssr: false,
});

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
        "As an LLM Engineer at NoteRoom, you will be at the forefront of our product's intelligence. You will architect, develop, and fine-tune large language model integrations to create seamless, context-aware user experiences. Your work will involve building sophisticated RAG (Retrieval-Augmented Generation) pipelines, optimizing inference latency for real-time interactions, and pioneering advanced prompt engineering techniques to ensure our AI is not just powerful, but truly intuitive and reliable.",
      requirements:
        "We are looking for a deep technical expert who has successfully deployed LLM-powered applications at scale using OpenAI, Anthropic, or open-source models. You should possess exceptional TypeScript or Python skills, a rigorous understanding of vector databases like Pinecone or Weaviate, and a passion for staying ahead of the rapidly evolving AI landscape.",
    },
    {
      title: "Frontend Engineer",
      responsibilities:
        "You will be responsible for crafting the visual soul of NoteRoom. Working at the intersection of high performance and elegant design, you'll build complex, state-managed React applications that remain fluid and responsive even under heavy load. You'll translate intricate design concepts into pixel-perfect reality, implementing sophisticated micro-interactions and animations that make using NoteRoom a truly premium, 'glassmorphic' experience.",
      requirements:
        "Our ideal candidate is a master of the modern frontend stack: React, Next.js, and TypeScript. You should have extensive experience with Framer Motion for high-fidelity animations and Tailwind CSS for scalable styling. A sharp eye for typography, whitespace, and visual hierarchy is essential—we don't just build features; we build art.",
    },
    {
      title: "Backend Engineer",
      responsibilities:
        "You will build the robust, high-availability engine that keeps NoteRoom running globally. Your focus will be on designing distributed systems that manage massive streams of data with minimal latency. From architecting scalable MongoDB schemas and optimizing complex PostgreSQL queries to implementing ultra-secure authentication layers, your code will ensure that NoteRoom remains fast, reliable, and perfectly synced across all devices.",
      requirements:
        "We need an engineer who thinks in systems and scale. You should have deep expertise in Node.js, Python, or Go, and a proven ability to manage cloud-native infrastructure on AWS or GCP. Experience with real-time data synchronization, WebSocket management, and API design principles is highly desired.",
    },
    {
      title: "Product Designer",
      responsibilities:
        "You will be the bridge between user needs and technical implementation, owning the end-to-end product design process at NoteRoom. From conceptualizing groundbreaking features to refining complex user journeys, you'll create elegant, functional solutions that define the future of productivity. You'll collaborate daily with engineers and product leads to balance aesthetic vision with practical constraints, ensuring NoteRoom remains both beautiful and indispensable.",
      requirements:
        "We are looking for a versatile designer who masters both the 'how' and the 'why' of product design. You should have extensive experience in full-cycle product design, a strong proficiency in Figma, and a portfolio that demonstrates your ability to simplify complex data into intuitive interfaces. A deep understanding of design systems, user psychological principles, and the ability to articulate your design decisions with clarity is essential.",
    },
    {
      title: "User Experience Designer",
      responsibilities:
        "You will define how people interact with their thoughts in a digital space. Your mission is to simplify the complex, conducting deep user research and usability studies to uncover the core needs of our diverse community. You'll create comprehensive user flows, wireframes, and prototypes that establish intuitive navigation and interaction patterns, ensuring that NoteRoom feels like a natural extension of the user's mind.",
      requirements:
        "We require a strategic designer with 3+ years of experience in product-focused UX roles. You should be an expert in Figma and possess a portfolio that showcases your ability to solve complex information architecture problems. A background in cognitive psychology or human-computer interaction is a significant plus.",
    },
    {
      title: "User Interface Designer",
      responsibilities:
        "You will set the aesthetic standard for the next generation of productivity tools. Your role is to develop and evolve NoteRoom’s visual language, creating stunning, high-fidelity interfaces that embody our 'Electrical Blue' and glassmorphic design philosophy. You’ll maintain a comprehensive design system that ensures perfect consistency and work hand-in-hand with engineers to ensure every shadow and gradient is implemented flawlessly.",
      requirements:
        "You are an artist with a toolkit of modern design software. Expert-level Figma skills are mandatory, as is a portfolio that reflects a deep mastery of color theory, layout, and visual branding. You must be able to communicate the 'why' behind your design choices and inspire the team with your creative vision.",
    },
    {
      title: "Content Creator",
      responsibilities:
        "You will be the primary storyteller for the NoteRoom brand. Your goal is to create a vibrant content ecosystem—from long-form educational blog posts to engaging social media narratives—that inspires our users to do their best work. You'll manage our content calendar, develop cross-platform strategies that reflect our high-end brand voice, and find innovative ways to showcase how NoteRoom transforms productivity.",
      requirements:
        "We are looking for a versatile writer and visual thinker with a track record of building audience engagement. You should have a deep understanding of content marketing, experience with modern CMS platforms, and the ability to adapt your tone for different audiences without losing the brand's premium feel.",
    },
    {
      title: "SEO & Discovery Specialist",
      responsibilities:
        "You will lead our organic growth strategy, ensuring that NoteRoom is the first solution people find when they search for productivity tools. You'll perform deep keyword research, technical SEO audits, and competitive analyses to drive high-quality traffic. By optimizing our site structure, content, and discovery signals across search engines and AI discovery platforms, you will play a critical role in our global expansion.",
      requirements:
        "A proven background in SEO-driven growth is required. You should be data-obsessed, with expert knowledge of GA4, Search Console, and advanced SEO tools. Experience with technical SEO for Next.js applications and an understanding of how AI search engines are changing the discovery landscape is essential.",
    },
    {
      title: "Graphic Designer",
      responsibilities:
        "You will produce the high-impact visual assets that define our presence across the digital world. From intricate custom illustrations for the website to dynamic social media graphics and marketing collateral, your work will be the face of NoteRoom. You'll maintain a rigorous standard of brand consistency while continually pushing the boundaries of our visual storytelling through experimental designs and stunning layouts.",
      requirements:
        "You must be proficient in the Adobe Creative Suite and Figma, with a portfolio that showcases a unique and sophisticated visual style. We value designers who can work across mediums and who bring a proactive, creative energy to every project, whether it's a small icon or a major brand campaign.",
    },
    {
      title: "Marketing Specialist",
      responsibilities:
        "You will be the architect of our market presence, designing and executing multi-channel campaigns that drive sustainable user growth. Your role involves managing our paid and organic social channels, analyzing complex campaign datasets to optimize ROI, and collaborating with the entire team to launch new features with maximum impact. You'll find creative ways to position NoteRoom as the premium choice in a competitive market.",
      requirements:
        "We need a marketing strategist with experience in high-growth startups or premium tech brands. You should have a strong grasp of marketing automation, performance tracking, and brand positioning. Exceptional communication skills and the ability to turn data insights into actionable creative strategies are vital.",
    },
  ];

  const [expandedRole, setExpandedRole] = useState<number | null>(null);
  const APPLY_LINK = "https://tally.so/r/lbO52V";

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

          <motion.div
            className="w-full max-w-6xl h-[400px] md:h-[600px] bg-gray-100 rounded-[20px] overflow-hidden relative shadow-sm"
            variants={itemVariants}
          >
            <Image
              src="/career/office.jpg"
              alt="Career Hero"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.section>

        <motion.section
          className="w-full max-w-5xl flex flex-col gap-6 text-left md:text-center"
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
            generation of <br /> people think and interact with the internet.
          </motion.p>
        </motion.section>

        <motion.section
          className="w-full max-w-6xl flex flex-col items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-normal font-space-grotesk text-center text-black"
            variants={itemVariants}
          >
            Find Us Here
          </motion.h2>

          <Link
            href="https://maps.app.goo.gl/1f2brbbbaKmG9cuD8"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <motion.div
              className="w-full h-[400px] md:h-[600px] rounded-[20px] overflow-hidden relative shadow-lg cursor-pointer group"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/career/street.jpg"
                alt="Office Location"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 md:p-8 max-w-xl">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-white text-lg md:text-xl font-semibold font-inter mb-1">
                        Office Location
                      </h3>
                      <p className="text-white/90 text-sm md:text-base font-inter leading-relaxed">
                        C-Block, 4th Floor, Gulzar Tower, Chawkbazar, Bangladesh
                      </p>
                      <p className="text-cyan-300 text-sm font-inter mt-3 flex items-center gap-2 group-hover:underline">
                        View on Google Maps
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.section>

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
                          <div>
                            <h4 className="text-base font-medium font-inter text-black mb-2 opacity-90">
                              Responsibilities
                            </h4>
                            <p className="text-sm md:text-[15px] font-light font-inter text-black/70 leading-relaxed">
                              {role.responsibilities}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-base font-medium font-inter text-black mb-2 opacity-90">
                              Requirements
                            </h4>
                            <p className="text-sm md:text-[15px] font-light font-inter text-black/70 leading-relaxed">
                              {role.requirements}
                            </p>
                          </div>

                          <Link
                            href={APPLY_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-end mt-4 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-inter font-medium rounded-full transition-colors"
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
