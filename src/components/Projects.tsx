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
      title: "Advanced Keylogger and Phishing Attack",
      description: "Developed an efficient keylogging system to monitor user input for security analysis, ensuring 100% accuracy and seamless deployment. Designed and executed a delivery mechanism that guaranteed proper installation on target devices while establishing a secure backdoor communication channel for real-time monitoring. This project showcased expertise in penetration testing and ethical hacking, focusing on identifying vulnerabilities and strengthening cybersecurity defenses in controlled, ethical environments.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      skills: ["Python", "Network Security", "Ethical Hacking", "System Analysis"],
      achievements: []
    },
    {
      title: "Hybrid Encryption Algorithm with Morse Code | Design and Developed my Me",
      description: "Developed a custom hybrid algorithm combining encryption and hashing techniques to enhance security in authentication systems. This innovative solution integrates Digital Signature Algorithm (DSA) with Morse code encoding, creating a unique layer of complexity that significantly strengthens data protection. The design ensures robust resistance to brute-force attacks, leveraging the combined power of cryptographic hashing and unconventional encoding. This project highlights expertise in advanced cryptographic methodologies, showcasing the ability to design secure, cutting-edge solutions tailored to modern cybersecurity challenges. It reflects a commitment to innovation in developing highly secure and reliable authentication systems.",
      image: "/lovable-uploads/8b38981f-71d6-4aac-8701-ade1265da9d9.png",
      skills: ["Cryptography", "Algorithm Design", "Security Engineering", "Authentication Systems"],
      achievements: []
    },
    {
      title: "Network Traffic Analyzer",
      description: "Created a network monitoring tool for analyzing and visualizing network traffic patterns to detect potential security threats.",
      skills: ["Python", "Network Analysis", "Data Visualization", "Threat Detection"],
      achievements: []
    },
    {
      title: "DNA-Based Cryptographic Encryption with RSA Key Exchange for Secure Communication",
      description: "This project introduces an innovative encryption method leveraging DNA cryptography combined with the RSA key exchange algorithm for enhanced data security. The technique converts text into ASCII, translates it to DNA sequences, and applies a unique key-based transformation involving subsequence selection and swaps. The encrypted data is transmitted securely and decrypted at the receiver's end to retrieve the original message. With minimal computational overhead, this method ensures high efficiency and secrecy. Security analysis, including frequency analysis, Friedman randomness tests, and RSA evaluation, demonstrates the robustness of the proposed approach against potential threats, making it a viable solution for secure communication.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
      skills: ["DNA Cryptography", "RSA Algorithm", "Security Analysis", "Encryption Systems"],
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