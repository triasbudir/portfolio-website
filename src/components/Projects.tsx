import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 border-t border-black/10 dark:border-white/10">
      <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-widest">Selected Projects</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden hover:border-black/20 dark:hover:border-white/20 transition-colors"
          >
            <div className={`h-36 bg-gradient-to-br ${project.gradient}`} />
            <div className="p-6">
              <h3 className="font-medium">{project.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 text-pretty">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/5 dark:bg-white/10 px-2.5 py-1 text-xs text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <GithubIcon size={14} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
