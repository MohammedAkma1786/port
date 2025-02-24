import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-up">
            <h1 className="text-6xl font-bold mb-4">
              Hi, Its
              <span className="text-primary block mt-2">Mohammed</span>
            </h1>
            <p className="text-xl mb-8">
              I'm a passionate and detail-oriented Frontend Developer creating responsive,
              user-friendly web interfaces. My journey in web development began 2 years ago,
              and since then, I've been dedicated to turning design concepts into fully
              functional, visually appealing websites and applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MohammedAkma1786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-akmal-391850234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mohammedakmal003@gmail.com"
                className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 animate-fade-in">
            <img
              src="/uploads/me.png"
              alt="Profile"
              className="w-full max-w-md mx-auto rounded-full border-4 border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;