import React from "react";
import "./meteor.css"; // Ensure the SCSS file is compiled

const MeteorShower = () => {
  const stars = Array.from({ length: 300 }, (_, i) => <div key={i} className="star"></div>);
  const meteors = Array.from({ length: 15 }, (_, i) => <div key={i} className={`meteor-${i + 1}`}></div>);

  return (
    <div className="meteor-container">
      {stars}
      {meteors}
    </div>
  );
};

export default MeteorShower;
