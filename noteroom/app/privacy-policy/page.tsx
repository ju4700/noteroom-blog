import Image from "next/image";
import PrivacyContent, {
  privacySections,
} from "@/components/privacy/PrivacyContent";
import TableOfContents from "@/components/privacy/TableOfContents";

export const metadata = {
  title: "Privacy Policy | NoteRoom",
  description:
    "Learn how NoteRoom collects, uses, shares, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-100/50">
      <div className="relative w-full h-80 md:h-96 bg-zinc-100 overflow-hidden">
        <Image
          src="/about/privacy.png"
          alt="Privacy Policy"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-100/90" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-medium font-space-grotesk text-black mb-4 tracking-tight drop-shadow-sm">
            Privacy Policy
          </h1>
          <p className="text-black/80 text-lg md:text-2xl font-normal font-inter">
            Last updated: 24th June, 2026
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-20 relative">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-24 relative">
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32">
              <TableOfContents sections={privacySections} />
            </div>
          </aside>

          {/* Main Privacy Text */}
          <main className="flex-1">
            <PrivacyContent />
          </main>
        </div>
      </div>
    </div>
  );
}
