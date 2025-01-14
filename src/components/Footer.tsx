import { Github, Twitter, Instagram, Copyright } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/37b5e961-4487-449e-a8b3-0ed8a35a9e7a.png" 
              alt="Deep Logo" 
              className="h-8 w-auto" 
            />
            <div className="flex items-center space-x-2">
              <Copyright className="h-4 w-4" />
              <span className="text-gray-600">Deep Ratanpara</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Teamd3p"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 transition-colors duration-300"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;