import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | NoteRoom",
  description:
    "Learn about NoteRoom - a knowledge-based social platform for the curious, built for those who seek ideas rather than noise.",
  openGraph: {
    title: "About Us | NoteRoom",
    description:
      "Learn about NoteRoom - a knowledge-based social platform for the curious.",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
