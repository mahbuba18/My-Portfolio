import React, { useState } from "react";
import lottiDataTeam from "../../assets/Lotti/Live chatbot.json";
import Lottie from "lottie-react";
import { TbLockSquareRounded } from "react-icons/tb";
import { AiFillPicture } from "react-icons/ai";
import { SiVorondesign } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io";

const technicalSkills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Git", level: 95 },
];

const education = [
  {
    degree: "BSc in Computer Science and Engineering(CSE)",
    institution: "Jashore University of Science and Technology(JUST)",
    year: "2020 - 2024",
    cgpa: "3.29 out of 4.00",
    location: "Jashore, Bangladesh",
  },
  {
    degree: "Complete Web Development Course With Jhankar Mahbub",
    institution: "Progamming Hero",
    year: "01-07-2023 to 20-01-2024",
    location: "Online",
  },
];
const experience = [
  {
    title: "Trainee Python Developer",
    company: "EON Systems",
    year: "May 2025 - July 2025",
    location: "Mohammadpur, Dhaka-1207",
    summary: "Built web apps using Web2Py,MySQL and Python",
  },
  {
    title: "Junior Software Engineer Intern",
    company: "AmarEvent.com",
    year: "05-01-2025 to 05-03-2025",
    location: "Remote",
    summary: "Worked on responsive interfaces using React and Tailwind CSS. Learned core element of software applications.",
  },
];

const Skills = () => {
  const [open, setOpen] = useState(null);

  const toggleSection = (name) => {
    setOpen(open === name ? null : name);
  };
  return (
    <div
      id="about"
      className=" pb-20 pt-20 bg-base-200 min-h-screen shadow-lg lg:px-30 md:px-15 sm:px-10"
    >
      <div className="pb-4">
        <h1 className="flex items-center justify-center text-center text-5xl font-bold bg-gradient-to-r from-sky-500 to-green-400 text-transparent bg-clip-text mb-2 lg:gap-2 ">
          <GiSkills className="text-5xl text-white" />
          Skills and Experience
        </h1>
      </div>

      <div>
        <div className="lg:flex text-[#556877]  gap-8">
          <div className="lg:w-1/2 flex justify-center items-center">
            <Lottie
              className="w-full max-w-[600px] h-[400px]"
              animationData={lottiDataTeam}
            />
          </div>
         <div className="w-full lg:w-[700px] mx-auto lg:pt-20 ">

            {/* Technical Skills */}
            <div className="border rounded mb-4">
              
              <button
                onClick={() => toggleSection("skills")}
                className="w-full flex gap-2 justify-between text-left p-4 font-semibold bg-gray-100 text-xl"
              >
                Technical Skills<IoIosArrowDown />
              </button>
              {open === "skills" && (
                <div className="p-4 space-y-3">
                  {technicalSkills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded">
                        <div
                          className="h-2 bg-blue-500 rounded"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Education */}
            <div className="border rounded mb-4">
              <button
                onClick={() => toggleSection("education")}
                className="w-full flex gap-2 justify-between text-left p-4 font-semibold bg-gray-100 text-xl"
              >
                Education<IoIosArrowDown />
              </button>
              {open === "education" && (
                <div className="p-4 space-y-3 text-sm">
                  {education.map((edu, i) => (
                    <div key={i}>
                      <p className="font-semibold">{edu.degree}</p>
                      <p>{edu.institution}</p>
                      <p>CGPA:{edu.cgpa}</p>
                      <p className="text-gray-500">
                        {edu.year} | {edu.location}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Experience */}
            <div className="border rounded mb-4">
              <button
                onClick={() => toggleSection("experience")}
                className="w-full flex gap-2 justify-between text-left p-4 font-semibold bg-gray-100 text-xl"
              >
                Work Experience<IoIosArrowDown />
              </button>
              {open === "experience" && (
                <div className="p-4 space-y-3 text-sm">
                  {experience.map((job, i) => (
                    <div key={i}>
                      <p className="font-semibold">{job.title}</p>
                      <p>{job.company}</p>
                      <p className="text-gray-500">
                        {job.year} | {job.location}
                      </p>
                      <p>{job.summary}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
