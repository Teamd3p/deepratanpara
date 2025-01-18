import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

const Projects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});

  const toggleDescription = (index: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projectData = [
    {
      title: "Web Dev | Secured Application",
      description: "Designed and implemented a simulated web application project focused on security testing and hardening. The project involved developing a web app and then executing penetration testing using Kali Linux tools and the Metasploit framework. Conducted vulnerability assessments, exploited security flaws, and implemented secure coding practices to mitigate risks. Key areas tested included SQL Injection, Cross-Site Scripting (XSS), Broken Authentication, and Server Misconfigurations. The project enhanced expertise in ethical hacking, web application security, and secure development lifecycle (SDLC), ensuring robust security measures in web applications against real-world cyber threats.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      skills: ["Web Security", "Penetration Testing", "Ethical Hacking", "Secure Development"],
      achievements: []
    },
    {
      title: "Web Dev | Secured Application",
      description: "Designed and implemented a simulated web application project focused on security testing and hardening. The project involved developing a web app and then executing penetration testing using Kali Linux tools and the Metasploit framework. Conducted vulnerability assessments, exploited security flaws, and implemented secure coding practices to mitigate risks. Key areas tested included SQL Injection, Cross-Site Scripting (XSS), Broken Authentication, and Server Misconfigurations. The project enhanced expertise in ethical hacking, web application security, and secure development lifecycle (SDLC), ensuring robust security measures in web applications against real-world cyber threats.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      skills: ["Web Security", "Penetration Testing", "Ethical Hacking", "Secure Development"],
      achievements: []
    },
    {
      title: "Web Dev | Secured Application",
      description: "Designed and implemented a simulated web application project focused on security testing and hardening. The project involved developing a web app and then executing penetration testing using Kali Linux tools and the Metasploit framework. Conducted vulnerability assessments, exploited security flaws, and implemented secure coding practices to mitigate risks. Key areas tested included SQL Injection, Cross-Site Scripting (XSS), Broken Authentication, and Server Misconfigurations. The project enhanced expertise in ethical hacking, web application security, and secure development lifecycle (SDLC), ensuring robust security measures in web applications against real-world cyber threats.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      skills: ["Web Security", "Penetration Testing", "Ethical Hacking", "Secure Development"],
      achievements: []
    },
    {
      title: "Advanced Keylogger and Phishing Attack",
      description: "Developed an efficient keylogging system to monitor user input for security analysis, ensuring 100% accuracy and seamless deployment. Designed and executed a delivery mechanism that guaranteed proper installation on target devices while establishing a secure backdoor communication channel for real-time monitoring. This project showcased expertise in penetration testing and ethical hacking, focusing on identifying vulnerabilities and strengthening cybersecurity defenses in controlled, ethical environments.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      skills: ["Python", "Network Security", "Ethical Hacking", "System Analysis"],
      achievements: []
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-6">Projects</h2>
        <p className="text-center font-bold text-lg mb-12">
          I prioritize quality over quantity, choosing to work on fewer projects that truly make a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {project.image && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <div className="relative">
                  <p className="text-gray-600 mb-4">
                    {expandedDescriptions[index] 
                      ? project.description
                      : `${project.description.slice(0, 150)}...`}
                    <button 
                      onClick={() => toggleDescription(index)}
                      className="inline-flex items-center ml-2 text-blue-500 hover:text-blue-700"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </p>
                </div>
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