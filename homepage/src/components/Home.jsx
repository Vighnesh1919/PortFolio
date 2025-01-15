import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './NavBar';
import Button from './Button';
import react from '../assets/logo/React.gif';
import videoSrc from '../assets/video.mp4';
import Projects from "./Projects";
import AboutMe from './Aboutme';
import ImageItems from './ImageItems';
import Experience from "./Experience";
import DSAProjects from './DSAProjects';
import HeroSection from './HeroSection';
import SocialMediaLinks from './SocialMediaLinks'; // Import the SocialMediaLinks component

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="overflow bg-[#0E0526]">
      {/* Navigation Bar */}
      <NavBar />
      <div id="my-profile">
        <HeroSection />
      </div>

     

      <div className="overflow-hidden flex flex-col lg:flex-row items-center justify-between py-5 px-10 bg-[#0E0526] relative h-auto lg:h-screen">
      {/* Background Blur */}
      <div className="absolute flex justify-center items-center bg-[rgba(30,200,170,0.1)] blur-lg rounded-full w-[850px] h-[450px] gap-10 transform rotate-[-35deg] scale-110 skew-x-6 translate-x-[40%] translate-y-[-85%] top-1/2 left-1/2 overflow-hidden pointer-events-none"></div>

      {/* About Me Section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 relative z-10">
        <AboutMe />
      </div>

      {/* Technical Skills Section */}
      <div className="flex flex-wrap gap-10 items-center justify-center lg:justify-end w-full lg:w-2/5 relative z-10">
        <div id="skills">
          <ImageItems />
        </div>
      </div>
    </div>



      <div className="bg-[#0E0526] py-20 px-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white">Projects</h1>
        </div>

        {/* Web Development Projects Section */}
        <div className="mb-20">
          <div className="flex justify-center gap-8">
            <div id="projects">
              <Projects />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0E0526] py-31 px-10" data-aos="slide-up" data-aos-duration="9000">
        <div id="experience">
          <Experience />
        </div>
        <div className="flex justify-center gap-12 flex-wrap">
          {/* Additional content can go here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
