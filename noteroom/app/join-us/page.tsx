import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join NoteRoom Team – Build the Future of Learning & Knowledge Media",
  description:
    "Become part of NoteRoom, a platform reimagining how students learn, share, and grow. We're hiring passionate minds to shape the future of education.",
  keywords: [
    "join NoteRoom",
    "NoteRoom careers",
    "education startup jobs",
    "edtech hiring",
    "work at NoteRoom",
    "student platform careers",
    "knowledge media startup",
  ],
  openGraph: {
    title: "Join the NoteRoom Team | Build for Curious Minds",
    description:
      "We're creating a learning-first social platform for students, tutors, and thinkers. Join our team and shape a future where curiosity drives progress.",
    type: "website",
    url: "https://noteroom.co/join-us",
  },
};

export default function JoinUsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Background to cover entire viewport including header area */}
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]" />
    </div>
  );
}
