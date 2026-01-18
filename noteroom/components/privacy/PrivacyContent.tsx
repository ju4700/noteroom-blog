"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const privacySections = [
  { id: "intro", title: "Introduction" },
  { id: "info-collect", title: "1. Information We Collect" },
  { id: "info-use", title: "2. How We Use Your Information" },
  { id: "content-visibility", title: "3. How Content and Visibility Work" },
  { id: "sharing", title: "4. How We Share Information" },
  { id: "ads", title: "5. Advertising and Monetization" },
  { id: "retention", title: "6. Data Retention" },
  { id: "rights", title: "7. Your Rights and Choices" },
  { id: "cookies", title: "8. Cookies and Tracking" },
  { id: "security", title: "9. Security" },
  { id: "children", title: "10. Children and Teen Users" },
  { id: "international", title: "11. International Data Transfers" },
  { id: "changes", title: "12. Changes to This Policy" },
  { id: "contact", title: "13. Contact Us" },
];

export default function PrivacyContent() {
  return (
    <div className="max-w-3xl w-full pb-24">
      <div id="intro" className="mb-12 scroll-mt-32">
        <p className="text-zinc-800/75 text-lg md:text-xl font-normal font-inter leading-relaxed mb-6">
          Welcome to NoteRoom. Your privacy matters to us. This Privacy Policy
          explains how NoteRoom (“we”, “our”, “us”) collects, uses, shares, and
          protects your information when you use our website, applications, and
          services (collectively, the “Platform”).
        </p>
        <p className="text-zinc-800/75 text-lg md:text-xl font-normal font-inter leading-relaxed mb-6">
          NoteRoom is built as a knowledge-based social platform for the
          intellectually curious. Our approach to data is guided by the same
          principles that guide our product: focus, trust, transparency, and
          meaningful use.
        </p>
        <p className="text-zinc-800/75 text-lg md:text-xl font-normal font-inter leading-relaxed">
          By using NoteRoom, you agree to the practices described in this
          Privacy Policy.
        </p>
      </div>

      <section id="info-collect" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          1. Information We Collect
        </h2>
        <p className="text-zinc-800/75 text-lg font-normal font-inter leading-relaxed mb-8">
          We collect information to provide, improve, and protect the NoteRoom
          experience.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk text-zinc-900 mb-4">
            1.1 Information You Provide
          </h3>
          <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
            You may provide information directly when you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter">
            <li>Create an account (name, username, email address, password)</li>
            <li>
              Complete your profile (bio, interests, education or professional
              details)
            </li>
            <li>Post content (notes, questions, answers, comments, media)</li>
            <li>Communicate with others on the platform</li>
            <li>Contact us for support or feedback</li>
            <li>Subscribe to paid features or creator tools</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk text-zinc-900 mb-4">
            1.2 Information We Collect Automatically
          </h3>
          <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
            When you use NoteRoom, we automatically collect certain information,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter">
            <li>Device information (device type, operating system, browser)</li>
            <li>
              Usage information (pages viewed, time spent, interactions,
              features used)
            </li>
            <li>Log data (IP address, access times, errors)</li>
            <li>Cookies and similar technologies (see Section 8)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk text-zinc-900 mb-4">
            1.3 Information From AI Interactions
          </h3>
          <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
            If you use AI-powered features (such as T.A.R.S.), we may process:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter">
            <li>Questions you ask</li>
            <li>Content you generate or refine</li>
            <li>Contextual signals needed to provide relevant assistance</li>
          </ul>
          <p className="text-zinc-800/75 text-lg font-medium font-inter mt-4">
            We do not use private AI interactions to train public models without
            appropriate safeguards.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-space-grotesk text-zinc-900 mb-4">
            1.4 Information From Third Parties
          </h3>
          <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
            We may receive limited information from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter">
            <li>Payment providers (confirmation of transactions)</li>
            <li>
              Educational partners or institutions (where applicable and
              permitted)
            </li>
            <li>Analytics and infrastructure providers</li>
          </ul>
        </div>
      </section>

      <section id="info-use" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          2. How We Use Your Information
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
          We use your information to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter mb-6">
          <li>Provide and operate the Platform</li>
          <li>Personalize content and learning experiences</li>
          <li>Maintain a focused, relevant, and distraction-free feed</li>
          <li>Enable collaboration and community features</li>
          <li>Improve safety, security, and moderation</li>
          <li>Develop and improve AI-powered features</li>
          <li>Process subscriptions, payments, and creator monetization</li>
          <li>Communicate updates, policies, and support messages</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="text-zinc-800/75 text-lg font-medium font-inter">
          We do not sell your personal data.
        </p>
      </section>

      <section id="content-visibility" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          3. How Content and Visibility Work
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter mb-6">
          <li>
            Content you post may be visible to others based on your settings
            (public, community, or private spaces)
          </li>
          <li>
            Your profile information may be visible to users you interact with
          </li>
          <li>
            Educational creators and institutions may have enhanced visibility
            tools
          </li>
        </ul>
        <p className="text-zinc-800/75 text-lg font-medium font-inter">
          You control what you share, where it appears, and who can see it.
        </p>
      </section>

      <section id="sharing" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          4. How We Share Information
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter mb-8">
          We share information only when necessary:
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk text-zinc-900 mb-4">
            4.1 With Other Users
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter">
            <li>Content you choose to publish</li>
            <li>Profile details based on visibility settings</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk text-zinc-900 mb-4">
            4.2 With Service Providers
          </h3>
          <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
            We work with trusted partners for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter">
            <li>Hosting and infrastructure</li>
            <li>Analytics and performance monitoring</li>
            <li>Payments and subscriptions</li>
            <li>Customer support tools</li>
          </ul>
          <p className="text-zinc-800/75 text-lg font-medium font-inter mt-4">
            They are contractually required to protect your data.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk text-zinc-900 mb-4">
            4.3 For Legal and Safety Reasons
          </h3>
          <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
            We may disclose information if required to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter">
            <li>Comply with laws, regulations, or legal requests</li>
            <li>
              Protect the rights, safety, and integrity of users and NoteRoom
            </li>
            <li>Prevent abuse, fraud, or harmful activity</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-space-grotesk text-zinc-900 mb-4">
            4.4 Business Transfers
          </h3>
          <p className="text-zinc-800/75 text-lg font-medium font-inter">
            If NoteRoom is involved in a merger, acquisition, or asset sale,
            your information may be transferred with appropriate safeguards.
          </p>
        </div>
      </section>

      <section id="ads" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          5. Advertising and Monetization
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
          NoteRoom may display education-focused and ethically aligned
          advertisements, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter mb-8">
          <li>Educational services</li>
          <li>Learning tools</li>
          <li>Academic institutions</li>
          <li>Books, courses, and skill-based products</li>
        </ul>

        <h3 className="text-2xl font-bold font-space-grotesk text-zinc-800/75 mb-4">
          Advertising is:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter mb-4">
          <li>Contextual and interest-based</li>
          <li>Designed to avoid manipulation and addictive targeting</li>
          <li>Never based on sensitive personal data</li>
        </ul>
        <p className="text-zinc-800/75 text-lg font-medium font-inter">
          You may have controls over certain personalization features.
        </p>
      </section>

      <section id="retention" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          6. Data Retention
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
          We retain information:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter mb-4">
          <li>As long as your account is active</li>
          <li>As needed to provide services</li>
          <li>To comply with legal and regulatory requirements</li>
        </ul>
        <p className="text-zinc-800/75 text-lg font-medium font-inter">
          You may delete content or request account deletion at any time.
        </p>
      </section>

      <section id="rights" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          7. Your Rights and Choices
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
          Depending on your location, you may have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter mb-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Delete your data</li>
          <li>Object to or restrict processing</li>
          <li>Export your data</li>
        </ul>
        <p className="text-zinc-800/75 text-lg font-medium font-inter">
          You can manage most settings directly in your account. For additional
          requests, contact us.
        </p>
      </section>

      <section id="cookies" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          8. Cookies and Tracking Technologies
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
          We use cookies and similar technologies to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter mb-4">
          <li>Keep you logged in</li>
          <li>Remember preferences</li>
          <li>Improve performance and security</li>
          <li>Understand how the platform is used</li>
        </ul>
        <p className="text-zinc-800/75 text-lg font-medium font-inter">
          You can control cookies through your browser settings.
        </p>
      </section>

      <section id="security" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          9. Security
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
          We take reasonable and appropriate measures to protect your
          information, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter mb-4">
          <li>Encryption</li>
          <li>Access controls</li>
          <li>Secure infrastructure</li>
          <li>Regular monitoring</li>
        </ul>
        <p className="text-zinc-800/75 text-lg font-medium font-inter">
          No system is perfectly secure, but we continuously work to safeguard
          your data.
        </p>
      </section>

      <section id="children" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          10. Children and Teen Users
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
          NoteRoom is designed for learners and knowledge workers, including
          students. We take additional care to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-800/75 text-lg font-medium font-inter mb-4">
          <li>Limit harmful content</li>
          <li>Reduce manipulation and distraction</li>
          <li>Protect young users’ privacy</li>
        </ul>
        <p className="text-zinc-800/75 text-lg font-medium font-inter">
          If required by law, parental consent mechanisms will apply.
        </p>
      </section>

      <section id="international" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          11. International Data Transfers
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter">
          Your information may be processed in countries other than your own. We
          ensure appropriate safeguards are in place to protect your data.
        </p>
      </section>

      <section id="changes" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          12. Changes to This Policy
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
          We may update this Privacy Policy from time to time. If changes are
          material, we will notify you through the Platform or other appropriate
          means.
        </p>
        <p className="text-zinc-800/75 text-lg font-medium font-inter">
          The latest version will always be available on NoteRoom.
        </p>
      </section>

      <section id="contact" className="mb-12 scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-zinc-900 mb-6">
          13. Contact Us
        </h2>
        <p className="text-zinc-800/75 text-lg font-medium font-inter mb-4">
          If you have questions, concerns, or requests regarding privacy, you
          can contact us at:
        </p>
        <div className="space-y-1 text-zinc-800/75 text-lg font-medium font-inter">
          <p>
            Email: <span className="text-black">privacy@noteroom.co</span>
          </p>
          <p>
            Website: <span className="text-black">www.noteroom.co</span>
          </p>
        </div>
        <div className="mt-8">
          <p className="text-black font-medium text-lg font-inter">NoteRoom</p>
          <p className="text-black font-medium text-lg font-inter">
            Be where Ideas are.
          </p>
        </div>
      </section>
    </div>
  );
}
