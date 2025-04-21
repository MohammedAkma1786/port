import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-up">
            <h1 className="text-6xl font-bold mb-4">
              Hi, I am
              <span className="text-primary block mt-2">Mohammed</span>
            </h1>
            <p className="text-xl mb-8">
              I'm a passionate <strong>Frontend Developer</strong> and <strong>Cloud Enthusiast</strong> with a keen interest in building scalable, responsive web applications and leveraging cloud technologies to deliver seamless user experiences. 
              My journey in web development and cloud computing has been fueled by a desire to create impactful solutions that bridge design and functionality.
            </p>
            <p className="text-xl mb-8">
              With expertise in modern frontend frameworks like <strong>React</strong> and a growing proficiency in cloud platforms such as <strong>AWS</strong> and <strong>Azure</strong>, I aim to craft applications that are not only visually appealing but also robust and scalable.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MohammedAkma1786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-akmal-391850234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mohammedakmal003@gmail.com"
                className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                title="Email"
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