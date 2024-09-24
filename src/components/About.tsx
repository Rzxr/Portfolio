import React from "react";
import "../styles/About.css";

/**
 * A component which handles the About section.
 * @returns The About component.
 */
const About: React.FC = () => {
  return (
    <section id="About">
      <h1>About</h1>
      <GetAboutText />
    </section >
  );
};

/**
 * A component that returns the About text.
 * @returns The About text.
 */
const GetAboutText: React.FC = () => {
  return (
    <p>
      I'm a dedicated and innovative software developer who enjoys using code to bring ideas to live.
      By applying my knowledge in languages like C#, Java, and Python, I create software solutions and solve challenging problems.
      Using my deep interest in programming and technology, I am continuously expanding my knowledge of new technologies and frameworks.
      I am eager to bring my enthusiasm and technical skills to a dynamic software development role, where I can contribute to interesting projects and beyond.
    </p>
  );
};

export default About;