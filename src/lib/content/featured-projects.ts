import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: 'featured projects',
  projects: [
    {
      id: getId(),
      name: 'Quick Connect',
      description: 'Video Conferencing & Real-Time Communication Platform',
      tasks:
        'Quick Connect is a MERN-based application for seamless real-time communication. It enables users to join video calls, share screens, and interact through an integrated live chat system. Built with a responsive UI and efficient backend APIs, the platform ensures smooth, low-latency communication for multiple users.',
      url: 'https://quickconnectfrontend.onrender.com/',
      img: '/quickconnect.png',
      tags: ['Reactjs', 'JavaScript', 'CSS', 'SocketIO', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'TradeVista',
      description: 'Stock Trading Plateform',
      tasks:
        'Trade Vista is a full-stack web application that simulates stock trading and portfolio management. It allows users to buy and sell stocks, track market data, and manage their investments through a clean and interactive interface. Built with efficient backend APIs and a focus on performance, it provides a practical experience of real-world trading workflows.',
      url: 'https://stock-trading-plateform-frontend.onrender.com/',
      img: '/zerodha.png',
      tags: ['ReactJs', 'JavaScript', 'Express', 'BootStrap', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'Bitlinks',
      description: 'A URL shortening service.',
      tasks:
        'Shorten your URLs and share them easily. Track clicks and manage your links with a simple interface.',
      url: 'https://bitlinks.nileshrana.me/',
      img: '/bitlinks.png',
      tags: ['NextJs', 'TailwindCSS', 'MongoDB'],
    },
  ],
};

export default featuredProjectsSection;
