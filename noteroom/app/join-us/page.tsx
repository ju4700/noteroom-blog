import type { Metadata } from "next";
import CareerContent from "@/components/join-us/CareerContent";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Join NoteRoom and help build the future of student learning. We are looking for passionate individuals to join our mission of empowering curious minds.",
  keywords: [
    "NoteRoom careers",
    "education jobs",
    "student internship",
    "startup jobs",
    "remote work",
    "join noteroom",
  ],
  openGraph: {
    title: "Join Our Team | NoteRoom",
    description:
      "Join NoteRoom and help build the future of student learning. We are looking for passionate individuals to join our mission of empowering curious minds.",
    type: "website",
    url: "https://noteroom.co/join-us",
  },
  twitter: {
    title: "Join Our Team | NoteRoom",
    description:
      "Join NoteRoom and help build the future of student learning. We are looking for passionate individuals to join our mission of empowering curious minds.",
  },
};

export default function JoinUsPage() {
  return <CareerContent />;
}
