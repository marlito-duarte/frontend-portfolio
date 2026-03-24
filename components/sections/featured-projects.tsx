import Image from "next/image";
import Link from "next/link";
import { logoDesigns, projectCardSrc, projects } from "@/lib/site";

export function FeaturedProjects() {
  const web = projects.filter((p) => p.category === "web");
  const design = projects.filter((p) => p.category === "design");

  return (
    <section className="border-b border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-amber-500 transition hover:text-amber-400"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-10">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Web</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {web.map((p) => {
              const src = projectCardSrc(p);
              return (
                <article
                  key={p.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition hover:border-white/20"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                    {src ? (
                      <Image
                        src={src}
                        alt={p.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="flex h-full items-end bg-gradient-to-br from-zinc-800 to-zinc-950 p-4">
                        <span className="text-sm font-medium text-white/90">{p.title}</span>
                      </div>
                    )}
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      aria-hidden
                    />
                    {src && (
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-sm font-medium text-white/95 drop-shadow">
                          {p.title}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
}
