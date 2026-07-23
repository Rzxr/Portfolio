import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <section id="About">
      <h1>About</h1>
      <GetAboutText />
    </section >
  );
};

const GetAboutText: React.FC = () => {
  return (
    <p>
      TODO
    </p>
  );
};

export default About;