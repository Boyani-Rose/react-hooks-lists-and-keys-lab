import React from "react";
const About = ({ about }) => {
  return (
    <div id>
      <h2>About Me</h2>
      <p>{about.github}</p> {/* This line causes the error */}
    </div>
  );
}

export default About;
