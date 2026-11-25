// Single place to edit everything shown on the site.

export const profile = {
  name: "Deep Ratanpara",
  firstName: "Deep",
  role: "Backend Engineer",
  tagline: "I build reliable backend systems with Java, Spring Boot & SQL",
  location: "Bangalore, Karnataka, India",
  email: "ratanparadeep3108@gmail.com",
  phone: "+91 98700 12628",
  phoneHref: "+919870012628",
  github: "https://github.com/Teamd3p",
  linkedin: "https://www.linkedin.com/in/deep-ratanpara-a87810269/",
  instagram: "https://www.instagram.com/cityboy__d3p?utm_source=qr&igsh=dDU1cGJ0MjU2MzJo",
  resume: "/lovable-uploads/Deep_Resume.pdf",
  // Swap this file to change the profile photo.
  photo: "/images/profile.jpg",
  heroImage: "/lovable-uploads/9eecee0c-ca57-43da-b041-7d12a7763ce2.png",
};

export const about = [
  "I'm Deep, a backend engineer who enjoys designing APIs, validation pipelines and data-heavy services that hold up in production.",
  "At TSS Consultancy Services I owned the Data Validation feature of the CKYC platform end to end, from design to release, and made it run on both PostgreSQL and MySQL from one codebase. I'm now an Engineer at Tata Elxsi.",
  "My background in security (two filed patents, VAPT, OWASP) shapes how I write backend code: validate early, log everything, trust nothing.",
];

export const stats = [
  { value: "~2 yrs", label: "Industry experience" },
  { value: "2", label: "Patents filed" },
  { value: "8.0", label: "B.Tech CS CGPA" },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export const work: Job[] = [
  {
    company: "Tata Elxsi",
    role: "Engineer",
    period: "Jun 2026 – Present",
    current: true,
    points: [
      "Avionics Business Unit, working on aircraft weather radar and radar display systems.",
      "Develop and analyse requirements for airborne weather radar: radar data processing, visualisation and cockpit display functions.",
    ],
    tags: ["Avionics", "Requirements", "Radar Systems"],
  },
  {
    company: "TSS Consultancy Services",
    role: "Associate Software Engineer Intern",
    period: "Jun 2025 – May 2026",
    points: [
      "Built the complete Data Validation feature for the CKYC (Central KYC Records Registry) platform, owning it from design through release.",
      "Wrote backend validation logic in Java and C# enforcing data quality and compliance rules on KYC records before submission.",
      "Made the feature database-agnostic: one code path for both PostgreSQL and MySQL.",
      "Optimised SQL used in validation and retrieval workflows, speeding up processing on large KYC datasets.",
      "Traced and fixed client-reported production bugs across the application and database layers.",
    ],
    tags: ["Java", "C#", "PostgreSQL", "MySQL", "SQL Tuning"],
  },
  {
    company: "TSS Consultancy Services",
    role: "Data Extractor Intern",
    period: "Jan 2025 – May 2025",
    points: [
      "ETL from PDFs, websites and databases into structured CSV and SQL.",
      "Python extraction scripts with Pandas, BeautifulSoup, PyPDF2 and OCR for scanned documents.",
      "Flask APIs to automate the extraction workflows.",
    ],
    tags: ["Python", "Flask", "Pandas", "ETL"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "C#", "Python", "SQL", "JavaScript"] },
  { group: "Backend", items: ["Spring Boot", "REST APIs", "JWT Auth", "Flask", "Modular architecture"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "Query optimisation", "DB-agnostic design"] },
  { group: "Tools", items: ["Git & GitHub", "Linux (Ubuntu)", "Pandas", "OCR / PyPDF2"] },
  { group: "Security", items: ["OWASP Top 10", "VAPT", "Burp Suite", "OWASP ZAP", "Nmap"] },
];

export type Project = {
  title: string;
  subtitle: string;
  image: string;
  points: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "AML System",
    subtitle: "Anti-Money Laundering Platform",
    image: "/images/project-aml.svg",
    points: [
      "Real-time transaction monitoring with a multi-layered rule engine and KYC integration.",
      "Alert management, SAR reporting and compliance dashboards with full audit logging.",
      "Customer risk profiling and country risk management.",
    ],
    tags: ["Spring Boot", "PostgreSQL", "Rule Engine", "Audit Logging"],
  },
  {
    title: "Loan Screening",
    subtitle: "Fraud Detection & Risk Assessment",
    image: "/images/project-loan.svg",
    points: [
      "Automated loan screening backend with external API-based fraud detection.",
      "Risk scoring, audit trails and a JWT-secured multi-role workflow.",
      "Modular Spring Boot architecture with RESTful APIs.",
    ],
    tags: ["Java", "Spring Boot", "JWT", "REST"],
  },
  {
    title: "CKYC Data Validation",
    subtitle: "Production feature · TSS Consultancy",
    image: "/images/project-ckyc.svg",
    points: [
      "Validation engine enforcing compliance rules on KYC records before submission.",
      "Database-agnostic: runs on PostgreSQL and MySQL without separate code paths.",
      "Tuned SQL for large datasets; shipped and supported in production.",
    ],
    tags: ["Java", "C#", "PostgreSQL", "MySQL"],
  },
];

export const patents = [
  {
    title: "DotDash Data Protection System",
    number: "202521040563",
    text: "Random binary-tree cryptography with Morse-code-like obfuscation, secure key generation and storage, and a UI for encryption and decryption.",
  },
  {
    title: "Personal Security and Inspection Device",
    number: "202621006609",
    text: "Real-time threat detection with facial recognition, identity verification and controlled access workflows.",
  },
];

export const education = [
  { title: "B.Tech in Computer Science", place: "Marwadi University (NAAC A+), Rajkot", score: "CGPA 8.0 / 10" },
  { title: "Class XII", place: "Dholakiya School, Rajkot", score: "7.0" },
  { title: "Class X", place: "Dholakiya School, Rajkot", score: "8.0" },
];

export const activities = [
  "Administrator, Cybersecurity Club, Marwadi University: teach web app pen-testing to juniors",
  "Member, Programming Club: problem solving and competitive programming",
  "Certification: Python Data Structures",
  "Lab research: keylogger & phishing simulation to document detection gaps",
];
