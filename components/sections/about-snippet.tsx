import Link from "next/link";
import { aboutParagraphs } from "@/lib/site";

export function AboutSnippet() {
  return (
    <section className="border-b border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          About Me
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Link
          href="/about"
          className="mt-8 inline-flex text-sm font-medium text-amber-500 transition hover:text-amber-400"
        >
          Read more →
        </Link>
      </div>
    </section>
  );
}
