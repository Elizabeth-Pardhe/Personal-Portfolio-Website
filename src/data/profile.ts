/**
 * ✏️  EDIT THIS FILE to update the site.
 *
 * Everything shown on the homepage comes from here. Commit and push, and
 * Vercel redeploys automatically.
 */

export const profile = {
  name: 'Elizabeth Pardhe',
  headline: 'Data Science & Economics · ASU Barrett Honors College',
  intro: 'I turn messy data into decisions people can act on.',
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
  lead: "I study Data Science (with a math focus) and Economics at ASU's Barrett Honors College, with a master's in Data Science next. I like starting with a question that doesn't have an obvious answer and figuring out what the data can tell us. My projects have ranged from reading chest X-rays to tracking Bitcoin prices, but they all come down to digging into a problem until something useful shows up.",
  items: [
    {
      title: 'Start with the question',
      text: "Before I touch a model, I want to know what we're trying to learn and why anyone cares. It's usually the hardest part, but it's the part I enjoy most!",
    },
    {
      title: 'Separate signal from noise',
      text: "Messy data can tell you almost anything if you're not careful. I care about checking that a pattern is real before I lean on it, which is why Consensus Gap only keeps a claim if the exact quote shows up in the original source.",
    },
    {
      title: 'Build things people use',
      text: "I like turning analysis into something people can pick up and use, like the data pipeline I built for ARCHIE, an AI reading companion my team at the Learning Engineering Institute is using in its research.",
    },
    {
      title: 'Bring people with me',
      text: "As Co-President of ASU's Software Developers Association, I started our mentorship program and the Women in Tech Conference at ASU. I like building the structures that help good ideas, and the people behind them, grow.",
    },
    {
      title: 'Keep making things',
      text: "When I'm not working with data, I'm usually painting or out taking photos. I post my favorite shots on",
      linkLabel: '@elizabeths_studio',
      linkUrl: 'https://www.instagram.com/elizabeths_studio/',
    },
  ] as { title: string; text: string; linkLabel?: string; linkUrl?: string }[],
};

// Optional closing paragraphs after "The short version" (empty hides them)
export const about: string[] = [];

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
  area?: 'data' | 'economics' | 'people'; // which bar of the E this belongs to
  roles?: string; // short role tag, e.g. 'Data · Product'
}

export const projects: Project[] = [
  {
    title: 'ARCHIE',
    area: 'data',
    roles: 'Data · Product',
    subtitle: 'AI reading companion · ASU Learning Engineering Institute',
    date: 'Fall 2026',
    blurb: "A research project at ASU's Learning Engineering Institute exploring how AI can support students while they read.",
    points: [
      'The research team needed reading data they could trust, without collecting more than they needed, and I owned the data side of the system.',
      'I designed the data structure and the privacy rules, then directed AI coding tools to build it, reviewing and correcting the code at each step.',
      'Before any students used it, I tested everything end to end with synthetic data and caught bugs that would have skewed the research.',
    ],
    tech: ['Python', 'SQLite', 'TypeScript', 'React', 'Synthetic data', 'Browser testing'],
  },
  {
    title: 'QuantumConnect',
    area: 'economics',
    roles: 'Product · Strategy',
    subtitle: '1st Place · AKPsi × Investment and Finance Association AI Case Competition',
    blurb:
      'With a team of four, I pitched an app that helps everyday people manage their money and gives an investment firm a new way to reach clients. The app itself stole the show, and we took first place.',
    points: [
      'Our client, Quantumvest, is an investment advisory firm. Since 65% of people say they feel uncertain about their finances (MarketWatch) and most look for information on their phones, we designed an app that meets people there.',
      'The free version lets anyone track income and investments in one place, follow market news, learn investing basics and ask an AI chatbot questions. A premium tier adds AI-guided portfolio management, 24/7 access to a human advisor and loyalty perks.',
      'We showed how the app would bring in younger and first-time investors and keep current clients engaged, and planned for risks such as outages that could shake client trust.',
    ],
    tech: ['Product design', 'Fintech', 'AI', 'Market research'],
  },
  {
    title: 'Consensus Gap',
    area: 'economics',
    roles: 'Economics · Data',
    subtitle: 'Research engine · Longaeva AI Hack-a-Thon, advanced to Stage 2',
    blurb:
      'An evidence-weighing tool that checks whether public information is running ahead of or behind what a company has told the market.',
    points: [
      "It reads public filings and market data for semiconductor companies, scores how much each piece of evidence deserves to be trusted, and compares the overall direction with the company's own guidance. The result is a read of ahead, behind or consistent, with a confidence level and the evidence behind it. It makes no price target and no trading call.",
      'It gives live reads on real SEC filings for TSMC, Micron and Intel, and I replayed 27 past earnings dates using only what was public at each date.',
      "On 8 positions it hit 88%, next to a 93% always-long base rate. That tells me the method runs cleanly on real filings. It doesn't prove skill yet, and I say so on the page.",
      'It has 24 synthetic test scenarios and 185 automated tests that all run offline, and the web app loads in about 2 seconds.',
      'My biggest lessons were that a result only means something next to its baseline, and that a verified quote can still carry the wrong number. I found and fixed a case where one did.',
    ],
    tech: ['Python', 'SEC EDGAR / XBRL', 'LLM-assisted extraction', 'Vercel'],
    note: 'Demo available on request',
  },
  {
    title: 'Coding Course for Airmen at Luke Air Force Base',
    area: 'data',
    roles: 'Product · Teaching',
    subtitle: 'PAF 215 Project · Developer',
    date: 'Jan 2024 – May 2024',
    blurb: 'A beginner coding course that teaches airmen to build their own apps and dashboards for the base.',
    points: [
      'Worked with airmen and 3 Air Force officials to design lessons on Java, Python and HTML.',
      'Talked with industry professionals and professors to understand the problem, then designed a task manager and a dashboard and presented them to the Air Force officials.',
    ],
    tech: ['Java', 'Python', 'HTML', 'Teaching', 'UI design'],
  },
  {
    title: "How Buying Pressure Moves Bitcoin's Price",
    area: 'economics',
    roles: 'Economics',
    subtitle: 'Market microstructure study',
    date: 'Spring 2026',
    blurb: "A study of whether the balance of buyers and sellers in Bitcoin explains where its price goes next.",
    points: [
      'Buying and selling pressure explained about 5% of short-term price moves across 9,000+ trading records, but did little to predict the next move.',
    ],
    tech: ['Python', 'pandas', 'Regression'],
  },
];

