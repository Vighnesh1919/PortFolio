import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialMediaLinks from './SocialMediaLinks';

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden flex flex-col justify-center text-center h-screen bg-[#0E0526] relative">
      {/* Background Blur */}
      <div className="absolute flex items-center bg-[rgba(30,200,170,0.1)] blur-lg rounded-full w-[850px] h-[450px] gap-10 transform rotate-[-135deg] scale-110 skew-x-6 translate-x-[40%] translate-y-[-85%] top-1/2 left-[-90vh] overflow-hidden"></div>

      {/* Text and Buttons */}
      <div className="relative z-10 mt-[-60px] ml-4 p-6 sm:p-12 rounded-lg via-gray-900 to-black shadow-lg">
        <div
          className="flex flex-wrap justify-center items-center space-x-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl sm:text-6xl lg:text-5xl font-bold text-white leading-tight tracking-wide">
            Hi, I am
          </h2>
          <h1 className="text-6xl sm:text-7xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 drop-shadow-md">
            Vighnesh Barage
          </h1>
        </div>

        <p
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mt-6 mb-4 tracking-wide leading-relaxed"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Passionate Coder & Full Stack Developer
        </p>

        {/* Social Media Links */}
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default HeroSection;
