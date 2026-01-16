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
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Background to cover entire viewport including header area */}
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]" />
    </div>
  );
}
