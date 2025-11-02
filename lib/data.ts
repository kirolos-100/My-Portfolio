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
    title: "React Developer",
    location: "FarmTopia · Remote, Giza",
    description:
      "Building and optimizing modern dashboards and interfaces using Next.js, Tailwind, and Shadcn UI. Designing user-centered experiences focused on agriculture technology and AI integration, collaborating closely with backend developers to deliver scalable systems and GSAP-based interactive animations.",
    icon: React.createElement(FaReact),
    date: "Dec 2023 – Present",
  },
  {
    title: "React Developer",
    location: "MKMO · Remote, Giza",
    description:
      "Developed an advanced animated landing experience using GSAP for the project '1982'. Focused on delivering smooth performance, optimized interactivity, and consistent UI design across pages.",
    icon: React.createElement(FaReact),
    date: "Sep 2023 – Dec 2023",
  },
  {
    title: "React Developer Intern",
    location: "Vekelez · Remote, Giza",
    description:
      "Contributed to the development and maintenance of React-based web applications in an agile environment. Supported the full lifecycle from UI design to testing and deployment, gaining solid experience in building responsive interfaces and collaborative workflows.",
    icon: React.createElement(FaReact),
    date: "Dec 2022 – Feb 2023",
  },
  {
    title: "Graphic Designer",
    location: "Freelancer",
    description:
      "Started as a self-taught designer during university, mastering Adobe Photoshop and Illustrator. Designed branding materials, marketing visuals, and UI assets for freelance clients, developing a sharp eye for layout, color, and visual storytelling.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 – Present",
  },
  {
    title: "Bachelor’s in Computer Science & AI",
    location: "Helwan University, Egypt",
    description:
      "Graduated with a degree in Computer Science & Artificial Intelligence, where I built a strong foundation in programming, algorithms, and problem-solving. This period fueled my interest in front-end development and design-thinking approaches.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 – 2022",
  },
] as const;


export const projectsData = [
  {
    title: "Techno",
    description:
      "is an online newspaper focusing on high tech and startup companies, you can find everything about the project in the video.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Bcrypt", "JWT"],
    imageUrl: project1,
    link: "https://www.linkedin.com/posts/kirolos-louis-0346a21b6_techno-is-an-online-newspaper-focusing-on-activity-7086421092751278080-QU5j?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Star",
    description:
      " is a full-stack project and is a netflix-clone , you can sign in with google or GitHub and more things you can find it in the video ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: project2,
    link: "https://www.linkedin.com/posts/kirolos-louis-0346a21b6_star-is-a-full-stack-project-and-is-a-netflix-clone-activity-7091854140909264896-XvbT?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "3D Portfolio",
    description:
      "My another Portfolio build it by using 3D Models already created it in blender to know more about this project , see the video .",
    tags: ["React", "Next.js", "Three.js", "Node.js",],
    imageUrl: project3,
    link: "https://www.linkedin.com/posts/kirolos-louis-0346a21b6_in-this-video-you-can-see-my-new-3d-portfolio-activity-7097227238378471432-aNJv?utm_source=share&utm_medium=member_desktop",
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
