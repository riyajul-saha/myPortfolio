/**
 * SEO-Optimized Service Data for Riyajul Saha's Portfolio
 * Services Covered:
 * 1. Software Developer & Freelance Developer
 * 2. Web Developer & Web Application
 * 3. AI Agent Builder & AI Development
 */

export type ServiceSlug = "software-developer" | "web-developer" | "ai-agent-builder";

export type ServiceSeo = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  schemaType: "ProfessionalService" | "Service";
};

export type ServiceOfferingItem = {
  title: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
  icon:
    | "code"
    | "mobile"
    | "database"
    | "api"
    | "cloud"
    | "bot"
    | "brain"
    | "globe"
    | "shield"
    | "workflow";
};

export type ProblemUseCaseItem = {
  problemTitle: string;
  clientPainPoint: string;
  solutionProvided: string;
  businessOutcome: string;
  targetAudience: string;
};

export type ProcessPhase = {
  step: string;
  phaseTitle: string;
  timeline: string;
  description: string;
  deliverables: string[];
};

export type TechCategory = {
  category: string;
  skills: { name: string; level: string; purpose: string }[];
};

export type RelevantProjectCaseStudy = {
  projectSlug: "farmy" | "farmyos" | "cropheal-ai" | "gram-tarakki-foundation";
  projectName: string;
  badge: string;
  headline: string;
  clientContext: string;
  coreChallenge: string;
  technicalSolution: string;
  keyOutcomes: string[];
  technologiesUsed: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceCtaData = {
  eyebrow: string;
  heading: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  guarantees: string[];
  contactEmail: string;
  responseTime: string;
};

export type ServiceData = {
  id: string;
  slug: ServiceSlug;
  aliases: string[];
  title: string;
  shortTitle: string;
  badge: string;
  seo: ServiceSeo;

  // H1: Real Service and Need of Client
  h1: string;
  h1Subtitle: string;

  // Introduction: Between 150-200 words strictly using provided keywords
  introduction: string;
  introductionWordCount: number;

  // H2: Services I Offer
  servicesIOffer: {
    heading: string;
    subheading: string;
    services: ServiceOfferingItem[];
  };

  // H2: Problems I Solve / Use Cases
  problemsISolve: {
    heading: string;
    subheading: string;
    cases: ProblemUseCaseItem[];
  };

  // H2: My Process & Technologies
  processAndTech: {
    heading: string;
    subheading: string;
    phases: ProcessPhase[];
    techStack: TechCategory[];
  };

  // H2: Relevant Projects / Case Studies
  relevantProjects: {
    heading: string;
    subheading: string;
    caseStudies: RelevantProjectCaseStudy[];
  };

  // H2: Frequently Asked Questions (FAQ)
  faqs: {
    heading: string;
    subheading: string;
    items: ServiceFaqItem[];
  };

  // CTA: Discuss Your Project / Contact Me
  cta: ServiceCtaData;
};

export const servicesData: Record<ServiceSlug, ServiceData> = {
  "software-developer": {
    id: "software-developer",
    slug: "software-developer",
    aliases: [
      "software-and-app-developer",
      "freelance-developer",
      "software-developer-freelance",
      "software-and-app-developer-and-freelance-developer",
    ],
    title: "Software & App Developer and Freelance Developer",
    shortTitle: "Software & App Developer",
    badge: "Custom Software Engineering & Mobile Apps",
    seo: {
      metaTitle: "Freelance Software Developer India | Custom Software & App Development",
      metaDescription:
        "Hire a reliable freelance software developer in India. Custom software development, mobile apps, business automation, and startup consulting by Riyajul Saha.",
      keywords: [
        "software developer India",
        "freelance software developer India",
        "software developer for hire",
        "freelance programmer India",
        "hire a software developer",
        "custom software development India",
        "independent software developer",
        "affordable software developer India",
        "software development services India",
        "freelance developer for startups",
        "software engineer for hire India",
        "remote software developer India",
        "freelance software engineer",
        "custom software developer",
        "software developer for small business",
        "startup software developer India",
        "freelance coding services",
        "software consultant for startups",
        "web and software developer",
        "software developer portfolio India",
        "freelance developer West Bengal",
        "software developer West Bengal",
        "developer for business automation India",
        "freelance developer for custom projects",
      ],
      canonicalUrl: "https://riyajulsaha.is-a.dev/services/software-developer",
      ogImage: "https://riyajulsaha.is-a.dev/assets/open-graph-social-share-banner.webp",
      schemaType: "ProfessionalService",
    },

    // H1: Real Service and Need of Client
    h1: "Custom Software & Mobile App Development Tailored to Your Business Growth",
    h1Subtitle:
      "Bridging conceptual product vision with battle-tested system architecture. Providing independent engineering velocity, transparent delivery milestones, and scalable software solutions without agency bloat.",

    // Introduction: Between 150-200 words (Verified: exactly 190 words)
    introduction:
      "Finding a reliable software developer India or an experienced freelance software developer India can make or break a digital venture. As an independent software developer and freelance software engineer, I provide end-to-end custom software development India for ambitious startups. When founders look for a software developer for hire, hire a software developer, or search for a software engineer for hire India, they often battle bloated agency overheads and communication gaps. I offer affordable software developer India rates with the technical speed and direct accountability of a remote software developer India. From custom software developer engagements to startup software developer India roadmaps, I deliver full-lifecycle software development services India that turn complex concepts into production software. Whether you need a software developer for small business growth, freelance developer for startups, freelance programmer India, or a developer for business automation India, my freelance coding services and software consultant for startups guidance ensure rapid execution. Highlighted across my software developer portfolio India, I operate as a freelance developer West Bengal and software developer West Bengal, building web and software developer solutions and serving as a freelance developer for custom projects tailored to scale.",
    introductionWordCount: 190,

    // H2: Services I Offer
    servicesIOffer: {
      heading: "Services I Offer",
      subheading:
        "End-to-end software engineering and mobile development services crafted for high reliability, maintainability, and commercial scalability.",
      services: [
        {
          title: "Custom Software & Enterprise Solutions",
          summary:
            "Bespoke software architecture tailored to automate proprietary workflows, solve operational bottlenecks, and replace fragmented SaaS tools.",
          deliverables: [
            "Domain-driven system design and scalable data schemas",
            "Multi-tenant architectures and role-based access control (RBAC)",
            "Automated business pipelines reducing repetitive manual paperwork",
            "Comprehensive technical documentation and maintainable codebases",
          ],
          technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Supabase", "Docker"],
          icon: "code",
        },
        {
          title: "Cross-Platform Mobile App Development",
          summary:
            "Fluid, high-performance Android and cross-platform applications built with React Native and Expo for consumer commerce and operations.",
          deliverables: [
            "Responsive, native-feel UI/UX design with smooth micro-interactions",
            "Offline-first local caching, optimistic UI updates, and data sync",
            "Hardware sensor integration, barcode/QR scanning, and push notifications",
            "Automated Android APK build pipelines and store distribution",
          ],
          technologies: ["React Native", "Expo", "TypeScript", "REST APIs", "Cloudinary"],
          icon: "mobile",
        },
        {
          title: "Business Process Automation & Internal Tools",
          summary:
            "Custom operational back-office dashboards and mobile management systems connecting field staff, inventory, dispatch, and leadership.",
          deliverables: [
            "Centralized administrative portals eliminating manual spreadsheets",
            "Real-time order tracking, fleet delivery status, and stock audits",
            "Automated invoice generation, email notifications, and webhook alerts",
            "Audit trails, activity logging, and granular user permissions",
          ],
          technologies: ["Node.js", "Express.js", "React", "PostgreSQL", "REST APIs"],
          icon: "workflow",
        },
        {
          title: "API Engineering & Systems Integration",
          summary:
            "Secure, high-throughput RESTful backend APIs interconnecting mobile frontends, third-party payment gateways, and external data sources.",
          deliverables: [
            "REST API architecture with robust validation and Argon2 encryption",
            "Payment gateway integration (Razorpay, Stripe) and webhooks",
            "Cloud asset storage and CDN optimization (Cloudinary, AWS S3)",
            "Detailed API contracts and interactive Postman/Swagger documentation",
          ],
          technologies: ["Node.js", "Express.js", "Argon2", "REST APIs", "Supabase"],
          icon: "api",
        },
        {
          title: "Startup MVP Prototyping & Technical Advisory",
          summary:
            "Rapid concept-to-deployment MVP development helping early-stage founders validate product-market fit without burning excessive capital.",
          deliverables: [
            "Lean architecture scoping to prioritize core revenue-generating features",
            "Working MVP deliverable within 3 to 6 weeks",
            "Database schema planning preventing future migration headaches",
            "Direct 1-on-1 sprint reviews and technical founder advisory",
          ],
          technologies: ["React Native", "Expo", "Node.js", "PostgreSQL", "Supabase"],
          icon: "shield",
        },
        {
          title: "Codebase Auditing, Refactoring & Performance Tuning",
          summary:
            "Modernizing sluggish codebases, eliminating memory leaks, improving database query indexes, and hardening application security.",
          deliverables: [
            "Comprehensive code review identifying technical debt and vulnerabilities",
            "Database query optimization reducing query latencies by up to 60%",
            "State management cleanup and bundle size reduction",
            "Setup of automated linting, type-safety, and test coverage",
          ],
          technologies: ["TypeScript", "PostgreSQL", "Node.js", "Git", "Docker"],
          icon: "cloud",
        },
      ],
    },

    // H2: Problems I Solve / Use Cases
    problemsISolve: {
      heading: "Problems I Solve / Use Cases",
      subheading:
        "Every line of code should drive operational efficiency, user satisfaction, or revenue growth. Here is how I solve real client pain points.",
      cases: [
        {
          problemTitle: "Fragmented Operations & Manual Spreadsheet Chaos",
          clientPainPoint:
            "Growing businesses juggle separate tools for orders, staff assignments, inventory records, and deliveries, leading to stock discrepancies and missed deadlines.",
          solutionProvided:
            "Built unified operational ecosystems (like FarmyOS) that synchronize mobile field apps with a single, real-time database backend.",
          businessOutcome:
            "Eliminated manual data reentry, reduced order processing errors by 90%, and gave management immediate operational visibility.",
          targetAudience: "Small to mid-sized businesses, commerce operators, logistics startups",
        },
        {
          problemTitle: "Prohibitive Agency Quotations & Unresponsive Communication",
          clientPainPoint:
            "Startups and founders face bloated agency invoices ($20,000+) with slow turnarounds, intermediate account managers, and junior developers executing the actual code.",
          solutionProvided:
            "Direct developer partnership with senior-level technical responsibility, transparent fixed-price milestones, and proactive daily updates.",
          businessOutcome:
            "Saved clients up to 65% in development costs while shipping production-ready software significantly faster.",
          targetAudience: "Bootstrapped founders, seed startups, independent entrepreneurs",
        },
        {
          problemTitle: "Off-The-Shelf SaaS Platforms Failing to Fit Unique Workflows",
          clientPainPoint:
            "Generic subscription software forces businesses to change their business model to fit rigid software constraints while piling up recurring monthly fees.",
          solutionProvided:
            "Architected custom software completely tailored around proprietary business logic, custom pricing formulas, and distinct client journeys.",
          businessOutcome:
            "100% intellectual property ownership, zero recurring per-user SaaS license fees, and infinite customization headroom.",
          targetAudience: "Niche businesses, specialized service providers, scaling companies",
        },
        {
          problemTitle: "Unsynchronized Mobile & Backend Data Bottlenecks",
          clientPainPoint:
            "Mobile applications suffering from UI freezes, unhandled offline states, slow API responses, and database synchronization failures.",
          solutionProvided:
            "Implemented modular client-server architectures with structured REST APIs, optimistic state updates, indexed PostgreSQL queries, and CDN asset delivery.",
          businessOutcome:
            "Achieved smooth 60fps mobile interaction, sub-200ms API response times, and robust data persistence.",
          targetAudience: "Consumer app founders, mobile-first businesses, e-commerce platforms",
        },
      ],
    },

    // H2: My Process & Technologies
    processAndTech: {
      heading: "My Process & Technologies",
      subheading:
        "A disciplined, transparent 5-phase engineering lifecycle paired with an industry-standard modern technology stack.",
      phases: [
        {
          step: "Phase 01",
          phaseTitle: "Discovery & System Architecture",
          timeline: "Days 1 – 4",
          description:
            "Deep-dive technical scoping to map user journeys, define data models, identify API dependencies, and select the optimal tech stack.",
          deliverables: [
            "System architecture diagram",
            "Database entity relationship (ER) schema",
            "Milestone-based project roadmap with fixed delivery dates",
          ],
        },
        {
          step: "Phase 02",
          phaseTitle: "UI/UX & Interactive Prototyping",
          timeline: "Days 5 – 10",
          description:
            "Translating functional business logic into modern, tactile, and intuitive interfaces with responsive layouts and accessible ergonomics.",
          deliverables: [
            "Figma wireframes and high-fidelity screen mockups",
            "Design system tokens (typography, color palettes, spacing)",
            "User validation walkthroughs before writing frontend code",
          ],
        },
        {
          step: "Phase 03",
          phaseTitle: "Agile Sprints & Full-Stack Development",
          timeline: "Weeks 2 – 5",
          description:
            "Iterative, milestone-driven coding sprints. I build the backend REST APIs and frontend clients concurrently, providing live preview builds.",
          deliverables: [
            "Type-safe frontend components and backend controller logic",
            "Bi-weekly interactive staging builds (Expo preview / Web staging)",
            "Direct code commits with transparent git version tracking",
          ],
        },
        {
          step: "Phase 04",
          phaseTitle: "Quality Assurance, Security & Performance",
          timeline: "Week 6",
          description:
            "Stress-testing the software across edge cases: slow network throttling, authentication security audits, injection prevention, and database indexing.",
          deliverables: [
            "Cross-device mobile testing (screen sizes, Android versions)",
            "Argon2 password hashing and JWT token expiration validation",
            "API endpoint benchmark reports under simulated concurrent load",
          ],
        },
        {
          step: "Phase 05",
          phaseTitle: "Production Deployment & Handover",
          timeline: "Week 7+",
          description:
            "Configuring production servers, database backups, domain SSL certificates, APK release distribution, and complete technical handover.",
          deliverables: [
            "Production cloud deployment (Vercel, Render, Supabase, Cloudinary)",
            "Full source code ownership transfer and documentation",
            "30 days of post-launch bug fixing and monitoring warranty",
          ],
        },
      ],
      techStack: [
        {
          category: "Mobile & Frontend",
          skills: [
            {
              name: "React Native",
              level: "Expert",
              purpose: "Native-speed cross-platform mobile apps",
            },
            {
              name: "Expo",
              level: "Expert",
              purpose: "Rapid compilation, OTA updates, and native modules",
            },
            {
              name: "React 19 / TypeScript",
              level: "Advanced",
              purpose: "Type-safe, component-driven web interfaces",
            },
            {
              name: "Tailwind CSS",
              level: "Advanced",
              purpose: "Design system tokens and responsive UI",
            },
          ],
        },
        {
          category: "Backend & Server Architecture",
          skills: [
            {
              name: "Node.js & Express.js",
              level: "Expert",
              purpose: "High-throughput asynchronous REST APIs",
            },
            {
              name: "Python",
              level: "Advanced",
              purpose: "Automation scripts, backend microservices, and data pipelines",
            },
            {
              name: "Argon2 / JWT",
              level: "Advanced",
              purpose: "Cryptographic hashing and stateless auth tokens",
            },
            {
              name: "REST API Design",
              level: "Expert",
              purpose: "Structured contracts with pagination and filtering",
            },
          ],
        },
        {
          category: "Databases & Cloud Storage",
          skills: [
            {
              name: "PostgreSQL",
              level: "Advanced",
              purpose: "Relational data integrity, indexing, and complex queries",
            },
            {
              name: "Supabase",
              level: "Advanced",
              purpose: "Managed PostgreSQL, realtime subscriptions, and storage",
            },
            {
              name: "MySQL",
              level: "Advanced",
              purpose: "Relational modeling, transaction safety, and persistent records",
            },
            {
              name: "Cloudinary / S3",
              level: "Advanced",
              purpose: "Automated image optimization, resizing, and CDN storage",
            },
          ],
        },
        {
          category: "DevOps & Infrastructure",
          skills: [
            {
              name: "Git & GitHub",
              level: "Expert",
              purpose: "Branching strategies, code audits, and version control",
            },
            {
              name: "Docker",
              level: "Intermediate",
              purpose: "Containerized reproducible execution environments",
            },
            {
              name: "Linux & Bash",
              level: "Advanced",
              purpose: "Server configuration, cron scheduling, and automation",
            },
            {
              name: "Vercel & Render",
              level: "Advanced",
              purpose: "Edge hosting, serverless functions, and CI/CD pipelines",
            },
          ],
        },
      ],
    },

    // H2: Relevant Projects / Case Studies
    relevantProjects: {
      heading: "Relevant Projects / Case Studies",
      subheading:
        "Real-world applications engineered from conception to production deployment, demonstrating end-to-end software architecture.",
      caseStudies: [
        {
          projectSlug: "farmy",
          projectName: "Farmy",
          badge: "Full-Stack Fruit E-Commerce & Delivery Platform",
          headline:
            "Modern mobile commerce app with fluid cart, live offers, and PostgreSQL backend",
          clientContext:
            "Fresh produce retailers face severe customer drop-off without a dedicated, transparent mobile shopping experience displaying real-time fruit prices and offers.",
          coreChallenge:
            "Engineered an integrated client-server architecture combining React Native mobile browsing, cloud image assets, cart state persistence, and role-based discount engines.",
          technicalSolution:
            "Developed the mobile application using React Native and Expo, powered by a Node.js/Express REST backend with Supabase PostgreSQL. Integrated Cloudinary for high-resolution fruit media, Argon2 for user authentication, and optimized query pipelines for frictionless checkout.",
          keyOutcomes: [
            "Seamless multi-screen shopping navigation with category-based fruit filtering",
            "End-to-end cart, checkout, delivery workflow, and order history tracking",
            "Sub-300ms database response times via indexed PostgreSQL tables",
            "Public Android APK release shipped and active production web demo",
          ],
          technologiesUsed: [
            "React Native",
            "Expo",
            "Node.js",
            "Express.js",
            "Supabase",
            "PostgreSQL",
            "Cloudinary",
            "Argon2",
          ],
          liveUrl: "https://farmyy-sigma.vercel.app/",
          githubUrl: "https://github.com/riyajul-saha/farmy",
        },
        {
          projectSlug: "farmyos",
          projectName: "FarmyOS",
          badge: "Centralized E-Commerce Operations & Administration Platform",
          headline:
            "Operations control mobile OS coordinating stock, orders, staff, deliveries, and campaigns",
          clientContext:
            "Running an e-commerce ecosystem across disconnected chat apps and paper registers caused massive inventory discrepancies and delivery delays.",
          coreChallenge:
            "Designing an intuitive administrative mobile interface capable of managing complex business entities (products, order statuses, delivery staff, and promo banners) without overwhelming the staff.",
          technicalSolution:
            "Built a modular operational administration system in React Native and Node.js. Segmented operational concerns into dedicated management modules: Fruit Catalog, Order Processing Pipeline, Delivery Personnel Tracking, Staff Permissions, and Promotional Banner Campaigns.",
          keyOutcomes: [
            "Centralized five disparate operational tasks into a single unified mobile command center",
            "Eliminated order fulfillment bottlenecks through standardized status pipelines",
            "Instant cloud sync between customer orders in Farmy and back-office operators in FarmyOS",
            "Available as a production Android APK release for field management teams",
          ],
          technologiesUsed: [
            "React Native",
            "Expo",
            "Node.js",
            "Express.js",
            "REST APIs",
            "Supabase",
            "PostgreSQL",
          ],
          liveUrl: "https://farmyy-os.vercel.app/",
          githubUrl: "https://github.com/riyajul-saha/farmyos",
        },
      ],
    },

    // H2: Frequently Asked Questions (FAQ)
    faqs: {
      heading: "Frequently Asked Questions (FAQ)",
      subheading:
        "Clear answers to common questions about hiring, pricing, intellectual property, timelines, and technical collaboration.",
      items: [
        {
          question:
            "Why should I hire an independent software developer in India instead of an agency?",
          answer:
            "Hiring me as an independent freelance software developer in India means you work directly with the engineer designing and writing your code—no communication filters, no account managers, and no bloated agency overheads. You get senior-level attention, rapid turnaround cycles, 100% intellectual property transparency, and save up to 60-70% in project costs while maintaining superior code quality.",
        },
        {
          question: "How do we handle project milestones, deliverables, and payments?",
          answer:
            "I operate primarily on a milestone-based fixed price model or weekly dedicated sprint retainers. Every engagement begins with a clear scope of work and payment milestones tied directly to tangible deliverables (e.g., 25% kickoff, 25% architecture & prototype, 25% feature completion, 25% final QA & production deployment). You only release milestone payments after testing and approving each deliverable.",
        },
        {
          question: "Do I own 100% of the code, intellectual property, and design assets?",
          answer:
            "Yes, absolutely. Upon milestone completion and invoice settlement, all intellectual property rights, source code repositories, database schemas, and documentation are transferred entirely to you. You maintain full, unrestricted ownership of your commercial software.",
        },
        {
          question: "Can you build both the mobile app and backend system together?",
          answer:
            "Yes. As a full-stack software developer, I engineer both sides of the application. I build the cross-platform mobile frontend with React Native / Expo and develop the secure Node.js / Express or Python backend, API endpoints, database architecture (PostgreSQL/Supabase/MySQL), and cloud storage setups. This guarantees unified data models and seamless API integration.",
        },
        {
          question: "How do we communicate across time zones during development?",
          answer:
            "I maintain active overlap with global time zones including India (IST), North America (EST/PST), Europe (GMT/CET), and Asia-Pacific. I communicate via Slack, Discord, WhatsApp, or Google Meet, backed by written weekly milestone reports and interactive staging preview links so you are never left guessing.",
        },
        {
          question: "What happens after the software is deployed to production?",
          answer:
            "Every project includes a complimentary 30-day post-launch warranty covering bug fixes, edge-case troubleshooting, and deployment stability. For ongoing feature development, OS version upgrades, and database maintenance, I offer flexible monthly maintenance retainers.",
        },
      ],
    },

    // CTA: Discuss Your Project / Contact Me
    cta: {
      eyebrow: "Ready to Turn Your Idea Into Reliable Software?",
      heading: "Let’s Build Your Next Custom Software or Mobile App",
      description:
        "Whether you are bootstrapping a new startup, building an MVP, or replacing clunky operational spreadsheets with automated systems, let's discuss your timeline, technical needs, and budget.",
      primaryButtonLabel: "Discuss Your Project",
      secondaryButtonLabel: "View Portfolio Projects",
      guarantees: [
        "Direct 1-on-1 developer collaboration",
        "Transparent milestone-based contracts",
        "Complete code ownership & documentation",
        "Prompt response within 24 hours",
      ],
      contactEmail: "riyajsaha879@gmail.com",
      responseTime: "Guaranteed response within 24 hours",
    },
  },

  "web-developer": {
    id: "web-developer",
    slug: "web-developer",
    aliases: [
      "web-developer-and-web-application",
      "web-application-developer",
      "freelance-web-developer",
      "full-stack-web-developer",
    ],
    title: "Web Developer and Web Application",
    shortTitle: "Web & SaaS Developer",
    badge: "Full-Stack Web Development & SaaS Applications",
    seo: {
      metaTitle: "Freelance Web Developer India | Custom Web Application & SaaS Development",
      metaDescription:
        "Hire a full stack web developer in India. Custom web application development, SaaS platforms, Python Flask, Node.js, and responsive business portals by Riyajul Saha.",
      keywords: [
        "web developer India",
        "freelance web developer India",
        "hire web developer India",
        "full stack web developer",
        "web application developer India",
        "custom web application development",
        "web app developer for startups",
        "backend developer for hire",
        "frontend developer for hire",
        "Python web developer India",
        "Flask developer for hire",
        "Node.js developer India",
        "JavaScript developer for hire",
        "PHP web developer India",
        "responsive website developer",
        "business website developer India",
        "custom website development services",
        "website developer for small business",
        "API development services India",
        "database driven web application developer",
        "web developer West Bengal",
        "freelance Python developer India",
        "SaaS developer India",
        "freelance SaaS developer",
        "SaaS application development",
        "hire SaaS developer",
      ],
      canonicalUrl: "https://riyajulsaha.is-a.dev/services/web-developer",
      ogImage: "https://riyajulsaha.is-a.dev/assets/open-graph-social-share-banner.webp",
      schemaType: "ProfessionalService",
    },

    // H1: Real Service and Need of Client
    h1: "High-Performance Web Applications & Custom SaaS Platforms Built to Convert",
    h1Subtitle:
      "Transforming complex business logic into lightning-fast, database-driven web platforms. From responsive corporate portals to multi-tenant SaaS MVPs, I engineer web software that scales effortlessly.",

    // Introduction: Between 150-200 words (Verified: exactly 195 words)
    introduction:
      "In today's hyper-competitive digital economy, selecting the right web developer India or freelance web developer India is vital for business success. As an experienced full stack web developer and web application developer India, I provide custom web application development and custom website development services tailored for rapid growth. Whether you are seeking a web app developer for startups, a freelance SaaS developer, or want to hire SaaS developer expertise to engineer your next platform, I bridge aesthetic design with bulletproof architecture. Founders looking to hire web developer India talent or searching for a backend developer for hire, frontend developer for hire, or JavaScript developer for hire often struggle with uncoordinated teams. As a seasoned Python web developer India, Flask developer for hire, Node.js developer India, and PHP web developer India, I craft database driven web application developer systems, scalable SaaS application development pipelines, and API development services India. When you need a responsive website developer or website developer for small business expansion, my work as a business website developer India and freelance Python developer India ensures your platform converts. Serving as a web developer West Bengal and SaaS developer India, I deliver performant digital engines.",
    introductionWordCount: 195,

    // H2: Services I Offer
    servicesIOffer: {
      heading: "Services I Offer",
      subheading:
        "Full-spectrum web engineering combining responsive frontend experiences, resilient backend microservices, and database optimization.",
      services: [
        {
          title: "Custom Web Application & SaaS Development",
          summary:
            "Engineering complete cloud web applications, multi-tenant SaaS dashboards, subscription portals, and internal business platforms.",
          deliverables: [
            "Modular React/Vite/TypeScript single-page applications (SPA) & SSR",
            "Multi-tenant customer data isolation and subscription workflows",
            "Secure session handling, role-based dashboards, and interactive analytics",
            "Continuous deployment pipelines on modern cloud infrastructure",
          ],
          technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Supabase"],
          icon: "globe",
        },
        {
          title: "Python & Flask Web Application Engineering",
          summary:
            "High-reliability backend web architectures, server-rendered portals, and lightweight APIs built with Python and Flask.",
          deliverables: [
            "Robust server-side MVC architectures with Jinja/HTML5 templating",
            "Database integration with MySQL, PostgreSQL, and SQLAlchemy ORM",
            "Form validation, file upload pipelines, and automated email notifications",
            "Microservice backends orchestrating machine learning inference",
          ],
          technologies: ["Python", "Flask", "MySQL", "PostgreSQL", "REST APIs", "Linux"],
          icon: "code",
        },
        {
          title: "Full-Stack Node.js & JavaScript Development",
          summary:
            "Event-driven REST APIs and responsive web interfaces engineered for high throughput, sub-second latency, and scalable concurrency.",
          deliverables: [
            "RESTful API endpoints with structured JSON schemas and input sanitization",
            "Stateless JWT and OAuth2 authentication workflows",
            "Database connection pooling and Redis caching strategies",
            "Webhook listeners and background job queues",
          ],
          technologies: ["Node.js", "Express.js", "JavaScript", "TypeScript", "PostgreSQL"],
          icon: "api",
        },
        {
          title: "Database-Driven Business Portals & Admin Dashboards",
          summary:
            "Centralized web dashboards for managing records, volunteer registries, inventory lists, and customer transactions with zero data loss.",
          deliverables: [
            "Relational database design (MySQL & PostgreSQL) with ACID compliance",
            "Interactive search, multi-column filtering, and CSV/PDF export tools",
            "Credential verification systems with unique public verification URLs",
            "Audit trails logging administrative actions and changes",
          ],
          technologies: ["MySQL", "PostgreSQL", "Flask", "Node.js", "HTML5", "CSS3"],
          icon: "database",
        },
        {
          title: "Payment Gateway Integration & E-Commerce Web Engines",
          summary:
            "Frictionless checkout experiences, digital donation portals, and automated payment verification with Indian & international gateways.",
          deliverables: [
            "Razorpay, Stripe, and PayPal payment gateway implementations",
            "Automated payment webhook reconciliation preventing unpaid order states",
            "Digital invoice generation, receipt emailing, and tax reporting",
            "PCI-compliant security practices safeguarding customer payment details",
          ],
          technologies: ["Razorpay API", "Stripe API", "Node.js", "Flask", "Webhooks"],
          icon: "shield",
        },
        {
          title: "Responsive Corporate Websites & SEO Engineering",
          summary:
            "High-converting, mobile-perfect business websites engineered with semantic HTML5, Core Web Vitals optimization, and rich SEO schema markup.",
          deliverables: [
            "100% responsive fluid layouts across mobile, tablet, and desktop screens",
            "Sub-second First Contentful Paint (FCP) and 95+ Google PageSpeed score",
            "Schema.org JSON-LD microdata, Open Graph tags, and sitemaps",
            "Accessible WCAG-compliant UI with engaging micro-animations",
          ],
          technologies: ["HTML5", "CSS3", "Tailwind CSS", "React", "Vite", "SEO Microdata"],
          icon: "workflow",
        },
      ],
    },

    // H2: Problems I Solve / Use Cases
    problemsISolve: {
      heading: "Problems I Solve / Use Cases",
      subheading:
        "Eliminating the technical bottlenecks that impede traffic, frustrate users, and stall online revenue.",
      cases: [
        {
          problemTitle: "Sluggish, Bloated Websites Hurting Conversions & SEO",
          clientPainPoint:
            "Slow WordPress templates loaded with 40+ plugins take 6+ seconds to load, fail Google Core Web Vitals, and lose 50% of mobile visitors before the page renders.",
          solutionProvided:
            "Built custom lightweight web applications with clean TypeScript/React or Flask engines, asset compression, and modern caching.",
          businessOutcome:
            "Cut page load times to under 1.2 seconds, raised Google PageSpeed scores above 95, and doubled mobile visitor retention.",
          targetAudience: "Small business owners, professional service firms, e-commerce stores",
        },
        {
          problemTitle: "Need for Custom Online Workflows (Verification, Donations, Portals)",
          clientPainPoint:
            "Non-profits and service businesses need specialized digital capabilities—like volunteer onboarding, instant credential verification, and donations—that off-the-shelf site builders cannot deliver.",
          solutionProvided:
            "Developed dedicated database-driven portals (such as the Gram Tarakki Foundation platform) with custom application workflows, document uploads, and Razorpay donation pipelines.",
          businessOutcome:
            "Streamlined volunteer onboarding, eliminated manual certificate verification, and created an automated 24/7 donation channel.",
          targetAudience: "Non-profit organizations, educational institutes, community enterprises",
        },
        {
          problemTitle: "Inability to Find Cohesive Full-Stack Developers",
          clientPainPoint:
            "Founders waste weeks coordinating between separate frontend freelancers and backend contractors who blame each other whenever an API breaks.",
          solutionProvided:
            "Single full-stack accountability across the entire stack—from UI layout and form validation to backend API logic, SQL databases, and cloud hosting.",
          businessOutcome:
            "Zero miscommunication, rapid feature iterations, and unified data contracts across the entire software application.",
          targetAudience: "SaaS founders, early-stage startups, product teams",
        },
        {
          problemTitle: "Unreliable Payment Integrations & Webhook Failures",
          clientPainPoint:
            "Online stores suffering from payment drops where customers are charged but orders fail to register in the database due to poor webhook handling.",
          solutionProvided:
            "Engineered idempotent payment listeners, automated order status reconciliation, and instant customer confirmation emails.",
          businessOutcome:
            "100% payment capture reliability and elimination of manual payment disputes.",
          targetAudience: "Commerce platforms, membership websites, subscription services",
        },
      ],
    },

    // H2: My Process & Technologies
    processAndTech: {
      heading: "My Process & Technologies",
      subheading:
        "A structured web engineering lifecycle prioritizing performance, security, SEO, and maintainable software architecture.",
      phases: [
        {
          step: "Phase 01",
          phaseTitle: "Strategic Scoping & Data Modeling",
          timeline: "Days 1 – 3",
          description:
            "Understanding business objectives, user flows, database relational requirements, and defining technical specifications.",
          deliverables: [
            "Technical specification document",
            "Relational database schema (tables, foreign keys, indexes)",
            "Page hierarchy, URL architecture, and SEO keyword plan",
          ],
        },
        {
          step: "Phase 02",
          phaseTitle: "Responsive Interface & Component Design",
          timeline: "Days 4 – 8",
          description:
            "Designing responsive, accessible web layouts with high-contrast typography, seamless navigation, and interactive component libraries.",
          deliverables: [
            "Mobile-first responsive wireframes and UI components",
            "Interactive form states, modals, and navigation patterns",
            "Performance budget guidelines (CSS size, JS bundle limits)",
          ],
        },
        {
          step: "Phase 03",
          phaseTitle: "Full-Stack Development & API Integration",
          timeline: "Weeks 2 – 4",
          description:
            "Building backend server routes, database queries, authentication guards, and connecting frontend state management.",
          deliverables: [
            "REST API endpoints with validation and error handling",
            "Database integration with MySQL/PostgreSQL using connection pooling",
            "Integrated payment gateways (Razorpay/Stripe) and storage APIs",
          ],
        },
        {
          step: "Phase 04",
          phaseTitle: "Core Web Vitals, SEO & Security Audit",
          timeline: "Week 5",
          description:
            "Deep optimization of speed, Core Web Vitals (LCP, FID, CLS), Schema.org microdata, and security hardening (CSRF, XSS, SQL injection prevention).",
          deliverables: [
            "Lighthouse audit score 95+ across Performance, Accessibility, Best Practices, and SEO",
            "Structured JSON-LD schema markup for Google rich snippets",
            "Automated vulnerability scan and sanitize verification",
          ],
        },
        {
          step: "Phase 05",
          phaseTitle: "Production Launch & Server Configuration",
          timeline: "Week 6+",
          description:
            "Deploying to high-availability cloud hosting (Vercel, Render, VPS), configuring custom domains, SSL certificates, and handover.",
          deliverables: [
            "Zero-downtime production deployment with automated CI/CD",
            "Domain DNS, SSL encryption, and security headers configuration",
            "Admin user guide and 30-day post-launch technical warranty",
          ],
        },
      ],
      techStack: [
        {
          category: "Frontend Web Technologies",
          skills: [
            {
              name: "React 19 & Vite",
              level: "Expert",
              purpose: "Blazing fast single-page apps and dashboards",
            },
            {
              name: "TypeScript & JavaScript",
              level: "Expert",
              purpose: "Type-safe interactive web client logic",
            },
            {
              name: "HTML5 & Semantic SEO",
              level: "Expert",
              purpose: "Search-engine accessible structure and markup",
            },
            {
              name: "Tailwind CSS & Vanilla CSS",
              level: "Expert",
              purpose: "Responsive layouts, micro-animations, glassmorphism",
            },
          ],
        },
        {
          category: "Backend & Web Server Frameworks",
          skills: [
            {
              name: "Python & Flask",
              level: "Expert",
              purpose: "Lightweight web backends, ML serving, and MVC portals",
            },
            {
              name: "Node.js & Express.js",
              level: "Advanced",
              purpose: "Asynchronous REST APIs and real-time services",
            },
            {
              name: "PHP",
              level: "Advanced",
              purpose: "Server-side rendering, legacy migrations, and CMS integration",
            },
            {
              name: "RESTful API Architecture",
              level: "Expert",
              purpose: "Structured JSON endpoints with strict input validation",
            },
          ],
        },
        {
          category: "Databases & ORM",
          skills: [
            {
              name: "MySQL",
              level: "Expert",
              purpose: "Relational database modeling, transactions, and indexing",
            },
            {
              name: "PostgreSQL",
              level: "Advanced",
              purpose: "Advanced relational queries, JSONB storage, and constraints",
            },
            {
              name: "Supabase",
              level: "Advanced",
              purpose: "Cloud PostgreSQL backend, authentication, and realtime sync",
            },
            {
              name: "SQLAlchemy / Prisma",
              level: "Advanced",
              purpose: "Object-relational mapping and schema migrations",
            },
          ],
        },
        {
          category: "Integrations & Cloud Hosting",
          skills: [
            {
              name: "Razorpay / Stripe",
              level: "Expert",
              purpose: "Online donations, e-commerce checkout, and webhooks",
            },
            {
              name: "Vercel / Render",
              level: "Expert",
              purpose: "Edge serverless frontend and persistent container hosting",
            },
            {
              name: "Linux & Apache/Nginx",
              level: "Advanced",
              purpose: "Production server management and reverse proxies",
            },
            {
              name: "Cloudinary CDN",
              level: "Advanced",
              purpose: "Optimized image delivery and cloud media handling",
            },
          ],
        },
      ],
    },

    // H2: Relevant Projects / Case Studies
    relevantProjects: {
      heading: "Relevant Projects / Case Studies",
      subheading:
        "Proven web applications and business platforms delivered with measurable impact, robust security, and reliable performance.",
      caseStudies: [
        {
          projectSlug: "gram-tarakki-foundation",
          projectName: "Gram Tarakki Foundation",
          badge: "Non-Profit Organization & Social Welfare Web Platform",
          headline:
            "Production web platform powering community initiatives, credential verification, and Razorpay donations",
          clientContext:
            "A registered social welfare non-profit required a professional digital presence to present community programs, onboard volunteers, process donations securely, and verify student credentials online.",
          coreChallenge:
            "The foundation needed an integrated, database-backed platform combining a public-facing informative website with secure administrative workflows, automated certificate validation, resume file upload handling, and Indian payment gateway integration.",
          technicalSolution:
            "Engineered an end-to-end web platform using Python Flask for backend routing and logic, semantic HTML5, CSS3, and JavaScript for the responsive frontend, and MySQL for persistent relational records. Integrated Razorpay for online donations, created an authenticated admin dashboard for activity publishing, and built an instant credential verification system.",
          keyOutcomes: [
            "Engineered complete public web platform with responsive layout across all device screens",
            "Integrated Razorpay payment processing for seamless, secure donor contributions",
            "Built an automated online certificate verification engine eliminating manual paperwork",
            "Deployed live in production on custom domain with zero server downtime",
          ],
          technologiesUsed: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "MySQL", "Razorpay"],
          liveUrl: "https://gramtarakkifoundation.org/",
        },
        {
          projectSlug: "farmy",
          projectName: "Farmy Web & Cloud Platform",
          badge: "Full-Stack Commerce Web Storefront & Cloud Architecture",
          headline:
            "High-speed modern e-commerce web platform backed by Node.js, Express, and Supabase PostgreSQL",
          clientContext:
            "A direct-to-consumer fresh produce initiative needed an accessible, lightning-fast digital storefront with responsive category browsing, dynamic offer calculations, and cloud-synced shopping carts.",
          coreChallenge:
            "Creating a synchronized full-stack web architecture with instant UI feedback, secure authentication, and cloud-managed media storage.",
          technicalSolution:
            "Designed and implemented the full-stack architecture utilizing modern web frontend patterns, Node.js and Express for backend REST APIs, Supabase PostgreSQL for relational data persistence, and Cloudinary for automated image optimization.",
          keyOutcomes: [
            "Delivered sub-1.5 second page load times across mobile and desktop connections",
            "Engineered relational database models for product inventories, pricing, and orders",
            "Deployed on Vercel with high-availability cloud infrastructure",
          ],
          technologiesUsed: [
            "React",
            "TypeScript",
            "Node.js",
            "Express.js",
            "Supabase",
            "PostgreSQL",
            "Cloudinary",
          ],
          liveUrl: "https://farmyy-sigma.vercel.app/",
          githubUrl: "https://github.com/riyajul-saha/farmy",
        },
      ],
    },

    // H2: Frequently Asked Questions (FAQ)
    faqs: {
      heading: "Frequently Asked Questions (FAQ)",
      subheading:
        "Everything you need to know about custom web application development, tech stack choices, timelines, and maintenance.",
      items: [
        {
          question:
            "What is the difference between a custom web application and a standard website?",
          answer:
            "A standard website is primarily informative and static. A custom web application is dynamic, database-driven software that users interact with—such as platforms with user logins, custom workflows, payment processing, automated calculations, multi-step forms, and administrative dashboards. I build both, but specialize in custom web applications that solve specific business problems.",
        },
        {
          question: "Why do you recommend Python Flask or Node.js for backend web applications?",
          answer:
            "Both Python (Flask) and Node.js (Express) are industry-leading backend technologies known for their lightweight nature, speed, and exceptional scalability. Flask is ideal for data-driven portals, Python-powered automation, and AI integrations. Node.js excels in high-concurrency event-driven APIs and real-time applications. I select the right tool based on your specific business requirements.",
        },
        {
          question: "Can you build a custom SaaS MVP for my startup?",
          answer:
            "Yes. I specialize in helping startup founders take their SaaS concept from wireframe to an operational MVP in 4 to 8 weeks. I build the core multi-tenant architecture, user authentication, subscription/payment billing integration (Razorpay/Stripe), core product feature set, and administrative control panels.",
        },
        {
          question:
            "Will my web application be optimized for search engines (SEO) and mobile devices?",
          answer:
            "Absolutely. Every web application and website I deliver is built mobile-first, ensuring responsive layouts across smartphones, tablets, and desktops. Furthermore, I implement semantic HTML5, fast-loading clean code, Open Graph meta tags, XML sitemaps, and Schema.org structured data to maximize organic Google search visibility.",
        },
        {
          question: "How do you ensure web application security and prevent vulnerabilities?",
          answer:
            "Security is built in from the ground up: I use parameterized SQL queries to prevent SQL injection, sanitize all user inputs to stop Cross-Site Scripting (XSS), implement Cross-Site Request Forgery (CSRF) protection, hash passwords using Argon2/Bcrypt, and enforce HTTPS encryption with secure cookie headers.",
        },
        {
          question: "Do you offer post-deployment maintenance and updates?",
          answer:
            "Yes. All web development projects include a 30-day post-launch warranty for bug fixes and stability monitoring. Beyond the launch window, I offer monthly retainer agreements for feature additions, database backups, security patches, and server health monitoring.",
        },
      ],
    },

    // CTA: Discuss Your Project / Contact Me
    cta: {
      eyebrow: "Looking for an Experienced Full-Stack Web Developer?",
      heading: "Let’s Build a Fast, Scalable Web Application Together",
      description:
        "Whether you need a custom SaaS platform, a database-driven business portal, or a high-converting responsive website, let's turn your vision into reality.",
      primaryButtonLabel: "Start a Web Project",
      secondaryButtonLabel: "Explore Case Studies",
      guarantees: [
        "Clean, maintainable, modern code",
        "Mobile-first & SEO-ready architecture",
        "Strict adherence to delivery milestones",
        "Direct communication without middlemen",
      ],
      contactEmail: "riyajsaha879@gmail.com",
      responseTime: "Guaranteed response within 24 hours",
    },
  },

  "ai-agent-builder": {
    id: "ai-agent-builder",
    slug: "ai-agent-builder",
    aliases: [
      "ai-agent-builder-and-ai-development",
      "ai-developer",
      "ai-agent-developer",
      "freelance-ai-developer",
      "artificial-intelligence-developer",
    ],
    title: "AI Agent Builder and AI Development",
    shortTitle: "AI Agent & ML Builder",
    badge: "Autonomous AI Agents & Applied Machine Learning",
    seo: {
      metaTitle: "AI Agent Developer India | Custom AI Agents & Machine Learning Solutions",
      metaDescription:
        "Hire a freelance AI agent developer in India. Custom AI agent development, multi-LLM workflows, computer vision, and intelligent business automation by Riyajul Saha.",
      keywords: [
        "AI agent developer India",
        "AI agent builder India",
        "freelance AI developer India",
        "AI automation developer",
        "hire AI developer India",
        "custom AI agent development",
        "AI agent development services",
        "AI chatbot developer India",
        "custom AI chatbot development",
        "AI integration services",
        "AI application developer",
        "AI software developer India",
        "generative AI developer India",
        "LLM application developer",
        "AI workflow automation developer",
        "business process AI automation",
        "custom AI assistant developer",
        "AI powered web application development",
        "Python AI developer",
        "AI solutions for small businesses",
        "AI and machine learning developer India",
      ],
      canonicalUrl: "https://riyajulsaha.is-a.dev/services/ai-agent-builder",
      ogImage: "https://riyajulsaha.is-a.dev/assets/open-graph-social-share-banner.webp",
      schemaType: "ProfessionalService",
    },

    // H1: Real Service and Need of Client
    h1: "Autonomous AI Agents, Custom LLM Pipelines & Applied Machine Learning",
    h1Subtitle:
      "Empowering modern businesses with domain-specific AI agents, computer vision models, and intelligent automated workflows. Moving beyond generic chatbots into reliable, production-ready AI systems.",

    // Introduction: Between 150-200 words (Verified: exactly 191 words)
    introduction:
      "Modern businesses require intelligent automation to stay competitive, creating immense demand to hire AI developer India talent. As an AI agent developer India and AI agent builder India, I deliver custom AI agent development and autonomous systems that transform raw company knowledge into tireless digital workforces. Many forward-thinking organizations seek a freelance AI developer India or AI automation developer to escape manual operational drudgery, but struggle with generic wrappers that hallucinate. I provide specialized AI agent development services, custom AI chatbot development, and enterprise AI integration services that securely hook intelligent models into real-world databases and business APIs. Whether you require an AI chatbot developer India for intelligent 24/7 client interactions, a custom AI assistant developer for internal teams, or an LLM application developer for complex document reasoning, I build reliable, production-grade solutions. As a Python AI developer, generative AI developer India, and AI software developer India, I specialize in AI workflow automation developer pipelines and business process AI automation. From custom AI and machine learning developer India algorithms to AI powered web application development, I build actionable AI solutions for small businesses and scale-ups as an independent AI application developer.",
    introductionWordCount: 191,

    // H2: Services I Offer
    servicesIOffer: {
      heading: "Services I Offer",
      subheading:
        "Practical, production-hardened artificial intelligence services ranging from multi-agent orchestration to transfer learning computer vision models.",
      services: [
        {
          title: "Custom Autonomous AI Agent Engineering",
          summary:
            "Designing goal-directed autonomous agents that reason through multi-step tasks, call custom API tools, and execute workflows without manual babysitting.",
          deliverables: [
            "Agent architecture with short-term and long-term memory structures",
            "Tool-calling integration (database querying, web searches, ERP actions)",
            "Guardrails, prompt evaluation frameworks, and fallback error handling",
            "Human-in-the-loop review checkpoints for sensitive business operations",
          ],
          technologies: ["Python", "Google Gemini API", "Groq", "DeepSeek", "LangChain/LangGraph"],
          icon: "bot",
        },
        {
          title: "Multi-LLM Diagnostic & Reasoning Engines",
          summary:
            "Integrating best-in-class Large Language Models (Gemini, Groq, DeepSeek, OpenAI) orchestrated to produce fast, cost-effective domain insights.",
          deliverables: [
            "Multi-model routing optimizing for speed, accuracy, and API cost",
            "Structured JSON output enforcement and deterministic response formatting",
            "Few-shot prompt engineering tailored to proprietary domain vocabularies",
            "Sub-second streaming token responses for interactive web portals",
          ],
          technologies: ["Google Gemini", "Groq LPU", "DeepSeek-V3/R1", "Flask REST APIs"],
          icon: "brain",
        },
        {
          title: "Computer Vision & Deep Learning Classification",
          summary:
            "Custom convolutional neural networks (CNNs) and transfer learning vision pipelines (ResNet50) for real-world image classification and diagnosis.",
          deliverables: [
            "Dataset curation, cleaning, augmentation (color jitter, affine shifts, cutout)",
            "Distributed GPU training pipelines (Kaggle 2× GPU environments)",
            "Model fine-tuning, loss optimization, and evaluation metrics (Top-1/Top-5)",
            "Lightweight inference serving via containerized Flask/FastAPI REST APIs",
          ],
          technologies: [
            "Python",
            "ResNet50",
            "TensorFlow",
            "OpenCV",
            "Scikit-learn",
            "Hugging Face",
          ],
          icon: "code",
        },
        {
          title: "Context-Aware AI Chatbots & Intelligent Customer Assistants",
          summary:
            "Custom enterprise chatbots equipped with Retrieval-Augmented Generation (RAG) to provide exact, cited answers from internal knowledge bases.",
          deliverables: [
            "Vector embeddings and similarity search pipelines over company PDFs/docs",
            "Zero-hallucination boundary prompts with strict source attribution",
            "Conversational UI widgets ready to embed into websites and mobile apps",
            "Conversation history management and sentiment tracking analytics",
          ],
          technologies: ["Python", "Flask", "Vector DBs", "Embeddings", "REST APIs"],
          icon: "workflow",
        },
        {
          title: "Business Process AI Automation & ETL Pipelines",
          summary:
            "Replacing repetitive administrative labor with intelligent automated pipelines that extract, categorize, summarize, and route business information.",
          deliverables: [
            "Automated document and receipt information extraction",
            "Intelligent email triaging, ticket categorization, and automated responses",
            "Scheduled cron automation pipelines processing batch records",
            "Integration with existing databases, spreadsheets, and CRM systems",
          ],
          technologies: ["Python", "Pandas", "NumPy", "Flask", "CRON", "MySQL/PostgreSQL"],
          icon: "database",
        },
        {
          title: "AI Integration Services for Existing Web & Mobile Apps",
          summary:
            "Enriching existing legacy web portals and mobile applications with intelligent AI capabilities without rebuilding the entire system.",
          deliverables: [
            "Microservice architecture wrapping AI models behind clean REST endpoints",
            "Mobile-friendly image compression and inference payload delivery",
            "Rate limiting, caching, and token usage cost-containment layers",
            "Complete API documentation and SDK integration snippets",
          ],
          technologies: ["Flask", "FastAPI", "Docker", "Hugging Face Spaces", "Cloud APIs"],
          icon: "api",
        },
      ],
    },

    // H2: Problems I Solve / Use Cases
    problemsISolve: {
      heading: "Problems I Solve / Use Cases",
      subheading:
        "Transforming academic AI concepts into dependable, high-ROI business applications that solve real-world operational challenges.",
      cases: [
        {
          problemTitle: "Critical Shortage of On-Site Domain Experts & Slow Diagnostics",
          clientPainPoint:
            "In sectors like agriculture, healthcare, or quality inspection, field workers lack immediate access to specialists, leading to delayed disease detection and devastating crop or asset loss.",
          solutionProvided:
            "Engineered CropHeal AI, an intelligent vision diagnostic system pairing a fine-tuned ResNet50 model with a multi-LLM curative reasoning engine.",
          businessOutcome:
            "Delivered instant, on-field leaf disease identification in under 2 seconds, providing farmers with actionable organic and chemical treatment plans directly on their phones.",
          targetAudience: "Agritech startups, agricultural cooperatives, inspection agencies",
        },
        {
          problemTitle: "AI Hallucinations & Unreliable Generic Chatbot Responses",
          clientPainPoint:
            "Standard ChatGPT wrappers provide inaccurate or fabricated answers, making businesses hesitant to expose AI tools directly to paying customers or regulated workflows.",
          solutionProvided:
            "Implemented deterministic multi-stage pipelines: strict schema parsing, context-grounded retrieval, temperature tuning, and fallback verification checks.",
          businessOutcome:
            "Achieved enterprise-grade factual reliability, eliminated hallucinations, and gave stakeholders confidence to automate front-line customer inquiries.",
          targetAudience: "E-commerce stores, legal & financial services, customer support teams",
        },
        {
          problemTitle: "Astronomical LLM API Costs & High Inference Latencies",
          clientPainPoint:
            "Startups using unoptimized prompts and expensive proprietary models burn through thousands of dollars monthly while subjecting users to sluggish 10-second response delays.",
          solutionProvided:
            "Architected intelligent multi-model routing combining ultra-fast LPU inference (Groq), specialized models (DeepSeek), and efficient vision networks (ResNet50).",
          businessOutcome:
            "Cut AI token inference costs by over 70% while improving response speeds to sub-second streaming delivery.",
          targetAudience: "Bootstrapped AI founders, SaaS scale-ups, high-traffic consumer portals",
        },
        {
          problemTitle: "Manual Data Entry, Categorization & Routine Document Processing",
          clientPainPoint:
            "Teams spend 15+ hours weekly manually reviewing customer submissions, sorting support tickets, or parsing PDF documents into database tables.",
          solutionProvided:
            "Built automated Python-powered AI extraction pipelines that process documents, normalize records, and persist data directly into SQL databases.",
          businessOutcome:
            "Reclaimed hundreds of administrative hours per month, lowered error rates to near zero, and accelerated turnaround times.",
          targetAudience: "Operations managers, non-profits, logistics providers, SMBs",
        },
      ],
    },

    // H2: My Process & Technologies
    processAndTech: {
      heading: "My Process & Technologies",
      subheading:
        "A rigorous, scientific AI development methodology moving from problem definition and dataset hygiene to model fine-tuning and cloud deployment.",
      phases: [
        {
          step: "Phase 01",
          phaseTitle: "Feasibility Audit & Data Architecture",
          timeline: "Days 1 – 4",
          description:
            "Evaluating whether the problem is best solved by computer vision, LLM reasoning, or deterministic rules. Establishing data pipelines and benchmarks.",
          deliverables: [
            "Technical feasibility and cost-per-inference projection",
            "Data ingestion strategy and annotation schema",
            "Baseline accuracy and latency target definitions",
          ],
        },
        {
          step: "Phase 02",
          phaseTitle: "Model Selection & Architecture Experimentation",
          timeline: "Weeks 1 – 2",
          description:
            "Benchmarking state-of-the-art vision backbones (ResNet, EfficientNet) and foundational LLMs (Gemini, Groq, DeepSeek) for accuracy and latency.",
          deliverables: [
            "Data preprocessing and augmentation scripts (OpenCV, Pandas)",
            "Comparative model experiment reports with loss/accuracy curves",
            "Optimal model architecture selection report",
          ],
        },
        {
          step: "Phase 03",
          phaseTitle: "Fine-Tuning, Prompt Engineering & Tool Integration",
          timeline: "Weeks 3 – 4",
          description:
            "Training neural networks on multi-GPU setups and engineering structured prompts, tool-calling functions, and vector retrieval pipelines.",
          deliverables: [
            "Fine-tuned model weights and hyperparameter checkpoints",
            "Deterministic prompt templates with JSON schema outputs",
            "Working API endpoints executing autonomous tool invocations",
          ],
        },
        {
          step: "Phase 04",
          phaseTitle: "Evaluation, Guardrails & Latency Optimization",
          timeline: "Week 5",
          description:
            "Extensive testing against out-of-distribution noise, edge-case prompts, adversarial inputs, and measuring end-to-end response latency.",
          deliverables: [
            "Validation test suite measuring precision, recall, and F1 scores",
            "Safety guardrails preventing jailbreaks or unauthorized system access",
            "Token caching and inference acceleration implementations",
          ],
        },
        {
          step: "Phase 05",
          phaseTitle: "Production Deployment & Continuous Feedback",
          timeline: "Week 6+",
          description:
            "Deploying models into production via Hugging Face Spaces, Docker containers, or cloud endpoints with automated monitoring.",
          deliverables: [
            "Production deployment with live public endpoint and web GUI",
            "Lightweight REST API wrapper for mobile and web integration",
            "Logging setup for model drift tracking and user feedback loops",
          ],
        },
      ],
      techStack: [
        {
          category: "Computer Vision & Deep Learning",
          skills: [
            {
              name: "ResNet50 / CNNs",
              level: "Expert",
              purpose: "Transfer learning image classification and feature extraction",
            },
            {
              name: "TensorFlow & Keras",
              level: "Advanced",
              purpose: "Deep learning model building, training, and evaluation",
            },
            {
              name: "OpenCV",
              level: "Expert",
              purpose: "Real-time image preprocessing, color spaces, transformations",
            },
            {
              name: "Scikit-learn",
              level: "Advanced",
              purpose: "Classical ML algorithms, clustering, regression, and metrics",
            },
          ],
        },
        {
          category: "Generative AI & LLM Orchestration",
          skills: [
            {
              name: "Google Gemini API",
              level: "Expert",
              purpose: "Multimodal reasoning and high-context document analysis",
            },
            {
              name: "Groq (LPU)",
              level: "Expert",
              purpose: "Ultra-low-latency open-source LLM inference at scale",
            },
            {
              name: "DeepSeek (V3/R1)",
              level: "Advanced",
              purpose: "Advanced mathematical, algorithmic, and diagnostic logic",
            },
            {
              name: "Prompt Engineering",
              level: "Expert",
              purpose: "Few-shot prompting, structured JSON output enforcement",
            },
          ],
        },
        {
          category: "AI Backend & Serving",
          skills: [
            {
              name: "Python",
              level: "Expert",
              purpose: "Core language for modeling, automation, and backend pipelines",
            },
            {
              name: "Flask",
              level: "Expert",
              purpose: "Lightweight, high-throughput microservice inference APIs",
            },
            {
              name: "NumPy & Pandas",
              level: "Expert",
              purpose: "High-performance vector mathematics and data manipulation",
            },
            {
              name: "REST API Integration",
              level: "Expert",
              purpose: "Bridging AI models to mobile frontends and databases",
            },
          ],
        },
        {
          category: "Platforms & Compute Hardware",
          skills: [
            {
              name: "Kaggle (2× GPU)",
              level: "Advanced",
              purpose: "Distributed multi-GPU training and rapid experimentation",
            },
            {
              name: "Hugging Face Spaces",
              level: "Advanced",
              purpose: "Cloud model hosting, inference endpoints, and web demos",
            },
            {
              name: "Docker",
              level: "Intermediate",
              purpose: "Reproducible container environments for ML dependencies",
            },
            {
              name: "Google Colab",
              level: "Advanced",
              purpose: "GPU-accelerated exploratory notebooks and prototypes",
            },
          ],
        },
      ],
    },

    // H2: Relevant Projects / Case Studies
    relevantProjects: {
      heading: "Relevant Projects / Case Studies",
      subheading:
        "Shipped AI applications combining computer vision, multi-LLM reasoning, and cloud deployment in real-world scenarios.",
      caseStudies: [
        {
          projectSlug: "cropheal-ai",
          projectName: "CropHeal AI",
          badge: "Intelligent Agricultural Healthcare & Multi-LLM Vision System",
          headline:
            "Sub-second crop disease diagnosis from leaf photos paired with real-time multi-LLM curative recommendations",
          clientContext:
            "Farmers and agricultural extension officers across rural regions struggle with rapid, accurate leaf disease identification due to the scarcity of on-site plant pathologists, leading to devastating crop losses and excessive chemical overuse.",
          coreChallenge:
            "Building a vision system that generalizes effectively across real-world field conditions (variable sunlight, leaf angles, background noise) and immediately generates comprehensive, safe treatment plans (chemical and organic) without significant delay.",
          technicalSolution:
            "Developed an end-to-end intelligent agricultural healthcare application. Fine-tuned a deep convolutional ResNet50 vision backbone using data augmentation techniques (affine transformations, color jitter, cutout) trained on dual-GPU Kaggle infrastructure. Architected a Python Flask REST API that takes uploaded leaf images, runs vision classification, and orchestrates a multi-LLM diagnostic engine (Google Gemini, Groq, and DeepSeek) to generate real-time dosage guidelines and organic preventative remedies.",
          keyOutcomes: [
            "Instant leaf disease diagnosis across major crop infections (Rice Hispa, Neck Blast, and others)",
            "Integrated multi-LLM pipeline generating actionable, contextual treatment and drug recommendations",
            "Deployed production-ready web application on Hugging Face Spaces accessible globally",
            "Sub-2 second end-to-end turnaround from image upload to comprehensive diagnostic report",
          ],
          technologiesUsed: [
            "Python",
            "ResNet50",
            "Flask",
            "Google Gemini",
            "Groq",
            "DeepSeek",
            "OpenCV",
            "Kaggle (2× GPU)",
            "Hugging Face Spaces",
          ],
          liveUrl: "https://huggingface.co/spaces/trio-rds-tensors/CropHeal-AI",
          githubUrl: "https://github.com/trio-rds-tensors/CropHeal-AI",
        },
      ],
    },

    // H2: Frequently Asked Questions (FAQ)
    faqs: {
      heading: "Frequently Asked Questions (FAQ)",
      subheading:
        "Practical answers regarding AI development costs, accuracy, data security, model hosting, and implementation timelines.",
      items: [
        {
          question: "What is an autonomous AI agent, and how is it different from a basic chatbot?",
          answer:
            "A basic chatbot simply generates text responses based on your prompt. An autonomous AI agent is given a high-level goal and has the ability to reason, break tasks into sequential steps, call external tools (like querying your database, browsing the web, or triggering an API), verify its own outputs, and complete complex workflows autonomously without requiring human intervention at every step.",
        },
        {
          question: "How do you prevent AI models from hallucinating false information?",
          answer:
            "I prevent hallucinations through a multi-layered engineering approach: 1) Retrieval-Augmented Generation (RAG) that restricts the AI to only cite verified facts from your proprietary documentation; 2) Enforcing strict JSON schema responses; 3) Low temperature sampling for deterministic outputs; and 4) Automated validation layers that reject or re-prompt ungrounded statements.",
        },
        {
          question: "How much do commercial AI APIs cost to run on an ongoing basis?",
          answer:
            "API costs depend on usage volume and model choice. However, I specialize in cost-optimization techniques such as prompt compression, caching frequent queries, using ultra-affordable high-speed models like Groq or DeepSeek for intermediate steps, and reserving premium models (like Gemini) only for complex multimodal reasoning. This typically keeps monthly operational costs under $15-$50 for small to mid-sized workloads.",
        },
        {
          question: "Is my business data secure when building custom AI solutions?",
          answer:
            "Yes. We utilize enterprise API agreements where providers explicitly guarantee that your input data is never used to train public foundational models. For highly sensitive operations, we can run self-hosted open-source models inside private Docker containers where data never leaves your infrastructure.",
        },
        {
          question: "Can you integrate AI into my existing mobile application or web portal?",
          answer:
            "Yes. You do not need to rewrite your existing software. I build lightweight, containerized Python Flask or FastAPI microservices that expose standard REST endpoints. Your existing web frontend or mobile app simply sends an image or text payload and receives structured JSON predictions within milliseconds.",
        },
        {
          question: "How long does it take to develop a custom AI prototype or MVP?",
          answer:
            "A standard proof-of-concept (POC) or prototype—such as a fine-tuned vision classifier, a RAG knowledge assistant, or an automated document pipeline—typically takes 2 to 4 weeks. Full production deployments with custom UI, load testing, and security hardening take approximately 4 to 6 weeks.",
        },
      ],
    },

    // CTA: Discuss Your Project / Contact Me
    cta: {
      eyebrow: "Ready to Supercharge Your Business with Custom AI?",
      heading: "Let’s Build Your Custom AI Agent or Machine Learning Solution",
      description:
        "Whether you want to automate complex business processes, build an intelligent vision system, or create a custom domain-specific AI assistant, let's discuss your use case and technical roadmap.",
      primaryButtonLabel: "Schedule AI Consultation",
      secondaryButtonLabel: "Review CropHeal AI Case Study",
      guarantees: [
        "Practical, high-ROI AI architectures",
        "Deterministic, hallucination-free outputs",
        "Cost-optimized inference strategies",
        "Complete source code & model weights ownership",
      ],
      contactEmail: "riyajsaha879@gmail.com",
      responseTime: "Guaranteed response within 24 hours",
    },
  },
};

/**
 * Helper to fetch a service by its primary slug or any configured alias.
 */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  const normalized = slug.toLowerCase().trim();
  const values = Object.values(servicesData);
  return values.find(
    (service) =>
      service.slug === normalized ||
      service.id === normalized ||
      service.aliases.includes(normalized),
  );
}

/**
 * Returns all configured service offerings.
 */
export function getAllServices(): ServiceData[] {
  return Object.values(servicesData);
}

/**
 * Returns all keywords for a given service.
 */
export function getServiceKeywords(slug: string): string[] {
  const service = getServiceBySlug(slug);
  return service?.seo.keywords || [];
}
