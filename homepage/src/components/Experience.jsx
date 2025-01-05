import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    title: "Software Engineer",
    company_name: "TechCorp Inc.",
    date: "June 2021 - Present",
    points: [
      "Developed and maintained web applications using React and Node.js.",
      "Improved application performance by 30% by optimizing code.",
      "Led a team of 5 developers in delivering project milestones.",
    ],
    icon: "https://via.placeholder.com/100",
    iconBg: "#FF5733",
  },
  {
    title: "Frontend Developer",
    company_name: "Web Solutions",
    date: "Jan 2019 - May 2021",
    points: [
      "Designed and implemented user interfaces with HTML, CSS, and JavaScript.",
      "Collaborated with cross-functional teams to define project requirements.",
      "Reduced page load time by 20% through efficient coding practices.",
    ],
    icon: "https://via.placeholder.com/100",
    iconBg: "#33FFBD",
  },

  {
    title: "Frontend Developer",
    company_name: "Web Solutions",
    date: "Jan 2019 - May 2021",
    points: [
      "Designed and implemented user interfaces with HTML, CSS, and JavaScript.",
      "Collaborated with cross-functional teams to define project requirements.",
      "Reduced page load time by 20% through efficient coding practices.",
    ],
    icon: "https://via.placeholder.com/100",
    iconBg: "#33FFBD",
  },
  // Add more experiences as needed
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <div className="bg-[#0E0526] py-16 px-6 sm:py-24 sm:px-8 lg:py-32 lg:px-10">
    <motion.div>
      <p className="text-center text-gray-400">What I have done so far</p>
      <h2 className="text-center text-white text-3xl font-bold">
        Work Experience
      </h2>
    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
  </div>
);

export default Experience;
