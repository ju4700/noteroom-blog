"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about-us", label: "About" },
  { href: "/join-us", label: "Career" },
  { href: "/blogs", label: "Blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center bg-transparent py-6 ">
      <div className="header-container inline-flex w-full max-w-[1692px] items-center justify-between px-4">
        <Link
          href="/"
          className="flex h-10 w-36 items-center justify-center text-center font-['Bruno_Ace'] text-xl font-normal leading-tight text-black"
        >
          <img src="/logo.png" alt="logo" className="w-10 h-10 mr-2" />
          noteroom
        </Link>

        <div className="hidden h-10 items-center justify-start gap-8 md:flex">
          <div className="flex items-center justify-start gap-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center justify-center gap-1.5 rounded-3xl bg-zinc-100 px-5 py-2 transition-colors hover:bg-zinc-200"
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

          <Link
            href="/waitlist"
            className="flex items-center justify-center gap-2.5 rounded-3xl bg-transparent px-7 py-2 outline outline-1 outline-offset-[-1px] outline-zinc-800/50 transition-all hover:bg-zinc-50 hover:outline-zinc-800"
          >
            <div className="justify-start font-['Poppins'] text-sm font-light text-zinc-800">
              Try NoteRoom
            </div>
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

      {/* Mobile Menu (unchanged structure, just aligned colors) */}
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
            <Link
              href="/waitlist"
              className="mt-4 flex justify-center rounded-3xl bg-zinc-100 py-3 font-['Poppins'] text-sm font-medium text-zinc-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try NoteRoom
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
