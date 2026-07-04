import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-foreground/60">
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="hover:text-foreground transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
