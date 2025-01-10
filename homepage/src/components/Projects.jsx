import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import ProjectCard from "./ProjectCard";
import chess from "../assets/project/chess.png";


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
      description: "Car Parking and Servicing Website ",
      imgSrc: "https://private-user-images.githubusercontent.com/119025949/341953636-7a74096a-74ef-4419-8646-aedb3c89590a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzY1MDA1MDYsIm5iZiI6MTczNjUwMDIwNiwicGF0aCI6Ii8xMTkwMjU5NDkvMzQxOTUzNjM2LTdhNzQwOTZhLTc0ZWYtNDQxOS04NjQ2LWFlZGIzYzg5NTkwYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExMFQwOTEwMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01OGRmZmNhN2VlYWY2ODRmYTJiZjAwZmYxM2FmYjcwZWRkZTUwYzY4MjRkNmM3YmVlY2VmMjFjNWI0Y2U3N2E0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.UnCerjFNcqwujR9gFy58CGT9WqUCLs4pDGyJsIfp-os",
      githubLink: "https://github.com/harsh-m-patil/EZStay",
      technologies: ["EJS", "CSS", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Online Chess",
      description: "Live Chess website",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQBE2LCKoeza-P5yCYrY0ZU8U9iC1D1-U1w&s",
      githubLink: "https://github.com/harsh-m-patil/Threads",
      technologies: ["NextJS", "React", "Express", "OAuth", "PostgreSQL", "GraphQL"],
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
