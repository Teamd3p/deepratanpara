const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-light mb-4 text-gray-900">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Greetings! I am Deep, a Web Security Analyst, Penetration Tester, and Developer with
              over two years of experience in this field.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My primary focus is on enhancing system security, developing sophisticated
              applications, and exploring cutting-edge technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In my role as the coordinator of the Cyber Security Club at Marwadi University, I am
              dedicated to advancing cybersecurity awareness and driving innovation within the
              community.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;