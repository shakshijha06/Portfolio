// ============================================================
// portfolioData.js — Centralized configuration for Shakshi Jha's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================
export const personalInfo = {
  name: "Shakshi Jha",
  firstName: "Shakshi",
brandName: "SHAKSHI JHA",
  title: "Computer Science Undergraduate",
  location: "Kolkata, India",
  phone: "+91 9073545607",
  emails: {
    primary: "shakshijha06@gmail.com",
  },
  summary:
    "Computer Science undergraduate passionate about building AI-powered full-stack applications. I enjoy combining modern web technologies with Large Language Models (LLMs) to solve real-world problems while continuously learning new skills and growing as a software developer.",
  resumeUrl: "/Resume.pdf",
};
export const socialLinks = {
  github: "https://github.com/shakshijha06",
  linkedin: "https://linkedin.com/in/shakshijha0610",
  email: "mailto:shakshijha06@gmail.com",
};
export const heroContent = {
  greeting: "Hi, I'm Shakshi",

  titleHighlight: "Building AI-Powered Full-Stack Applications",

  subtitle:
    "Computer Science undergraduate passionate about creating practical software solutions with AI and modern web technologies.",

  ctaPrimary: {
    text: "View My Work",
    href: "#projects",
  },

  ctaSecondary: {
    text: "Contact Me",
    href:
      "mailto:shakshijha06@gmail.com?subject=Hiring Inquiry&body=Hello Shakshi,%0D%0A%0D%0AI came across your portfolio and would love to connect with you.%0D%0A%0D%0ABest Regards,",
  },

  ctaResume: {
    text: "Download Resume",
    href: "/Resume.pdf",
  },
};

export const aboutContent = {
  heading: "Hello!",

  bio: `I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shakshi Jha</span>, a Computer Science undergraduate based in Kolkata, India. I enjoy building AI-powered full-stack applications, exploring Large Language Models (LLMs), and creating software that solves real-world problems while continuously learning and improving my skills.`,

  techStack: [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "FastAPI",
    
  ],
};

