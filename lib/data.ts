export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  idealFor: string[];
  techStack: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Business' | 'E-commerce' | 'Healthcare' | 'Real Estate' | 'Restaurants' | 'Startups';
  badge: string;
  liveUrl?: string;
  shortDesc: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  image: string;
  accentColor: string;
  statsLabel?: string;
  statsValue?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  keySolutions: string[];
  tag: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceRange: string;
  isPopular?: boolean;
  tagline: string;
  features: string[];
  highlight: string;
  ctaText: string;
}

export interface MaintenancePlan {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  details: string;
  deliverables: string[];
}

export interface ProblemCard {
  id: string;
  title: string;
  impact: string;
  solution: string;
  iconName: string;
}

export interface FeatureBlock {
  title: string;
  description: string;
  iconName: string;
}

// 1. PRIMARY SERVICES DATA
export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Design & Development",
    shortDesc: "Modern, responsive business websites designed to build credibility and generate enquiries.",
    fullDesc: "We build custom websites engineered for speed, security, and conversion. Every line of code is structured to present your brand with pristine clarity while turning visitors into buyers.",
    iconName: "Globe",
    features: [
      "Mobile-First Responsive Architecture",
      "Next.js & React High-Performance Rendering",
      "Search Engine Friendly Code Structure",
      "Interactive Modern Component UI/UX",
      "WhatsApp & Direct Contact Conversion Triggers",
    ],
    deliverables: [
      "Custom Component UI Design",
      "Full Next.js / React Frontend Build",
      "Content Management Integration",
      "Speed & Core Web Vitals Optimization",
      "Domain & SSL Deployment Setup",
    ],
    idealFor: [
      "Professional Services & Firms",
      "Growing Local Businesses",
      "Technology & Healthcare Startups",
      "Corporate & Industrial Companies",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "e-commerce",
    slug: "e-commerce",
    title: "E-commerce Development",
    shortDesc: "Professional online stores built to showcase products and make selling easier.",
    fullDesc: "Empower your business with high-conversion e-commerce storefronts. Seamless payment gateway integrations, lightning-fast product filtering, and smooth mobile checkout experiences.",
    iconName: "ShoppingBag",
    features: [
      "Frictionless Mobile Checkout Journey",
      "Indian Payment Gateway Integrations (Razorpay, UPI, Cards)",
      "Dynamic Product Filtering & Search",
      "Inventory & Order Tracking Dashboards",
      "High Security & SSL Data Encryption",
    ],
    deliverables: [
      "Custom E-commerce Storefront UI",
      "Product Catalog & Cart Architecture",
      "Payment Gateway Integration",
      "Automated Order Notifications",
      "Admin Dashboard Setup",
    ],
    idealFor: [
      "Direct-to-Consumer Brands",
      "Retail Businesses Transitioning Online",
      "Wholesale & B2B Suppliers",
      "Boutique Artisans & Manufacturers",
    ],
    techStack: ["Next.js", "Shopify Headless / Custom Node", "Razorpay API", "Tailwind CSS"],
  },
  {
    id: "website-redesign",
    slug: "website-redesign",
    title: "Website Redesign",
    shortDesc: "Transform outdated websites into modern digital experiences.",
    fullDesc: "Upgrade your legacy website with modern aesthetics, fast load speeds, and intuitive user experiences that match the stature of your business today.",
    iconName: "Sparkles",
    features: [
      "Complete Visual & Architectural Revamp",
      "Mobile UX & Touch Target Modernization",
      "Page Speed & Performance Reconstruction",
      "SEO Equity & Link Preservation",
      "Brand Narrative & Typography Upgrade",
    ],
    deliverables: [
      "UX/UI Audit & Wireframing",
      "Full Design Reconstruction",
      "Migration of Existing Content & URLs",
      "301 Redirect Structure for SEO Safety",
      "Modern Interactive Polish",
    ],
    idealFor: [
      "Companies with 3+ Year Old Websites",
      "Brands Undergoing Rebranding",
      "Businesses Experiencing Low Mobile Conversions",
      "Firms Needing Modern SaaS Aesthetics",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion", "Lighthouse Tools"],
  },
  {
    id: "seo",
    slug: "seo",
    title: "SEO Solutions",
    shortDesc: "Build a stronger foundation for search visibility and organic growth.",
    fullDesc: "Strategic search engine optimization focused on clean technical architecture, keyword alignment, Google Business Profiles, and sustainable organic traffic growth.",
    iconName: "TrendingUp",
    features: [
      "Technical On-Page & Schema Markup Optimization",
      "Core Web Vitals & Page Speed Enhancements",
      "Local SEO & Google Business Profile Strategy",
      "Keyword & Intent Target Mapping",
      "Clean Semantic HTML Hierarchy",
    ],
    deliverables: [
      "Full Site Technical SEO Audit",
      "Schema.org Structured Data Implementation",
      "Meta Tag & Canonical URL Strategy",
      "XML Sitemap & Robots.txt Setup",
      "Google Search Console Integration",
    ],
    idealFor: [
      "Local Businesses Seeking Nearby Clients",
      "Healthcare Clinics & Hospitals",
      "Real Estate Developers & Agencies",
      "Educational Institutions",
    ],
    techStack: ["JSON-LD", "Google Search Console", "Lighthouse", "Next.js Metadata API"],
  },
  {
    id: "website-maintenance",
    slug: "website-maintenance",
    title: "Website Maintenance",
    shortDesc: "Keep your website secure, updated, fast and reliable.",
    fullDesc: "Dedicated technical upkeep to ensure your digital store or website remains bug-free, securely backed up, and running at peak performance 24/7.",
    iconName: "ShieldCheck",
    features: [
      "Proactive Security Audits & Updates",
      "Automated Cloud Backups & Instant Recovery",
      "Uptime Monitoring & Performance Tuning",
      "Content Updates & Minor Feature Additions",
      "Technical Support & Rapid Troubleshooting",
    ],
    deliverables: [
      "Monthly Health & Performance Reports",
      "Dependency & Framework Security Patching",
      "Daily/Weekly Automated Off-site Backups",
      "Dedicated Ticket & WhatsApp Support",
      "Uptime Guarantee Protocols",
    ],
    idealFor: [
      "Busy Business Owners Without Tech Staff",
      "E-commerce Stores Requiring 100% Uptime",
      "High-Traffic Professional Services Sites",
      "Corporate Websites Needing Strict Security",
    ],
    techStack: ["Next.js", "Git Version Control", "Cloudflare", "Automated Monitors"],
  },
  {
    id: "digital-solutions",
    slug: "digital-solutions",
    title: "Custom Digital Solutions",
    shortDesc: "Custom tools, automation and technology solutions built around your business.",
    fullDesc: "Bespoke digital tools, business workflow automation, customer portals, and AI-assisted workflows engineered to simplify operations and scale your revenue.",
    iconName: "Cpu",
    features: [
      "Custom Internal Tool & Dashboard Design",
      "WhatsApp & API Workflow Automations",
      "Customer Self-Service Portals",
      "AI Smart Assistant & Chat Integration",
      "Cloud Database & API Connectivity",
    ],
    deliverables: [
      "System Architecture & Blueprint",
      "Custom Dashboard / Portal Development",
      "API Integrations & Webhook Setup",
      "User Training & Technical Documentation",
      "Continuous Optimization Support",
    ],
    idealFor: [
      "Growing Startups & Enterprises",
      "Real Estate & Lead Generation Businesses",
      "Logistics & Operations Heavy Firms",
      "Innovative Service Providers",
    ],
    techStack: ["React / Next.js", "TypeScript", "Node.js API", "Tailwind CSS"],
  },
  {
    id: "erp-development",
    slug: "erp-development",
    title: "ERP Software Development",
    shortDesc: "Custom ERP systems built around your actual business workflows — not generic off-the-shelf software.",
    fullDesc: "Enterprise Resource Planning software tailored precisely to your operations. We design and develop modular, cloud-hosted ERP systems that connect your sales, inventory, HR, finance, and operations into a single unified platform — replacing disconnected spreadsheets and manual processes with one coherent system.",
    iconName: "Database",
    features: [
      "Custom Module Architecture for Your Business",
      "Sales, Inventory & Order Management",
      "HR, Payroll & Employee Management Modules",
      "Finance, Invoicing & Reporting Dashboards",
      "Role-Based User Access & Permissions",
    ],
    deliverables: [
      "Custom ERP Web Application",
      "Admin Dashboard with Role Management",
      "Database Architecture & API Layer",
      "Staff Training & User Documentation",
      "Deployment & Ongoing Technical Support",
    ],
    idealFor: [
      "Manufacturing & Production Businesses",
      "Wholesale & Distribution Companies",
      "Retail Chains & Multi-Outlet Operations",
      "Service Firms Needing Process Automation",
    ],
    techStack: ["React / Next.js", "Node.js", "PostgreSQL / MySQL", "REST APIs", "TypeScript"],
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Custom Software Development",
    shortDesc: "Bespoke software applications built for your specific business needs — beyond what generic tools can offer.",
    fullDesc: "We design and develop purpose-built software solutions for businesses that need more than off-the-shelf tools can provide. From internal workflow tools to customer-facing web applications and administrative dashboards, every solution is engineered around your exact processes.",
    iconName: "Code2",
    features: [
      "Business-Specific Application Architecture",
      "Web Application & Admin Portal Development",
      "Customer Self-Service Portal Development",
      "Workflow Automation & Process Digitization",
      "Third-Party System & API Integration",
    ],
    deliverables: [
      "Custom Web Application Frontend",
      "Backend API & Database Architecture",
      "User Authentication & Role Management",
      "Technical Documentation & Source Code",
      "Quality Testing & Deployment",
    ],
    idealFor: [
      "Businesses Outgrowing Generic Software",
      "Companies Needing Internal Business Tools",
      "Organizations Automating Manual Processes",
      "Startups Building Digital Products",
    ],
    techStack: ["React / Next.js", "TypeScript", "Node.js", "SQL / NoSQL Databases", "REST APIs"],
  },
];

