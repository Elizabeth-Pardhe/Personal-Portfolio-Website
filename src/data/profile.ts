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
  // Optional — '' hides it
  location: 'Phoenix, AZ',
  // Put a résumé PDF at public/resume.pdf and set this to '/resume.pdf'; '' hides the button
  resumeUrl: '',
  // Put a square photo at public/photo.jpg and set this to '/photo.jpg'; '' shows initials instead
  photoUrl: '',
};

export const about = [
  "I'm a senior at Arizona State University's Barrett, The Honors College, studying Data Science (with a focus in mathematics) and Economics, and continuing into an MS in Data Science. My interests sit at the intersection of technology, economics, research, and product thinking — especially where data and AI can be used to solve real business problems.",
  "I've worked on projects ranging from market microstructure and medical-imaging deep learning to multimodal NLP research and evidence-weighting research engines built on SEC filings. I'm comfortable in Python, statistical modeling, and machine learning, but I'm usually most interested in the question behind the code: what are we trying to learn, why does it matter, and how can we turn it into something useful?",
  "Outside of technical work, leadership and communication have been a big part of my college experience — co-leading ASU's Software Developers Association, serving in Alpha Kappa Psi, and building mentorship and professional-development programs. I enjoy taking an ambiguous problem, researching it, developing a direction, and communicating the result clearly.",
  "I'm looking for roles in data science, analytics, product, and research — where I can build and evaluate things myself while thinking strategically and owning problems from beginning to end.",
];

export const links = {
  github: 'https://github.com/Elizabeth-Pardhe',
  linkedin: 'https://www.linkedin.com/in/elizabeth-pardhe/',
  email: 'elizabethdpardhe@gmail.com',
};

export interface Project {
  title: string;
  date?: string;
  points: string[];
  tech: string[];
  href?: string; // live demo or repo
}

export const projects: Project[] = [
  {
    title: 'Research Engine: Consensus Gap',
    points: [
      'Built a stdlib-only Python engine that weights public evidence (SEC, XBRL, FRED, GDELT) claim by claim using Bayesian log-odds, with LLM-extracted claims gated by verbatim-quote validation and code-set weights — covered by 185 offline unit tests.',
      'Backtested over 27 earnings dates without look-ahead, reporting an 88% hit rate against a 93% always-long base rate. Deployed with JSON snapshots for ~2-second loads.',
    ],
    tech: ['Python', 'SEC EDGAR / XBRL', 'LLM extraction', 'Bayesian inference', 'Vercel'],
  },
  {
    title: 'Market Microstructure: Order Flow & Price Formation',
    date: 'Spring 2026',
    points: [
      'Built an analytics pipeline on 9,000+ high-frequency Bitcoin observations, engineering directional order-flow features and cleaning 75%+ inactive intervals into a statistically valid dataset for return modeling.',
      'Quantified how trading pressure drives price formation with regression and decile analysis — order-flow signals explain ~4.8% of short-term return variation, with limited forward predictive power in a liquid market.',
    ],
    tech: ['pandas', 'NumPy', 'SciPy', 'Matplotlib', 'yfinance'],
  },
  {
    title: 'Quantumvest Fintech Proposal — 1st Place',
    points: [
      'Won first place in the Alpha Kappa Psi × Investment and Finance Association AI Case Competition with a fintech proposal for Quantumvest, a leading RIA firm, delivered through an interactive financial-analysis web app.',
    ],
    tech: ['Web app', 'Financial analysis', 'AI'],
  },
  {
    title: 'Applied Materials Alt-Data Research — Longaeva AI Hack-a-Thon',
    points: [
      'Advanced to Stage 2. Researched the fundamental drivers of Applied Materials, identified key operating KPIs, and tested whether externally observable alternative data could signal operational changes earlier — using live SEC filings and market data, scenario testing, and source verification.',
    ],
    tech: ['Python', 'SEC filings', 'Market data', 'Alternative data'],
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
    title: 'AI Intern',
    org: 'ASU Learning Engineering Institute',
    dates: 'Fall 2026',
    description:
      'Built a seeded, reproducible synthetic learner dataset for an AI reading companion (268 behavioral events, 64 pipeline trace rows, versioned intervention policies) in a schema-constrained SQLite store, plus a tested telemetry pipeline and schema-checking ingestion writer.',
  },
  {
    title: 'Undergraduate Researcher',
    org: 'Barrett College Fellows — Imaging Informatics (JLiang Lab)',
    dates: 'Sept 2025 – Dec 2025',
    description:
      'Built and compared PyTorch deep-learning pipelines (ConvNeXt, DINO-based models, U-Net, U-Net++) for chest X-ray analysis on CheXpert and Pneumothorax, and diagnosed training-instability issues to improve preprocessing and architecture selection.',
  },
  {
    title: 'Undergraduate ML Student Researcher — C-SPAN Research',
    org: 'The Data Mine, Purdue University',
    dates: 'Aug 2025 – Apr 2026',
    description:
      'Researched multimodal sentiment analysis on congressional speech, evaluating BERT, wav2vec 2.0, and fusion techniques for detecting rhetorical polarization across text, audio, and video.',
  },
  {
    title: 'Finance Intern',
    org: 'Greenlight Solutions (sustainability nonprofit)',
    dates: 'June 2025 – Aug 2025',
    description:
      'Analyzed 5 years of donor, financial, and operational data to segment donors for targeted outreach, and automated monthly Excel reporting — cutting manual processing time by 40%.',
  },
  {
    title: 'Undergraduate ML Student Researcher — TranslationalHDPM',
    org: 'The Data Mine, Purdue University',
    dates: 'Aug 2024 – Apr 2025',
    description:
      'Built reproducible pipelines for high-dimensional genomic and time-series data; Spearman correlation and PCA preprocessing contributed to a 5% model performance gain.',
  },
];

export const leadership: TimelineEntry[] = [
  {
    title: 'Co-President (prev. VP of Strategy)',
    org: 'Software Developers Association (SoDA)',
    dates: 'Nov 2023 – Present',
    description: 'Grew club engagement 75% by leading 10+ professional-development events for 3,000+ members.',
  },
  {
    title: 'Director of IT (prev. VP of External Relations)',
    org: 'Alpha Kappa Psi Business Fraternity',
    dates: 'May 2024 – Present',
    description: 'First place, AKPsi × Investment and Finance Association AI Case Competition.',
  },
  {
    title: 'Innovation Chair',
    org: 'Next Generation Service Corps',
    dates: 'Aug 2023 – Present',
    description: 'Planned 23 professional-development events for 500+ students and 30 community partners.',
  },
];

export const education: TimelineEntry[] = [
  {
    title: 'MS Data Science',
    org: 'Arizona State University',
    dates: 'Expected May 2028',
  },
  {
    title: 'BS Data Science (Mathematics focus) & BS Economics',
    org: 'Arizona State University — Barrett, The Honors College',
    dates: 'Expected May 2027',
    description: "3.67 GPA · Dean's List · Minor in Business · Cross-Sector Leadership Certificate",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ['Python', 'R', 'SQL', 'Java', 'HTML'],
  'ML & data': ['PyTorch', 'TensorFlow / Keras', 'scikit-learn', 'pandas', 'NumPy', 'SciPy', 'NLP', 'Jupyter'],
  'Analytics & tools': ['Excel', 'Alteryx', 'Tableau', 'Power BI', 'GitHub', 'Lucidchart'],
};
