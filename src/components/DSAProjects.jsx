import React from "react";
import ProjectCard from "./ProjectCard";

const DSAProjects = () => {
  const dsaProjectList = [
    {
      id: 1,
      title: "LeetCode Solutions",
      description: "Collection of solved problems with explanations.",
      imgSrc: "https://example.com/leetcode-image.png",
      githubLink: "https://github.com/yourusername/LeetCode-Solutions",
      technologies: ["JavaScript", "Python", "C++"],
    },
    {
      id: 2,
      title: "HackerRank Challenges",
      description: "Solutions to various HackerRank challenges.",
      imgSrc: "https://example.com/hackerrank-image.png",
      githubLink: "https://github.com/yourusername/HackerRank-Challenges",
      technologies: ["Java", "Python"],
    },
    {
      id: 3,
      title: "DSA Practice",
      description: "Comprehensive DSA practice repository.",
      imgSrc: "https://example.com/dsa-practice-image.png",
      githubLink: "https://github.com/yourusername/DSA-Practice",
      technologies: ["C++", "JavaScript", "Algorithms"],
    },
    
  ];

  return (
    <div id="dsa-projects" className="flex flex-col gap-8">
      <div id="dsa-projects-title" className="flex items-center gap-2 justify-center">
        <i className="fa-solid fa-code"></i>
        <h1 className="text-2xl dark:text-gray-300">DSA PROJECTS</h1>
      </div>
      <div id="dsa-projects-list" className="flex gap-12 justify-center items-center flex-wrap pb-20">
        {dsaProjectList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default DSAProjects;
