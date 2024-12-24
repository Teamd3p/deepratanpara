const SkillItem = ({ title, level }: { title: string; level: string }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-xl font-medium mb-2 text-primary">{title}</h3>
    <p className="text-gray-300">{level}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Specialized in cybersecurity and development, combining technical expertise with practical experience.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-light mb-8 text-primary">Languages</h2>
              <div className="grid gap-6">
                <SkillItem title="Python" level="Experienced" />
                <SkillItem title="C/C#" level="Experienced" />
                <SkillItem title="React js/ Next js" level="Basic" />
                <SkillItem title="Java" level="Basic" />
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-light mb-8 text-primary">Tools & Technologies</h2>
              <div className="grid gap-6">
                <SkillItem title="Kali Linux and its tools" level="Experienced" />
                <SkillItem title="OWAP Zap" level="Experienced" />
                <SkillItem title="Burp Suite" level="Experienced" />
                <SkillItem title="WireShark" level="Basic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;