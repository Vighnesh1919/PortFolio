import React from "react";

const ProjectCard = ({ title, description, imgSrc, liveDemo, githubLink, technologies }) => {
  return (
    <div className="border hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-300 dark:border-gray-600 dark:hover:shadow-blue-800 group/card transition duration-300 border-gray-400 shadow-lg h-[30rem] w-96 sm:w-[28rem] rounded-xl flex flex-col justify-around p-3">
      <img
        src={imgSrc}
        alt={`${title} preview`}
        className="rounded-xl h-64 object-cover border"
      />
      <div
        className="flex justify-between py-2 px-4 items-center rounded-lg dark:group-hover/card:bg-gradient-to-br group-hover/card:bg-gradient-to-l dark:group-hover/card:from-blue-900 dark:group-hover/card:via-slate-900 dark:group-hover/card:to-blue-950 group-hover/card:from-purple-50 group-hover/card:via-orange-50 group-hover/card:to-blue-50 transition duration-300"
      >
        <div>
          <p className="text-2xl">{title}</p>
          <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <div className="flex gap-4 items-center">
          {liveDemo && (
            <div className="relative inline-block group">
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <i className="fa-solid fa-link bg-white p-1 rounded-full border dark:bg-slate-700 dark:text-gray-300 border-gray-600"></i>
                <span className="absolute bottom-full animate-hover left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap">
                  Live Demo
                </span>
              </a>
            </div>
          )}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 px-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-neutral-100 rounded-full border transition group-hover/card:border dark:text-gray-300 dark:bg-slate-800 dark:border-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
