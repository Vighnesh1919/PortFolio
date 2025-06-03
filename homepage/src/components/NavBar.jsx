import React, { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-y-2 border-[#0E0526] bg-[#0E0526] px-6 sm:px-10 py-4">
      {/* Brand Name */}
      <div className="text-xl sm:text-2xl text-white font-bold">
        <a href="#my-profile">
          <span>My_Profile</span>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center text-white gap-4 sm:gap-6">
        <a href="#skills">
          <span>Skills</span>
        </a>
        <a href="#projects">
          <span>Projects</span>
        </a>
        <a href="#experience">
          <span>Experience</span>
        </a>
        
        {/* Google Drive Folder Link for Resume */}
        <a
          href="https://drive.google.com/file/d/1AOEMA3_SKePT7K6fiG8td8FybkPdkq9s/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2"
        >
          Resume
        </a>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden relative">
        {/* Hamburger Icon */}
        <button className="text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[#0E0526] text-white shadow-lg">
            <a href="#skills" className="block px-4 py-2">
              Skills
            </a>
            <a href="#projects" className="block px-4 py-2">
              Projects
            </a>
            <a href="#experience" className="block px-4 py-2">
              Experience
            </a>

            {/* Google Drive Folder Link for Mobile */}
            <a
              href="https://drive.google.com/file/d/1yP6FWCiZ-gc_vV_5YCRJ_p53YxDa25T7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
