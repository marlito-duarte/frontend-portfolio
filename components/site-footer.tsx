import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Let&apos;s talk!
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
              Open to freelance and full-time front-end roles. Tell me about your project.
            </p>
          </div>
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <Link
                href={site.social.linkedin}
                className="text-zinc-400 transition hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={site.social.github}
                className="text-zinc-400 transition hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href={site.social.upwork}
                className="text-zinc-400 transition hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upwork
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-zinc-400 transition hover:text-white"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-12 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} {site.fullName}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
