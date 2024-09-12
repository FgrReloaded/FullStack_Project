import React from "react";
import "./style.css";

function Hero() {
  return (
    <>
      <div className="hero-div">
        <div className="text-div">
          <h1>SkillTrade: Trade your skills</h1>
          <h2>
            Clear scope. <br />
            Upfront price. <br />
            No surprises.
          </h2>
          <p>
            Complete your most pressing work with Project Catalog. Browse and
            buy predefined projects in just a few clicks.
          </p>
        </div>
        <div className="image-div">
            <img className="hero-img" src="./src/images/hero.jpg" alt="hero-page-img" />
        </div>
      </div>
    </>
  );
}

export default Hero;
