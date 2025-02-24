import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Code2, FileJson, Database, GitBranch, Server, Network } from "lucide-react";

const Languages = () => {
  const skills = [
    { name: "HTML5", icon: <Code2 className="w-12 h-12" /> },
    { name: "CSS3", icon: <Code2 className="w-12 h-12" /> },
    { name: "JavaScript", icon: <FileJson className="w-12 h-12" /> },
    { name: "Tailwind CSS", icon: <Code2 className="w-12 h-12" /> },
    { name: "SASS", icon: <Code2 className="w-12 h-12" /> },
    { name: "jQuery", icon: <Code2 className="w-12 h-12" /> },
    { name: "Bootstrap", icon: <Code2 className="w-12 h-12" /> },
    { name: "React", icon: <Code2 className="w-12 h-12" /> },
    { name: "Node.js", icon: <Server className="w-12 h-12" /> },
    { name: "Git", icon: <GitBranch className="w-12 h-12" /> },
    { name: "REST APIs", icon: <Network className="w-12 h-12" /> },
    { name: "Express", icon: <Server className="w-12 h-12" /> },
    { name: "Redux", icon: <Database className="w-12 h-12" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 animate-gradient-x rounded-2xl p-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
                >
                  {skill.icon}
                  <span className="mt-4 text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;