import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { title } = useParams<{ title: string }>();
  const project = projects.find((p) => p.title === title);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-auto mt-4" />
      <p className="mt-4">{project.description || "No description available."}</p>
      <p className="mt-4 text-gray-600">
        This project showcases the implementation of a {project.title.toLowerCase()} application. 
        Explore the code on <a href={project.github} className="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a> 
        or view the live demo <a href={project.live} className="text-blue-500" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <p className="mt-4 text-gray-600">
        Feel free to reach out if you have any questions or feedback about this project!
      </p>
    </div>
  );
};

export default ProjectDetails;