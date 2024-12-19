import { Link } from 'react-router-dom';
import Button from './Button';

const NavBar = () => {
  return (
    <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-y-2 border-[#0E0526] bg-[#0E0526] px-10 py-4  overflow-visible">
      {/* Brand Name */}
      <div className="text-2xl text-white  font-bold">
        <Link to="/">
          <span >My_Profile</span>
          
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center text-white  gap-6">
        
        <Link to="/freelancers">
          <span>Skills</span>
        </Link>
        <Link to="/works">
          <span>Projects</span>
        </Link>
        <Link to="/client/signup">
          <span>Expirience</span>
        </Link>
        <Link to="/user/dashboard">
          <span>Resume</span>
        </Link>
        
        <Link to="/login">
          <Button text="Contact Me" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
