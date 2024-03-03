import lms from "@/public/lms.jpg"

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
    link:"https://lms-client-50l0.onrender.com/",
    imageUrl:lms
  },
  {
    title: "   Live-Code-Share",
    description:
    "This is a MERN-based web app for live code sharing and chatting, ideal for coding interviews.",
    tags: ["React", "Node.js","Express.js", "Socket.IO", "Tailwind", "Redux", "CodeMirror","MongoDB"],
    link:"https://lms-client-50l0.onrender.com/",
    imageUrl: lms
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
