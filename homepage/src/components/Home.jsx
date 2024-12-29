import React, { useEffect } from 'react';
import AOS from 'aos';
//import MeteorShower from "./MeteorShower ";
import 'aos/dist/aos.css';
import NavBar from './NavBar';
import Button from './Button';
import react from '../assets/React.gif';
import unlockImage from '../assets/unlock.png';
import logo1image from '../assets/logo-1.png';
import logo2image from '../assets/logo-2.png';
import logo3image from '../assets/logo-3.png';
import logo4image from '../assets/logo-4.png';
import broImage from '../assets/bro.png';
import 'aos/dist/aos.css'; // Don't forget to import AOS styles
import videoSrc from '../assets/video.mp4';
//import style from '../App.css';

import ava from '../assets/Java.png';
import js from '../assets/javascript.png';
import nodejs from '../assets/nodejs.png';




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






      <div className="overflow-hidden flex items-center justify-between py-5 px-10 bg-[#0E0526] relative h-screen">
  {/* Background Blur */}
  <div className="absolute flex justify-center items-center bg-[rgba(30,200,170,0.1)] blur-lg rounded-full w-[850px] h-[450px] gap-10 transform rotate-[-35deg] scale-110 skew-x-6 translate-x-[40%] translate-y-[-85%] top-1/2 left-1/2 overflow-hidden"></div>

  {/* About Me Section */}
  <div className="max-w-2xl text-white -mt-32">
  <h2 className="text-4xl font-extrabold text-gray-100 mb-4" data-aos="fade-in" data-aos-delay="700">About Me</h2>
  
  <div className="mb-8">
    <h3 className="text-3xl font-semibold text-gray-200 mb-4" data-aos="fade-in" data-aos-delay="700">Web Development</h3>
    <p
      className="text-xl text-gray-300 leading-relaxed"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      I'm a passionate software developer with expertise in building dynamic web applications. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), I specialize in both frontend and backend development, creating seamless and interactive user experiences.
    </p>
  </div>

  <div className="mt-10">
    <h3 className="text-3xl font-semibold text-gray-200 mb-4 " data-aos="fade-in"
    data-aos-delay="700">DSA Practice</h3>
    <p
      className="text-xl text-gray-300 leading-relaxed"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      I'm passionate about Data Structures and Algorithms (DSA). With over 1600+ rating on LeetCode and having solved 600+ questions, I enjoy tackling complex problems, optimizing solutions, and continuously improving my algorithmic skills to build scalable and efficient systems.
    </p>
  </div>
</div>



  {/* Technical Skills Section */}
  <div className="flex flex-wrap gap-10 items-center justify-end w-2/5 mr-10 -mt-15 " data-aos="fade-left" data-aos-duration="1200" style={{ marginTop: '-130px' }}>
    {/* Icon Items */}
    <div className="flex flex-col items-center group">
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
    <div className="flex flex-col items-center">
      <img
        src={react}
        alt="React JS"
        className="w-20 h-20 object-cover bg-white"
        data-aos="zoom-in"
        data-aos-delay="300"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">React JS</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>

    {/* Add More Icons Here */}
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={ava}
        alt="Avatar"
        className="w-20 h-20 object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="mt-2 text-lg font-bold text-gray-200">Avatar</p>
    </div>
    <div className="flex flex-col items-center group">
  <img
    src={ava}
    alt="Avatar"
    className="w-20 h-20 object-cover transition-transform duration-300 transform group-hover:scale-110"
    data-aos="zoom-in"
    data-aos-delay="400"
  />
  <p className="mt-2 text-lg font-bold text-gray-200 transition-colors duration-300 group-hover:text-blue-400">
    Avatar
  </p>
</div>

    <div className="flex flex-col items-center group">
  <img
    src={ava}
    alt="Avatar"
    className="w-20 h-20 object-cover transition-transform duration-300 transform group-hover:scale-110"
    data-aos="zoom-in"
    data-aos-delay="400"
  />
  <p className="mt-2 text-lg font-bold text-gray-200 transition-colors duration-300 group-hover:text-blue-400">
    Avatar
  </p>
