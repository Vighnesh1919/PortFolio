import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import ProjectCard from "./ProjectCard";
import chess from "../assets/project/chess.png";
import image from "../assets/project/image.png";
import reserve from "../assets/project/reserve.png";
import ytshort from "../assets/project/yt-short.png";


const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function
      once: false, // Animation happens more than once
    });
  }, []);

  const projectList = [
    {
      id: 1,
      title: "WorkSphere",
      description: "Freelancing/Job Board Platform",
      imgSrc: "https://github.com/Vighnesh1919/WorkSphere/raw/main/assets/worksphere.png",
      liveDemo: "https://worksphere35.vercel.app",
      githubLink: "https://github.com/Vighnesh1919/WorkSphere",
      technologies: ["React", "TailwindCSS", "Express", "MongoDB"],
    },
    {
      id: 2,
      title: "Reserver",
      description: "Car Parking and Servicing Website",
      imgSrc: reserve,
      githubLink: "https://github.com/harsh-m-patil/EZStay",
      technologies: ["EJS", "CSS", "Express", "MongoDB"],
      liveDemo: "https://sahilkasare.github.io/RESERVE/"
    },

     {
  id: 3,
  title: "YTShorts Clone",
  description: "A clone of YouTube Shorts using Next.js 15, TypeScript, Prisma, PostgreSQL, NeonDB, and ImageKit.io.",
  imgSrc: ytshort,
  githubLink: "https://github.com/vighnesh1919/YTShortsClone",
  technologies: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "NeonDB", "ImageKit.io"],
  liveDemo: "https://ytshortsclone-dev.vercel.app/"
},

     {
      id: 4,
      title: "FoodConnect",
      description: "Website connecting events with NGOs to donate surplus food and serve free meals.",
      imgSrc: image,
      githubLink: "https://github.com/vighnesh1919/FoodConnect",
      technologies: ["NextJS", "React", "Express", "TypeScript"],
      liveDemo: "https://foodconnect-dev.vercel.app/"
    }
    
    
    
    // other projects...
  ];

  return (
    <div id="projects" className="flex flex-col gap-8 bg-[#0E0526] py-10">
      <div id="projects-title" className="flex items-center gap-2 justify-center">
        <i className="fa-solid fa-terminal text-white"></i>
        <h1 className="text-2xl text-white">WEB DEVELOPMENT</h1>
      </div>
      <div
        id="projects-list"
        className="flex gap-12 justify-center items-center flex-wrap pb-20"
        data-aos="fade-up"
      >
        {projectList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
