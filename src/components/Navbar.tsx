import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c789c4cf-e2b0-4617-92b3-bab0afef61c6.png" 
              alt="Deep Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#skills" 
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              Projects
            </a>
            <button
              onClick={() => scrollToSection('achievements')}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              Achievements
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Teamd3p" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/deep-ratanpara-a87810269/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;