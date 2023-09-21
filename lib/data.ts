import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import project1 from "@/public/project 1.png"
import project2 from "@/public/project 21.png"
import project3 from "@/public/project 3.png"


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

export const experiencesData = [
  {
    title: "Graduated from CS - Helwan University",
    location: "Freelancer",
    description:
      "In this period i spent alot of time learning programming and i do many projects that made me much better",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Graphic Designer",
    location: "Freelancer",
    description:
      "In the period of college , I started learning Adobe programs , I begin with Photoshop and Illustrator then After becoming a professional on them , I received many Tasks and Works until now .",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - now",
  },
  {
    title: "Front-End Developer",
    location: "Freelancer",
    description:
      "After Graduating , I sent my cv to many companies to start my career on one of them and received reply from company call Vekelez ask me to do some projects as a freelancer . ",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Techno",
    description:
      "is an online newspaper focusing on high tech and startup companies, you can find everything about the project in the video.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Bcrypt", "JWT"],
    imageUrl: project1,
    link:"https://www.linkedin.com/posts/kirolos-louis-0346a21b6_techno-is-an-online-newspaper-focusing-on-activity-7086421092751278080-QU5j?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Star",
    description:
      " is a full-stack project and is a netflix-clone , you can sign in with google or GitHub and more things you can find it in the video ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: project2,
    link:"https://www.linkedin.com/posts/kirolos-louis-0346a21b6_star-is-a-full-stack-project-and-is-a-netflix-clone-activity-7091854140909264896-XvbT?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "3D Portfolio",
    description:
      "My another Portfolio build it by using 3D Models already created it in blender to know more about this project , see the video .",
    tags: ["React", "Next.js", "Three.js", "Node.js",],
    imageUrl: project3,
    link:"https://www.linkedin.com/posts/kirolos-louis-0346a21b6_in-this-video-you-can-see-my-new-3d-portfolio-activity-7097227238378471432-aNJv?utm_source=share&utm_medium=member_desktop",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MUI",
  "Framer Motion",
  "MongoDB",
  "Express",
  "Redux",
  "Prisma",
  "GraphQL",
  "Recoil",
  "Firebase",
  "Vercel",
] as const;
