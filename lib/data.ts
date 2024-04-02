import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import live from "@/public/livecode.jpg"
import lms from "@/public/lms.jpg"
import portfolio from "@/public/portfolio.jpg"

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
    title: "   Live-Code-Share",
    description:
    "This is a MERN-based web app for live code sharing and chatting, ideal for coding interviews.",
    tags: ["React", "Node.js","Express.js", "Socket.IO", "Tailwind", "CodeMirror"],
    link:"https://live-code-share.vercel.app/",
    imageUrl: live
  },
  {
    title: "Portfolio",
    description:
    "This is a TypeScript-based app showcasing my projects and skills.",
    tags: ["c.js", "Framer", "Motion", "TypeScript", "Tailwind " , "Email"],
    link:"",
    imageUrl: portfolio
  }
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
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Git/Github",
  "Redux",
  "Express.js",
  "DaisyUI",
  "bootstrap",
  "Socket.io",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "AICTE Virtual Cyber Security Internship",
    location: "Remote",
    description:
    "I worked as a cybersecurity intern, implementing a Packet Tracer project, and upskilled in the cybersecurity domain.",
    icon: React.createElement(LuGraduationCap),
    date: "05/23-08/23",
  },
  {
    title: "Front-End Developer Intern",
    location: "Remote",
    description:
    "I interned as a front-end developer, spearheading the redesign of the homepage, while concurrently upskilling to become proficient in full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "05/23-06/23",
  },
] as const;
