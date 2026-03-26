import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'Certificates',
  projects: [
    {
      id: getId(),
      name: 'MERN full Stack',
      url: 'https://drive.google.com/file/d/1K6HqkN9zpNdVFR8kVLnZkmDe7r_SFKBt/view?usp=sharing',
      img: '/fullstack.png',
      year: 2025,
      tags: ['Apna College'],
    },
    {
      id: getId(),
      name: 'DSA with C++',
      url: 'https://drive.google.com/file/d/1quWrTUa9JTtvNB9Zi6fwFCNzE5BhmVu8/view?usp=sharing',
      img: '/DSA.png',
      year: 2025,
      tags: ['Physics Wallah'],
    },
    {
      id: getId(),
      name: 'Cloud Computing',
      url: 'https://drive.google.com/file/d/1J6NnWOg6iHi1hPhxkGn5wj-AAwbtKURD/view?usp=sharing',
      img: '/nptel.png',
      year: 2025,
      tags: ['NPTEL'],
    },
    {
      id: getId(),
      name: 'C Programming language',
      url: 'https://drive.google.com/file/d/1RVWPdZ2QGHOMwFvROEJTikuUMRTycxxo/view?usp=sharing',
      img: '/C.png',
      year: 2025,
      tags: ['CSE Pathshala'],
    },
    {
      id: getId(),
      name: 'Computational Theory',
      url: 'https://drive.google.com/file/d/1LoXkvhdDoJXvpYZCjgFZFtJvIzvc6Gne/view?usp=sharing',
      img: '/infosis.png',
      year: 2025,
      tags: ['Infosis'],
    },
    {
      id: getId(),
      name: 'Computing Fundamentals',
      url: 'https://drive.google.com/file/d/1iL72g23MHe2traLQsDZhzL_dxfKSeysN/view?usp=sharing',
      img: '/computing.png',
      year: 2025,
      tags: ['University of Colorado'],
    },
  ],
};
