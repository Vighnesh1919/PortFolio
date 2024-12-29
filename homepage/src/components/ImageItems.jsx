// ImageItems.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import ava from '../assets/Java.png';
import react from '../assets/react.png';
import js from '../assets/javascript.png';
import nodejs from '../assets/nodejs.png';
import html from '../assets/html.png';
import next from '../assets/Nextjs.png';
import typescript from '../assets/typescript.png';
import tailwind from '../assets/tailwind-css.png';
import mongo from '../assets/mongo-db.png';
import mysql from '../assets/mysql.png';
import go from '../assets/golang.png';
import git from '../assets/git.png';
import express from '../assets/express.png';
import redux from '../assets/redux.png';
import postman from '../assets/postman.png';
import cpp from '../assets/cpp.png';




const ImageItems = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center justify-center w-full mx-auto mt-30" data-aos="fade-left" data-aos-duration="1200" style={{ marginTop: '-130px' }}>
  
  {/* Node.js Item */}
  <div className="flex flex-col items-center group mt-40"> 
    <img
      src={nodejs}
      alt="Node.js"
      className="w-20 h-20 object-cover bg-transparent transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-3"
      data-aos="zoom-in"
      data-aos-delay="100"
    />
    <p className="mt-2 text-lg font-bold text-gray-200 transition-all duration-300 group-hover:text-blue-400">
      Node.js
    </p>
  </div>

  {/* JavaScript Item */}
  <div className="flex flex-col items-center group mt-40"> 

  <img
      src={express}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">Express Js</p>
    
  </div>

  {/* React JS Item */}
  <div className="flex flex-col items-center group mt-40"> 
    <img
      src={react}
      alt="React JS"
      className="w-20 h-20 object-cover "
      data-aos="zoom-in"
      data-aos-delay="300"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">React JS</p>
  </div>


  {/* Avatar Item */}
  <div className="flex flex-col items-center group mt-40"> 
    
    <img
      src={next}
      alt="Next JS"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">Next JS</p>
  </div>

  {/* Next JS Item */}
  <div className="flex flex-col items-center">
  <img
      src={ava}
      alt="Avatar"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">Java</p>
  </div>

  <div className="flex flex-col items-center">
  <img
      src={js}
      alt="JavaScript"
      className="w-20 h-20 object-cover bg-transparent"
      data-aos="zoom-in"
      data-aos-delay="200"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">JavaScript</p>
  </div>

  {/* TypeScript Item */}
  <div className="flex flex-col items-center">
    <img
      src={typescript}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">TypeScript</p>
  </div>
  <div className="flex flex-col items-center">
    <img
      src={cpp}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">C++</p>
  </div>

  

  <div className="flex flex-col items-center">
    <img
      src={mysql}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">MySql</p>
  </div>

  <div className="flex flex-col items-center">
    <img
      src={tailwind}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">Tailwind CSS</p>
  </div>

  <div className="flex flex-col items-center">
    <img
      src={mongo}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">MongoDB</p>
  </div>
  <div className="flex flex-col items-center">
    <img
      src={go}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">GoLang</p>
  </div>
  <div className="flex flex-col items-center">
    <img
      src={html}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">HTML</p>
  </div>

  <div className="flex flex-col items-center">
    <img
      src={git}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">Git</p>
  </div>
 

  <div className="flex flex-col items-center">
    <img
      src={redux}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">Redux ToolKit</p>
  </div>

  <div className="flex flex-col items-center">
    <img
      src={postman}
      alt="TypeScript"
      className="w-20 h-20 object-cover"
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <p className="mt-2 text-lg font-bold text-gray-200">PostMan</p>
  </div>

 

  {/* Add More Items */}
  {/* Repeat similar structure for additional items */}
  
</div>

  );
};

export default ImageItems;
