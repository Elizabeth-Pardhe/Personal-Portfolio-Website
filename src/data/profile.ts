/**
 * ✏️  EDIT THIS FILE to personalise the site.
 *
 * Everything shown on the homepage comes from here. Anything marked TODO is a
 * placeholder — replace it with your own details, commit, and Vercel will
 * redeploy automatically.
 */

export const profile = {
  name: 'Elizabeth Pardhe',
  // TODO: one-line headline, e.g. "Computer Science student at X" or "Software engineer"
  headline: 'Developer · Builder · Lifelong learner',
  // TODO: 1–2 sentence intro shown under your name
  intro: 'Welcome to my corner of the internet. I build things for the web and love learning along the way.',
  // TODO: optional — set to your city, or '' to hide
  location: '',
  // TODO: put a résumé PDF in /public (e.g. public/resume.pdf) and set this to '/resume.pdf'; '' hides the button
  resumeUrl: '',
};

// TODO: a few short paragraphs about you
export const about = [
  "Hi, I'm Elizabeth! This is a placeholder bio — tell visitors who you are, what you're working on, and what you're excited about.",
  'You might mention what got you into your field, the kinds of problems you like solving, and what you do when you are not at a keyboard.',
];

export const links = {
  github: 'https://github.com/Elizabeth-Pardhe',
  linkedin: '', // TODO: e.g. 'https://www.linkedin.com/in/your-handle'
  email: '', // TODO: e.g. 'you@example.com' — leave '' to keep it off the public site
};

export interface Project {
  title: string;
  description: string;
  tech: string[];
  href?: string; // live demo or repo
}

// TODO: replace with your real projects
export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'This site! Built with Astro and Tailwind CSS, deployed on Vercel.',
    tech: ['Astro', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    href: 'https://github.com/Elizabeth-Pardhe/personal-portfolio-website',
  },
  {
    title: 'Project Two (placeholder)',
    description: 'A short description of what it does, the problem it solves, and what you learned.',
    tech: ['Tech', 'Stack'],
  },
  {
    title: 'Project Three (placeholder)',
    description: 'A short description of what it does, the problem it solves, and what you learned.',
    tech: ['Tech', 'Stack'],
  },
];

export interface TimelineEntry {
  title: string;
  org: string;
  dates: string;
  description?: string;
}

// TODO: your jobs / internships / roles. Empty array hides the section.
export const experience: TimelineEntry[] = [
  {
    title: 'Role title (placeholder)',
    org: 'Company or organisation',
    dates: '20XX – Present',
    description: 'What you worked on and the impact you had.',
  },
];

// TODO: your schools / degrees. Empty array hides the section.
export const education: TimelineEntry[] = [
  {
    title: 'Degree or program (placeholder)',
    org: 'School name',
    dates: '20XX – 20XX',
  },
];

// TODO: your skills, grouped however you like
export const skills: Record<string, string[]> = {
  Languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
  'Frameworks & tools': ['Astro', 'Tailwind CSS', 'Git', 'Vercel'],
};
