import { Github, Twitter, Instagram, Copyright } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const handleResumeClick = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/lovable-uploads/Resume_deep.pdf'; // Make sure to upload your resume with this exact name
    link.download = 'Deep_Resume_deep.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gray-100 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/Deep-5.svg" 
              alt="Deep Logo" 
              className="h-8 w-auto mix-blend-multiply" 
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
            onClick={handleResumeClick}
            className="bg-primary hover:bg-primary/90 transition-colors duration-300"
          >
            Resume
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
