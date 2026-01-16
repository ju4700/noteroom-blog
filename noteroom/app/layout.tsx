import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Bruno_Ace, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DynamicTitle from "@/components/ui/DynamicTitle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const brunoAce = Bruno_Ace({
  weight: "400",
  variable: "--font-bruno-ace",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://noteroom.co"),
  title: {
    default: "NoteRoom - A Knowledge Media Platform for Curious Minds",
    template: "%s | NoteRoom",
  },
  description:
    "NoteRoom is a social knowledge platform built for students who love to learn, think, and grow. We empower curious minds through thoughtful content, collaborative learning, and meaningful discussions.",
  keywords: [
    "NoteRoom",
    "knowledge media",
    "student learning",
    "educational platform",
    "intellectual growth",
    "social learning",
    "study community",
  ],
  authors: [{ name: "NoteRoom Team" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "NoteRoom - A Knowledge Media Platform for Curious Minds",
    description:
      "A social knowledge platform for students who love to learn, think, and grow.",
    url: "https://noteroom.co",
    siteName: "NoteRoom",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoteRoom - A Knowledge Media Platform for Curious Minds",
    description:
      "A social knowledge platform for students who love to learn, think, and grow.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://tally.so" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="/assets/Rectangle Horizontal/NoteRoom_logo-fullcolor-rgb-2-1000_1000px.png"
          as="image"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${brunoAce.variable} ${poppins.variable} font-sans antialiased`}
      >
        <DynamicTitle />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
