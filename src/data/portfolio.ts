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
  email: "riyajsaha879@gmail.com",
  github: "https://github.com/riyajul-saha/",
  linkedin: "https://www.linkedin.com/in/riyajul-saha-linkdin/",
};

export type AboutDomain = {
  label: string;
  icon: "web" | "mobile" | "ai" | "backend";
  description: string;
};

export type AboutHighlight = {
  id: string;
  title: string;
  project: string;
  type: string;
  description: string;
  icon: "ecommerce" | "operations" | "ai" | "ngo";
};

export const aboutData = {
  heading: "About Me",
  tagline:
    "Computer Science student and software developer focused on building practical digital products.",
  paragraphs: [
    "I'm Riyajul Saha, a Computer Science student and software developer focused on building practical digital products.",
    "I work across web development, cross-platform mobile applications, backend systems, and applied machine learning. My projects include an e-commerce platform, an operations app, an AI-based crop disease detection system, and a website for a non-profit organization.",
    "I enjoy taking ideas from concept to implementation, connecting interfaces with backend services, and improving products through hands-on development.",
  ],
  domains: [
    {
      label: "Web Development",
      icon: "web",
      description: "Modern, responsive, user-focused web apps",
    },
    {
      label: "Mobile Development",
      icon: "mobile",
      description: "Cross-platform mobile apps for real-world tasks",
    },
    {
      label: "Backend Systems",
      icon: "backend",
      description: "APIs, database architecture, and server logic",
    },
    {
      label: "Applied Machine Learning",
      icon: "ai",
      description: "Computer vision and intelligent models",
    },
  ] as AboutDomain[],
  highlights: [
    {
      id: "farmy",
      title: "E-Commerce Platform",
      project: "Farmy",
      type: "Full Stack Web & Admin",
      description:
        "Full-stack commerce platform for fresh produce with cart, checkout, delivery tracking and role-based inventory admin.",
      icon: "ecommerce",
    },
    {
      id: "farmyy-os",
      title: "Administration & Operations Platform",
      project: "FarmyOS",
      type: "Cross-Platform Mobile & APIs",
      description:
        "Centralized administration platform coordinating fruit inventory, orders, deliveries, staff, and promotional campaigns.",
      icon: "operations",
    },
    {
      id: "cropheal-ai",
      title: "AI Crop Disease Detection",
      project: "CropHeal AI",
      type: "Computer Vision & Multi-LLM",
      description:
        "ResNet50 vision model and multi-LLM diagnostic engine delivering real-time leaf disease identification and treatment plans.",
      icon: "ai",
    },
    {
      id: "gram-tarakki",
      title: "Non-Profit Web Platform",
      project: "Gram Tarakki Foundation",
      type: "Python Flask & MySQL",
      description:
        "Public web platform powering community initiatives, volunteer workflows, certificate verification, and Razorpay donations.",
      icon: "ngo",
    },
  ] as AboutHighlight[],
  stats: [
    { value: "4+", label: "Flagship Projects", sub: "Web, Mobile & AI" },
    { value: "CS", label: "Student & Engineer", sub: "Practical focus" },
    { value: "End-to-End", label: "Full Lifecycle", sub: "Ideation to deploy" },
    { value: "Hands-on", label: "Product Mindset", sub: "Interface to backend" },
  ],
  pillars: [
    {
      num: "01",
      title: "Concept to Implementation",
      description:
        "Transforming abstract ideas into functional, intuitive, and deployable software architectures.",
    },
    {
      num: "02",
      title: "Interface & Backend Synergy",
      description:
        "Bridging sleek UI with robust APIs, responsive databases, and intelligent services.",
    },
    {
      num: "03",
      title: "Hands-On Continuous Refinement",
      description:
        "Iterating directly through code, user feedback, performance optimization, and testing.",
    },
  ],
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
      { name: "Colab", usedFor: ["Cloud GPU", "Notebooks"] },
      { name: "Kaggle", usedFor: ["Datasets", "Competitions"] },
      { name: "Hugging Face", usedFor: ["Models", "Inference"] },
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
  overview?: string;
  problem?: string;
  contribution?: string;
  technicalImplementation?: string;
  challengesAndSolutions?: string;
  currentStatus?: string;
};

