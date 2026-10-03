const farmyImg = "/assets/farmy-poster.webp";
const farmyOsImg = "/assets/FarmyOS-Poster.webp";
const cropHealImg = "/assets/CropHeal-AI-Banner.webp";
const gramTarakkiImg = "/assets/GTFoundation-Banner.webp";

/**
 * Single place to edit all site content.
 */

export const profile = {
  name: "Riyajul Saha",
  initials: "RS.",
  role: "Software Engineer & Product Builder",
  headline: "I build modern web & mobile applications with clean UI and scalable systems.",
  bio: "I design and ship end-to-end products — from interface and interaction to APIs, data and deployment. Currently focused on commerce platforms, cross-platform mobile apps and applied machine learning.",
  status: "Available for opportunities",
  email: "riyajul@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
};

export type Capability = {
  index: string;
  title: string;
  description: string;
  icon: "web" | "mobile" | "ai" | "backend";
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Web Development",
    description: "Modern responsive web applications",
    icon: "web",
  },
  {
    index: "02",
    title: "Mobile Development",
    description: "Cross-platform Android applications",
    icon: "mobile",
  },
  {
    index: "03",
    title: "AI / Machine Learning",
    description: "Intelligent, data-driven applications",
    icon: "ai",
  },
  {
    index: "04",
    title: "Backend & APIs",
    description: "Secure and scalable backend systems",
    icon: "backend",
  },
];

export type Skill = { name: string; usedFor: string[] };
export type SkillCategory = { category: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "C", usedFor: ["Systems", "DSA"] },
      { name: "Python", usedFor: ["AI/ML", "Backend", "Automation"] },
      { name: "Java", usedFor: ["OOP", "Android"] },
      { name: "C++", usedFor: ["DSA", "Competitive"] },
    ],
  },
  {
    category: "Web",
    skills: [
      { name: "HTML", usedFor: ["Structure", "Semantics"] },
      { name: "CSS", usedFor: ["Layout", "Design systems"] },
      { name: "JavaScript", usedFor: ["Web", "Interactivity"] },
      { name: "React", usedFor: ["UI", "SPA", "Dashboards"] },
      { name: "Node.js", usedFor: ["APIs", "Services"] },
      { name: "Flask", usedFor: ["ML serving", "APIs"] },
      { name: "PHP", usedFor: ["Server rendering"] },
      { name: "REST API", usedFor: ["Integration", "Mobile"] },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native", usedFor: ["Cross-platform apps"] },
      { name: "Expo", usedFor: ["Builds", "OTA updates"] },
      { name: "Android", usedFor: ["Native builds", "APK"] },
    ],
  },
  {
    category: "Database & Backend",
    skills: [
      { name: "MySQL", usedFor: ["Relational data"] },
      { name: "PostgreSQL", usedFor: ["Production data"] },
      { name: "Supabase", usedFor: ["Auth", "Realtime", "Storage"] },
      { name: "MongoDB", usedFor: ["Document data"] },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "Python", usedFor: ["Modelling", "Pipelines"] },
      { name: "NumPy", usedFor: ["Arrays", "Math"] },
      { name: "Pandas", usedFor: ["Data wrangling"] },
      { name: "Scikit-learn", usedFor: ["Classical ML"] },
      { name: "TensorFlow", usedFor: ["Deep learning"] },
      { name: "OpenCV", usedFor: ["Vision", "Preprocessing"] },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", usedFor: ["Versioning"] },
      { name: "GitHub", usedFor: ["Collaboration", "CI"] },
      { name: "Docker", usedFor: ["Containers", "Deploys"] },
      { name: "Linux", usedFor: ["Servers", "Shell"] },
      { name: "Vercel", usedFor: ["Frontend hosting"] },
      { name: "Render", usedFor: ["Backend hosting"] },
      { name: "Jupyter", usedFor: ["Experiments"] },
      { name: "VS Code", usedFor: ["Development"] },
    ],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2026",
    title: "ML Internship",
    org: "Ardent Computech",
    description: "Built and evaluated supervised models, data pipelines and reporting notebooks.",
  },
  {
    period: "2026",
    title: "Web Developer Intern",
    org: "Gram Tarakki Foundation",
    description: "Shipped the foundation's public website and content workflow end to end.",
  },
  {
    period: "2026",
    title: "Hackathon",
    org: "CropHeal-AI",
    description: "Prototyped an AI crop disease detector with a vision model and web client.",
  },
];

