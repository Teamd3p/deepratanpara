import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-7xl font-light text-gray-700 leading-tight">
            Hii
            <br />
            I'm Deep
            <br />
            <span className="text-4xl md:text-5xl">
              I specialize in Cyber Security as
              <br />
              both an Analyst and a Developer
            </span>
          </h1>
          <Button className="mt-8 bg-primary hover:bg-primary/90 text-xl px-8 py-6">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;