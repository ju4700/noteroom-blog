import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Support & Feedback",
  description:
    "Reach out to NoteRoom support team for any problems you're facing or any feedbacks you'd like to provide.",
  keywords: [
    "contact NoteRoom",
    "NoteRoom support",
    "NoteRoom help",
    "issues with NoteRoom",
  ],
};

export default function SupportPage() {
  return <div className="min-h-[calc(100vh-64px)] bg-gray-50"></div>;
}
