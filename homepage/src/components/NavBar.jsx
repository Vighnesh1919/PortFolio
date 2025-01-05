import { Link } from 'react-router-dom';
import Button from './Button';

const NavBar = () => {
  return (
    <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-y-2 border-[#0E0526] bg-[#0E0526] px-6 sm:px-10 py-4">
      {/* Brand Name */}
      <div className="text-xl sm:text-2xl text-white font-bold">
        <Link to="/">
          <span>My_Profile</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center text-white gap-4 sm:gap-6">
        <Link to="/freelancers">
          <span>Skills</span>
        </Link>
        <Link to="/works">
          <span>Projects</span>
        </Link>
        <Link to="/client/signup">
          <span>Experience</span>
        </Link>
        <Link to="/user/dashboard">
          <span>Resume</span>
        </Link>
        <Link to="/login">
          <Button text="Contact Me" />
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden">
        {/* Add a menu button for mobile view */}
        <button className="text-white">
          {/* Icon for the mobile menu (hamburger icon) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {/* Dropdown menu items */}
        <div className="absolute right-0 mt-2 w-48 bg-[#0E0526] text-white shadow-lg">
          <Link to="/freelancers" className="block px-4 py-2">
            Skills
          </Link>
          <Link to="/works" className="block px-4 py-2">
            Projects
          </Link>
          <Link to="/client/signup" className="block px-4 py-2">
            Experience
          </Link>
          <Link to="/user/dashboard" className="block px-4 py-2">
            Resume
          </Link>
          <Link to="/login" className="block px-4 py-2">
            <Button text="Contact Me" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