// 2. PORTFOLIO PROJECTS (LIVE & CONCEPTS)
export const portfolioData: PortfolioItem[] = [
  {
    id: "shri-krishna-grocery-store",
    title: "Shri Krishna Grocery Store",
    category: "E-commerce",
    badge: "Live Project",
    liveUrl: "https://shri-krishna-grocery-store.vercel.app/",
    shortDesc: "Full-featured modern e-commerce storefront for online grocery shopping with dynamic catalog, smart search, and instant cart management.",
    overview: "A production-grade live e-commerce platform engineered for Shri Krishna Grocery Store to establish a modern online retail presence, digitize customer ordering, and expand local reach.",
    challenge: "Local retail grocery shoppers required a fast, user-friendly digital storefront with quick item search, category browsing, and instant WhatsApp / online order placement.",
    solution: "Engineered a high-performance responsive web application with fast product loading, intuitive cart drawer, search filtering, and seamless mobile checkout UX.",
    keyFeatures: ["Dynamic Grocery Product Catalog", "Instant Category Filtering & Search", "Mobile-Optimized Cart & Checkout", "WhatsApp & Digital Order Triggers", "100/100 Core Web Vitals Optimization"],
    image: "/images/showcase/concept-ecommerce.jpg",
    accentColor: "#10B981",
    statsLabel: "Deployment",
    statsValue: "Live on Vercel",
  },
  {
    id: "concept-restaurant",
    title: "Spice & Wood Culinary Experience",
    category: "Restaurants",
    badge: "Concept Project",
    shortDesc: "Immersive dining website with interactive menu, online reservation, and WhatsApp booking triggers.",
    overview: "A sleek modern culinary interface designed for high-end dining venues seeking to drive table reservations and online order enquiries directly through their site.",
    challenge: "Traditional PDF menus and slow web pages cause potential diners to leave before booking tables.",
    solution: "Created an ultra-fast mobile-optimized menu experience with instant category navigation and one-tap reservation modals.",
    keyFeatures: ["Interactive Dynamic Menu", "Instant Table Reservation Form", "Mobile-Optimized Touch Layout", "Integrated Map & Contact Triggers"],
    image: "/images/showcase/concept-restaurant.jpg",
    accentColor: "#1677FF",
    statsLabel: "User Experience",
    statsValue: "Instant Load",
  },
  {
    id: "concept-healthcare",
    title: "Aura Dental & Care Clinic",
    category: "Healthcare",
    badge: "Concept Project",
    shortDesc: "Patient-centered healthcare portal featuring doctor profiles, appointment scheduling, and treatment guides.",
    overview: "A trustworthy, pristine digital presence for medical clinics that instills patient confidence and streamlines online booking.",
    challenge: "Complex navigation and lack of mobile accessibility made booking medical consultations confusing for patients.",
    solution: "Designed a clean, reassuring layout with clear treatment breakdowns and direct appointment booking pathways.",
    keyFeatures: ["Doctor Specialization Showcase", "Treatment Cost Transparency Guide", "Online Appointment Request", "Patient Testimonial Layout"],
    image: "/images/showcase/concept-healthcare.jpg",
    accentColor: "#23A9FF",
    statsLabel: "Mobile Readiness",
    statsValue: "100%",
  },
  {
    id: "concept-realestate",
    title: "Urban Skyline Real Estate & Properties",
    category: "Real Estate",
    badge: "Concept Project",
    shortDesc: "Luxury property showcase platform with interactive floorplans, virtual tour triggers, and lead forms.",
    overview: "A high-impact property portal engineered for real estate developers and agencies to capture high-intent buyer enquiries.",
    challenge: "Standard static listings fail to convey property elegance and lower high-ticket lead conversion rates.",
    solution: "Built cinematic visual property cards, gallery lightboxes, and quick brochure download triggers.",
    keyFeatures: ["High-Res Property Galleries", "Filterable Project Search", "Brochure Request Modal", "WhatsApp Enquiry Trigger"],
    image: "/images/showcase/concept-realestate.jpg",
    accentColor: "#1677FF",
    statsLabel: "Design Polish",
    statsValue: "High-End SaaS",
  },
  {
    id: "concept-ecommerce",
    title: "Veda Organics Skincare Storefront",
    category: "E-commerce",
    badge: "Concept Project",
    shortDesc: "Modern direct-to-consumer organic brand e-commerce storefront with rapid cart checkout.",
    overview: "A clean, natural product storefront designed for fast product discovery, transparent ingredients, and smooth UPI checkout.",
    challenge: "High cart abandonment due to cluttered product pages and slow mobile performance.",
    solution: "Simplified product layout with sticky buy action buttons, customer review tags, and 1-step checkout preview.",
    keyFeatures: ["Visual Ingredient Breakdown", "Sticky Cart Trigger", "Razorpay / UPI Payment UX", "Responsive Mobile Drawer Cart"],
    image: "/images/showcase/concept-ecommerce.jpg",
    accentColor: "#10B981",
    statsLabel: "Performance",
    statsValue: "Core Vitals Opt",
  },
  {
    id: "concept-startup",
    title: "Nexus Flow SaaS Technology Platform",
    category: "Startups",
    badge: "Concept Project",
    shortDesc: "Minimalist B2B tech startup landing page featuring dark mode aesthetics, interactive feature tabs, and lead capture.",
    overview: "A modern SaaS landing page built for tech startups seeking a sleek, Stripe-level visual identity to raise funds and onboard pilot clients.",
    challenge: "Tech startups often struggle to explain complex tech architecture in a crisp, compelling visual format.",
    solution: "Architected modern glassmorphism cards, interactive tabbed dashboards, and live code preview components.",
    keyFeatures: ["Interactive SaaS Feature Tabs", "Pricing Tier Calculator", "Clean Typography Hierarchy", "Dark Navy Aesthetic"],
    image: "/images/showcase/concept-startup.jpg",
    accentColor: "#1677FF",
    statsLabel: "Aesthetic",
    statsValue: "Linear-Grade",
  },

];

