"use client";

import { motion, Variants } from "framer-motion";
import React from 'react';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import Project from './project';
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

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}