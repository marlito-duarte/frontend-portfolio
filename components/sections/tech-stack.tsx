import { techStack } from "@/lib/site";

export function TechStack() {
  return (
    <section id="stack" className="border-b border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold tracking-tight text-white">Tech Stack</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-6 text-center transition hover:border-white/15 hover:bg-white/[0.04]"
            >
              <span className="text-2xl tabular-nums leading-none" aria-hidden>
                {item.icon}
              </span>
              <span className="text-sm font-medium text-zinc-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
