import React from "react";

const ProjectItem = ({ name, description, technologies }) => {
  return (
    <div>
    <h2>{name}</h2>
    <p>{description}</p>
    <div>
      <strong>Technologies:</strong>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span> 
        ))}
      </div>
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
