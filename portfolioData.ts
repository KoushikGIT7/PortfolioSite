
export interface Project {
  id: string;
  title: string;
  impactLine: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
  github?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Internship {
  role: string;
  company: string;
  description: string;
}

export const portfolioData = {
  profile: {
    name: "D Koushik",
    title: "Software Engineer",
    tagline: "I build scalable digital products with clean architecture and real-world impact.",
    summary: "I am a Computer Science student focused on designing and developing scalable web systems. My approach combines structured problem solving, frontend engineering, backend fundamentals, and system-level thinking to build products that solve real-world inefficiencies. I build systems — not just applications.",
    contact: {
      email: "koushikabhi.dev@gmail.com",
      phone: "+91 9110405638",
      linkedin: "https://www.linkedin.com/in/d-koushik-31809a2ba/",
      github: "https://github.com/KoushikGIT7"
    }
  },
  education: [
    { degree: "B.Tech in Computer Science and Engineering", period: "2023–2027" },
    { degree: "Pre-University Course", period: "" },
    { degree: "Schooling", period: "" }
  ],
  skills: [
    {
      category: "Core Stack",
      items: ["HTML5", "CSS3", "JavaScript", "React.js"]
    },
    {
      category: "Backend & Systems",
      items: ["REST APIs", "Database Design", "System Architecture"]
    },
    {
      category: "Engineering Foundations",
      items: ["Problem Solving", "Clean Code", "Data Structures"]
    },
    {
      category: "Tools & AI",
      items: ["Git", "VS Code", "GenAI Workflow", "Prompt Engineering"]
    }
  ],
  projects: [
    {
      id: "joe",
      title: "JOE – Cafeteria Automation System",
      impactLine: "Digital ordering system designed to eliminate queue chaos in institutional cafeterias.",
      tech: ["JavaScript", "React.js", "Database Design"],
      problem: "Manual ordering processes caused long wait times and operational confusion.",
      solution: "Designed structured digital ordering interface with scalable backend planning.",
      impact: "Improved workflow clarity and reduced inefficiencies.",
      github: "https://github.com/KoushikGIT7/JOE-Cafeteria-Automation"
    },
    {
      id: "frookoon",
      title: "Frookoon – Grocery Platform",
      impactLine: "Frontend grocery prototype with scalable architecture vision.",
      tech: ["HTML", "CSS", "JavaScript", "React.js"],
      problem: "Need for structured grocery ordering UI for rapid scalability.",
      solution: "Developed scalable frontend architecture focused on performance and modularity.",
      impact: "Established a production-ready foundation for full-stack expansion.",
      github: "https://github.com/KoushikGIT7/FROOKOON-"
    },
    {
      id: "railtrace",
      title: "Railway Track Management System",
      impactLine: "Hackathon-winning railway scheduling system for real-time tracking.",
      tech: ["Java", "Database Concepts", "System Logic"],
      problem: "Manual railway scheduling led to massive operational inefficiencies and delays.",
      solution: "Designed a structured scheduling system with optimized allocation algorithms.",
      impact: "Won 1st Prize at SIH Internal Hackathon.",
      github: "https://github.com/KoushikGIT7/railtrace2"
    },
    {
      id: "medflare",
      title: "MedFlare – Medical Digitalization",
      impactLine: "Healthcare digital platform to streamline patient record management.",
      tech: ["HTML", "CSS", "JavaScript", "React.js"],
      problem: "Fragmented patient data management causing delays in medical care.",
      solution: "Engineered a solution-focused system architecture for unified medical records.",
      impact: "Increased record accessibility and streamlined clinical workflows.",
      github: "https://github.com/KoushikGIT7"
    },
    {
      id: "tictactoe",
      title: "Logic-Based Games",
      impactLine: "Interactive logic-based web application to strengthen frontend fundamentals.",
      tech: ["JavaScript", "Logic Implementation", "UI Design"],
      problem: "Demonstrating clean logic handling in stateful UI environments.",
      solution: "Built a robust game engine with clean state management practices.",
      impact: "Showcased fundamental engineering principles in a visual environment.",
      github: "https://github.com/KoushikGIT7/Tik-Tac-To-Game"
    }
  ],
  achievements: [
    { title: "SIH Internal Hackathon", description: "Secured 1st Prize for Railway Management System." },
    { title: "GDG Hubli 2K25", description: "Ranked among the Top 15 participants in regional development competition." },
    { title: "Vision Karnataka Startup Exposure", description: "Participated in state-level E-Summit and startup exposure program." }
  ],
  internships: [
    {
      role: "Backend Developer Intern",
      company: "Frookoon",
      description: "Handled API integration, database design, and query optimization for scalable infrastructure."
    },
    {
      role: "AI & Green Skills Intern",
      company: "Campus Internship",
      description: "Explored Python implementation in sustainability and advanced AI-assisted workflows."
    }
  ]
};