export const skillsContent = {
  badge: "My Approach",

  heading: "How I Build",

  description:
    "I turn ideas into practical applications through research, thoughtful planning, continuous development, and constant learning.",

  cards: [
    {
      number: "01",
      title: "Research",
      text: "Understand the problem, user needs, and choose the right technologies.",
    },

    {
      number: "02",
      title: "Plan",
      text: "Design the architecture, user experience, and development roadmap.",
    },

    {
      number: "03",
      title: "Build",
      text: "Develop responsive applications with clean, maintainable code.",
    },

    {
      number: "04",
      title: "Improve",
      text: "Test, refine, learn from feedback, and keep improving every project.",
    },
  ],

  endText: "Always learning. Always building.",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 75 },
      { name: "Java", level: 65 },
            { name: "C", level: 65 },

      { name: "JavaScript", level: 65 }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "React", level: 60 }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "FastAPI", level: 55 },
      { name: "Node.js", level: 55 },
      { name: "Firebase", level: 70 }
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Prompt Engineering", level: 60 },
      { name: "OpenAI API", level: 55 },
      { name: "Scikit-learn", level: 50 },
      { name: "LLMs", level: 50 }
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 85 },
      { name: "Vercel", level: 85 },
      { name: "Render", level: 80 },
      
    ]
  }
]};
export const hobbies = {
  badge: "Beyond Code",

  heading: "Things I Love Outside Technology",

  description:
    "Apart from building software, I enjoy creative activities that help me relax and explore new ideas.",

  categories: [
    {
      title: "Cooking",
      icon: "🍳",
      description:
        "I enjoy experimenting with recipes and exploring different cuisines.",
    },
    {
      title: "Drawing",
      icon: "🎨",
      description:
        "Drawing allows me to express creativity and take a break from technical work.",
    },
  ],
};

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "InAmigos Foundation",
    role: "Web Development Intern",
    duration: "July 2026 – Present",
    mode: "Hybrid",

    skills: [
      "Developing responsive NGO awareness websites",
      "Building reusable frontend components",
      "Improving UI/UX and accessibility",
      "Collaborating with the development team"
    ],

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vercel"
    ],

    description:
      "Developing responsive and accessible web interfaces for the organization's digital presence while collaborating with the development team to improve user experience and functionality."
  },


  {
    organization:
      "IEDC Summer Internship 2026, CSE Data Science, IEM Kolkata",

    role: "AI Research Intern",

    duration: "May 15, 2026 – July 3, 2026",

    mode: "Hybrid",

    skills: [
      "Developed Adaptive Reasoning Router (ARR)",
      "Designed training-free multi-persona reasoning framework",
      "Experimented with LLM reasoning strategies",
      "Collaborated on AI research and evaluation"
    ],

    tech: [
      "Python",
      "Transformers",
      "Large Language Models"
    ],

    description:
      "Worked as part of a research team to develop the Adaptive Reasoning Router (ARR), a training-free multi-persona reasoning framework that dynamically selects specialized reasoning strategies using diagnostic feedback to improve large language model reasoning."
  },


  {
    organization: "CSE IDC, IEM Kolkata",

    role: "Deep Learning Research Intern",

    duration: "May 18, 2026 – July 25, 2026",

    mode: "Hybrid",

    skills: [
      "Built MRI-based brain tumor classification pipeline",
      "Applied transfer learning using EfficientNetB0",
      "Implemented explainable AI visualization methods",
      "Evaluated model performance using ML metrics"
    ],

    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "EfficientNetB0",
      "Scikit-learn"
    ],

    description:
      "Developed a deep learning pipeline for brain tumor classification from MRI images using transfer learning with EfficientNetB0 and evaluated explainability through Grad-CAM, Grad-CAM++, Score-CAM, and Layer-CAM visualizations."
  }
];
// Brand New Soft Skills Data
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex problems and designing efficient technical solutions."
  },
  {
    name: "Research Mindset",
    icon: "🔬",
    desc: "Exploring AI concepts, reading papers, and experimenting with emerging technologies."
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working effectively with teams through communication, feedback, and shared goals."
  },
  {
    name: "Adaptability",
    icon: "⚡",
    desc: "Quickly learning new tools, frameworks, and technologies in fast-changing environments."
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Clearly presenting ideas, technical concepts, and project outcomes."
  },
  {
    name: "Leadership",
    icon: "🚀",
    desc: "Taking ownership of tasks and coordinating work towards project goals."
  },
  {
    name: "Attention to Detail",
    icon: "🎯",
    desc: "Building reliable solutions by focusing on quality and accuracy."
  },
  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Consistently improving skills through projects, research, and practice."
  }
];
export const projects = [
  {
    id: "healthbirch",
    number: "01",
    badge: "AI Healthcare Platform",
    title: "HEALTHBIRCH",
    description:
      "An AI-assisted telemedicine platform designed to improve healthcare accessibility through digital consultations, patient onboarding, intelligent triage workflows, appointment management, and secure medical record handling. The platform combines a modern React interface with FastAPI services, Firebase infrastructure, and Gemini-powered AI assistance.",
    techTags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Firebase",
      "Firestore",
      "Gemini API",
      "Vercel",
      "Render",
    ],
    links: {
      github: "https://github.com/shakshijha06/healthbirch",
      demo: "https://healthbirch.vercel.app/",
    },
    isFlagship: false,
  },

  {
    id: "thrivevo",
    number: "02",
    badge: "AI Learning Platform",
    title: "Thrivevo",
    description:
      "A smart AI-powered study planning and productivity platform designed to help students organize subjects, manage study missions, track learning progress, and build effective preparation routines through a personalized experience.",
    techTags: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Framer Motion",
      "Vercel",
    ],
    links: {
      github: "https://github.com/shakshijha06/thrivevo",
      demo: "https://thrivevo.vercel.app/",
    },
    isFlagship: false,
  },

  {
    id: "aspira",
    number: "03",
    badge: "Multi-Agent AI System • Group Project • Ongoing",
    title: "Aspira",
    description:
      "A multi-agent AI examination platform developed as a group project. The system focuses on personalized assessment generation, intelligent evaluation, and adaptive learning support using AI-driven workflows.",
    techTags: [
      "React",
      "FastAPI",
      "AI Agents",
      "Firebase",
      "Python",
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },

  {
    id: "cognition-lab",
    number: "04",
    badge: "AI Research Platform • Ongoing",
    title: "Cognition Lab",
    description:
      "An AI-powered Research Intelligence Platform designed to transform research papers into structured knowledge schemas. The platform aims to automate paper understanding by extracting methodologies, datasets, contributions, limitations, and enabling cross-paper analysis through AI-assisted workflows.",
    techTags: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "Firebase",
      "Firestore",
      "Gemini API",
      "Pydantic",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
    status: "Ongoing",
  },
];
export const certificates = {
  featured: [
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud Skills Boost",
      icon: "🤖",
    },
    {
      name: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google Cloud Skills Boost",
      icon: "☁️",
    },
    {
      name: "Build Serverless Applications",
      issuer: "Microsoft",
      icon: "⚡",
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      icon: "📊",
    },
  ],

  viewAllUrl:
    "https://drive.google.com/drive/folders/11I-bnn1G0UwIt5U9DPCsViCLWUBBrJm-?usp=sharing",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "University of Engineering and Management (UEM), Kolkata",
  cgpa: "8.40",
  graduation: "2028",
  twelfth: "ISC (Science) – 90%",
  tenth: "ICSE – 88%",
  school: "Calcutta Public School, Kolkata",
};
export const footerContent = {
  taglines: [
    "AI & Software Development",
    "React · Python · Machine Learning",
    "Building Intelligent Applications",
  ],

  credential: "B.Tech CSE · CGPA 8.35",

  copyright: `© ${new Date().getFullYear()} Shakshi Jha | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
