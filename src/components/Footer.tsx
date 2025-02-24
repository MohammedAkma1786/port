import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <a
            href="mailto:mohammedakmal003@gmail.com"
            className="flex items-center justify-center space-x-2 text-primary hover:text-white transition-colors"
          >
            <Mail size={20} />
            <span>E-mail</span>
          </a>
          <a
            href="https://github.com/MohammedAkma1786"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-primary hover:text-white transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-akmal-391850234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-primary hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center space-x-2 text-primary hover:text-white transition-colors"
          >
            <Phone size={20} />
            <span>Number</span>
          </a>
        </div>
        <div className="text-center text-sm text-gray-400">
          ©2024 Mohammed Akmal
        </div>
      </div>
    </footer>
  );
};

export default Footer;