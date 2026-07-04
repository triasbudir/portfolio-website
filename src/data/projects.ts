export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  gradient: string;
};

// Replace these with your real projects (screenshots go in /public/projects/).
export const projects: Project[] = [
  {
    title: "ShopFlow — E-commerce Platform",
    description:
      "A headless e-commerce storefront with cart, checkout, and Stripe payments, built for a US-based retail client.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "TaskPilot — SaaS Project Management Tool",
    description:
      "A multi-tenant project management app with real-time collaboration, used by remote teams in Europe.",
    tags: ["React", "Node.js", "WebSockets"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    title: "InvoiceEase — Billing Dashboard",
    description:
      "An automated invoicing and billing dashboard integrating with Stripe and Xero for an Australian SME.",
    tags: ["TypeScript", "Express", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "BrightPage — Marketing Website",
    description:
      "A fast, SEO-optimized marketing site with a 98+ Lighthouse score, driving a 30% increase in leads.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-emerald-500 to-teal-500",
  },
];
