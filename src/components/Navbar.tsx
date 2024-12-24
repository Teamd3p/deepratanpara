import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="Logo" className="h-8 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary">Home</a>
            <a href="#skills" className="text-gray-700 hover:text-primary">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-primary">Project</a>
            <a href="#achievements" className="text-gray-700 hover:text-primary">Achievements</a>
            <a href="#about" className="text-gray-700 hover:text-primary">About Me</a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <Phone className="h-4 w-4 text-primary mr-2" />
              <span className="text-gray-700">+91 987001262</span>
            </div>
            <Button variant="outline" className="hidden md:inline-flex">
              Sign in
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;