export const projects: Project[] = [
  {
    id: "farmy",
    name: "Farmy",
    category: "Fruit E-Commerce & Delivery Platform",
    description:
      "A fruit-focused e-commerce platform designed to simplify online fruit shopping with modern mobile browsing, offers, and order management.",
    longDescription:
      "Farmy is a fruit-focused e-commerce platform designed to simplify online fruit shopping by providing users with a convenient way to explore products, compare prices, discover offers, and manage their orders through a modern mobile shopping experience.",
    image: farmyImg,
    type: "Full Stack",
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "Cloudinary",
      "Argon2",
      "REST API",
    ],
    features: [
      "Fruit-focused product browsing and product details.",
      "Product pricing, discounts, and promotional offers.",
      "Shopping cart and wishlist functionality.",
      "User authentication and account management.",
      "Order placement and order management.",
      "Delivery-related workflows and user-friendly navigation.",
      "Cloud-based product image storage.",
      "PostgreSQL-backed data management.",
    ],
    overview:
      "Farmy is a fruit-focused e-commerce platform designed to simplify online fruit shopping by providing users with a convenient way to explore products, compare prices, discover offers, and manage their orders through a modern mobile shopping experience.",
    problem:
      "Traditional fruit shopping often lacks the convenience of online ordering, transparent product pricing, organized offers, and a streamlined digital shopping experience. Farmy aims to address these challenges through an integrated fruit-shopping and delivery platform.",
    contribution:
      "Independently designed and developed the complete application, from initial concept to implementation. I handled system design, feature ideation, user experience research, interface design, frontend and backend development, database integration, authentication, and overall application architecture. I independently researched user needs and translated them into practical features and user-friendly workflows.",
    technicalImplementation:
      "Built the mobile frontend using React Native and Expo, with Node.js and Express.js powering the backend REST APIs. Used Supabase PostgreSQL for relational data management, Cloudinary for cloud-based image storage, and Argon2 for secure password hashing. Designed the client-server architecture to separate frontend interactions, backend business logic, and persistent data storage.",
    challengesAndSolutions:
      "One of the key engineering challenges was integrating multiple technologies into a cohesive application while maintaining a consistent user experience. I addressed this by separating the frontend, backend APIs, database, and image storage into distinct layers, making the system easier to maintain, debug, and extend.",
    currentStatus:
      "Active Development — the core application and its supporting systems are being developed and refined, with continued work on functionality, integration, and user experience.",
    featured: true,
    links: {
      website: "https://farmyy-sigma.vercel.app/",
      apk: "https://github.com/riyajul-saha/myPortfolio/releases/download/v0.1/Farmy-V0.1.apk",
      github: "https://github.com/riyajul-saha/",
    },
  },
  {
    id: "farmyy-os",
    name: "FarmyOS",
    category: "E-Commerce Administration & Management System",
    description:
      "A centralized administration and operations platform for the Farmy fruit e-commerce ecosystem, coordinating products, orders, deliveries, staff, and promotions.",
    longDescription:
      "FarmyOS is an administration and operations management platform built for the Farmy fruit e-commerce ecosystem. It provides a centralized interface for managing products, orders, deliveries, staff, promotional offers, advertisements, and other essential business operations.",
    image: farmyOsImg,
    type: "Mobile",
    tech: ["React Native", "Expo", "Node.js", "Express.js", "REST API", "Supabase"],
    features: [
      "Fruit & Product Management: Manage fruit listings, product information, pricing, and discounts.",
      "Order Management: View and manage customer orders and their processing status.",
      "Delivery Management: Coordinate delivery-related operations and order fulfillment.",
      "Staff Management: Organize staff information and administrative workflows.",
      "Offer Management: Manage promotional offers and product discounts.",
      "Advertisement Management: Control promotional banners and advertising content displayed within the Farmy ecosystem.",
      "Centralized Administration: Bring essential business management functions into one interface.",
      "Farmy Integration: Designed to support the operational requirements of the Farmy customer-facing application.",
    ],
    overview:
      "FarmyOS is an administration and operations management platform built for the Farmy fruit e-commerce ecosystem. It provides a centralized interface for managing products, orders, deliveries, staff, promotional offers, advertisements, and other essential business operations.",
    problem:
      "Managing an e-commerce business through separate tools and manual workflows can make it difficult to coordinate inventory, orders, delivery operations, staff, and promotions. FarmyOS aims to streamline these activities through a unified administrative platform connected to the Farmy ecosystem.",
    contribution:
      "Independently designed and developed FarmyOS, including system design, feature ideation, user experience research, interface design, frontend and backend development, and integration planning. I translated operational requirements into management workflows and built the platform to support centralized administration of the Farmy application.",
    technicalImplementation:
      "Developed the frontend using React Native and Expo, with Node.js and Express.js powering the backend APIs. Designed a client-server architecture to support communication between the administration interface and backend services, enabling structured management of products, orders, delivery operations, staff, and promotional content.",
    challengesAndSolutions:
      "A key challenge was organizing multiple business operations into a single administration interface without making the workflows unnecessarily complicated. I addressed this through a modular feature structure, separating product, order, delivery, staff, and promotional management into distinct functional areas while maintaining a consistent user experience.",
    currentStatus:
      "Active Development — the administration platform is being developed and refined alongside the Farmy e-commerce application, with ongoing work on feature integration, operational workflows, and usability.",
    links: {
      website: "https://farmyy-os.vercel.app/",
      apk: "https://github.com/riyajul-saha/myPortfolio/releases/download/v1.01/FarmyOS-V01.apk",
      github: "https://github.com/riyajul-saha/",
    },
  },
  {
    id: "cropheal-ai",
    name: "CropHeal AI",
    category: "Intelligent Agricultural Healthcare & Vision System",
    description:
      "An intelligent agricultural healthcare application diagnosing plant leaf diseases from photos and providing real-time AI treatment guidance.",
    longDescription:
      "CropHeal AI is an intelligent agricultural healthcare application designed to diagnose plant leaf diseases from leaf images and provide actionable, real-time treatment and medication recommendations. Built primarily for farmers, agricultural extension workers, and agronomists, it bridges the gap between field-level crop inspection and expert plant pathology to reduce crop loss and enhance yield quality.",
    image: cropHealImg,
    type: "AI/ML",
    tech: [
      "Python",
      "ResNet50",
      "Flask",
      "Google Gemini",
      "Groq",
      "DeepSeek",
      "Kaggle (2× GPU)",
      "Computer Vision",
    ],
    features: [
      "Visual Leaf Disease Diagnosis: Instant identification of crop diseases (such as Rice Hispa, Rice Neck Blast, and other leaf infections) via leaf image uploads.",
      "Multi-LLM Treatment & Drug Recommender: Automated generation of curative measures, dosage guidelines, and preventative organic/chemical remedies powered by Gemini, Groq, and DeepSeek.",
      "High-Throughput Web Interface: A streamlined, responsive web portal built with Flask allowing farmers and field operators to upload photos and receive instantaneous diagnostic reports.",
      "Actionable Diagnostic Reports: Clear breakdowns of disease confidence scores, symptom analysis, and targeted treatment steps.",
    ],
    overview:
      "CropHeal AI is an intelligent agricultural healthcare application designed to diagnose plant leaf diseases from leaf images and provide actionable, real-time treatment and medication recommendations. Built primarily for farmers, agricultural extension workers, and agronomists, it bridges the gap between field-level crop inspection and expert plant pathology to reduce crop loss and enhance yield quality.",
    problem:
      "Detecting crop diseases early and accurately in traditional farming is challenging due to the scarcity of accessible on-site agronomists, leading to delayed interventions, misdiagnosis, and improper use of chemical treatments. This inefficiency damages crop yields, raises input costs, and causes environmental harm. CropHeal AI solves this by delivering instant, AI-driven visual disease diagnosis alongside precise treatment plans directly to farmers.",
    contribution:
      "As part of the Trio RDS team, my core focus was on the computer vision and machine learning pipeline:\n\n• Architecture Exploration & Model Training: Evaluated and experimented with multiple deep learning architectures to compare convergence, inference latency, and diagnostic accuracy.\n• Accuracy Optimization & Research: Conducted extensive research into hyperparameter tuning, loss optimization, and image preprocessing/augmentation techniques to consistently improve classification performance across diverse lighting and environmental conditions.\n• Training Pipeline Execution: Managed distributed model training workflows using multi-GPU environments to accelerate iterations and fine-tune models on large-scale image datasets.",
    technicalImplementation:
      "• Core Vision Model: Built on a transfer learning architecture utilizing ResNet50 fine-tuned for high-accuracy multi-class plant disease classification.\n• Backend & Web Framework: Developed using Python (Flask), serving a lightweight REST API that handles image ingestion, preprocessing, inference orchestration, and response formatting.\n• LLM Integration for Real-Time Treatment: Integrated multiple LLM APIs—Google Gemini, Groq, and DeepSeek—to dynamically analyze model predictions and generate contextual, real-time chemical and organic drug/treatment suggestions.\n• Data Engineering & Training: Aggregated diverse crop disease image datasets from Kaggle and open-source agricultural repositories; leveraged Kaggle Notebooks with dual-GPU acceleration (2× GPU) for distributed training and rapid experimentation.",
    challengesAndSolutions:
      "• Challenge: Deep learning models trained on clean benchmark images often struggled with domain shifts (variations in background noise, sunlight, blur, and leaf orientation), resulting in lower accuracy and misclassifications during initial validation rounds.\n• Solution: Addressed the issue through targeted research into data augmentation (affine transformations, color jitter, cutout, and random scaling) combined with fine-tuning ResNet50's upper residual blocks, which significantly improved the model's generalization capabilities across real-world field images.",
    currentStatus:
      "Production — Deployed and accessible online on Hugging Face Spaces with active vision models and multi-LLM diagnostic services.",
    links: {
      website: "https://huggingface.co/spaces/trio-rds-tensors/CropHeal-AI",
      github: "https://github.com/trio-rds-tensors/CropHeal-AI",
    },
  },
  {
    id: "gram-tarakki",
    name: "Gram Tarakki Foundation",
    category: "Non-Profit Organization & Social Welfare Web Platform",
    description:
      "A comprehensive digital platform for a non-profit foundation featuring social welfare initiatives, volunteer registration, credential verification, and donation workflows.",
    longDescription:
      "Gram Tarakki Foundation is a non-profit organization website designed to establish a professional online presence, showcase social welfare initiatives, and connect with volunteers, students, donors, and people interested in community development.",
    image: gramTarakkiImg,
    type: "Web",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "MySQL", "Razorpay"],
    features: [
      "Responsive Website: Professional organizational design optimized for all screen sizes.",
      "Admin Panel: Centralized management interface for website content, events, and operational data.",
      "Volunteer Registration: Inbound registration workflow with resume and document upload handling.",
      "Career Page: Publishing community opportunities and managing applicant submissions.",
      "Donation Integration: Secure online payment processing powered by Razorpay.",
      "Programs & Activities: Comprehensive program pages, including community welfare, karate, and yoga.",
      "Media Gallery: Showcase for organizational events, camps, social activities, and impact stories.",
      "Certificate Verification: Digital credential verification system for students and participants.",
      "Database-Driven Architecture: MySQL-backed data management, form handling, and persistent records.",
      "Public Engagement: Dedicated sections for organizational information, mission initiatives, and outreach.",
    ],
    overview:
      "Gram Tarakki Foundation is a non-profit organization website designed to establish a professional online presence, showcase social welfare initiatives, and connect with volunteers, students, donors, and people interested in community development.",
    problem:
      "The organization needed a centralized digital platform to share its mission, publish programs and activities, manage volunteer registrations, accept donations, and make organizational information accessible to the public.",
    contribution:
      "Designed and developed the complete website and its system architecture, including the frontend, backend, database integration, and administrative panel. Built the overall user experience, implemented core website functionality, and developed administrative workflows for managing website content, organizational activities, and user-submitted information.",
    technicalImplementation:
      "Built using Python Flask for backend development, HTML, CSS, and JavaScript for the frontend, and MySQL for database management. Implemented server-side routing, form processing, database operations, and administrative access workflows. Integrated file upload functionality for volunteer applications and resumes, along with Razorpay donation integration.",
    challengesAndSolutions:
      "Maintaining persistent data and uploaded files across cloud deployments was a significant challenge. Addressed deployment and storage limitations by evaluating persistent database storage and more reliable file-storage approaches, while structuring the application around centralized database-backed data management rather than relying solely on local files.",
    currentStatus:
      "Production — Deployed and accessible online, with ongoing development and improvements to functionality, data persistence, and administrative workflows.",
    links: {
      website: "https://gramtarakkifoundation.org/",
    },
  },
];

export const projectFilters = ["All", "Web", "Mobile", "AI/ML", "Full Stack"] as const;
