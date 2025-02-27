import { Github, Link } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-black/50 backdrop-blur-sm animate-fade-up border border-primary/20">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[200px] object-cover transition-transform group-hover:scale-105 border-b border-primary/20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="text-center p-4 w-full">
          <h3
            className={`${
              index === 0 ? "text-base" : "text-xl"
            } font-bold mb-2 text-white group-hover:${
              index === 0 ? "text-lg" : "text-2xl"
            } transition-all`}
          >
            {project.title}
          </h3>
          <p
            className={`mb-4 ${
              index === 0 ? "text-xs" : "text-sm"
            } text-gray-200 max-w-xl mx-auto leading-relaxed group-hover:${
              index === 0 ? "text-sm" : "text-base"
            } transition-all`}
          >
            {project.description}
          </p>
          <div className="flex justify-center space-x-4">
            <a
            title="Github"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
            title="Live"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Link size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
