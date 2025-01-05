import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "WorkSphere",
      description: "Freelancing/Job Board Platform",
      imgSrc: "https://github.com/harsh-m-patil/WorkSphere/raw/main/assets/worksphere.png",
      liveDemo: "https://worksphere35.vercel.app",
      githubLink: "https://github.com/harsh-m-patil/WorkSphere",
      technologies: ["React", "TailwindCSS", "Express", "MongoDB"],
    },
    {
      id: 2,
      title: "EZStay",
      description: "Online Hotel Booking Platform",
      imgSrc: "https://github.com/harsh-m-patil/EZStay/raw/stable/views/images/screenshots/biz.png",
      githubLink: "https://github.com/harsh-m-patil/EZStay",
      technologies: ["EJS", "CSS", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Threads",
      description: "Twitter Clone made with NextJS",
      imgSrc: "https://github.com/harsh-m-patil/Threads/blob/main/assets/threads.png?raw=true",
      githubLink: "https://github.com/harsh-m-patil/Threads",
      technologies: ["NextJS", "React", "Express", "OAuth", "PostgreSQL", "GraphQL"],
    },
    
  ];

  return (
    <div id="projects" className="flex flex-col gap-8">
      <div id="projects-title" className="flex items-center gap-2 justify-center">
        <i className="fa-solid fa-terminal"></i>
        <h1 className="text-2xl dark:text-gray-300">WEB DEVELOPMENT</h1>
      </div>
      <div id="projects-list" className="flex gap-12 justify-center items-center flex-wrap pb-20">
        {projectList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
