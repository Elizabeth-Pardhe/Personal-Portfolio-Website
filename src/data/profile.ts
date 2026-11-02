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
    'I use data, economics and AI to turn messy, real-world information into clear signals people can trust, from hospital X-rays to company earnings.',
  // Shown as a small badge in the hero; '' hides it
  status: '',
  // "Currently" line in the hero
  now: ['AI Intern, ASU Learning Engineering Institute', 'Co-President, Software Developers Association'],
  // Optional; '' hides it
  location: 'Phoenix, AZ',
  // Put a résumé PDF at public/resume.pdf and set this to '/resume.pdf'; '' hides the button
  resumeUrl: '',
  // Put a square photo at public/photo.jpg and set this to '/photo.jpg'; '' shows initials instead
  photoUrl: '/photo.jpg',
};

// "The short version": one idea that ties the work together, then how I work, each backed by real examples
export const shortVersion = {
  lead: "I study Data Science (with a math focus) and Economics at ASU's Barrett Honors College, with a master's in Data Science next. Whether the subject is health, politics, education or finance, my work comes back to one idea: turning messy, real-world information into signals people can trust and act on.",
  items: [
    {
      title: 'Start with the question',
      text: "Whether it's a chest X-ray, a speech in Congress or a company's earnings, I start by asking what we're really trying to learn and why it matters.",
    },
    {
      title: 'Separate signal from noise',
      text: "My research has dealt with medical images, political speech and genetic data, and my finance projects pull from filings, news and trading records. In each one the hard part is proving which patterns are real. That's why Consensus Gap only keeps a claim if its exact quote appears in the source.",
    },
    {
      title: 'Build things people use',
      text: 'A finding only matters if it helps someone decide something, so I turn analysis into tools: a research engine for investors, dashboards for a nonprofit, and a money-management app concept that won first place.',
    },
    {
      title: 'Bring people with me',
      text: "As Co-President of ASU's Software Developers Association, I started the mentorship program and co-planned ASU's first Women in Tech Conference to help more students find their place in tech.",
    },
    {
      title: 'Keep making things',
      text: 'Outside of work I paint and take photos, which I share at',
      linkLabel: '@elizabeths_studio',
      linkUrl: 'https://www.instagram.com/elizabeths_studio/',
    },
  ] as { title: string; text: string; linkLabel?: string; linkUrl?: string }[],
};

// Closing paragraphs after "The short version"
export const about = [
  "I like taking something ambiguous, researching it until a direction becomes clear, and then explaining what I found in a way anyone can follow. That's why my work keeps landing between data, economics and product: I want to understand what's happening, back it up with evidence, and turn it into something someone can use.",
];

export const links = {
  github: 'https://github.com/Elizabeth-Pardhe',
  linkedin: 'https://www.linkedin.com/in/elizabeth-pardhe/',
  email: 'elizabethdpardhe@gmail.com',
  instagram: 'https://www.instagram.com/elizabeths_studio/',
};

export interface Project {
  title: string;
  subtitle?: string;
  date?: string;
  blurb: string; // one plain-English sentence anyone can understand
  points: string[];
  tech: string[];
  href?: string; // live demo or repo
  note?: string; // small note under the tags, e.g. "Demo available on request"
}