</div>

<div className="flex flex-col items-center group">
  <img
    src={ava}
    alt="Avatar"
    className="w-20 h-20 object-cover transition-transform duration-300 transform group-hover:scale-90 group-hover:rotate-3"
    data-aos="zoom-in"
    data-aos-delay="400"
  />
  <p className="mt-2 text-lg font-bold text-gray-200 transition-colors duration-300 group-hover:text-blue-400">
    Avatar
  </p>
</div>



  </div>
  
</div>


{/* Reviews Section */}
<div className="bg-[#0E0526] py-20 px-10">
  <div className="flex justify-center gap-8">
    {/* Review Box 1 */}
    <div
      className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/3 flex flex-col justify-between h-[450px] border border-[#40c9a2]"
      data-aos="fade-up"
      data-aos-delay="10"
    >
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="John Doe"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="text-left">
          <h4 className="font-semibold text-gray-800">John Doe</h4>
          <p className="text-gray-500">CEO, Tech Innovators</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center mb-4">
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      </div>

      <p className="text-lg text-gray-600 flex-grow">
        "This platform was a game changer for our company. We were able to hire highly skilled freelancers 
        who delivered exceptional results within tight deadlines. The ease of use and smooth process made it 
        effortless to scale our team quickly. I’m grateful for the seamless experience!"
      </p>
    </div>

    {/* Review Box 2 */}
    <div
      className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/3 flex flex-col justify-between h-[450px] border border-[#40c9a2]"
      data-aos="fade-up"
      data-aos-delay="20"
    >
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Jane Smith"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="text-left">
          <h4 className="font-semibold text-gray-800">Jane Smith</h4>
          <p className="text-gray-500">Founder, Creative Solutions</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center mb-4">
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      </div>

      <p className="text-lg text-gray-600 flex-grow">
        "I found exceptional talents through this platform. The freelancers are professional, 
        creative, and deliver high-quality work. The platform's ability to match me with the right professionals 
        allowed my startup to grow exponentially, and we could scale quickly. Highly recommended!"
      </p>
    </div>

    {/* Review Box 3 */}
    <div
      className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/3 flex flex-col justify-between h-[450px] border border-[#40c9a2]"
      data-aos="fade-up"
      data-aos-delay="30"
    >
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Mark Lee"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="text-left">
          <h4 className="font-semibold text-gray-800">Mark Lee</h4>
          <p className="text-gray-500">Project Manager, Build Corp</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center mb-4">
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      </div>

      <p className="text-lg text-gray-600 flex-grow">
        "WorkSphere has been an indispensable tool for us. It helped us onboard professionals
        who brought their A-game, working together seamlessly. The platform made recruitment 
        efficient and stress-free. I highly recommend it for any growing company in need of top-tier talent!"
      </p>
    </div>
  </div>
</div>


     
{/* Background Shape */}







      {/* Trusted Companies Section (Unchanged) */}
<div className="bg-[#0E0526] py-32 px-10" data-aos="slide-up" data-aos-duration="9000">
  <h2 className="text-4xl font-poppins-black text-center text-gray-800 mb-10">
    Trusted by Leading Companies
  </h2>
  <div className="flex justify-center gap-12 flex-wrap">

  <img
  src={logo1image}
  alt="Talent"
  className="w-32 h-32 object-contain" 
/>



<img
  src={logo2image}
  alt="Talent"
  className="w-32 h-32 object-contain" 
/>

<img
  src={logo3image}
  alt="Talent"
  className="w-32 h-32 object-contain" 
/>

<img
  src={logo4image}
  alt="Talent"
  className="w-32 h-32 object-contain" 
/>

  </div>
</div>

      {/* Bro Section (Unchanged) */}
     
    </div>
  );
};

export default Home;
