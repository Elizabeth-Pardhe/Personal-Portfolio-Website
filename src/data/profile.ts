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
  "Outside of technical work, leadership and communication have been a big part of my college experience — co-leading ASU's Software Developers Association, serving as president of Devil Data Science, founding SoDA's mentorship program, and helping host ASU's first Women in Tech Conference. I enjoy taking an ambiguous problem, researching it, developing a direction, and communicating the result clearly.",
  "I'm looking for roles in data science, analytics, product, and research — where I can build and evaluate things myself while thinking strategically and owning problems from beginning to end.",
];

export const links = {
  github: 'https://github.com/Elizabeth-Pardhe',
  linkedin: 'https://www.linkedin.com/in/elizabeth-pardhe/',
  email: 'elizabethdpardhe@gmail.com',
};

export interface Project {
  title: string;
  subtitle?: string;
  date?: string;
  points: string[];
  tech: string[];
  href?: string; // live demo or repo
}

export const projects: Project[] = [
  {
    title: 'Consensus Gap: Alt-Data Research Engine',
    subtitle: 'Longaeva AI Hack-a-Thon · Applied Materials · Advanced to Stage 2',
    points: [
      'Researched the fundamental drivers of Applied Materials, identified key operating KPIs, and tested whether externally observable alternative data could signal operational changes earlier.',
      'Built a stdlib-only Python engine that weights public evidence (SEC, XBRL, FRED, GDELT) claim by claim using Bayesian log-odds, with LLM-extracted claims gated by verbatim-quote validation and code-set weights — covered by 185 offline unit tests.',
      'Backtested over 27 earnings dates without look-ahead, reporting an 88% hit rate against a 93% always-long base rate. Deployed with JSON snapshots for ~2-second loads.',
    ],
    tech: ['Python', 'SEC EDGAR / XBRL', 'FRED', 'GDELT', 'LLM extraction', 'Bayesian inference', 'Vercel'],
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
    title: 'Quantumvest Fintech Proposal',
    subtitle: '1st Place · AKPsi × Investment and Finance Association AI Case Competition',
    points: [
      'Presented a fintech proposal addressing client needs for Quantumvest, a leading RIA firm, delivered through an interactive financial-analysis web app.',
    ],
    tech: ['Web app', 'Financial analysis', 'AI'],
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

export interface LeadershipRole {
  title: string;
  dates: string;
  points?: string[];
}

export interface LeadershipOrg {
  org: string;
  dates: string;
  summary?: string;
  roles: LeadershipRole[];
}

// Empty array hides the section.
export const leadership: LeadershipOrg[] = [
  {
    org: 'Software Developers Association (SoDA) at ASU',
    dates: 'Nov 2023 – Present',
    summary: 'Grew club engagement 75% through 10+ professional-development events for 3,000+ members.',
    roles: [
      { title: 'Co-President', dates: 'May 2026 – Present' },
      {
        title: 'Vice President of Strategy',
        dates: 'Aug 2025 – Apr 2026',
        points: [
          "As Mentorship Program Director, welcomed the largest cohort in the club's history.",
          "Planned and hosted ASU's first Women in Tech Conference with Women in Computer Science, Women in Data Science and Statistics, AI Society, Google Developer Student Club, and more.",
          'Hosted the Fall and Spring Alumni Banquets for 50+ alumni, club representatives, and industry sponsors.',
        ],
      },
      {
        title: 'Vice President of Emerging Initiatives',
        dates: 'Dec 2024 – Jul 2025',
        points: [
          'Grew the mentorship program with more mentors and resources, and hosted the second Alumni Banquet where mentees showcased projects to industry professionals.',
        ],
      },
      {
        title: 'Director of Professional Development & Community Engagement',
        dates: 'Apr 2024 – Dec 2024',
        points: [
          "Founded SoDA's Mentorship Program (first cohort of 20), started Lounge Hours, and hosted the inaugural Alumni Banquet.",
        ],
      },
      {
        title: 'Industry Officer',
        dates: 'Nov 2023 – Apr 2024',
        points: ['Reached out to 10+ companies for club sponsorship.'],
      },
    ],
  },
  {
    org: 'Devil Data Science',
    dates: 'Jan 2024 – Present',
    roles: [
      { title: 'President', dates: 'May 2026 – Present' },
      {
        title: 'Secretary',
        dates: 'Apr 2024 – Apr 2026',
        points: ['Organized workshops and meetings connecting students with recruiters and technical skills beyond class projects.'],
      },
      {
        title: 'Director of Communications',
        dates: 'Jan 2024 – Apr 2024',
        points: ['Designed event flyers, moderated online events, and led outreach at university events.'],
      },
    ],
  },
  {
    org: 'Alpha Kappa Psi — Iota Xi Chapter',
    dates: 'Apr 2024 – Present',
    summary: '1st place, AKPsi × Investment and Finance Association AI Case Competition.',
    roles: [
      {
        title: 'Director of Information Technology',
        dates: 'Jan 2026 – Present',
        points: [
          'Revamped the chapter website with member profiles, headshots, and LinkedIns; kept recruitment info current and helped run internal elections.',
        ],
      },
      {
        title: 'Vice President of External Relations',
        dates: 'Dec 2024 – May 2025',
        points: ['Led merchandise with the marketing committee and managed collaborations with other ASU organizations.'],
      },
    ],
  },
  {
    org: 'ASU Next Generation Service Corps',
    dates: 'Sep 2023 – Present',
    summary: 'Planned 23 professional-development events for 500+ students and 30 community partners.',
    roles: [
      {
        title: 'Mission Team Lead, MT 24: Energy & Climate Sustainability',
        dates: 'Apr 2024 – Present',
        points: ['Lead a team researching and advocating for climate and energy sustainability.'],
      },
      {
        title: 'Innovation Chair',
        dates: 'Sep 2023 – Present',
        points: ['Produced committee videos, flyers, and posters, and represented NGSC at ASU Change the World.'],
      },
    ],
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
