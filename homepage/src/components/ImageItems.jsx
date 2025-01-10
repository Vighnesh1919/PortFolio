import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import ava from '../assets/logo/java.png';
import react from '../assets/logo/react.png';
import js from '../assets/logo/javascript.png';
import nodejs from '../assets/logo/nodejs.png';
import html from '../assets/logo/html.png';
import next from '../assets/logo/Nextjs.png';
import typescript from '../assets/logo/typescript.png';
import tailwind from '../assets/logo/tailwind-css.png';
import mongo from '../assets/logo/mongo-db.png';
import mysql from '../assets/logo/mysql.png';
import go from '../assets/logo/golang.png';
import git from '../assets/logo/git.png';
import express from '../assets/logo/express.png';
import redux from '../assets/logo/redux.png';
import postman from '../assets/logo/postman.png';
import cpp from '../assets/logo/cpp.png';

const ImageItems = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const items = [
    { src: nodejs, alt: "Node.js", name: "Node.js", delay: 100 },
    { src: express, alt: "Express Js", name: "Express Js", delay: 200 },
    { src: react, alt: "React JS", name: "React JS", delay: 300 },
    { src: next, alt: "Next JS", name: "Next JS", delay: 400 },
    { src: ava, alt: "Java", name: "Java", delay: 500 },
    { src: js, alt: "JavaScript", name: "JavaScript", delay: 600 },
    { src: typescript, alt: "TypeScript", name: "TypeScript", delay: 700 },
    { src: cpp, alt: "C++", name: "C++", delay: 800 },
    { src: mysql, alt: "MySql", name: "MySql", delay: 900 },
    { src: tailwind, alt: "Tailwind CSS", name: "Tailwind CSS", delay: 1000 },
    { src: mongo, alt: "MongoDB", name: "MongoDB", delay: 1100 },
    { src: go, alt: "GoLang", name: "GoLang", delay: 1200 },
    { src: html, alt: "HTML", name: "HTML", delay: 1300 },
    { src: git, alt: "Git", name: "Git", delay: 1400 },
    { src: redux, alt: "Redux ToolKit", name: "Redux ToolKit", delay: 1500 },
    { src: postman, alt: "PostMan", name: "PostMan", delay: 1600 },
  ];

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center w-full mx-auto mt-10"
      data-aos="fade-left"
      data-aos-duration="1200"
    >
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center group">
          <img
            src={item.src}
            alt={item.alt}
            className="w-20 h-20 object-cover bg-transparent transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-3"
            data-aos="zoom-in"
            data-aos-delay={item.delay}
          />
          <p className="mt-2 text-lg font-bold text-gray-200 transition-all duration-300 group-hover:text-blue-400">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageItems;