import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center md:text-4xl lg:text-5xl">
      {children}
    </h2>
  );
}
