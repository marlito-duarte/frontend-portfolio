import type { Metadata } from "next";
import { aboutParagraphs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Me",
  description: `Learn more about ${site.fullName} — ${site.title}.`,
};

export default function AboutPage() {
  return (
    <div className="border-b border-white/5">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500/90">
          About
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          About Me
        </h1>
        <div className="mt-12 space-y-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
