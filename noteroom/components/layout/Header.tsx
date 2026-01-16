"use client";

import Link from "next/link";
import Image from "next/image";
import GlassSurface from "@/components/ui/GlassSurface";
import StaggeredMenu from "@/components/ui/StaggeredMenu";

const navLinks = [
  { href: "/about-us", label: "About" },
  { href: "/join-us", label: "Career" },
  { href: "/blogs", label: "Blog" },
];

const mobileMenuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about-us" },
  { label: "Career", ariaLabel: "Join our team", link: "/join-us" },
  { label: "Blog", ariaLabel: "Read our blog", link: "/blogs" },
  { label: "Try NoteRoom", ariaLabel: "Join the waitlist", link: "/waitlist" },
];

const socialItems = [
  { label: "Twitter/X", link: "https://twitter.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "Facebook", link: "https://facebook.com" },
  { label: "YouTube", link: "https://youtube.com" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-center bg-transparent py-4 lg:py-6">
      <div className="header-container inline-flex w-full max-w-[1692px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex h-10 w-auto -ml-6 items-center justify-center text-center font-['Bruno_Ace'] text-xl font-normal leading-tight text-black"
        >
          <img src="/logofinale.png" alt="logo" className="h-20 w-auto mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden h-10 items-center justify-start gap-8 md:flex">
          <div className="flex items-center justify-start gap-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center justify-center gap-1.5 rounded-3xl bg-white/50 backdrop-blur-md px-5 py-2 border border-black/3 transition-all hover:bg-white/80 hover:scale-[1.02]"
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
              shadowOpacity={0.9}
              className="px-7 transition-all brightness-105 hover:brightness-110"
            >
              <div className="justify-start font-['Poppins'] text-sm font-light text-zinc-900 whitespace-nowrap">
                Try NoteRoom
              </div>
            </GlassSurface>
          </Link>
        </div>

        {/* Mobile Navigation - StaggeredMenu */}
        <div className="md:hidden flex items-center">
          <StaggeredMenu
            items={mobileMenuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#000" // Matches current header text color
            openMenuButtonColor="#000"
            accentColor="#0891b2" // cyan-600 to match footer/brand
            changeMenuColorOnOpen={false}
            colors={["#fff", "#f4f4f5"]} // Light background layers
          />
        </div>
      </div>
    </header>
  );
}
