import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import live from "@/public/livecode.jpg"
import lms from "@/public/lms.jpg"
import SwiftScribe from "@/public/SwiftScribe.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "LMS",
    description:
      "This Learning Management System (LMS) is a full-stack web application developed using the MERN stack.",
    tags: ["React", "Express.js","Node.js ","Redux","Cloudinary","MongoDB", "Tailwind", "DaisyUI", "Razorpay"],
    link:"https://learning-management-system-roan.vercel.app/",
    imageUrl:lms
  },
  {
    title: " Live-Code-Share",
    description:
    "This is a MERN-based web app for live code sharing and chatting, ideal for coding interviews.",
    tags: ["React", "Node.js","Express.js", "Socket.IO", "Tailwind", "CodeMirror"],
    link:"https://live-code-share.vercel.app/",
    imageUrl: live
  },
  {
    title: "SwiftScribe",
    description:
    "SwiftScribe is a SaaS platform that offers efficient study material management, peer collaboration, and AI-powered academic support.",
    tags: ["Next.js", "PostgreSQL","TypeScript", "Kinde","ChatGPT API","STRIPE"],
    link:"https://swift-scribe-seven.vercel.app/",
    imageUrl: SwiftScribe
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "C/C++",
  "Python",
  "React.js",
  "Next.js",
  "Node.js",
  "Redux",
  "Express.js",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Clerk ",
  "Git/Github",
  "Razorpay",
  "Stripe",
  "DaisyUI",
  "bootstrap",
  "Socket.io",
  "Framer Motion",
  "OOP",
  "DSA",
  "GraphQL"
] as const;

export const experiencesData = [
   {
    title: "Software Engineer(Web) at Technawab",
    location: "Agra,IND (Remote)",
    description:
    "Working on end-to-end workflows by developing scalable backend services with Node.js/Express and GraphQL APIs, creating high-performance frontend components with Next.js and TypeScript, and optimizing dashboards and internal tools through third-party API integrations to enhance efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "08/25-Present",
  },
  {
    title: "Software Engineer Intern at Evergraph",
    location: "Mohali, Punjab",
    description:
    " Contributed to the development of Evergraph, a pre-launch product, by building the frontend using React and TypeScript, and also contributing to backend development including API integration and database management.",
    icon: React.createElement(FaCode),
    date: "02/25-07/25",
  },
  {
    title: "Full Stack Web Developer(Core Team) at GSSOC",
    location: "Remote",
    description:
    "Implemented key features on the GirlScript Summer of Code (GSSOC 2024) website, leading to a more engaging and user-friendly experience.",
    icon: React.createElement(FaCode),
    date: "04/24-08/24",
  },
  {
    title: "Front-End Developer Intern at Shoppeal Tech",
    location: "Remote",
    description:
    "I interned as a front-end developer, spearheading the redesign of the homepage, while concurrently upskilling to become proficient in full-stack development.",
    icon: React.createElement(FaCode),
    date: "05/23-06/23",
  },
] as const;