// 3. PROBLEM CARDS (HOMEPAGE SECTION 3)
export const problemCards: ProblemCard[] = [
  {
    id: "problem-1",
    title: "No Professional Website",
    impact: "Customers can't easily find or understand what your business offers.",
    solution: "We build modern, credible websites that establish instant authority when customers search for you.",
    iconName: "GlobeX",
  },
  {
    id: "problem-2",
    title: "Outdated Website",
    impact: "Your website fails to represent the quality and stature of your business today.",
    solution: "We perform complete website redesigns that elevate your brand image to global standards.",
    iconName: "ClockHistory",
  },
  {
    id: "problem-3",
    title: "Poor Mobile Experience",
    impact: "Over 80% of your potential customers browse from phones—and leave if the page breaks.",
    solution: "We engineer mobile-first responsive interfaces that feel native, fast, and effortless on every smartphone.",
    iconName: "SmartphoneBroken",
  },
  {
    id: "problem-4",
    title: "Not Getting Enough Enquiries",
    impact: "Your current website gets occasional visitors but fails to guide them toward taking action.",
    solution: "We integrate strategic conversion triggers, WhatsApp CTAs, and user journeys designed to generate real leads.",
    iconName: "UserMinus",
  },
];

// 4. WHY NIRMAAN INFOTECH (HOMEPAGE SECTION 7)
export const whyNirmaanFeatures: FeatureBlock[] = [
  {
    title: "Business-First Thinking",
    description: "We start with your real business goals—not just technology for technology's sake. Every design decision serves lead generation and clarity.",
    iconName: "Target",
  },
  {
    title: "Modern SaaS Aesthetics",
    description: "Interfaces designed to look sophisticated, minimal, and authoritative, matching the visual standard of leading global technology companies.",
    iconName: "LayoutTheme",
  },
  {
    title: "Built for Performance & Speed",
    description: "Lightning fast page load times using modern Next.js and React component architecture to maximize user retention and Search rankings.",
    iconName: "Zap",
  },
  {
    title: "Long-Term Reliability & Support",
    description: "We don't disappear after your website goes live. We offer dedicated maintenance, security patching, and ongoing feature updates.",
    iconName: "Headphones",
  },
];

