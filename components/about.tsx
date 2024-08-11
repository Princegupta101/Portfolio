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
          I'm Prince Gupta, a dynamic <span className="font-bold">Computer Science undergraduate pursuing my B.Tech</span> at SRIST Jabalpur, deeply passionate about <span className="italic">software engineering and programming</span>. With a solid foundation in JavaScript, I extend my expertise to TypeScript, <span className="font-bold">specialize in MERN stack development, and innovate with Next.js</span>. Crafting robust, scalable web applications is my forte, drawing from extensive experience in delivering exceptional user experiences. Proficient in data structures and algorithms, I thrive in Full Stack development, harnessing <span className="font-bold">React, Next.js, Node.js, and MongoDB</span>. My hands-on experience with <span className="font-bold">TypeScript and Next.js</span> empowers me to engineer modern, efficient solutions tailored to evolving user and business needs. I am currently looking for a <span className="font-bold">full-time position & Intern</span> as a software developer. Let's connect and collaborate to elevate your team's success together.
        </p>
        {/* Add custom illustrations or a timeline to enhance the About section */}
      </motion.div>
    </motion.section>
  );
}