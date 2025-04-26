import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

import projects from "../data/projects";
 
 const aboutData = {
   github: "https://github.com/Dean14692-prog/react-hooks-lists-and-keys-lab",
   linkedin: "https://www.linkedin.com/feed/",
 };
 
function App() {
  const username = "Rose Boyani Momanyi";  
   const city = "Nairobi";
  return (
    <div>
      <NavBar />
      <Home color="blue" username={username} city={city} />
       <About about={aboutData} />
       <ProjectList projects={projects} />
    </div>
  );
}

export default App;
