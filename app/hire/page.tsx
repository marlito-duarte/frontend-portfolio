import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hire Me",
  description: `Contact ${site.fullName} for front-end development work.`,
};

export default function HirePage() {
  return (
    <div className="border-b border-white/5">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500/90">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Hire Me
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          I&apos;m available for contract and collaboration. Share a bit about your timeline,
          stack, and goals—I typically reply within one business day.
        </p>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
          <p className="text-sm font-medium text-zinc-500">Email</p>
          <a
            href={`mailto:${site.email}?subject=Project%20inquiry`}
            className="mt-2 inline-block text-xl font-medium text-amber-500 transition hover:text-amber-400 sm:text-2xl"
          >
            {site.email}
          </a>
          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <Link
                href={site.social.linkedin}
                className="text-zinc-400 underline-offset-4 transition hover:text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={site.social.github}
                className="text-zinc-400 underline-offset-4 transition hover:text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href={site.social.upwork}
                className="text-zinc-400 underline-offset-4 transition hover:text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upwork
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
