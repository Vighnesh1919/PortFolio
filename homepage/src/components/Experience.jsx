import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    "title": "Elected as the MESS-Secretary",
    "company_name": "IIIT Sri City",
    "date": "Current",
    "points": [
      "Oversaw dining quality and hygiene, ensuring high standards are met.",
      "Collected and acted on student feedback to improve the dining experience.",
      "Implemented initiatives to enhance menu diversity and catering to student preferences."
    ],
    "icon": "https://upload.wikimedia.org/wikipedia/en/4/49/IIIT_Sri_City_Logo.png",
    "iconBg": "#000000"
  },

  

  {
    "title": "Founding Core Member of the Spiritual Club, NIRVANA",
    "company_name": "IIIT Sri City",
    "date": "Aug 2023 - Sep 2024",
    "points": [
      "Organized events and activities promoting spiritual well-being.",
      "Engaged the community in mindfulness and wellness initiatives.",
      "Led efforts to create a supportive environment for students' holistic development."
    ],
    "icon": "https://avatars.githubusercontent.com/u/137999626?s=280&v=4",
    "iconBg": "#000000"
  }

 
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
