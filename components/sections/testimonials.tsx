import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="border-b border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          What clients say
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Replace with real testimonials when you have them.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            >
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-xs font-semibold text-zinc-400">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.author}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
