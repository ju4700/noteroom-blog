import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NoteRoom is a social knowledge platform built for students who love to learn, think, and grow. We empower curious minds through thoughtful content, collaborative learning, and meaningful discussions beyond traditional education.",
  keywords: [
    "NoteRoom",
    "knowledge media",
    "student learning",
    "educational platform",
    "intellectual growth",
    "social learning",
  ],
  openGraph: {
    title: "About Us | NoteRoom – A Knowledge Media Platform for Curious Minds",
    description:
      "Discover the vision behind NoteRoom – a platform dedicated to preserving curiosity and empowering students through knowledge sharing and purposeful media.",
    type: "website",
    url: "https://noteroom.co/about-us",
  },
  twitter: {
    title: "NoteRoom – A Knowledge Media Platform for Curious Minds",
    description:
      "NoteRoom helps students thrive through focused learning, collaboration, and curiosity-driven content.",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Background to cover entire viewport including header area */}
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]" />
    </div>
  );
}
