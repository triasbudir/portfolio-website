import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 border-t border-black/10 dark:border-white/10">
      <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-widest">About</h2>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-foreground/80 text-pretty">
          {siteConfig.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 content-start">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
