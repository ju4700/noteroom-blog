import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Background to cover entire viewport including header area */}
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-100 opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-100 opacity-50 blur-3xl" />
      </div>
      <section className="container-custom relative z-10 py-20 text-center">
        <div className="mb-12 flex justify-center">
          <div className="animate-float relative h-48 w-48 sm:h-64 sm:w-64">
            <Image
              src="/images/solar-system-animation.jpg"
              alt="NoteRoom Planet"
              fill
              className="rounded-full object-cover shadow-2xl"
              priority
            />
          </div>
        </div>

        <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          A social platform designed for
          <br />
          <span className="gradient-text">making you smarter</span> and more
          creative
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 sm:text-xl">
          Simply put &ldquo;Be where{" "}
          <em className="font-medium text-gray-900">Ideas</em> are&rdquo;
        </p>

        <Link
          href="/waitlist"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl"
        >
          Try NoteRoom
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      <section className="container-custom relative z-10 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Knowledge First",
              description:
                "A platform built around deep learning and intellectual curiosity.",
            },
            {
              title: "Collaborative Learning",
              description:
                "Connect with students who share your passion for knowledge.",
            },
            {
              title: "Grow Together",
              description:
                "Be part of a community that nurtures your academic journey.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white/60 p-6 backdrop-blur-sm transition-all hover:border-gray-300 hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
