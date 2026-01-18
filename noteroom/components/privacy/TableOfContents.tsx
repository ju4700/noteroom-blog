"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -80% 0px",
        threshold: [0, 0.1, 0.5, 1],
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-64 flex-shrink-0 hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-zinc-200">
      <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-4 font-space-grotesk pl-4">
        Contents
      </h3>
      <ul className="space-y-1 relative">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-200" />

        {sections.map((section) => (
          <li key={section.id} className="relative">
            <button
              onClick={() => handleScrollTo(section.id)}
              className={cn(
                "w-full text-left py-2 pl-4 pr-2 text-sm transition-all duration-200 border-l-2 -ml-[1px]",
                activeSection === section.id
                  ? "border-black text-black font-medium bg-zinc-50/50"
                  : "border-transparent text-zinc-500 hover:text-zinc-800 hover:border-zinc-300",
              )}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
