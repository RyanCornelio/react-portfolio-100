import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/proj1.jpg";
import Proj3 from "../assets/proj3.webp";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>;
      <div div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              name={project.name}
              image={project.image}
              skills={project.skills}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
