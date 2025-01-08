import React from "react";

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      {/* GitHub Icon */}
      <div className="icon">
        <a href="https://github.com/vighnesh1919" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github fa-2x text-white" title="GitHub"></i>
        </a>
      </div>
      
      {/* LinkedIn Icon */}
      <div className="icon">
        <a href="https://www.linkedin.com/in/vighnesh-barage" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin fa-2x text-white" title="LinkedIn"></i>
        </a>
      </div>

      {/* Email Icon */}
      <div className="icon">
        <a href="mailto:vighnesh@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-envelope fa-2x text-white" title="Email"></i>
        </a>
      </div>

      {/* LeetCode Icon */}
      <div className="icon">
        <a href="https://leetcode.com/vighnesh1919" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-stack-overflow fa-2x text-white" title="LeetCode"></i> {/* Replacing with Stack Overflow logo as a placeholder */}
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
