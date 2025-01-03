import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-8 animate-fade-in">Let's Connect</h2>
        <div className="flex justify-center items-center space-x-12">
          <a
            href="https://github.com/Teamd3p"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform hover:scale-110"
          >
            <Github size={40} className="mb-2 text-gray-700" />
            <span className="text-sm text-gray-600">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/deep-ratanpara-a87810269/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform hover:scale-110"
          >
            <Linkedin size={40} className="mb-2 text-blue-600" />
            <span className="text-sm text-gray-600">LinkedIn</span>
          </a>
          <a
            href="mailto:ratanparadeep3108@gmail.com"
            className="group flex flex-col items-center transition-transform hover:scale-110"
          >
            <Mail size={40} className="mb-2 text-red-500" />
            <span className="text-sm text-gray-600">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;