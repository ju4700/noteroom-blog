import Link from "next/link";
import Image from "next/image";
import PhoneShowcase from "@/components/home/PhoneShowcase";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center overflow-hidden bg-transparent pt-12">
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]" />

      <div className="container-custom relative z-10 flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-['Space_Grotesk'] tracking-tight text-black mb-6">
          Knowledge, <br /> Accessible Anywhere.
        </h1>
        <p className="text-lg sm:text-xl text-stone-500 max-w-2xl font-['Inter'] mb-8">
          NoteRoom brings your learning journey to your fingertips.{" "}
          <br className="hidden sm:block" /> Explore, learn, and grow with our
          immersive platform.
        </p>
        <div className="flex gap-4">
          <Link
            href="/blogs"
            className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
          >
            Read Blog
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 border border-stone-300 text-black rounded-full font-medium hover:bg-stone-50 transition-colors"
          >
            About Us
          </Link>
        </div>
      </div>

      <div className="w-full max-w-5xl">
        <PhoneShowcase />
      </div>
    </div>
  );
}