// 5. PROCESS STEPS (HOMEPAGE SECTION 8)
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    shortDesc: "Understand your business, target audience, competitive market, and primary goals.",
    details: "We start with a thorough discovery consultation to map out your core value proposition, key target customer segments, and digital requirements.",
    deliverables: ["Requirements Document", "Target Customer Profile", "Project Scope Mapping"],
  },
  {
    step: "02",
    title: "Plan",
    shortDesc: "Define the site structure, content hierarchy, page navigation, and technical stack.",
    details: "We map out every page section, user flow, call-to-action placement, and content architecture before touching any code.",
    deliverables: ["Sitemap & Information Architecture", "Content Outline", "Tech Stack Specification"],
  },
  {
    step: "03",
    title: "Design",
    shortDesc: "Create modern visual UI directions, typography systems, and responsive layouts.",
    details: "We craft clean, editorial component designs with dark navy tones, electric blue accents, and crisp typography tailored to your brand identity.",
    deliverables: ["High-Fidelity Component Layouts", "Brand UI Tokens & Colors", "Responsive Screen Specifications"],
  },
  {
    step: "04",
    title: "Build",
    shortDesc: "Develop your website using Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.",
    details: "We write clean, modular React component code optimized for performance, accessibility, SEO, and smooth animations.",
    deliverables: ["Production Frontend Repository", "Reusable Component System", "Content & Asset Integration"],
  },
  {
    step: "05",
    title: "Test",
    shortDesc: "Rigorously test responsiveness, cross-device rendering, forms, and load speed.",
    details: "Every page is tested across 320px mobile to 1920px+ desktop displays, ensuring zero layout overflows and flawless form submissions.",
    deliverables: ["Mobile QA Audit", "Core Web Vitals Verification", "Form & Link Testing Report"],
  },
  {
    step: "06",
    title: "Launch",
    shortDesc: "Deploy your website to high-speed cloud servers with SSL security and domain configuration.",
    details: "We launch your live website on secure CDN infrastructure, configure SSL certificates, and set up Google Search Console metadata.",
    deliverables: ["Live Website Deployment", "SSL & Domain Setup", "Google Search Console Indexing"],
  },
  {
    step: "07",
    title: "Grow",
    shortDesc: "Provide ongoing maintenance, security updates, SEO optimization, and feature enhancements.",
    details: "Our relationship continues with regular technical health checks, monthly backups, performance tuning, and growth updates.",
    deliverables: ["Monthly Technical Health Check", "Automated Cloud Backups", "Priority Support Line"],
  },
];

