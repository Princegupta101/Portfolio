// RootLayout.tsx
import { Inter, Space_Grotesk } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ThemeContextProvider from '@/context/theme-contex';
import ThemeSwitch from '@/components/theme-switch';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata = {
  title: 'Prince Gupta | Software Engineer',
  description: 'Prince Gupta is a Software Engineer specializing in full-stack development with React, Next.js, Node.js, and cloud technologies. Explore projects, experience, and skills.',
  keywords: 'Software Engineer, Full Stack Developer, React, Next.js, Node.js, TypeScript, Portfolio',
  authors: [{ name: 'Prince Gupta' }],
  openGraph: {
    title: 'Prince Gupta | Software Engineer',
    description: 'Software Engineer specializing in full-stack development. Building scalable, production-grade web applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#fafbff] text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#0f172a] dark:text-gray-50 dark:text-opacity-90 bg-grid`}
      >
        {/* Animated background orbs */}
        <div className="bg-orb bg-orb-1" aria-hidden="true"></div>
        <div className="bg-orb bg-orb-2" aria-hidden="true"></div>
        <div className="bg-orb bg-orb-3" aria-hidden="true"></div>

        {/* Floating particles */}
        <div className="particle" style={{ top: '10%', left: '20%', animationDelay: '0s' }} aria-hidden="true"></div>
        <div className="particle" style={{ top: '30%', right: '15%', animationDelay: '-3s' }} aria-hidden="true"></div>
        <div className="particle" style={{ top: '60%', left: '10%', animationDelay: '-6s' }} aria-hidden="true"></div>
        <div className="particle" style={{ top: '80%', right: '25%', animationDelay: '-9s' }} aria-hidden="true"></div>
        <div className="particle" style={{ top: '50%', left: '50%', animationDelay: '-12s' }} aria-hidden="true"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(99, 102, 241, 0.1)',
                  borderRadius: '12px',
                  padding: '12px 20px',
                },
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}