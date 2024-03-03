"use client";

import { motion } from "framer-motion";
import React from "react";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");
 
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
            I'm Prince Gupta, a dynamic{" "}
            <span className="font-medium">Computer Science undergraduate</span> at SRIST
            Jabalpur, deeply passionate about{" "}
            <span className="italic">software engineering and programming</span>. With a
            solid foundation in JavaScript, I extend my expertise to TypeScript,{" "}
            <span className="font-medium">specialize in MERN stack development, and
            innovate with Next.js</span>. Crafting robust, scalable web applications is
            my forte, drawing from extensive experience in delivering exceptional user
            experiences. Proficient in data structures and algorithms, I thrive in Full
            Stack development, harnessing{" "}
            <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. My
            hands-on experience with{" "}
            <span className="font-medium">TypeScript and Next.js</span> empowers me to
            engineer modern, efficient solutions tailored to evolving user and business
            needs. I am currently looking for a{" "}
            <span className="font-medium">full-time position & Intern</span> as a software
            developer. Let's connect and collaborate to elevate your team's success
            together.
        </p>

    </motion.section>
  );
}