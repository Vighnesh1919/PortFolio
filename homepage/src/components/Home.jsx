import React, { useEffect } from 'react';
import AOS from 'aos';
//import MeteorShower from "./MeteorShower ";
import 'aos/dist/aos.css';
import NavBar from './NavBar';
import Button from './Button';
import react from '../assets/logo/React.gif';
import unlockImage from '../assets/unlock.png';

import broImage from '../assets/bro.png';
import 'aos/dist/aos.css'; // Don't forget to import AOS styles
import videoSrc from '../assets/video.mp4';
//import style from '../App.css';
import Projects from "./Projects";
import AboutMe from './Aboutme';

import ImageItems from './ImageItems';
import Experience from "./Experience";
import DSAProjects from './DSAProjects';




const Home = () => {
  useEffect(() => {
    // Initialize AOS only once
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Animation easing
      // // Trigger animation only once
    });
  }, []);


  

  return (
    <div className="overflow bg-[#0E0526]">

      {/* Navigation Bar */}
      <NavBar />
      {/* <MeteorShower /> */}
      <div className=" overflow-hidden flex flex-col  justify-center text-center  h-screen bg-[#0E0526] relative">
      <div className="absolute flex  items-center bg-[rgba(30,200,170,0.1)] blur-lg rounded-full w-[850px] h-[450px] gap-10 transform rotate-[-135deg] scale-110 skew-x-6 translate-x-[40%] translate-y-[-85%] top-1/2 left-[-90vh] overflow-hidden"></div>

      
        {/* Text and Buttons */}
        <div
  className="relative z-10 mt-[-60px] ml-4 p-6 sm:p-12 rounded-lg via-gray-900 to-black shadow-lg"
  
>
<div className="flex flex-wrap justify-center items-center   space-x-4" data-aos="zoom-in"
        data-aos-duration="1000">
  <h2 className="text-3xl sm:text-6xl lg:text-5xl font-bold text-white leading-tight tracking-wide">
    Hi, I am
  </h2>
  <h1 className="text-6xl sm:text-7xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 drop-shadow-md">
    Vighnesh Barage
  </h1>
</div>

  <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mt-6 mb-4  tracking-wide leading-relaxed" data-aos="zoom-in"
        data-aos-duration="1000">
    Passionate Coder & Full Stack Developer
  </p>

  
</div>
      </div>

      <div className="overflow-hidden flex flex-col lg:flex-row items-center justify-between py-5 px-10 bg-[#0E0526] relative h-screen">
      {/* Background Blur */}
      <div className="absolute flex justify-center items-center bg-[rgba(30,200,170,0.1)] blur-lg rounded-full w-[850px] h-[450px] gap-10 transform rotate-[-35deg] scale-110 skew-x-6 translate-x-[40%] translate-y-[-85%] top-1/2 left-1/2 overflow-hidden"></div>

      {/* About Me Section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <AboutMe />
      </div>

      {/* Technical Skills Section */}
      <div className="flex flex-wrap gap-10 items-center justify-center lg:justify-end w-full lg:w-2/5">
        <ImageItems />
      </div>
    </div>


<div className="bg-[#0E0526] py-20 px-10">
  <div className="text-center mb-10">
    <h1 className="text-3xl font-bold text-white">Projects</h1>
  </div>
  
  {/* Web Development Projects Section */}
  <div className="mb-20">
    <div className="text-center mb-10">
      <h2 className="text-2xl font-semibold text-gray-300">Web Development</h2>
    </div>
    <div className="flex justify-center gap-8">
      <Projects />
    </div>
  </div>

  {/* DSA Projects Section */}
  <div>
    <div className="text-center mb-10">
      <h2 className="text-2xl font-semibold text-gray-300">DSA Projects</h2>
    </div>
    <div className="flex justify-center gap-8">
      <DSAProjects />
    </div>
  </div>
</div>


     
<div className="bg-[#0E0526] py-32 px-10" data-aos="slide-up" data-aos-duration="9000">
<Experience />
  <div className="flex justify-center gap-12 flex-wrap">

  </div>
</div>

    
    </div>
  );
};

export default Home;
