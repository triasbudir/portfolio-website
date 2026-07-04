# Portfolio Website

A full-stack developer portfolio built with Next.js, TypeScript, and Tailwind CSS — designed to help you land clients internationally.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

All the placeholder content lives in `src/data/`, edit these files with your real info:

- `src/data/site.ts` — your name, role, bio, email, social links, stats
- `src/data/skills.ts` — skill categories and tags
- `src/data/services.ts` — services you offer
- `src/data/projects.ts` — your project case studies (add screenshots to `public/` and swap the `gradient` placeholders for real images if you like)

The page sections themselves are in `src/components/` (`Hero.tsx`, `About.tsx`, `Skills.tsx`, `Services.tsx`, `Projects.tsx`, `Contact.tsx`, `Footer.tsx`, `Navbar.tsx`).

## Contact form (making it actually send emails)

The form posts to `src/app/api/contact/route.ts`. Without any configuration, submissions are just logged to the server console — good enough for local testing but not for production.

To make it send real emails, sign up at [resend.com](https://resend.com) (free tier available), grab an API key, and set these environment variables (copy `.env.example` to `.env.local`):

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=you@yourdomain.com
CONTACT_FROM_EMAIL=Portfolio Contact Form <onboarding@resend.dev>
```

Also set `NEXT_PUBLIC_SITE_URL` to your real domain — it's used in SEO metadata, `sitemap.xml`, and `robots.txt`.

## Deploying

The fastest option is [Vercel](https://vercel.com/new) (made by the Next.js team, free for personal projects):

1. Push this project to a GitHub repo.
2. Import it on Vercel.
3. Add the environment variables above in the Vercel project settings.
4. Deploy — you'll get a live URL, and can attach a custom domain afterward.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [lucide-react](https://lucide.dev) for icons
- [Resend](https://resend.com) for transactional email (optional, contact form)
