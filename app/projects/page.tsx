import type { Metadata } from "next";
import Image from "next/image";
import type { Project } from "@/lib/site";
import { projectCardSrc, projects, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected work and experiments by ${site.fullName}.`,
};

function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  const src = projectCardSrc(project);
  const href = project.url;
  const isExternal = Boolean(href);

  const inner = (
    <>
      <div className="relative aspect-[16/15] w-full overflow-hidden bg-zinc-900">
        {src ? (
          <Image
            src={src}
            alt={project.title}
            fill
            priority={priority}
            className="object-cover transition duration-300 group-hover:scale-[1.2]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full min-h-[12rem] items-end bg-gradient-to-br from-zinc-800 to-zinc-950 p-5" />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-lg font-medium text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-white/75">Front-end & UI</p>
          {isExternal && (
            <p className="mt-2 text-xs font-medium text-amber-400/90">View live →</p>
          )}
        </div>
      </div>
    </>
  );

  const className =
    "group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition hover:border-white/20";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/80`}
      >
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}

export default function ProjectsPage() {
  const web = projects.filter((p) => p.category === "web");

  return (
    <div className="border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500/90">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Projects
        </h1>
        {/* <p className="mt-4 max-w-2xl text-lg text-zinc-500">
          A selection of interfaces, sites, and design explorations. Add or change thumbnails in{" "}
          
        </p> */}

        <section className="mt-16">
          <h2 className="text-lg font-semibold text-white">Web</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {web.map((p, i) => (
              <ProjectCard key={p.id} project={p} priority={i < 3} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
