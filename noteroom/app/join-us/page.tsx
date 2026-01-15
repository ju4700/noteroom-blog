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
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-20 top-20 h-72 w-72 rounded-full bg-purple-200 opacity-50 mix-blend-multiply blur-xl" />
        <div className="animate-blob animation-delay-2000 absolute -right-20 top-40 h-72 w-72 rounded-full bg-indigo-200 opacity-50 mix-blend-multiply blur-xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-20 left-1/2 h-72 w-72 rounded-full bg-pink-200 opacity-50 mix-blend-multiply blur-xl" />
      </div>

      {/* Hero Section */}
      <section className="container-custom relative z-10 flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Meet the Beautiful,
          <br />
          <span className="gradient-text">NoteRoom&apos;s Team</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
          Builders, dreamers, thinkers — each one shaping the future of learning
          in their own voice.
        </p>
      </section>

      {/* Values Section */}
      <section className="container-custom relative z-10 pb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Our Values
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-8 backdrop-blur-sm transition-all hover:shadow-lg">
            <div className="mb-4 text-4xl">💡</div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Curiosity First
            </h3>
            <p className="text-gray-600">
              We believe questioning leads to understanding. Every idea, no
              matter how small, is worth exploring.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-8 backdrop-blur-sm transition-all hover:shadow-lg">
            <div className="mb-4 text-4xl">🌱</div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Growth Mindset
            </h3>
            <p className="text-gray-600">
              We embrace challenges as opportunities. Learning never stops, and
              neither do we.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-8 backdrop-blur-sm transition-all hover:shadow-lg">
            <div className="mb-4 text-4xl">🤝</div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Collaboration
            </h3>
            <p className="text-gray-600">
              Great things are built together. We value diverse perspectives and
              open communication.
            </p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="container-custom relative z-10 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-3xl font-bold">Interested in Joining?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            We&apos;re always looking for passionate individuals who want to
            make a difference in education. Send us your resume and tell us why
            you&apos;d be a great fit.
          </p>
          <a
            href="mailto:careers@noteroom.co"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-medium text-indigo-600 transition-all hover:bg-gray-100"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
