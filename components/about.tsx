// About.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import React from 'react';

import { useSectionInView } from '@/lib/hooks';

import SectionHeading from './section-heading';

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.175,
      duration: 0.6,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.div
        className="mt-6 font-medium text-gray-700 dark:text-gray-300"
        variants={paragraphVariants}
      >
          <p className="mb-4">
          I’m Prince Gupta, a Full Stack Developer passionate about building scalable, user-centric web applications. Skilled in React, Next.js, TypeScript, Node.js, Express, GraphQL, D3.js, and React Flow, I currently work at <span className="font-bold">Technawab</span>, contributing to high-performance backend services with GraphQL and Express, and creating frontend components with Next.js and TypeScript.  Previously, I interned at <span className="font-bold">Evergraph</span>, developing dynamic, data-driven interfaces with React, D3.js, and React Flow, while supporting backend integrations. I also contributed to <span className="font-bold">GSSOC</span>, leading the development of a real-time GitHub-integrated leaderboard and enhancing UI/UX. With hands-on project experience and a strong academic foundation, I’m seeking full-time <span className="font-bold">SDE-1 roles</span> to innovate, collaborate, and deliver meaningful tech solutions.
        </p>
        {/* Add custom illustrations or a timeline to enhance the About section */}
      </motion.div>
    </motion.section>
  );
}