import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'web development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building end-to-end web applications using Next.js with TypeScript, TailwindCSS and Prisma ORM.',
        'Creating RESTful APIs using Express for backend development.',
        'Deploying applications on Vercel, Render, Railway and Dockerized environments.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      title: 'Problem Solving',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        '300+ problems solved on LeetCode',
        'Highest Contest Rating: 1660',
        'Preferred language: C++'
      ],
      softwareSkills: [
        {
          name: 'leetcode',
          icon: 'devicon:leetcode',
          url: 'https://leetcode.com/u/Rohit_x/',
        },
        
        {
          name: 'contest rating 1660',
          image:
            'https://img.shields.io/badge/Contest%20Rating-1660-1f8acb?logo=leetcode&logoColor=white',
          url: 'https://leetcode.com/u/Rohit_x/',
        },
        {
          name: '50 day badge',
          image:
            'https://img.shields.io/badge/LeetCode-50%20Days-f59e0b?logo=leetcode&logoColor=white',
          url: 'https://leetcode.com/u/Rohit_x/',
        },
        {
          name: '100 day badge',
          image:
            'https://img.shields.io/badge/LeetCode-100%20Days-f97316?logo=leetcode&logoColor=white',
          url: 'https://leetcode.com/u/Rohit_x/',
        },
        {
          name: '200 day badge',
          image:
            'https://img.shields.io/badge/LeetCode-200%20Days-ef4444?logo=leetcode&logoColor=white',
          url: 'https://leetcode.com/u/Rohit_x/',
        },
        
      ],
    },
  ],
};
