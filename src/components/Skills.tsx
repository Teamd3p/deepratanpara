const SkillItem = ({ title, level }: { title: string; level: string }) => (
  <div className="mb-6">
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-gray-600">{level}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl mb-8">Languages</h2>
            <SkillItem title="Python" level="Experienced" />
            <SkillItem title="C/C#" level="Experienced" />
            <SkillItem title="React js/ Next js" level="Basic" />
            <SkillItem title="Java" level="Basic" />
          </div>
          <div>
            <h2 className="text-3xl mb-8">Tools & Technologies</h2>
            <SkillItem title="Kali Linux and its tools" level="Experienced" />
            <SkillItem title="OWAP Zap" level="Experienced" />
            <SkillItem title="Burp Suite" level="Experienced" />
            <SkillItem title="WireShark" level="Basic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;