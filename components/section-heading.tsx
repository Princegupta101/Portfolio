import { motion } from 'framer-motion'
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    className="text-3xl font-semibold text-gray-900 mb-6 text-center md:text-4xl lg:text-5xl dark:text-white/70"
    >
      {children}
    </motion.h2>
  );
}