export type ProjectType = "Web" | "Mobile" | "AI/ML" | "Full Stack";

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  type: ProjectType;
  tech: string[];
  features: string[];
  featured?: boolean;
  links: {
    website?: string;
    apk?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    id: "farmy",
    name: "Farmy",
    category: "Modern Fruit E-Commerce Platform",
    description:
      "A full-stack commerce platform for fresh produce with discovery, cart, checkout and order management.",
    longDescription:
      "Farmy is a production-grade commerce platform for fresh produce. It covers the full journey — browsing and search, wishlists, cart and checkout, order history and delivery tracking — backed by a secure API and role-based admin tooling for inventory and orders.",
    image: farmyImg,
    type: "Full Stack",
    tech: ["React", "Node.js", "PostgreSQL", "Supabase", "Tailwind"],
    features: [
      "Product discovery and search",
      "Wishlist",
      "Cart and checkout",
      "Order management",
      "Delivery tracking",
      "Admin inventory dashboard",
    ],
    featured: true,
    links: {
      website: "https://example.com/farmy",
      apk: "https://example.com/farmy.apk",
      github: "https://github.com/",
    },
  },
  {
    id: "farmyy-os",
    name: "Farmyy-OS",
    category: "Delivery & Order Operations App",
    description:
      "Cross-platform Android app for order operations — live status, assignment and delivery tracking.",
    longDescription:
      "Farmyy-OS is the operations companion to Farmy. Delivery partners and store staff manage incoming orders, update fulfilment stages and track live deliveries, all from a single offline-tolerant mobile app.",
    image: farmyOsImg,
    type: "Mobile",
    tech: ["React Native", "Expo", "Supabase", "REST API"],
    features: [
      "Order queue and assignment",
      "Live delivery tracking",
      "Push status updates",
      "Offline-tolerant sync",
    ],
    links: {
      apk: "https://example.com/farmyy-os.apk",
      github: "https://github.com/",
    },
  },
  {
    id: "cropheal-ai",
    name: "CropHeal-AI",
    category: "AI Crop Disease Detection",
    description:
      "Vision model that classifies crop leaf disease from a photo and returns treatment guidance.",
    longDescription:
      "CropHeal-AI lets a farmer photograph a leaf and receive an instant diagnosis with confidence scores and care recommendations. A convolutional model served through a Flask API powers the predictions, with a lightweight web client for upload and results.",
    image: cropHealImg,
    type: "AI/ML",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
    features: [
      "Leaf image upload",
      "Disease classification with confidence",
      "Class probability breakdown",
      "Care and treatment tips",
    ],
    links: {
      website: "https://example.com/cropheal",
      github: "https://github.com/",
    },
  },
  {
    id: "gram-tarakki",
    name: "Gram Tarakki Foundation",
    category: "Non-Profit Website & CMS",
    description:
      "Public website for a rural development foundation with programs, stories and donations.",
    longDescription:
      "A fast, accessible website for a rural development foundation. It presents programs and impact stories, accepts donations, and gives the team a simple editable content structure so campaigns can ship without a developer.",
    image: gramTarakkiImg,
    type: "Web",
    tech: ["React", "Tailwind", "Node.js", "MySQL"],
    features: [
      "Program and story pages",
      "Donation flow",
      "Editable content structure",
      "Accessible, responsive layout",
    ],
    links: {
      website: "https://example.com/gram-tarakki",
    },
  },
];

export const projectFilters = ["All", "Web", "Mobile", "AI/ML", "Full Stack"] as const;
