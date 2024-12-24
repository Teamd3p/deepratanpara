const ProjectCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg group">
    <div className="overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 transform transition-transform duration-300 animate-fade-in">{title}</h3>
      <p className="text-gray-600 transform transition-all duration-500 animate-fade-in delay-100">{description}</p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-4 animate-fade-in">My Projects</h2>
        <p className="text-gray-600 mb-12 animate-fade-in delay-75">
          I prioritize quality over quantity, choosing to work on fewer projects that truly make a difference.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard
            title="Innovative Ideas"
            description="Our creativity is at the forefront of everything we do, delivering innovative solutions that make your project stand out while maintaining a balance between originality and functionality."
            image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          />
          <ProjectCard
            title="Comprehensive Support"
            description="From the initial stages to completion, we offer support every step of the way, ensuring you feel confident in your choices and that your project is a success."
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          />
          <ProjectCard
            title="Timeless Quality"
            description="Our services are built to last, ensuring that every solution we provide is of the highest quality, bringing lasting value to your investment and ultimate customer satisfaction."
            image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;