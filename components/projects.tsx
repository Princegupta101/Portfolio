"use client";
import { motion } from "framer-motion";
import React from 'react';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div >
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
             <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
