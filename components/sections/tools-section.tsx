import { tools } from "@/lib/site";

export function ToolsSection() {
  return (
    <section className="border-b border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold tracking-tight text-white">Tools</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {tools.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-5 text-center transition hover:border-white/15 hover:bg-white/[0.04]"
            >
              <span className="text-xl leading-none" aria-hidden>
                {item.icon}
              </span>
              <span className="text-xs font-medium text-zinc-400">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
