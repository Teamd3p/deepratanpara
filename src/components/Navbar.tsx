import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Patents" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/85 backdrop-blur-sm z-50 border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <a href="#top" aria-label="Home">
            <img src="/lovable-uploads/Deep-5.svg" alt="Deep" className="h-10 w-auto mix-blend-multiply" />
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-700 hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hidden sm:block text-gray-700 hover:text-primary transition-colors">
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hidden sm:block text-gray-700 hover:text-primary transition-colors">
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a href="#contact" className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Contact Me
            </a>
            <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden flex flex-col pb-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-gray-700 hover:text-primary">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
