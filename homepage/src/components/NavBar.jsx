import { Link } from 'react-router-dom';
import Button from './Button';

const NavBar = () => {
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
        <a href="/assets/Vighnesh.pdf" target="_blank" rel="noopener noreferrer">
          <span>Resume</span>
        </a>
        <Link to="/login">
          <Button text="Contact Me" />
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
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
          <a href="/assets/Vighnesh.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2">
            Resume
          </a>
          <Link to="/login" className="block px-4 py-2">
            <Button text="Contact Me" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
