"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (

    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] text-center leading-relaxed sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-6 text-lg">
        I hold a <span className="font-medium">Bachelor’s degree in Computer Science from Helwan University</span>.
        Since graduating, I’ve been passionate about creating digital products that blend
        <span className="font-medium"> functionality, usability, and visual elegance</span>.
        I strive to build experiences that not only work seamlessly but also
        <span className="italic"> feel intuitive and meaningful</span> to every user.
      </p>


      <p className="mb-6 text-lg ">
        My passion lies in transforming ideas into intuitive, visually engaging
        interfaces using{" "}
        <span className="font-medium">React, Next.js, TypeScript, and Tailwind CSS</span>.
        I combine design thinking and front-end logic to deliver user experiences
        that are both functional and aesthetically refined. With a background in
        graphic design, I pay attention to every detail — from typography and
        spacing to motion and interactivity.
      </p>

      <p className="mb-6 text-lg ">
        I thrive in creative environments where design and technology meet. Whether
        I’m wireframing in <span className="font-medium">Figma</span>, refining
        motion with <span className="font-medium">Framer Motion</span>, or polishing
        the final UI, my goal is always the same:{" "}
        <span className="italic">to create experiences that users remember</span>.
        I’m constantly exploring new tools and techniques to keep improving my
        craft, both as a developer and designer.
      </p>

      <p className="text-lg ">
        <span className="italic">When I’m not designing or coding</span>, you’ll
        probably find me sketching concepts, exploring creative visuals. I believe creativity extends beyond the screen — and that’s what
        keeps me inspired every day.
      </p>
    </motion.section>

  );
}
