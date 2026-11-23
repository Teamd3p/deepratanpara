import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const Footer = () => {
  const icons = [
    { href: profile.github, Icon: Github, label: "GitHub" },
    { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
    { href: profile.instagram, Icon: Instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-100 border-t py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img src="/lovable-uploads/Deep-5.svg" alt="Deep" className="h-8 w-auto mix-blend-multiply" />
          <span className="text-sm text-gray-600">
            © {new Date().getFullYear()} {profile.name} · {profile.role}
          </span>
        </div>

        <div className="flex items-center gap-5">
          {icons.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <a
          href={profile.resume}
          download="Deep_Ratanpara_Resume.pdf"
          className="bg-primary hover:bg-primary/90 text-white text-sm px-4 py-2 rounded-md transition-colors"
        >
          Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
