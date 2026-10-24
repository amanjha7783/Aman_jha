# Aman Kumar Jha — Portfolio

React + Vite + TypeScript + Tailwind CSS v4 + Motion.

## Run
```
pnpm install
pnpm dev        # local development
pnpm build      # production build in dist/
```

## Edit content
All text lives in `src/data/` (`profile.ts`, `experience.ts`, `projects.ts`, `misc.ts`). Resume PDF: `public/Aman_Kumar_Jha_Resume.pdf`.

## Contact form
Set `VITE_CONTACT_FORM_ENDPOINT` (e.g. a Formspree endpoint `https://formspree.io/f/xxxx`) in `.env` or the host's environment variables. Without it, the form opens the visitor's email app and does not claim the message was sent.

## Deploy
Any static host (Vercel, Netlify, GitHub Pages): build command `pnpm build`, output `dist`. Add the env variable above on the host.

## Accuracy notes
CRIS metrics are intentionally not shown until cleared. SkyGuard AI is marked experimental. Crime platform uses synthetic data only.