// 6. INDUSTRIES DATA (HOMEPAGE SECTION 9)
export const industriesData: IndustryItem[] = [
  {
    id: "restaurants",
    title: "Restaurants & Cafes",
    description: "Digital menus, table reservations, location maps, and direct order enquiry triggers.",
    iconName: "Utensils",
    keySolutions: ["Interactive Digital Menu", "WhatsApp Table Booking", "Google Maps Integration"],
    tag: "Hospitality",
  },
  {
    id: "healthcare",
    title: "Clinics & Healthcare",
    description: "Doctor profiles, appointment request forms, treatment breakdowns, and patient trust elements.",
    iconName: "Activity",
    keySolutions: ["Patient Appointment Booking", "Specialty Breakdown", "HIPAA/Data Mindful UI"],
    tag: "Healthcare",
  },
  {
    id: "realestate",
    title: "Real Estate & Builders",
    description: "Property galleries, floor plan lightboxes, brochure download triggers, and lead generation.",
    iconName: "Building2",
    keySolutions: ["High-Impact Property Cards", "Brochure Request Modals", "Lead Capture Automation"],
    tag: "Real Estate",
  },
  {
    id: "education",
    title: "Education & Coaching",
    description: "Course catalogs, admission inquiry forms, facility showcases, and student testimonials.",
    iconName: "GraduationCap",
    keySolutions: ["Course Curriculum Display", "Admission Query Forms", "Student Success Stories"],
    tag: "Education",
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    description: "Project portfolios, completed site showcases, equipment lists, and tender inquiry forms.",
    iconName: "HardHat",
    keySolutions: ["Completed Project Gallery", "Corporate Profile Download", "Tender Query Triggers"],
    tag: "Industrial",
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    description: "Product showcases, brand stories, store locators, and seamless online purchasing.",
    iconName: "Store",
    keySolutions: ["Online Storefront", "UPI & Razorpay Checkout", "Inventory Showcase"],
    tag: "Retail",
  },
  {
    id: "professionalservices",
    title: "Professional Services",
    description: "Consulting, legal, and accounting websites engineered to project authority and earn retainers.",
    iconName: "Briefcase",
    keySolutions: ["Practice Area Modules", "Consultation Scheduler", "Client Trust Badges"],
    tag: "Services",
  },
  {
    id: "startups",
    title: "Startups & Technology",
    description: "SaaS landing pages, product architecture displays, investor pitch alignment, and beta signups.",
    iconName: "Rocket",
    keySolutions: ["Modern SaaS Design", "Interactive Feature Tabs", "Beta Waitlist Forms"],
    tag: "Technology",
  },
];

