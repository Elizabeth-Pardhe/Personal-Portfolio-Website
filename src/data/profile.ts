/**
 * ✏️  EDIT THIS FILE to update the site.
 *
 * Everything shown on the homepage comes from here. Commit and push, and
 * Vercel redeploys automatically.
 */

export const profile = {
  name: 'Elizabeth Pardhe',
  headline: 'Data Science & Economics · ASU Barrett Honors College',
  intro:
    'I combine quantitative analysis, AI, research, and product thinking to turn ambiguous problems into practical solutions.',
  // Optional — e.g. 'Tempe, AZ'; '' hides it
  location: '',
  // Put a résumé PDF at public/resume.pdf and set this to '/resume.pdf'; '' hides the button
  resumeUrl: '',
};

export const about = [
  "I'm a senior at Arizona State University's Barrett, The Honors College, double majoring in Data Science and Economics. My interests sit at the intersection of technology, economics, research, and product thinking — especially where data and AI can be used to solve real business problems.",
  "I've worked on projects ranging from market microstructure and economic forecasting to agentic AI systems and alternative-data research. I'm comfortable in Python, statistical modeling, and machine learning, but I'm usually most interested in the question behind the code: what are we trying to learn, why does it matter, and how can we turn it into something useful?",
  "Outside of technical work, leadership and communication have been a big part of my college experience — from leadership roles in university organizations to building mentorship and alumni initiatives. I enjoy taking an ambiguous problem, researching it, developing a direction, and communicating the result clearly.",
  "I'm looking for roles in data science, analytics, product, and research — where I can build and evaluate things myself while thinking strategically and owning problems from beginning to end.",
];

export const links = {
  github: 'https://github.com/Elizabeth-Pardhe',
  linkedin: 'https://www.linkedin.com/in/elizabeth-pardhe/',
  email: '', // e.g. 'you@example.com' — leave '' to keep it off the public site
};

export interface Project {
  title: string;
  description: string;
  tech: string[];
  href?: string; // live demo or repo
}

export const projects: Project[] = [
  {
    title: 'Alternative-Data Research Engine — Applied Materials',
    description:
      'Longaeva AI Hack-a-Thon (advanced to Stage 2). Researched the fundamental drivers of Applied Materials, identified key operating KPIs, and tested whether externally observable alternative data could give earlier signals of operational change. Built a research engine with live SEC filings and market data, scenario testing, and source verification.',
    tech: ['Python', 'SEC filings', 'Market data', 'Scenario testing', 'AI'],
  },
  {
    title: 'Agentic AI Systems',
    description: 'Designing AI agents that research, reason over data, and verify their sources to support real decisions.',
    tech: ['Python', 'LLMs', 'APIs'],
  },
  {
    title: 'Market Microstructure',
    description: 'Quantitative analysis of how markets behave at the level of orders, trades, and liquidity.',
    tech: ['Python', 'Statistical modeling'],
  },
  {
    title: 'Economic Forecasting',
    description: 'Building and evaluating statistical and machine-learning models to forecast economic indicators.',
    tech: ['Python', 'Time series', 'Machine learning'],
  },
];

export interface TimelineEntry {
  title: string;
  org: string;
  dates?: string;
  description?: string;
}

// Empty array hides the section.
export const experience: TimelineEntry[] = [
  {
    title: 'Stage 2 Participant',
    org: 'Longaeva AI Hack-a-Thon',
    description:
      'Built an alternative-data research engine on Applied Materials combining live SEC filings, market data, scenario testing, and source verification.',
  },
  {
    title: 'Student Leader',
    org: 'Arizona State University organizations',
    description:
      'Held leadership roles, helped build mentorship and alumni initiatives, organized events, and worked on multidisciplinary teams.',
  },
];

export const education: TimelineEntry[] = [
  {
    title: 'Data Science & Economics (double major)',
    org: 'Arizona State University — Barrett, The Honors College',
    dates: 'Senior',
  },
];

export const skills: Record<string, string[]> = {
  Technical: [
    'Python',
    'Statistical modeling',
    'Machine learning',
    'Data pipelines',
    'APIs',
    'Interactive applications',
  ],
  'Domains & interests': [
    'Economic forecasting',
    'Market microstructure',
    'Agentic AI',
    'Alternative data',
    'Product thinking',
  ],
  'Leadership & communication': [
    'Research & synthesis',
    'Clear communication',
    'Mentorship programs',
    'Event organizing',
    'Cross-functional teams',
  ],
};