export const projects: Project[] = [
  {
    title: 'Consensus Gap',
    subtitle: 'Longaeva AI Hack-a-Thon · Advanced to Stage 2',
    blurb:
      "A research tool that reads a company's public filings, economic data and news coverage to spot early signs that its business is changing, before the next earnings report confirms it.",
    points: [
      'Focused on Applied Materials, which makes the machines used to manufacture computer chips. I identified the numbers that best show how its business is doing, then tested whether alternative data (public information from outside the company, such as economic indicators and news) could show changes in those numbers sooner.',
      'The tool uses AI to pull specific claims out of SEC filings, government economic data and global news, and only keeps a claim if its exact quote appears in the original source.',
      "It weighs each piece of evidence and combines it into one overall read on the company, with 185 automated tests checking the logic. I tested it on 27 past earnings reports using only the information available at the time.",
    ],
    tech: ['Python', 'SEC filings', 'Economic data (FRED)', 'News data (GDELT)', 'LLMs', 'Bayesian statistics'],
    note: 'Demo available on request',
  },
  {
    title: "How Buying Pressure Moves Bitcoin's Price",
    subtitle: 'Market microstructure study',
    date: 'Spring 2026',
    blurb:
      "A study of whether the balance of buyers and sellers in Bitcoin over short windows explains where its price goes, and whether it can predict the next move.",
    points: [
      'Collected 9,000+ short-interval Bitcoin trading records and removed the long stretches with no trading, so the analysis only counted real activity.',
      "Found that buying and selling pressure explains about 5% of short-term price movement but does little to predict the next move, which is what you'd expect in a market this heavily traded.",
    ],
    tech: ['Python', 'pandas', 'Statistics', 'Regression'],
  },
  {
    title: 'QuantumConnect',
    subtitle: '1st Place · AKPsi × Investment and Finance Association AI Case Competition',
    blurb:
      'With a team of four, I pitched an app that helps everyday people manage their money and gives an investment firm a new way to reach clients. We won first place.',
    points: [
      'Our client, Quantumvest, is an investment advisory firm. Since 65% of people say they feel uncertain about their finances and most look for information on their phones, we designed an app that meets people there.',
      'The free version lets anyone track income and investments in one place, follow market news, learn investing basics and ask an AI chatbot questions. A premium tier adds AI-guided portfolio management, 24/7 access to a human advisor and loyalty perks.',
      'We showed how the app would bring in younger and first-time investors and keep current clients engaged, and planned for risks such as outages that could shake client trust.',
    ],
    tech: ['Product strategy', 'Fintech', 'AI', 'Market research'],
  },
  {
    title: 'Coding Course for Airmen at Luke Air Force Base',
    subtitle: 'PAF 215 Project · Developer',
    date: 'Jan 2024 – May 2024',
    blurb: 'A beginner coding course that teaches airmen to build their own apps and dashboards for the base.',
    points: [
      'Worked with airmen and 3 Air Force officials to design lessons on Java, Python and HTML.',
      'Talked with industry professionals and professors to understand the problem, then built a working task manager and dashboard as examples.',
    ],
    tech: ['Java', 'Python', 'HTML', 'Teaching'],
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
      'Built a realistic practice dataset of how students use an AI reading assistant (268 simulated reading events across 4 readings), plus the system that records and checks that data, so the team can test the assistant reliably.',
  },
  {
    title: 'Machine Learning Researcher, C-SPAN Project',
    org: 'The Data Mine, Purdue University',
    dates: 'Aug 2025 – Apr 2026',
    description:
      'Studied how combining what members of Congress say, how they sound and how they look on video helps AI detect polarizing speech, using language and speech models such as BERT and wav2vec 2.0.',
  },
  {
    title: 'Undergraduate Researcher',
    org: 'Barrett College Fellows, Imaging Informatics (JLiang Lab)',
    dates: 'Sep 2025 – Dec 2025',
    description:
      'Trained and compared AI models that read chest X-rays to find problems such as a collapsed lung, and worked out why some models struggled to train so the process could be improved.',
  },
  {
    title: 'Data & Finance Intern',
    org: 'GreenLight Solutions (sustainability nonprofit)',
    dates: 'Apr 2025 – Aug 2025',
    description:
      'Turned 5 years of financial data into dashboards and impact reports, recommended ways to keep donors giving, and built Excel tools that cut monthly reporting time by 40%.',
  },
  {
    title: "Machine Learning Researcher, Alzheimer's Project",
    org: 'The Data Mine, Purdue University · with SuperFluidDX',
    dates: 'Aug 2024 – Apr 2025',
    description:
      "Worked with SuperFluidDX, a diagnostics company, on models that use genetic (RNA) data to study Alzheimer's patients. Cleaned and combined large genetic datasets and simplified them in ways that improved model performance by 5%.",
  },
  {
    title: 'Research Assistant',
    org: 'Science and Engineering Experience (SCENE), ASU',
    dates: 'Nov 2022 – Apr 2023',
    description:
      'Researched with Prof. Houlong Zhuang how hydrogen makes metals brittle and how to prevent it, and presented the work at the Arizona Science and Engineering Fair.',
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
    summary: "Started the club's mentorship program, co-planned ASU's first Women in Tech Conference, and grew engagement 75% across 3,000+ members.",
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
    org: 'Alpha Kappa Psi, Iota Xi Chapter',
    dates: 'Apr 2024 – Present',
    summary: 'Won 1st place in the AKPsi × Investment and Finance Association AI Case Competition and rebuilt the chapter website.',
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
    summary: 'Lead a climate and energy sustainability team, and planned 23 career events for 500+ students and 30 community partners.',
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
  {
    org: 'Prompt Engineering Club at ASU (PECA)',
    dates: 'Nov 2023 – Apr 2024',
    summary: 'Ran marketing and outreach to grow the club in its early days.',
    roles: [
      {
        title: 'Technical & Marketing Officer',
        dates: 'Nov 2023 – Apr 2024',
        points: ['Managed the club Instagram, created flyers and presentations, planned events, and grew membership through outreach.'],
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
    org: 'Arizona State University, Barrett The Honors College',
    dates: 'Expected May 2027',
    description: "Dean's List · Minor in Business · Cross-Sector Leadership Certificate",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ['Python', 'R', 'SQL', 'Java', 'HTML'],
  'ML & data': ['PyTorch', 'TensorFlow / Keras', 'scikit-learn', 'pandas', 'NumPy', 'SciPy', 'NLP', 'Jupyter'],
  'Analytics & tools': ['Excel', 'Alteryx', 'Tableau', 'Power BI', 'GitHub', 'Lucidchart'],
};

// Headline numbers shown under the hero. Empty array hides the strip.
export const stats: { value: string; label: string }[] = [
  { value: '1st', label: 'place, AI case competition' },
  { value: '6', label: 'research & industry roles' },
  { value: '3,000+', label: 'SoDA members reached' },
  { value: 'Largest', label: 'mentorship cohort in SoDA history' },
];
