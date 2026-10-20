import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import live from "@/public/livecode.jpg"
import lms from "@/public/lms.jpg"
import SwiftScribe from "@/public/SwiftScribe.jpg"
import nakshx from "@/public/nakshx.png"
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
    title: "NakshX",
    description:
      "Plan your day with precision, powered by astrology and AI.",
  tags: ["React-Native", "Fast-API ", "React-Query", "Expo", "TypeScript","Express.js","AWS", "Next.js","Redux","Cloudinary","MongoDB"],
    link:"https://www.nakshx.com/",
    imageUrl:nakshx
  },
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
    title: "Full Stack Developer at StatsUSA",
    location: "India (Remote)",
    description:
      "Developing a U.S. data intelligence and analytics platform with interactive charts, maps, and filters for demographic, economic, crime, and geographic datasets. Building AI-powered conversational features with LLM integration and backend APIs for natural-language data exploration.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2026 - Present",
  },
  {
    title: "Software Engineer at Technawab",
    location: "Agra, India (Remote)",
    description:
      "Engineered a client-facing device configuration platform using GraphQL, gRPC, and microservices. Developed full-stack modules for AskYourFinance using Next.js, Node.js, FastAPI, PostgreSQL, and MongoDB, and implemented AI-driven financial workflows with Vertex AI and MCP tools.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2025 - Oct 2026",
  },
  {
    title: "Software Engineer Intern at Evergraph",
    location: "Mohali, Punjab",
    description:
      "Developed interactive graph-based interfaces using React Flow and reusable components, improving visualization performance by 25%. Integrated REST APIs with TanStack Query for efficient caching and server-state management across 20+ frontend components.",
    icon: React.createElement(FaCode),
    date: "Feb 2025 - Jul 2025",
  },
  {
    title: "Full Stack Web Developer (Core Team) at GSSOC",
    location: "Remote",
    description:
      "Contributed to the GirlScript Summer of Code (GSSOC 2024) website as a core team member, implementing frontend features and improving the overall user experience.",
    icon: React.createElement(FaCode),
    date: "Apr 2024 - Aug 2024",
  },
  {
    title: "Front-End Developer Intern at Shoppeal Tech",
    location: "Remote",
    description:
      "Redesigned the homepage and developed responsive frontend components, focusing on UI quality, usability, and improving the overall user experience.",
    icon: React.createElement(FaCode),
    date: "May 2023 - Jun 2023",
  },
] as const;
