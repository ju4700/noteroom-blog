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
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="container-custom py-12 md:py-20">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          How Can We Help Today?
        </h1>

        {/* Tally Form Embed */}
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-4 shadow-sm md:p-8">
          <iframe
            data-tally-src="https://tally.so/embed/mJJ88R?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="553"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="NoteRoom Support🛠️"
            className="w-full"
          />
        </div>

        {/* Contact Alternatives */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Prefer to reach us directly? Here are other ways to get in touch:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:support@noteroom.co"
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              support@noteroom.co
            </a>
            <a
              href="tel:+8801978462090"
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +8801978462090
            </a>
          </div>
        </div>
      </div>

      {/* Tally Embed Script */}
      <Script
        id="tally-embed"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            var d = document,
              w = "https://tally.so/widgets/embed.js",
              v = function () {
                if (typeof Tally !== "undefined") {
                  Tally.loadEmbeds();
                } else {
                  d.querySelectorAll("iframe[data-tally-src]:not([src])")
                    .forEach(function(e) { e.src = e.dataset.tallySrc; });
                }
              };
            if (typeof Tally !== "undefined") v();
            else if (d.querySelector('script[src="' + w + '"]') == null) {
              var s = d.createElement("script");
              s.src = w; s.onload = v; s.onerror = v;
              d.body.appendChild(s);
            }
          `,
        }}
      />
    </div>
  );
}