export interface TimelineEntry {
  title: string;
  org: string;
  dates?: string;
  description?: string;
  area?: 'data' | 'economics' | 'people';
}

// Empty array hides the section.
export const experience: TimelineEntry[] = [
  {
    title: 'AI Intern',
    area: 'data',
    org: 'ASU Learning Engineering Institute',
    dates: 'Fall 2026',
    description:
      "Built the data side of ARCHIE, a research project at the Learning Engineering Institute exploring how AI can support students while they read.",
  },
  {
    title: 'Machine Learning Researcher, C-SPAN Project',
    area: 'data',
    org: 'The Data Mine, Purdue University',
    dates: 'Aug 2025 – Apr 2026',
    description:
      'Our team built models to detect polarizing rhetoric in 10,400 House floor speeches from 2017 to 2022. Text alone worked best (80% accuracy) compared with audio (62%) and video (59%), and our topic modeling showed the gap between Democratic and Republican speech grew over time. A model combining all three is in progress.',
  },
  {
    title: 'Undergraduate Researcher',
    area: 'data',
    org: 'Barrett College Fellows, Imaging Informatics (JLiang Lab)',
    dates: 'Sep 2025 – Dec 2025',
    description:
      'Trained and compared AI models that read chest X-rays to find problems such as a collapsed lung, and worked out why some models struggled to train so the process could be improved.',
  },
  {
    title: 'Data & Finance Intern',
    area: 'economics',
    org: 'GreenLight Solutions (sustainability nonprofit)',
    dates: 'Apr 2025 – Aug 2025',
    description:
      "Automated the nonprofit's monthly finance reporting with Excel and Google Sheets formulas, cutting manual work by 40%. Turned 5 years of financial and operational data into impact reports, backed its sponsorship proposals with analysis, and helped refresh its website.",
  },
  {
    title: "Machine Learning Researcher, Alzheimer's Project",
    area: 'data',
    org: 'The Data Mine, Purdue University · with SuperFluidDX',
    dates: 'Aug 2024 – Apr 2025',
    description:
      "Our team worked with SuperFluidDX on blood-based RNA data from 234 people. Instead of compressing all 534 genes, which overfit, we kept only the most connected 'hub' genes. That cut the data to 7 features while keeping 84% accuracy (AUC 0.92) with no overfitting.",
  },
  {
    title: 'Research Assistant',
    area: 'data',
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
    summary: "Started the club's mentorship program, which grew from a first cohort of 20 to the largest in the club's history, and grew engagement 75% across 3,000+ members.",
    roles: [
      { title: 'Co-President', dates: 'May 2026 – Present' },
      {
        title: 'Vice President of Strategy',
        dates: 'Aug 2025 – Apr 2026',
        points: [
          "As Mentorship Program Director, welcomed the largest cohort in the club's history.",
          'Founded the Women in Tech Conference at ASU with partner clubs across campus and hosted it two years in a row.',
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
  Languages: ['Python', 'R', 'SQL', 'TypeScript', 'Java'],
  'ML & data': ['PyTorch', 'scikit-learn', 'pandas', 'NumPy', 'NLP (BERT, wav2vec 2.0)', 'Synthetic data'],
  'Tools': ['SQLite', 'React', 'Git', 'Excel & Google Sheets', 'JSON Schema'],
};

// Headline numbers shown under the hero. Empty array hides the strip.
export const stats: { value: string; label: string }[] = [
  { value: '1st', label: 'place, AI case competition' },
  { value: '6', label: 'research & industry roles' },
  { value: '3,000+', label: 'SoDA members reached' },
  { value: 'Largest', label: 'mentorship cohort in SoDA history' },
];

// Words for the chapter-style version of the site (/v2)
export const chapters = {
  build: {
    question: 'What do you build?',
    answer:
      "Right now I'm building the data side of ARCHIE at ASU's Learning Engineering Institute. Before that, I spent a few years on research that ranged from chest X-rays to Alzheimer's genetics.",
  },
  markets: {
    question: 'Why economics?',
    answer:
      'I like figuring out why businesses and markets behave the way they do. Some of that turned into a first-place pitch, and some of it turned into a research engine.',
  },
  lead: {
    question: 'How do you lead?',
    answer:
      "I'm Co-President of ASU's Software Developers Association, where I started our mentorship program and the Women in Tech Conference at ASU. I like building the structures that help good ideas, and the people behind them, grow.",
  },
  how: { question: 'How do you approach a problem?' },
  fun: { question: 'What do you do for fun?' },
  contact: {
    question: 'Want to talk?',
    answer: "I'm always happy to talk shop, or to hear about a project you're working on.",
  },
};

// Instagram post links for the "fun" chapter (open a post, tap ... then Copy link).
// Leave empty to show a tappable preview card for the account instead.
export const instagramPosts: string[] = [];
