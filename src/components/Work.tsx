const WorkItem = ({ title, company, duration, description }: { 
  title: string;
  company: string;
  duration: string;
  description: string;
}) => (
  <div className="mb-12">
    <h3 className="text-2xl font-medium mb-2 text-primary">{title}</h3>
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xl text-gray-600">{company}</span>
      <span className="text-gray-400">•</span>
      <span className="text-gray-400">{duration}</span>
    </div>
    <p className="text-gray-600">{description}</p>
    <div className="mt-4 h-[1px] bg-primary/20"></div>
  </div>
);

const Work = () => {
  return (
    <section id="work" className="py-20 bg-background text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4 text-primary">Work Experience</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <WorkItem 
            title="Cyber Security Analyst"
            company="Freelancer"
            duration="2022 - Present"
            description="Working as a freelance security analyst, conducting penetration testing, vulnerability assessments, and implementing security solutions for various clients. Specializing in web application security and network infrastructure protection."
          />
          <WorkItem 
            title="Security Researcher"
            company="Independent"
            duration="2021 - 2022"
            description="Conducted independent security research focusing on emerging threats and vulnerabilities. Developed and tested new security tools and methodologies for improving cyber defense mechanisms."
          />
        </div>
      </div>
    </section>
  );
};

export default Work;