// 7. PRICING PACKAGES (HOMEPAGE SECTION 10)
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "STARTER",
    priceRange: "₹9,999 – ₹14,999",
    tagline: "For small businesses getting started with a strong online presence.",
    highlight: "Essential foundation for local businesses",
    features: [
      "3 to 5 Professional Pages",
      "100% Mobile-First Responsive Design",
      "Interactive Contact Form",
      "Direct WhatsApp Chat Integration",
      "Google Maps Location Setup",
      "Basic On-Page SEO Configuration",
      "Fast Cloud Deployment & SSL",
    ],
    ctaText: "Discuss Starter Scope",
  },
  {
    id: "business",
    name: "BUSINESS",
    priceRange: "₹19,999 – ₹34,999",
    isPopular: true,
    tagline: "Most popular choice for growing businesses needing custom UI and lead tools.",
    highlight: "Complete digital growth package",
    features: [
      "5 to 10 Custom Designed Pages",
      "Modern SaaS Component Architecture",
      "Mobile Optimization & Touch UX",
      "WhatsApp & Lead Capture Automation",
      "Google Analytics & Search Console Setup",
      "Enhanced SEO & Metadata Hierarchy",
      "Core Web Vitals Speed Optimization",
      "Social Media & Map Integrations",
    ],
    ctaText: "Discuss Business Project",
  },
  {
    id: "premium",
    name: "PREMIUM",
    priceRange: "₹39,999+",
    tagline: "For ambitious companies requiring custom UI/UX, advanced features, or e-commerce.",
    highlight: "Bespoke technology & advanced solutions",
    features: [
      "Full Custom UI/UX Design & Development",
      "10+ Dynamic Pages / Custom Portals",
      "E-commerce or Custom API Integrations",
      "Advanced Lead Workflows & Database Integration",
      "Complete Technical SEO & Structured Data",
      "High-Performance Animation System",
      "Priority Technical Support & Maintenance",
      "Dedicated Project Manager",
    ],
    ctaText: "Discuss Custom Solution",
  },
];

// 8. MAINTENANCE PACKAGES (HOMEPAGE SECTION 11)
export const maintenancePlans: MaintenancePlan[] = [
  {
    id: "basic-care",
    name: "BASIC CARE",
    price: "₹1,499",
    billing: "/ month",
    description: "Essential technical upkeep, security monitoring, and regular backups for small sites.",
    features: [
      "Weekly Cloud Backups",
      "Security Updates & Patching",
      "Uptime Monitoring",
      "Minor Content Updates (1 hr/mo)",
      "Email & WhatsApp Support",
    ],
  },
  {
    id: "business-care",
    name: "BUSINESS CARE",
    price: "₹2,999",
    billing: "/ month",
    isPopular: true,
    description: "Comprehensive maintenance for active business websites requiring regular enhancements.",
    features: [
      "Daily Automated Cloud Backups",
      "Proactive Security & Firewall Audit",
      "Monthly Speed & Vitals Tuning",
      "Content & Graphic Updates (3 hrs/mo)",
      "SEO Health Checks",
      "Priority WhatsApp Support",
    ],
  },
  {
    id: "premium-care",
    name: "PREMIUM CARE",
    price: "₹5,999+",
    billing: "/ month",
    description: "Dedicated full-stack maintenance, emergency response, and continuous feature expansion.",
    features: [
      "Real-Time Offsite Backups",
      "24/7 Security & Uptime Guarantee",
      "Continuous Core Web Vitals Optimization",
      "Monthly Strategy & Analytics Review",
      "Dedicated Feature Updates (8 hrs/mo)",
      "Instant Emergency Incident Response",
    ],
  },
];

// 9. FAQ DATA (Homepage / General)
export const faqsData = [
  {
    question: "How long does it take to design and build a website with Nirmaan Infotech?",
    answer: "Typically, a Starter website takes 1–2 weeks, a Business website takes 2–4 weeks, and complex Premium or E-commerce solutions take 4–6 weeks depending on requirements and content availability.",
  },
  {
    question: "Will my website look and work great on mobile phones?",
    answer: "Absolutely. Every website we build is engineered mobile-first. We rigorously test across 320px to 1920px+ resolutions to guarantee zero overflow, fast rendering, and comfortable touch buttons.",
  },
  {
    question: "What is included in your website development packages?",
    answer: "Our packages cover end-to-end development: custom component UI design, modern Next.js/React frontend code, mobile optimization, contact form setup, WhatsApp triggers, basic SEO, domain deployment, and SSL security.",
  },
  {
    question: "Does final pricing vary from the displayed packages?",
    answer: "Yes, final pricing depends strictly on your project scope, total page count, specific integrations (like payment gateways or custom APIs), and design complexity. We provide a transparent, fixed quote before starting.",
  },
  {
    question: "Do you offer website maintenance and support after launch?",
    answer: "Yes. We offer Basic, Business, and Premium Care maintenance packages starting from ₹1,499/month to keep your site updated, secure, backed up, and performing fast.",
  },
  {
    question: "Do you build ERP software for businesses in Pune?",
    answer: "Yes. We design and develop custom ERP systems tailored to your specific business workflows — covering sales, inventory, HR, finance, and reporting. Our ERP solutions are built as web applications accessible from any device.",
  },
  {
    question: "Do you build custom software for businesses?",
    answer: "Yes. We develop purpose-built software applications for businesses that need tools beyond what generic off-the-shelf solutions provide — including admin portals, workflow automation tools, customer management systems, and internal dashboards.",
  },
  {
    question: "How do we start a project with Nirmaan Infotech?",
    answer: "Contact us through our website form, WhatsApp, or phone. We start with a free discovery consultation to understand your business goals, scope, and requirements. We then provide a clear, fixed project proposal before any work begins.",
  },
];

