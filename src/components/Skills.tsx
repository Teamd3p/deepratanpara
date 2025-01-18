const SkillItem = ({ title, level }: { title: string; level: string }) => (
  <div className="mb-8">
    <h3 className="text-xl font-medium mb-2 text-primary">{title}</h3>
    <p className="text-gray-400">{level}</p>
    <div className="mt-2 h-[1px] bg-primary/20"></div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4 text-primary">Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-12 text-primary">Languages</h2>
              <div>
                <SkillItem title="Python" level="Experienced" />
                <SkillItem title="C/C#" level="Experienced" />
                <SkillItem title="PostgreSQL" level="Intermediate" />
                <SkillItem title="Java | SpringBoot" level="Basic" />
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-12 text-primary">Tools & Technologies</h2>
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
