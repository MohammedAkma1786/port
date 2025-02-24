import { 
  Code2, 
  FileCode2, 
  FileJson, 
  Wind, 
  Paintbrush, 
  Database, 
  LayoutGrid, 
  Atom, 
  Server, 
  GitBranch, 
  Webhook, 
  Box, 
  Network 
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: Code2 },
    { name: "CSS", icon: FileCode2 },
    { name: "JavaScript", icon: FileJson },
    { name: "Tailwind", icon: Wind },
    { name: "SASS", icon: Paintbrush },
    { name: "jQuery", icon: Database },
    { name: "Bootstrap", icon: LayoutGrid },
    { name: "React", icon: Atom },
    { name: "Node.js", icon: Server },
    { name: "Git", icon: GitBranch },
    { name: "REST APIs", icon: Webhook },
    { name: "Express", icon: Box },
    { name: "Redux", icon: Network }
  ];

  return (
    <div className="py-20 bg-[#0F0F0F] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-black/50 backdrop-blur-sm animate-fade-up hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className="w-12 h-12 mb-2 text-primary" />
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;