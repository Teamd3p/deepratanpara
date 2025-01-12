import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Projects = () => {
  const projectData = [
    {
      title: "Advanced Keylogger and Phishing Attack Implementation",
      description: "Developed an efficient keylogging system to monitor user input for security analysis, ensuring 100% accuracy and seamless deployment. Designed and executed a delivery mechanism that guaranteed proper installation on target devices while establishing a secure backdoor communication channel for real-time monitoring.",
      skills: ["Python", "Network Security", "Ethical Hacking", "System Analysis"],
      achievements: [
        "Developed sophisticated monitoring system",
        "Implemented secure communication channels",
        "Achieved 100% deployment success rate",
        "Created detailed documentation and analysis reports"
      ]
    },
    {
      title: "Web Application Security Scanner",
      description: "Developed an automated security scanning tool to identify common web vulnerabilities and security misconfigurations in web applications.",
      skills: ["Python", "Web Security", "Automation", "API Testing"],
      achievements: [
        "Automated detection of XSS, SQL injection, and CSRF vulnerabilities",
        "Implemented custom security rules and checks",
        "Reduced manual testing time by 60%",
        "Generated detailed security reports"
      ]
    },
    {
      title: "Network Traffic Analyzer",
      description: "Created a network monitoring tool for analyzing and visualizing network traffic patterns to detect potential security threats.",
      skills: ["Python", "Network Analysis", "Data Visualization", "Threat Detection"],
      achievements: [
        "Real-time traffic monitoring and analysis",
        "Pattern recognition for anomaly detection",
        "Custom alert system for suspicious activities",
        "Interactive dashboard for traffic visualization"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;