import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4F4F2] border-t border-zinc-200 py-12 lg:py-16 pb-8 lg:pb-12">
      <div className="mx-auto flex w-full max-w-[1550px] flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-24 mb-16 lg:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 sm:gap-x-16 lg:gap-24 gap-y-12 w-full lg:w-auto">
            <div className="inline-flex flex-col justify-start items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
              <h3 className="text-cyan-600 text-base lg:text-lg font-medium font-['Space_Grotesk']">
                Company
              </h3>
              <div className="flex flex-col justify-start items-center lg:items-start gap-2 lg:gap-3">
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

            <div className="inline-flex flex-col justify-start items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
              <h3 className="text-cyan-600 text-base lg:text-lg font-medium font-['Space_Grotesk']">
                Product
              </h3>
              <div className="flex flex-col justify-start items-center lg:items-start gap-2 lg:gap-3">
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

            <div className="inline-flex flex-col justify-start items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
              <h3 className="text-cyan-600 text-base lg:text-lg font-medium font-['Space_Grotesk']">
                Resources
              </h3>
              <div className="flex flex-col justify-start items-center lg:items-start gap-2 lg:gap-3">
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

            <div className="inline-flex flex-col justify-start items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
              <h3 className="text-cyan-600 text-base lg:text-lg font-medium font-['Space_Grotesk']">
                Socials
              </h3>
              <div className="flex flex-col justify-start items-center lg:items-start gap-2 lg:gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors flex items-center"
                >
                  Twitter/X
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors flex items-center"
                >
                  LinkedIn
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors flex items-center"
                >
                  Facebook
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 text-[13px] font-normal font-['Inter'] hover:text-black transition-colors flex items-center"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center lg:items-start gap-6 lg:gap-8 w-full lg:w-auto text-center lg:text-left">
            <h2 className="text-cyan-600 text-2xl lg:text-3xl font-medium font-['Space_Grotesk'] leading-tight">
              Be where ideas are
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto">
              <Link
                href="/waitlist"
                className="flex items-center justify-center rounded-3xl bg-cyan-600 px-7 py-2.5 text-sm font-normal text-white transition-colors hover:bg-cyan-700 font-['Poppins'] w-full sm:w-40 h-11 lg:h-12"
              >
                Try NoteRoom
              </Link>
              <Link
                href="/login"
                className="flex items-center justify-center rounded-3xl bg-zinc-50 border border-zinc-200 px-7 py-2.5 text-sm font-normal text-zinc-800 transition-colors hover:bg-zinc-100 font-['Poppins'] w-full sm:w-40 h-11 lg:h-12"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-200/50 pt-8 lg:pt-10">
          <Link
            href="/"
            className="flex md:-ml-6 items-center opacity-80 hover:opacity-100 transition-opacity"
          >
            <img
              src="/logofinale.png"
              alt="logo"
              className="h-20 w-auto mr-2"
            />
          </Link>
          <p className="text-zinc-400 text-[13px] font-medium font-['Space_Grotesk'] tracking-wide">
            © {new Date().getFullYear()} NoteRoom - Be where ideas are
          </p>
        </div>
      </div>
    </footer>
  );
}
