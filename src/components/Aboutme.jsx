import React from 'react';

const AboutMe = () => {
  return (
    <div className="max-w-2xl text-white p-5 md:p-10 lg:p-0">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-100 mb-4" data-aos="fade-in" data-aos-delay="700">
        About Me
      </h2>
  
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4" data-aos="fade-in" data-aos-delay="700">
          Web Development
        </h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-duration="1500">
          I'm a passionate software developer with expertise in building dynamic web applications. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), I specialize in both frontend and backend development, creating seamless and interactive user experiences.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4" data-aos="fade-in" data-aos-delay="700">
          DSA Practice
        </h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-duration="1500">
          I'm passionate about Data Structures and Algorithms (DSA). With over 1600+ rating on LeetCode and having solved 600+ questions, I enjoy tackling complex problems, optimizing solutions, and continuously improving my algorithmic skills to build scalable and efficient systems.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
