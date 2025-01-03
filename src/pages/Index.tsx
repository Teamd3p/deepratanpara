import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SocialLinks />
      <Contact />
    </div>
  );
};

export default Index;