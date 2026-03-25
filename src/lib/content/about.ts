import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve worked with:',
    items: [
      'NextJs',
      'ReactJs',
      'TailwindCSS',
      'ExpressJs',
      'TypeScript',
      'NodeJs',
      'Prisma',
      'CSS Animations',
      'MongoDB',
      'MySQL',
    ],
  },
  img: '/rohit_profile.jpeg',
};
