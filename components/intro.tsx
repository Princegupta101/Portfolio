"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from "next/link";
import React from 'react'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from '@/lib/hooks';
import princeImg from '@/public/princeImg.jpg'

export default function Intro() {
    const { ref } = useSectionInView("Home",0.5);
    const { activeSection, setActiveSection,setTimeOfLastClick}=useActiveSectionContext();
  return (
    <section
    ref={ref}
    id="home"
    className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
        <div className='flex items-center justify-center'>
            <div className=' relative'>
                <motion.div
                 initial={{opacity:0, scale:0}}
                 animate={{opacity:1, scale:1}}
                 transition={{
                    type:"tween",
                    duration:0.2,
                 }}
                 >
                    <Image
                    src={princeImg}
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className='h-30 w-30  object-cover rounded-full border-[0.35rem] border-white shadow-xl'
                    alt='Prince Image'/>
                </motion.div>
                <motion.span 
                className=' absolute bottom-0 right-0 text-6xl' 
                initial={{opacity:0, scale:0}}
                animate={{opacity:1, scale:1}}
                transition={{
                   type:"spring",
                   stiffness:125,
                   delay:0.1,
                   duration:0.7
                }}
                >
                    👋
                </motion.span>
            </div>
        </div>

        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
           <span className="font-bold">Hello, I'm Prince Gupta.</span> I'm a{" "}
        <span className="font-bold">full-stack web developer</span>  I enjoy building <span className="italic">sites & apps.</span> 
        </motion.h1>

        <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            >
            <Link
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:ring-2 focus:ring-white focus:ring-offset-gray-900 focus:ring-offset-2 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={()=>{
                    setActiveSection("Contact")
                    setTimeOfLastClick(Date.now())
                }}
            >
                Contact me{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:ring-2 focus:ring-white focus:ring-offset-gray-900 focus:ring-offset-2 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
                    href="https://drive.google.com/file/d/1fUZ68H4VUtcpqDIHO7aKjLN-b4GgAz0S/view?usp=sharing"
                    target="_blank"
                >
                    View CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <div className='flex flex-row  items-center justify-center gap-4  text-lg font-medium'>
        
                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:ring-2 focus:ring-white focus:ring-offset-gray-900 focus:ring-offset-2 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
                    href="https://www.linkedin.com/in/princegupta101"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:ring-2 focus:ring-white focus:ring-offset-gray-900 focus:ring-offset-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/Princegupta101"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>

                <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:ring-2 focus:ring-white focus:ring-offset-gray-900 focus:ring-offset-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
                href="https://leetcode.com/u/princegupta101/"
                target="_blank"
            >
                <SiLeetcode />
                </a>
            </div>
            
        </motion.div>
    </section>
  )
}
