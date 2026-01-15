import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  important: [
    { href: "/waitlist", label: "Login" },
    { href: "/about-us", label: "About Us" },
    { href: "/support", label: "Get Support" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-1">
            <Image
              src="/assets/apple-touch-icon.png"
              alt="NoteRoom Logo"
              width={48}
              height={48}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-600">
              NoteRoom is a knowledge media platform designed to help students
              excel their academics and curiosity. We combine social features
              with deep learning tools, offering a space to explore ideas and
              intellectual collaboration.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>College Road, Chakbazar, 4203 Chattogram</li>
              <li>Phone: +8801978462090</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:support@noteroom.co"
                  className="hover:text-gray-900"
                >
                  support@noteroom.co
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Important Links
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.important.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Join CTA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Not a Member Yet? 😿
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Jump in, share notes, and level up your study game with us!
            </p>
            <Link
              href="/waitlist"
              className="inline-block rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              Copyright ©{new Date().getFullYear()} | NoteRoom | All rights
              reserved.
            </p>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
