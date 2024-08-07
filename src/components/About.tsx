import React from "react";
import "../styles/About.css";

/**
 * A component which handles the About section.
 * @returns The About component.
 */
const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <GetAboutText />
    </div>
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
      By applying my knowledge in languages like C#, Java, and TypeScript, I create software solutions and solve challenging problems.
      I am eager to bring my enthusiasm and technical skills to a dynamic software development role, where I can contribute to interesting projects and beyond.
    </p>
  );
};

export default About;
