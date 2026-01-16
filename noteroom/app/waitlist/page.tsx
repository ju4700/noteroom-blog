"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.ok) {
        setStatus("success");
        setMessage("You're on the waitlist! We'll notify you when we launch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Unable to connect. Please try again later.");
    }
  }

  return (
    <div className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
          <Image
            src="/assets/NR-logomarks/NoteRoomLogoMark_logomark-fullcolor-rgb-1000_1000px.png"
            alt=""
            width={600}
            height={600}
            className="blur-xl"
            priority
          />
        </div>
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-indigo-300 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-purple-300 opacity-30 blur-3xl" />
      </div>
      <section className="container-custom relative z-10 py-20 text-center">
        <div className="mx-auto max-w-lg">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-indigo-600">
            NoteRoom is under development
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            We&apos;ll be back soon
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            If you&apos;d like to get launch updates, join the waitlist below.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-gray-900 px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
          {message && (
            <p
              className={`mt-4 text-sm ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
