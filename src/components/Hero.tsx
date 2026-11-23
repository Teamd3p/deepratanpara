import { useEffect, useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/profile";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="top"
      className="min-h-[78vh] md:min-h-[85vh] flex items-center justify-center relative pt-14"
      style={{
        backgroundImage: `url('${profile.heroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <p className="text-white/80 tracking-[0.3em] uppercase text-xs md:text-sm mb-4">{profile.role}</p>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
          Hii, I'm {profile.firstName}
        </h1>
        <p
          className={`mt-4 text-xl md:text-3xl font-light text-white/90 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.resume}
            download="Deep_Ratanpara_Resume.pdf"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/70 text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 hover:text-white animate-bounce z-10">
        <ArrowDown className="h-5 w-5" />
      </a>
    </div>
  );
};

export default Hero;
