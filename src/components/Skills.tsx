const SkillItem = ({ title, level }: { title: string; level: string }) => (
  <div className="mb-8">
    <h3 className="text-xl font-medium mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{level}</p>
    <div className="mt-2 h-[1px] bg-gray-700"></div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/980b57a4-4b37-4f7e-b1e0-18cc4ce7d380.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4 text-white">Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-12 text-white">Languages</h2>
              <div>
                <SkillItem title="Python" level="Experienced" />
                <SkillItem title="C/C#" level="Experienced" />
                <SkillItem title="React js/ Next js" level="Basic" />
                <SkillItem title="Java" level="Basic" />
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-12 text-white">Tools & Technologies</h2>
              <div>
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