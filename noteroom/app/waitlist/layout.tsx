import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the NoteRoom Waitlist",
  description:
    "Join the NoteRoom waitlist to be the first to experience NoteRoom - a knowledge media platform for curious minds.",
  keywords: ["NoteRoom Waitlist", "join NoteRoom", "early access"],
};

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
