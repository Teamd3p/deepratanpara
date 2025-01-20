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
            title="TSS Consultancy Services"
            company="Intern"
            duration="Present"
            description="Working as a Data Extractor involves extracting, transforming, and loading (ETL) data from various sources like PDFs, websites, or databases into structured formats like CSV or SQL. It requires skills in Python (BeautifulSoup, Pandas, PyPDF2, OCR) and Flask for APIs if automation is needed."
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
