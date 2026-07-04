import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 border-t border-black/10 dark:border-white/10">
      <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-widest">Skills</h2>

      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-medium">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-sm text-foreground/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
