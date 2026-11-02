# Elizabeth Pardhe: Personal Website

My personal portfolio site, built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) (based on the AstroWind template) and deployed on [Vercel](https://vercel.com).

## Editing content

All homepage content lives in **`src/data/profile.ts`**: name, headline, bio, projects, experience, education, skills and links. Edit that file, commit, and push; Vercel redeploys automatically.

- Résumé: drop a PDF at `public/resume.pdf` and set `resumeUrl: '/resume.pdf'`.
- Colours/fonts: `src/components/CustomStyles.astro`.
- Site name / SEO: `src/config.yaml`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

Licensed under MIT (see `LICENSE.md`; template © onWidget).
