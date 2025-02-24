import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 animate-gradient-x rounded-2xl p-6">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;