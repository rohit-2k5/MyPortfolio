import { seoData } from '@/lib/content/portfolio';
import ThemeProvider from '@/lib/hooks/use-theme';
import fontVariables from '@/lib/utils/fonts';

import Cursor from '@/components/ui/Cursor';

import './global.css';
import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seoData.title,
  authors: [
    {
      name: seoData.author,
      url: seoData.url,
    },
  ],
  creator: seoData.author,
  publisher: seoData.author,
  description: seoData.description,
  keywords: seoData.keywords,
  metadataBase: new URL(seoData.url),
  alternates: {
    canonical: seoData.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seoData.url,
    title: seoData.title,
    description: seoData.description,
    siteName: seoData.title,
    images: [
      {
        url: seoData.image,
        width: 1200,
        height: 630,
        alt: 'Rohit Kumar - Web Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.title,
    description: seoData.description,
    images: [seoData.image],
    creator: '@nilexrana',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    google: 'google-site-verification-code', // Add your Google verification code here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rohit Kumar',
    alternateName: 'nilexrana',
    url: 'https://nileshrana.me',
    image: 'https://nileshrana.me/nilesh.jpeg',
    email: 'rohitplaysg123@gmail.com',
    jobTitle: 'Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    description:
      'Web Developer specializing in React.js, Next.js, Node.js, TypeScript, and modern web technologies.',
    sameAs: [
      'https://github.com/nilexrana',
      'https://www.linkedin.com/in/nilexrana/',
      'https://leetcode.com/u/nileXrana/',
      'https://www.codechef.com/users/nilexrana',
      'https://codeforces.com/profile/nileXrana',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'TailwindCSS',
      'Express.js',
      'MongoDB',
      'Prisma ORM',
      'Full-Stack Development',
      'Web Development',
      'UI/UX Design',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="/scripts/no-flash.js" async />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`text-text bg-bg ${fontVariables}`}>
        <Cursor className="hidden dark:lg:block" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
