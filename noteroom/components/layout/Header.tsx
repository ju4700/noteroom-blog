"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GlassSurface from "@/components/ui/GlassSurface";

const navLinks = [
  { href: "/about-us", label: "About" },
  { href: "/join-us", label: "Career" },
  { href: "/blogs", label: "Blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center bg-transparent py-4 lg:py-6">
      <div className="header-container inline-flex w-full max-w-[1692px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex h-10 w-auto -ml-6 items-center justify-center text-center font-['Bruno_Ace'] text-xl font-normal leading-tight text-black"
        >
          <img src="/logofinale.png" alt="logo" className="h-20 w-auto mr-2" />
        </Link>

        <div className="hidden h-10 items-center justify-start gap-8 md:flex">
          <div className="flex items-center justify-start gap-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center justify-center gap-1.5 rounded-3xl bg-white px-5 py-2 transition-colors hover:bg-zinc-200"
              >
                <div className="text-center font-['Poppins'] text-sm font-normal text-zinc-800">
                  {link.label}
                </div>
                <Image
                  src="/assets/arrow.png"
                  alt="Arrow"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>

          <Link href="/waitlist">
            <GlassSurface
              width="auto"
              height="40px"
              borderRadius={24}
              backgroundOpacity={0.04}
              borderWidth={0.04}
              blur={20}
              saturation={2.5}
              brightness={100}
              shadowOpacity={0.6}
              className="px-7 transition-all brightness-105 hover:brightness-110"
            >
              <div className="justify-start font-['Poppins'] text-sm font-light text-zinc-900 whitespace-nowrap">
                Try NoteRoom
              </div>
            </GlassSurface>
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 font-['Poppins'] text-base font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/waitlist" onClick={() => setMobileMenuOpen(false)}>
              <GlassSurface
                width="100%"
                height="48px"
                borderRadius={24}
                backgroundOpacity={0.04}
                borderWidth={0.04}
                blur={20}
                saturation={2.5}
                brightness={100}
                shadowOpacity={0.6}
                className="mt-4 brightness-105"
              >
                <div className="font-['Poppins'] text-sm font-medium text-zinc-900">
                  Try NoteRoom
                </div>
              </GlassSurface>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
