import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NoteRoom is a social knowledge platform built for students who love to learn, think, and grow. We empower curious minds through thoughtful content, collaborative learning, and meaningful discussions beyond traditional education.",
  keywords: [
    "NoteRoom",
    "knowledge media",
    "student learning",
    "educational platform",
    "intellectual growth",
    "social learning",
  ],
  openGraph: {
    title: "About Us | NoteRoom – A Knowledge Media Platform for Curious Minds",
    description:
      "Discover the vision behind NoteRoom – a platform dedicated to preserving curiosity and empowering students through knowledge sharing and purposeful media.",
    type: "website",
    url: "https://noteroom.co/about-us",
  },
  twitter: {
    title: "NoteRoom – A Knowledge Media Platform for Curious Minds",
    description:
      "NoteRoom helps students thrive through focused learning, collaboration, and curiosity-driven content.",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="container-custom py-16 text-center md:py-24">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          About NoteRoom
        </h1>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl text-gray-600 md:text-2xl">
            A Vision towards Fostering Curiosity & Learning
          </h2>
        </div>
      </section>

      <section className="container-custom pb-20">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Curiosity is a natural human instinct, but without proper care
                and nourishment, it fades.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                If you are like me, your days are packed, moving from school to
                home, then to coaching, and finally getting lost in social
                media.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Amidst all these moments, we often forget to explore ourselves,
                what we enjoy, what excites us, and who we aspire to be. That is
                why{" "}
                <span className="font-semibold text-indigo-600">NoteRoom</span>{" "}
                was introduced.
              </p>
            </div>
            <div className="order-1 flex justify-center md:order-2">
              <div className="h-64 w-64 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl">🌱</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="flex justify-center">
              <div className="h-64 w-64 rounded-2xl bg-gradient-to-br from-pink-100 to-orange-100 p-8">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Back in 2005,{" "}
                <span className="font-semibold text-blue-600">Facebook</span>{" "}
                promised us connection, warmth, and genuine interaction. Today,
                it has turned into a platform that offers everything from
                entertainment and education to political discourse which is not
                so good for us.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                You know those moments of disparity when you&apos;ve sat down to
                focus on something but a notification is delivered to your
                device and the next time you look at the clock, it&apos;s been 2
                hours since you sat down but no work has been done.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                In order to solve the problems above, we stay away from the
                everyday devices we use, we try not to study while keeping our
                mobile nearby.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                But that&apos;s just us trying to run away from the problem by
                deactivating or deleting our social handles, or turning off
                notifications, but it doesn&apos;t really end.
              </p>
            </div>
            <div className="order-1 flex justify-center md:order-2">
              <div className="h-64 w-64 rounded-2xl bg-gradient-to-br from-green-100 to-teal-100 p-8">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl">🔇</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white md:p-12">
            <h3 className="mb-6 text-center text-2xl font-bold md:text-3xl">
              Our Solution
            </h3>
            <p className="mb-6 text-center text-lg leading-relaxed text-gray-300">
              NoteRoom is designed to be a different kind of social platform—one
              that respects your attention and nurtures your intellectual
              growth.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-6 text-center">
                <div className="mb-4 text-4xl">📚</div>
                <h4 className="mb-2 font-semibold">Curated Content</h4>
                <p className="text-sm text-gray-300">
                  Content that aligns with your academic goals and curiosity
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 text-center">
                <div className="mb-4 text-4xl">🤝</div>
                <h4 className="mb-2 font-semibold">Collaborative Learning</h4>
                <p className="text-sm text-gray-300">
                  Connect with peers who share your passion for knowledge
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 text-center">
                <div className="mb-4 text-4xl">🎯</div>
                <h4 className="mb-2 font-semibold">Focus-First Design</h4>
                <p className="text-sm text-gray-300">
                  Built to help you concentrate, not distract you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
