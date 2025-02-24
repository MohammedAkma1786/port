import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import Skills from "@/components/Skills";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 animate-gradient-x rounded-2xl p-6">
            <ScrollReveal>
              <Hero />
            </ScrollReveal>
            
            <ScrollReveal className="delay-100">
              <Skills />
            </ScrollReveal>
            
            <ScrollReveal className="delay-200">
              <Certifications />
            </ScrollReveal>
            
            <ScrollReveal className="delay-300">
              <Projects />
            </ScrollReveal>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;