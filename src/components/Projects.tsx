import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Projects = () => {
  const projectData = [
    {
      title: "Security Research & Analysis",
      description: "Conducted authorized security research to identify potential vulnerabilities in system input handling and network communications. Developed proof-of-concept tools for security testing in controlled environments, leading to improved system hardening recommendations and enhanced security awareness training materials.",
      skills: ["Python", "Network Security", "Security Analysis", "Ethical Hacking"],
      achievements: [
        "Identified and documented critical security vulnerabilities in controlled test environments",
        "Developed comprehensive security assessment methodologies",
        "Created educational materials for security awareness training",
        "Contributed to improving organizational security policies"
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