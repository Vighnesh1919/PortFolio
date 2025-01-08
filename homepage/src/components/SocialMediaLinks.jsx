import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Import logos from assets
import githubLogo from "../assets/media/github.png";
import linkedinLogo from "../assets/media/linkedin.png";
import gmailLogo from "../assets/media/email.png";
import leetcodeLogo from "../assets/media/leetcode.png";
import codeforcesLogo from "../assets/media/codeforces.png";

const socialMediaLinks = [
  {
    name: "GitHub",
    url: "https://github.com/vighnesh1919",
    logo: githubLogo,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vighnesh-barage",
    logo: linkedinLogo,
  },
  {
    name: "Gmail",
    url: "mailto:vighnesh@example.com",
    logo: gmailLogo,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/vighnesh1919",
    logo: leetcodeLogo,
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/vighnesh1919",
    logo: codeforcesLogo,
  },
];

const SocialMediaLinks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex justify-center space-x-6 mt-6 flex-wrap">
      {socialMediaLinks.map((link, index) => (
        <div
          key={index}
          className="icon"
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "50%",
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.6)",
            marginBottom: "10px",
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
          data-aos="zoom-in"
          data-aos-delay={index * 100}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            data-aos="zoom-in-up"
            data-aos-duration="500"
          >
            <img
              src={link.logo}
              alt={link.name}
              className="fa-2x"
              style={{
                width: "40px",
                height: "40px",
                transition: "transform 0.3s ease",
              }}
              data-aos="flip-left"
              data-aos-duration="800"
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
