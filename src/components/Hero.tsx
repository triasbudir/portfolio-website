import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs text-foreground/70">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        {siteConfig.availability}
      </div>

      <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-balance">
        {siteConfig.name}
      </h1>
      <p className="mt-3 text-xl sm:text-2xl text-foreground/70">{siteConfig.role}</p>

      <p className="mt-6 max-w-2xl text-base sm:text-lg text-foreground/70 text-pretty">
        {siteConfig.heroDescription}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Start a project
          <ArrowRight size={16} />
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-5 py-3 text-sm font-medium hover:border-black/20 dark:hover:border-white/20 transition-colors"
        >
          View my work
        </a>
      </div>

      <div className="mt-8 flex items-center gap-4 text-foreground/60">
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
          className="hover:text-foreground transition-colors"
        >
          <GithubIcon size={20} />
        </a>
        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
          className="hover:text-foreground transition-colors"
        >
          <LinkedinIcon size={20} />
        </a>
        <span className="text-sm">{siteConfig.location}</span>
      </div>
    </section>
  );
}
