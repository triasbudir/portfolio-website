import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-20 border-t border-black/10 dark:border-white/10">
      <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-widest">Services</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-black/10 dark:border-white/10 p-6 hover:border-black/20 dark:hover:border-white/20 transition-colors"
          >
            <h3 className="font-medium">{service.title}</h3>
            <p className="mt-2 text-sm text-foreground/70 text-pretty">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
