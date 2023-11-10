import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gmailCloneImage from "@/public/gmailCloneImage.png";
import OsmosisImage from "@/public/OsmosisImage.png";
import autozoneImage from "@/public/autozoneImage.png";

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
    title: "Tax Technology Intern",
    company: "Deloitte USI",
    location: "Hyderabad, India",
    description:
      "Successfully automated testing procedures for user workflow in Sanity Testing, resulting in enhanced productivity and improved accuracy in the client application. Implemented changes resulting in reduction in error rates, faster delivery times and a 40% decrease in testing time, resulting in saving up to 8 man - hours per testing cycle; directly improving business value and enhancing customer experience",
    icon: React.createElement(LuGraduationCap),
    date: "June 2023 - July 2023",
  },
  {
    title: "B.Tech",
    company: "Computer Science",
    location: "Manipal Institute Of Technology, Manipal",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "October 2020 - August 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Gmail Clone",
    description:
      "Developed Gmail clone with all the core functionalities.Implemented sending emails, starring, saving drafts and deleting emails.Integrated Material UI for an intuitive user interface and deployed on Cyclic",
    tags: ["React", "Node.js", "MongoDB", "Express", "MaterialUI"],
    imageUrl: gmailCloneImage,
    projectLink: "https://gleaming-jay-bracelet.cyclic.app/emails/",
  },
  {
    title: "AutoZone - Car Dealership Website",
    description:
      "Built a Car dealership website using Django Best Practices including Django Admin customization, Django Pagination, Django messages and User Authentication.Incorporated various features like searching and filter by name, model, price or location, generate enquiry for a particular car, and enquiring via email.",
    tags: ["Django", "PostgreSQL", "Python", "CSS"],
    imageUrl: autozoneImage,
    projectLink: "https://github.com/aarushpal/carzone-project",
  },
  {
    title: "Osmosis Healthcare Guidance System",
    description:
      "Website that allows users to book and schedule doctors' appointments and for doctors to approve them.Consists of several features such as user authentication, separate user interfaces for users, doctors, and Admin.Apply for doctor and notifications for status updates for appointments",
    tags: ["React", "Node.js", "MongoDB", "Bootstrap"],
    imageUrl: OsmosisImage,
    projectLink: "https://github.com/aarushpal/Osmosis-Healthcare-project",
  },
] as const;

export const skillsData = [
  "Data Structures And Algorithms",
  "Operating Systems",
  "Database Management Systems",
  "Computer Networks",
  "Cloud Computing",
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
  "Framer Motion",
  "Selenium",
  "C#",
  "Testing Automation",
  "Kubernetes",
  "Docker",
] as const;
