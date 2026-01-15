import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-100 py-16 pb-12">
      {/* Aligned Container with Header */}
      <div className="mx-auto flex w-full max-w-[1692px] flex-col px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-20">
          {/* Links Grid - Consolidated spacing */}
          <div className="flex flex-wrap justify-start items-start gap-12 sm:gap-20 lg:gap-24">
            {/* Company Column */}
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <h3 className="text-cyan-600 text-lg font-medium font-['Space_Grotesk']">
                Company
              </h3>
              <div className="flex flex-col justify-start items-start gap-3">
                <Link
                  href="/join-us"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/terms"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Product Column */}
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <h3 className="text-cyan-600 text-lg font-medium font-['Space_Grotesk']">
                Product
              </h3>
              <div className="flex flex-col justify-start items-start gap-3">
                <Link
                  href="#"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  Web App
                </Link>
                <Link
                  href="#"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  IOS App
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <h3 className="text-cyan-600 text-lg font-medium font-['Space_Grotesk']">
                Resources
              </h3>
              <div className="flex flex-col justify-start items-start gap-3">
                <Link
                  href="/support"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  Help Center
                </Link>
                <Link
                  href="/feedback"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  Give Feedback
                </Link>
              </div>
            </div>

            {/* Socials Column */}
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <h3 className="text-cyan-600 text-lg font-medium font-['Space_Grotesk']">
                Socials
              </h3>
              <div className="flex flex-col justify-start items-start gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  Twitter/X
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section - More compact */}
          <div className="flex flex-col justify-start items-start gap-8">
            <h2 className="text-cyan-600 text-3xl font-medium font-['Space_Grotesk'] leading-tight">
              Be where ideas are
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center rounded-3xl bg-cyan-600 px-7 py-2.5 text-sm font-normal text-white transition-colors hover:bg-cyan-700 font-['Poppins']"
              >
                Try NoteRoom
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-3xl bg-zinc-50 border border-zinc-200 px-7 py-2.5 text-sm font-normal text-zinc-800 transition-colors hover:bg-zinc-100 font-['Poppins']"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Aligned with Header branding */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-100 pt-10">
          <Link
            href="/"
            className="flex items-center opacity-80 hover:opacity-100 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="NoteRoom"
              className="w-4 mr-2 grayscale"
              suppressHydrationWarning
            />
            <span className="font-['Bruno_Ace'] text-lg text-black">
              noteroom
            </span>
          </Link>
          <p className="text-zinc-400 text-[13px] font-medium font-['Space_Grotesk'] tracking-wide">
            © {new Date().getFullYear()} NoteRoom - Be where ideas are
          </p>
        </div>
      </div>
    </footer>
  );
}
