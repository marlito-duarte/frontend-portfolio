import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,146,60,0.12),transparent)]" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500/90">
          Hello,
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          I&apos;m {site.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-zinc-300 sm:text-2xl">{site.title}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg">
          {site.tagline}
        </p>
      </div>
    </section>
  );
}