// 10. SERVICE-SPECIFIC FAQ DATA
export const websiteDevFAQs = [
  {
    question: "How much does a business website cost in Pune?",
    answer: "Website development costs in Pune depend on the number of pages, design complexity, and required features. A professional business website typically ranges from ₹9,999 for a basic presence to ₹39,999+ for advanced custom builds with integrations. We provide a fixed quote after understanding your exact requirements.",
  },
  {
    question: "How long does website development take?",
    answer: "A standard business website takes 1–4 weeks depending on scope. Simple 3–5 page sites are typically ready in 1–2 weeks. More complex websites with custom features, animations, and integrations take 3–4 weeks. We maintain clear timelines with milestone updates throughout.",
  },
  {
    question: "Do you build custom websites or use templates?",
    answer: "We build fully custom websites using Next.js and React. Every component is designed and developed for your specific business — not a template or WordPress theme. This ensures better performance, flexibility, and SEO compared to template-based approaches.",
  },
  {
    question: "Do you provide mobile-responsive websites?",
    answer: "Yes. Every website we develop is engineered mobile-first. We test across phone, tablet, and desktop screen sizes — from 320px smartphones to wide desktop displays — to ensure consistent layout, readable text, and touch-friendly interactions.",
  },
  {
    question: "Do you build SEO-friendly websites?",
    answer: "Yes. Our websites use clean semantic HTML, proper heading structures, fast loading speeds, mobile responsiveness, structured data (JSON-LD), and correct canonical URLs — all important factors for search engine visibility.",
  },
  {
    question: "Do you provide website maintenance after the site goes live?",
    answer: "Yes. We offer ongoing maintenance packages covering security updates, regular backups, performance checks, and content updates — so your website stays secure, fast, and up to date after launch.",
  },
];

export const ecommerceFAQs = [
  {
    question: "How much does an e-commerce website cost?",
    answer: "E-commerce website development costs depend on product catalog size, payment gateway requirements, and features like inventory management and order tracking. We provide a detailed fixed quote based on your specific store requirements.",
  },
  {
    question: "Do you integrate Indian payment gateways like Razorpay and UPI?",
    answer: "Yes. We integrate Razorpay, UPI, debit/credit cards, and net banking — covering the payment methods most commonly used by Indian shoppers. Your customers can complete purchases using their preferred payment method.",
  },
  {
    question: "How long does it take to build an online store?",
    answer: "A standard e-commerce store with product catalog, cart, and payment integration typically takes 4–6 weeks. More complex stores with custom inventory systems or multiple vendor support may take longer.",
  },
  {
    question: "Can you migrate my existing store to a new platform?",
    answer: "Yes. We handle product catalog migration, URL structure preservation, and SEO redirect mapping so your search rankings are protected during the transition to a new, better-performing store.",
  },
  {
    question: "Do you provide order management and admin dashboard?",
    answer: "Yes. We build intuitive admin dashboards where you can manage products, view orders, track inventory, and update pricing without technical knowledge.",
  },
];

export const websiteRedesignFAQs = [
  {
    question: "When should I redesign my website?",
    answer: "Consider a redesign if your website is more than 3 years old, loads slowly, looks outdated on mobile devices, no longer represents your business quality, or fails to generate enquiries. A modern redesign addresses all these problems.",
  },
  {
    question: "Will redesigning my website affect my Google rankings?",
    answer: "A properly executed redesign preserves or improves your search rankings. We maintain your existing URL structure, implement 301 redirects for any changed URLs, and ensure all metadata and on-page SEO signals are preserved or improved.",
  },
  {
    question: "How long does a website redesign take?",
    answer: "A standard website redesign typically takes 2–5 weeks depending on the number of pages, content migration complexity, and new feature additions. We provide a clear timeline at the start of the project.",
  },
  {
    question: "Can you keep my existing content and just update the design?",
    answer: "Yes. We migrate your existing content, images, and structure into the new design — improving readability, layout, and presentation while preserving the information your customers already rely on.",
  },
];

export const seoFAQs = [
  {
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term strategy. Technical SEO improvements (like page speed, structured data, and proper canonicals) can have faster impact. Meaningful ranking improvements for competitive keywords typically take 3–6 months of consistent work.",
  },
  {
    question: "Do you do local SEO for Pune businesses?",
    answer: "Yes. We help Pune-based businesses improve their visibility in local Google searches by optimizing their website's technical structure, local business schema, Google Business Profile consistency, and location-relevant content.",
  },
  {
    question: "What is technical SEO?",
    answer: "Technical SEO refers to the behind-the-scenes website optimizations that help search engines crawl, understand, and index your site. This includes page speed, mobile responsiveness, canonical URLs, structured data, sitemap, robots.txt, and proper heading hierarchy.",
  },
  {
    question: "Do you guarantee first position on Google?",
    answer: "No ethical SEO provider can guarantee specific ranking positions. Google's ranking systems consider hundreds of factors including competition, domain history, and content quality. We focus on maximizing your legitimate ranking potential through technical excellence and quality content.",
  },
];

