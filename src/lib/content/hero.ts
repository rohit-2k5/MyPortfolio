import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hey There, I am',
  title: 'Rohit Kumar.',
  tagline:
    'I build modern, user-focused web solutions that turn ideas into innovation.',
  description:
    "I'm a devoted web developer with hands-on experience in building web applications using React.js + Next.js, Node.js + Express.js with TypeScript, TailwindCSS, and Prisma ORM, with modern and interactive UI.",
  specialText:
    'Available for Freelance | Internship | Full-Time Opportunities.',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
