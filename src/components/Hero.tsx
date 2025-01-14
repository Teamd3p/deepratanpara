import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/lovable-uploads/9eecee0c-ca57-43da-b041-7d12a7763ce2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-7xl font-light text-white leading-tight">
            Hii
            <br />
            I'm Deep
            <br />
            <span className={`text-4xl md:text-5xl transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              I specialize in Cyber Security as
              <br />
              both an Analyst and a Developer
            </span>
          </h1>
          <Button className="mt-8 bg-primary hover:bg-primary/90 text-xl px-8 py-6">
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;