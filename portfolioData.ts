export interface Project {
  id: string;
  title: string;
  category: 'company' | 'engineering';
  badge?: string;
  impactLine: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
  keyFeatures?: string[];
  github?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
  badge?: string;
}

export interface Internship {
  role: string;
  company: string;
  period: string;
  badge?: string;
  description: string;
  highlights?: string[];
}

export interface Pillar {
  area: string;
  title: string;
  detail: string;
}

export const portfolioData = {
  profile: {
    name: "D Koushik",
    title: "Software Engineer & Project Manager",
    tagline: "Architecting scalable enterprise platforms, biometric AI systems, and high-performance digital products.",
    summary: "Software Engineer and Project Manager with hands-on experience architecting and shipping enterprise-grade platforms, 4-tier role-based access systems, and AI-driven solutions. Experienced in leading full lifecycle product delivery—from responsive frontend systems and microservices-ready architectures to biometric verification and automated operations. Focused on clean engineering, measurable operational impact, and high-performance architectures.",
    contact: {
      email: "koushikabhi.dev@gmail.com",
      phone: "+91 9110405638",
      linkedin: "https://www.linkedin.com/in/d-koushik-31809a2ba/",
      github: "https://github.com/KoushikGIT7"
    }
  },
  pillars: [
    {
      area: "Enterprise Architecture",
      title: "Cloud-Native Platforms & 4-Tier RBAC",
      detail: "Designing microservices-ready architectures, granular role permissions (Admin, HR, PM, Employee), and secure operations pipelines."
    },
    {
      area: "AI & Biometrics",
      title: "Facial Recognition & Automation",
      detail: "Implementing @vladmandic/face-api touchless attendance, multi-modal QR/geofenced check-ins, and prompt engineering."
    },
    {
      area: "Interactive Engineering",
      title: "React, TypeScript & 3D / PWA",
      detail: "Building interactive web experiences with Three.js, Framer Motion, and PWA service workers for sub-second loads and zero layout shift."
    },
    {
      area: "Technical Leadership",
      title: "Project Management & Delivery",
      detail: "Orchestrating end-to-end feature lifecycles, cross-functional sprints, executive dashboards, and tamper-resistant audit compliance."
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "TypeScript", "JavaScript (ES6+)", "C"]
    },
    {
      category: "Frontend & Interactive",
      items: ["React.js", "TypeScript", "Three.js", "Framer Motion", "PWA (Service Workers)", "HTML5 / CSS3", "Responsive UI/UX"]
    },
    {
      category: "Enterprise & Systems",
      items: ["4-Tier RBAC", "Microservices-Ready Monolith", "REST APIs", "Database Design", "Audit Trails & Security", "DSA & OOP"]
    },
    {
      category: "AI, Biometrics & Tools",
      items: ["@vladmandic/face-api", "Touchless Biometric AI", "QR Verification", "Antigravity IDE", "Cursor IDE", "Git / GitHub", "Vite"]
    }
  ],
  projects: [
    {
      id: "kalpanaaa-hrms",
      title: "Kalpanaaa HRMS Platform — Enterprise Operations & AI",
      category: "company" as const,
      badge: "Handled Company Project",
      impactLine: "Cloud-native, 4-tier RBAC workforce operations platform featuring touchless AI biometric attendance and automated payroll/leave computation.",
      tech: ["React.js", "TypeScript", "Three.js", "Framer Motion", "Face Recognition AI", "RBAC", "PWA"],
      problem: "Organizations struggled with disjointed employee onboarding, inaccurate manual time-tracking, fragmented permissions, and administrative overhead.",
      solution: "Engineered a unified operations platform with 4-tier role-based access control (Admin, HR, PM, Employee), integrating @vladmandic/face-api for touchless facial recognition, QR verification, geofenced multi-modal check-ins, automated digital ID card generation, and tamper-resistant audit logs.",
      impact: "Delivered sub-second load times via route code-splitting and PWA service workers, automated payroll/leave computation, and centralized company-wide visibility.",
      keyFeatures: [
        "Comprehensive Workforce Lifecycle: Onboarding, directory records, and digital ID card/barcode generation.",
        "Smart Attendance & Leaves: Touchless Face Recognition AI, QR codes, geofenced zones, and automated shift/lateness computation.",
        "Operations & Compliance: Executive dashboards, cross-functional task tracking, automated PDF generation, and tamper-resistant audit logs.",
        "High-Performance UI & PWA: Interactive 3D interface using Three.js and Framer Motion with sub-second page loads."
      ]
    },
    {
      id: "kalpanaaa-finance",
      title: "Kalpanaaa Finance — Digital Wealth & Financing Platform",
      category: "company" as const,
      badge: "Handled Company Project",
      impactLine: "Full-stack enterprise digital wealth and financing platform streamlining corporate lending, investments, and advisory consultations.",
      tech: ["Enterprise Architecture", "React.js", "TypeScript", "Microservices-Ready", "Role-Based Portals", "Financial Workflows"],
      problem: "Corporate financing, loan processing, and personal wealth planning required cumbersome communication and manual verification between clients, advisors, and administrators.",
      solution: "Built an enterprise digital wealth platform engineered with a modern microservices-ready architecture, featuring dedicated role-based portals for Customers, Financial Consultants, and System Administrators.",
      impact: "Streamlined end-to-end loan lifecycles, automated investment planning workflows, and enabled secure expert consultations.",
      keyFeatures: [
        "Dedicated Role-Based Portals: Tailored experiences for Customers, Financial Consultants, and System Administrators.",
        "Corporate Financing & Loan Lifecycle: End-to-end loan application processing, tracking, and risk review pipelines.",
        "Personal Wealth & Investment Planning: Portfolio tracking and structured expert advisory interactions."
      ]
    },
    {
      id: "procurement-os",
      title: "Procurement OS — End-to-End Procurement Management System",
      category: "company" as const,
      badge: "Handled Company Project",
      impactLine: "Centralized procurement management system orchestrating purchase requests, vendor bidding, and multi-tier payment approvals.",
      tech: ["Workflow Engine", "React.js", "State Management", "Multi-Tier RBAC", "Audit Trails", "Enterprise UI"],
      problem: "Decentralized purchasing caused procurement bottlenecks, opaque vendor quotation comparisons, and disorganized approval chains across departments.",
      solution: "Engineered a centralized procurement engine spanning 4 distinct portal workflows: Team Lead, Manager, Finance, and Admin—handling purchase requests, vendor quotations, payments, receipts, and compliance audit trails.",
      impact: "Eliminated purchasing delays, prevented unauthorized expenditures, and established complete transaction transparency.",
      keyFeatures: [
        "4-Stage Approval Chain: Seamless coordination between Team Lead, Manager, Finance, and Admin portals.",
        "Vendor Quotation Management: Centralized bid submission, side-by-side comparison, and award workflows.",
        "Payment Validation & Digital Receipts: Automated digital receipt generation and tamper-resistant audit logs."
      ]
    },
    {
      id: "kucafe",
      title: "KUCafe — Cafeteria Management System",
      category: "engineering" as const,
      badge: "Collaborative Project",
      impactLine: "Digital ordering platform designed to eliminate peak-hour queue chaos in institutional cafeterias.",
      tech: ["React.js", "TypeScript", "AI-Assisted Dev", "Responsive UI", "Cart Engine"],
      problem: "Manual ordering processes caused long wait times, operational confusion, and high order error rates during rush hours.",
      solution: "Collaborated in a 4-member team to build KUCafe's complete frontend using React and TypeScript, implementing landing page, menu browsing, cart, checkout, and user profile workflows with AI-accelerated component structures.",
      impact: "Validated consistent cross-device responsiveness on mobile/desktop with sub-second cart transitions.",
      github: "https://github.com/KoushikGIT7"
    },
    {
      id: "medichain",
      title: "MediChain — Healthcare Management Platform",
      category: "engineering" as const,
      badge: "Collaborative Project",
      impactLine: "Healthcare management platform supporting patient record workflows and clinical data clarity.",
      tech: ["React.js", "TypeScript", "UI/UX Design Systems", "Responsive Architecture"],
      problem: "Fragmented patient health records caused clinical delays and difficult navigation across medical histories.",
      solution: "Collaborated in a 4-member team to engineer MediChain's frontend prototype, owning the overall UI/UX direction, consistent design language, and accessible record workflows across all screens.",
      impact: "Prioritized clinical clarity, ease of use, and frictionless record lookups.",
      github: "https://github.com/KoushikGIT7"
    },
    {
      id: "railtrace",
      title: "Railway Track Management System (RailTrace)",
      category: "engineering" as const,
      badge: "1st Prize Hackathon Winner",
      impactLine: "Hackathon-winning railway scheduling system for real-time track allocation and delay prevention.",
      tech: ["Java", "System Logic", "Database Concepts", "Optimization Algorithms"],
      problem: "Manual railway scheduling and conflicting track allocations caused operational delays and safety risks.",
      solution: "Designed a structured scheduling system with optimized track allocation algorithms and conflict resolution logic.",
      impact: "Awarded 1st Prize at SIH Internal Hackathon (BITM) for technical rigor and operational efficiency.",
      github: "https://github.com/KoushikGIT7/railtrace2"
    },
    {
      id: "tictactoe",
      title: "Interactive Game Engine & State Architecture",
      category: "engineering" as const,
      badge: "Independent Project",
      impactLine: "Independently built logic-based game engine demonstrating clean state management and dynamic DOM handling.",
      tech: ["JavaScript", "DOM Manipulation", "Game Logic", "Responsive Design"],
      problem: "Demonstrating pure algorithmic state handling and dynamic DOM synchronization without external UI libraries.",
      solution: "Engineered game state tracking via arrays, functions, and conditional algorithms, with event-driven dynamic DOM re-rendering.",
      impact: "Zero-dependency, fully responsive interactive engine running at 60 FPS across desktop and mobile.",
      github: "https://github.com/KoushikGIT7/Tik-Tac-To-Game"
    }
  ],
  achievements: [
    { 
      title: "SIH Internal Hackathon (BITM)", 
      badge: "1st Prize Winner",
      description: "Secured 1st Prize for designing and building an intelligent railway asset management and scheduling platform." 
    },
    { 
      title: "GDG Hubli 2K25", 
      badge: "Top 15 Finish",
      description: "Ranked among the Top 15 teams in high-intensity regional hackathon by Google Developer Group (GDG)." 
    },
    { 
      title: "Google Developers Club — Zynex Hackathon 2026", 
      badge: "Top 25 Finalist",
      description: "Selected in Top 25 in Round 1; advanced to compete in Round 2 (offline) in rapid problem solving." 
    },
    { 
      title: "Competitive Prototyping & AI Hackathon", 
      badge: "Team Hackathon Finalist",
      description: "Prototyped innovative team-based software solutions under rapid constraints at regional hackathon (BLDE)." 
    }
  ],
  internships: [
    {
      role: "Project Manager & Software Engineer",
      company: "Kalpanaaa Software Solutions",
      period: "July 2026 – Present",
      badge: "Current Role",
      description: "Driving the architecture, technical project management, and end-to-end development of enterprise operations platforms, biometric AI systems, and role-based business solutions.",
      highlights: [
        "Kalpanaaa HRMS: Engineered cloud-native 4-tier RBAC operations platform (Admin, HR, PM, Employee) managing workforce lifecycle, directory records, and digital ID card/barcode generation.",
        "Biometric AI & Smart Attendance: Integrated @vladmandic/face-api for touchless facial recognition check-ins, QR verification, geofenced tracking, and automated shift/lateness computation.",
        "Executive Analytics & Compliance: Built real-time operations dashboards, cross-functional task tracking, automated PDF document generation, and tamper-resistant audit logs.",
        "High-Performance 3D & PWA: Architected Three.js & Framer Motion UI with route code-splitting and PWA service workers for sub-second loads and zero layout shift."
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "Frookoon",
      period: "Prior Experience",
      badge: "Engineering",
      description: "Handled API integration, database design, and query optimization for scalable data pipelines and commerce infrastructure.",
      highlights: [
        "Engineered modular REST APIs and optimized database schemas for rapid data retrieval.",
        "Collaborated on backend service architecture and structured state models."
      ]
    },
    {
      role: "Software & AI Engineering Intern",
      company: "Industry Specialization Internship",
      period: "Prior Experience",
      badge: "AI Engineering",
      description: "Developed automated data processing pipelines and green AI sustainability algorithms using Python.",
      highlights: [
        "Implemented algorithmic solutions for carbon-aware computation and sustainability benchmarks.",
        "Leveraged modern AI-assisted engineering workflows to accelerate deployment cycles."
      ]
    }
  ]
};
