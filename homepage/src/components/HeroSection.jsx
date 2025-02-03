import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialMediaLinks from './SocialMediaLinks';

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Function to split text into an array of spans for each character
  const splitText = (text) => {
    return text.split().map((char, index) => (
      <span
        key={index}
        className="inline-block mr-1 transition-all duration-300 transform"
        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.3)')}
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="overflow-hidden flex flex-col justify-center text-center h-screen bg-[#0E0526] relative">
      {/* Text and Buttons */}
      <div className="relative z-10 mt-[-60px] ml-4 p-6 sm:p-12 rounded-lg via-gray-900 to-black shadow-lg">
        <div
          className="flex flex-wrap justify-center items-center space-x-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2
            className="text-3xl sm:text-6xl lg:text-5xl font-bold text-white leading-tight tracking-wide"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            {splitText('Hi, I am')}
          </h2>
          <h1
            className="text-6xl sm:text-7xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 drop-shadow-md"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >Vighnesh Barage

            {/* {splitText('Vighnesh Barage')} */}
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
