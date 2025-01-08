import React from "react";

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      <div className="icon">
        <a href="https://github.com/vighnesh1919" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github fa-2x text-white"></i>
        </a>
      </div>
      
      <div className="icon">
        <a href="https://www.linkedin.com/in/vighnesh-barage" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin fa-2x text-white"></i>
        </a>
      </div>
      <div className="icon">
        <a href="mailto:vighnesh@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-envelope fa-2x text-white"></i>
        </a>
      </div>
      <div className="icon">
        <a href="https://leetcode.com/vighnesh1919" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-code fa-2x text-white"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
