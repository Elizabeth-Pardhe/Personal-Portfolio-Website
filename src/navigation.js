import { links } from './data/profile';

export const headerData = {
  links: [
    { text: 'About', href: '/#about' },
    { text: 'Projects', href: '/#projects' },
    { text: 'Experience', href: '/#experience' },
    { text: 'Leadership', href: '/#leadership' },
    { text: 'Skills', href: '/#skills' },
    { text: 'Contact', href: '/#contact' },
  ],
  actions: [{ text: 'GitHub', href: links.github, target: '_blank', icon: 'tabler:brand-github' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    links.github && { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: links.github },
    links.linkedin && { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: links.linkedin },
    links.email && { ariaLabel: 'Email', icon: 'tabler:mail', href: `mailto:${links.email}` },
  ].filter(Boolean),
  footNote: `© ${new Date().getFullYear()} Elizabeth Pardhe · Built with Astro &amp; Tailwind CSS`,
};
