import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a href="https://crossxclass.netlify.app">
        <ProjectCard 
          src="/crossclass2.png"
          title="Crossclass"
          description="An E-learning website with ."
        /></a>
        <ProjectCard
          src="/WIP.png"
          title="Web In Post"
          description="Crypto marketing Agency with Web 3 services."
        />
        <ProjectCard
          src="/exploreindia2.png"
          title="Explore India"
          description="Indian tourism agency website ."
        />
      </div>
    </div>
  );
};

export default Projects;
