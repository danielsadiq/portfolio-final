import { useState } from "react";
import { motion as Motion} from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript, SiFramer } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "TypeScript", icon: <SiTypescript size={50} /> },
    { id: 3, name: "React", icon: <FaReact size={50} /> },
    { id: 4, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 5, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 6, name: "Postgresql", icon: <BiLogoPostgresql size={50} /> },
    { id: 7, name: "Supabase", icon: <RiSupabaseFill size={50} /> },
    { id: 8, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    { id: 9, name: "Framer", icon: <SiFramer size={50} /> },
    { id: 10, name: "Python", icon: <FaPython size={50} /> },
    
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "WalterSam Services",
      role: "Frontend Engineer",
      period: "Apr - Nov 2025",
      description:
        "Built the admin-facing dashboard of a student learning platform using React, TypeScript, and TailwindCSS helping the startup secure 50 million naira funding. Implemented course management features and integrated secure authentication/authorization flows. Optimized the dashboard for performance, usability, and accessibility in an agile team environment. Worked on API development, testing and integration using NodeJS, Postman and Axios.",
      logo: "/assets/wslogo.png",
    },
    {
      id: 2,
      company: "IDC Unilag",
      role: "Technical Team member",
      period: "Jan 2026 - Present",
      description:
        "As a member of the technical team at the Interswitch developer Community Unilag, We are tasked with building necessary software for the team's use and as well as providing technical support for community members. I operate as frontend engineer, building neccessary tools with the react ecosystem while deploying APIs with tools like Axios and React Router.",
      logo: "/assets/idcUpdate.png",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <Motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </Motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <Motion.div
              key={skill.id}
              className="bg-white dark:bg-black border-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all cursor-pointer border-black dark:border-white rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </Motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black dark:bg-white w-full my-8 py-8 lg:my-16 lg:py-16">
        <Motion.h2
          className="text-2xl lg:text-4xl text-center text-white dark:text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </Motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            // className="bg-black dark:bg-white p-5 border border-[#D4D4D8] dark:border-[#27272A] rounded-md hover:bg-[#27272A] dark:hover:bg-[#F4F4F5] transition-all cursor-pointer"
            <Motion.div
              key={exp.id}
              className="bg-black dark:bg-white p-5 border border-[#D4D4D8] dark:border-[#27272A] rounded-md hover:bg-[#27272A] dark:hover:bg-[#F4F4F5] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-12" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white dark:text-black text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] dark:text-[#27272A] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] dark:text-[#27272A] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </Motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
