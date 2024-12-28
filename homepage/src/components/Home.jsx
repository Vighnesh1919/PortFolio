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
      <div className="absolute flex  items-center bg-[rgba(30,160,170,0.1)] blur-lg rounded-full w-[850px] h-[450px] gap-10 transform rotate-[-135deg] scale-110 skew-x-6 translate-x-[40%] translate-y-[-85%] top-1/2 left-[-90vh] overflow-hidden"></div>

      
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
  <div className="absolute flex justify-center items-center bg-[rgba(30,160,170,0.1)] blur-lg rounded-full w-[850px] h-[450px] gap-10 transform rotate-[-35deg] scale-110 skew-x-6 translate-x-[40%] translate-y-[-85%] top-1/2 left-1/2 overflow-hidden"></div>

  {/* About Me and Technical Skills Section */}
  <div className="max-w-2xl text-white mt-[-350px]">
  <h2 className="text-4xl font-extrabold text-gray-100 mb-4">About Me</h2>
  <p className="text-xl text-gray-300 mb-8 leading-relaxed" data-aos="slide-right" data-aos-duration="1000">
  
    I'm a passionate software developer with a knack for building dynamic web applications. With a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js), I specialize in both frontend and backend development. I love transforming ideas into interactive and user-friendly experiences while leveraging modern technologies. My approach is driven by creativity, problem-solving, and the joy of continuously learning and improving.
  
</p>



    {/* Technical Skills */}
    {/* <h3 className="text-3xl font-semibold text-gray-100 mb-4">Technical Skills</h3>
    <ul className="text-lg text-gray-300 mb-6 list-disc pl-5">
      <li><strong>Web Development:</strong> MERN Stack (MongoDB, Express.js, React, Node.js)</li>
      <li><strong>Frontend:</strong> React, HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap</li>
      <li><strong>Backend:</strong> Node.js, Express.js</li>
      <li><strong>Problem Solving:</strong> DSA Enthusiast, Algorithmic problem solver</li>
      <li><strong>Languages:</strong> C, C++, Java</li>
      <li><strong>OOPS Concepts:</strong> Object-Oriented Programming Principles</li>
    </ul> */}

    {/* Achievements */}
    {/* <h3 className="text-3xl font-semibold text-gray-100 mb-4">Achievements</h3>
    <ul className="text-lg text-gray-300 list-disc pl-5">
      <li><strong>Leetcode:</strong> Solved 500+ questions with a Contest rating of 1600+.</li>
      <li><strong>Codeforces:</strong> Solved 100+ questions and achieved a 1000+ contest rating.</li>
      <li>Secured <strong>3rd place</strong> in a technical treasure hunt competition, showcasing exceptional problem-solving skills and teamwork.</li>
    </ul> */}
  </div>

  {/* Image Section */}
  <img
  src={react}
  alt="Talent"
  className="w-[6%] h-[auto] object-cover ml-10 mt-2 bg-transparent"
  data-aos="slide-left"
/>
<img
  src={react}
  alt="Talent"
  className="w-[6%] h-[auto] object-cover ml-10 mt-2 bg-transparent"
  data-aos="slide-left"
/>
<img
  src={react}
  alt="Talent"
  className="w-[6%] h-[auto] object-cover ml-10 mt-2 bg-transparent"
  data-aos="slide-left"
/>
<img
  src={ava}
  alt="Talent"
  className="w-[6%] h-[auto] object-cover ml-10 mt-2 "
  data-aos="slide-left"
/>

</div>






      

     {/* Unlock New Opportunities */}
<div className=" overflow-hidden flex items-center justify-between py-15 px-10 bg-[#0E0526] relative" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
  {/* <div className="absolute flex justify-center items-center bg-[rgba(30,160,170,0.1)] blur-lg rounded-full w-[850px] h-[450px] gap-10 transform rotate-[135deg] scale-110 skew-x-6 translate-x-[-150%] translate-y-[-25%] top-1/2 left-1/2 overflow-hidden"></div> */}

  {/* Content */}
  <div className="flex flex-col items-start ml-10" data-aos="fade-right">
    <h2 className="text-6xl font-poppins-black text-left text-gray-800 mb-6">
      Unlock New Opportunities
    </h2>
    <p className="text-xl font-poppins-black text-left text-gray-600 mb-8 leading-relaxed">
      Open doors to amazing projects and meaningful collaborations that can
      redefine your career path. Explore new opportunities and achieve your
      professional goals with confidence and creativity.
    </p>
    <div className="flex gap-6">
      <button className="px-6 py-3 text-white bg-[#40c9a2] rounded-lg hover:bg-[#36a889] transition">
        Create Profile
      </button>
      <button className="px-6 py-3 text-gray-800 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition">
        Explore Project
      </button>
    </div>
  </div>

  {/* Image */}
  <img
    src={unlockImage}
    alt="Unlock New Opportunities"
    maxwidth="100%"
     className="w-[50%] h-auto object-cover mr-1"
    data-aos="slide-left"
  />
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


{/* Sign Up Content */}
<div className="bg-[#0E0526] py-32 px-10">
  <div
    className="relative z-10 text-center px-4"
    data-aos="zoom-in" // Apply the animation when scrolled into view
    data-aos-duration="800" // Duration for the animation
    data-aos-delay="10" // Delay before the animation starts (optional)
  >
    {/* Background shape with clearer appearance, reduced opacity and height */}
    <div className="absolute bg-[rgba(30,160,170,0.2)] rounded-full w-[950px] h-[300px] transform scale-110 translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 z-0"></div>
    <h2 className="text-3xl font-poppins-black text-gray-800 mb-6 relative z-10">
    Join our community and start discovering incredible opportunities.
    </h2>
    <h2 className="text-xl font-poppins-black text-gray-800 mb-6 relative z-10">
      Sign Up Today
    </h2>

    <div className="flex justify-center gap-6 relative z-10">
      <button className="px-8 py-4 text-white bg-[#36a889] rounded-lg hover:bg-[#2f9c74] transition">
        Join Now
      </button>
      <button className="px-8 py-4 text-teal-500 bg-[#e0e0e0] border border-[#c0c0c0] rounded-lg hover:bg-[#b0b0b0] hover:text-teal-600 transition">
        Learn More
      </button>
    </div>
  </div>
</div>




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