export const maintenanceFAQs = [
  {
    question: "Why does my website need ongoing maintenance?",
    answer: "Websites require regular updates to their frameworks, security dependencies, and content. Without maintenance, websites can develop security vulnerabilities, broken functionality, slow loading speeds, and outdated content that erodes visitor trust.",
  },
  {
    question: "What does website maintenance include?",
    answer: "Our maintenance packages include security patching, automated cloud backups, uptime monitoring, performance checks, minor content updates, and technical support via WhatsApp and email.",
  },
  {
    question: "How quickly do you respond to issues?",
    answer: "For Business and Premium Care clients, we provide priority WhatsApp support with rapid response times for critical issues. Basic Care clients are supported via email with standard response times.",
  },
  {
    question: "Can I cancel the maintenance plan anytime?",
    answer: "Yes. Our maintenance plans are flexible monthly subscriptions. You can adjust or cancel your plan at the end of any billing period.",
  },
];

export const digitalSolutionsFAQs = [
  {
    question: "What kinds of custom digital solutions do you build?",
    answer: "We build business dashboards, internal management tools, customer self-service portals, workflow automation systems, API integrations, and custom web applications — all designed around your specific business processes.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Yes. We design API integrations that connect your new digital solution with existing tools — including CRMs, accounting systems, payment providers, WhatsApp APIs, and other third-party services.",
  },
  {
    question: "How long does a custom digital solution take to develop?",
    answer: "Development timelines vary based on complexity. A focused internal tool may take 4–8 weeks. More complex multi-module systems take 8–16 weeks. We provide detailed timeline estimates in the project proposal.",
  },
];

export const erpFAQs = [
  {
    question: "What is ERP software and does my business need it?",
    answer: "ERP (Enterprise Resource Planning) software connects your business functions — sales, inventory, HR, finance — into one integrated system. If your team uses multiple disconnected tools or relies heavily on manual spreadsheets, an ERP system can significantly improve efficiency, reduce errors, and provide real-time business visibility.",
  },
  {
    question: "What is the difference between custom ERP and off-the-shelf ERP?",
    answer: "Off-the-shelf ERP (like SAP or Tally) is built for general use and requires your business to adapt to the software. Custom ERP is built specifically for your workflows, terminology, and requirements — meaning the software adapts to your business, not the other way around.",
  },
  {
    question: "Do you build ERP for small and medium businesses?",
    answer: "Yes. We build ERP solutions scaled to the needs and budget of small and medium businesses. Our approach focuses on the modules that actually matter for your operations — not overwhelming you with features you don't need.",
  },
  {
    question: "How long does custom ERP development take?",
    answer: "ERP development timelines depend on the number of modules, complexity of business processes, and integration requirements. A focused ERP system covering 2–4 core modules typically takes 8–16 weeks. We provide a detailed roadmap during the discovery phase.",
  },
  {
    question: "Will we get training on how to use the ERP system?",
    answer: "Yes. We include staff training and user documentation as part of every ERP delivery. Your team receives hands-on walkthroughs of the system before go-live, and we provide technical support during the transition period.",
  },
  {
    question: "Can you build ERP modules for inventory management?",
    answer: "Yes. Inventory management — including product tracking, stock levels, purchase orders, and supplier management — is one of the most commonly requested ERP modules we develop for manufacturing, wholesale, and retail businesses.",
  },
];

export const softwareDevFAQs = [
  {
    question: "What types of software does Nirmaan Infotech develop?",
    answer: "We develop custom web applications, admin portals, business management tools, customer self-service systems, workflow automation software, and internal dashboards. All software is built as web applications accessible from any browser.",
  },
  {
    question: "Do we get full ownership of the source code?",
    answer: "Yes. Upon project completion and final payment, you receive full ownership of the source code, database architecture, and all project deliverables. You are not tied to any licensing fees or vendor lock-in.",
  },
  {
    question: "How is custom software different from a website?",
    answer: "A website primarily presents information and generates enquiries. Custom software performs specific business functions — managing data, automating workflows, processing transactions, and enabling your team to operate more efficiently.",
  },
  {
    question: "Can you add new features to our existing software?",
    answer: "Yes. If you already have an existing system and need new modules, integrations, or feature expansions, we can assess your current architecture and develop compatible additions or improvements.",
  },
  {
    question: "How long does custom software development take?",
    answer: "Timeline depends on the scope and complexity of the application. Focused business tools typically take 6–10 weeks. Multi-feature applications with complex logic and integrations take 10–20 weeks. We provide a detailed milestone plan in your project proposal.",
  },
];

