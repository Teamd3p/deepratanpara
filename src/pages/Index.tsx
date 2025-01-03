import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import LearningAndAchievement from "@/components/LearningAndAchievement";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('scroll-animation');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LearningAndAchievement />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;