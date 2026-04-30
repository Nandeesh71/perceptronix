import serviceLanding from "@/assets/service-landing.png";
import serviceEcommerce from "@/assets/service-ecommerce.png";
import serviceMultipage from "@/assets/service-multipage.png";
import service3d from "@/assets/service-3d.png";
import serviceUiux from "@/assets/service-uiux.png";
import serviceAppdev from "@/assets/service-appdev.png";
import serviceMl from "@/assets/service-ml.png";
import serviceResearch from "@/assets/service-research.png";

export interface ServiceData {
  slug: string;
  title: string;
  tag: string;
  image: string;
  headline: string;
  description: string;
  details: string[];
  features: { title: string; text: string }[];
  process: string[];
}

export const services: ServiceData[] = [
  {
    slug: "landing-pages",
    title: "Landing Pages",
    tag: "01",
    image: serviceLanding,
    headline: "High-converting pages built to captivate and convert.",
    description:
      "We design and engineer single-page experiences that guide visitors toward a clear action — whether that's signing up, purchasing, or booking a call. Every element is intentional, every interaction purposeful.",
    details: [
      "Conversion-optimized layouts with A/B testing frameworks",
      "Sub-second load times through performance engineering",
      "Responsive across every device and viewport",
      "Integrated analytics and heatmap tracking",
    ],
    features: [
      { title: "Performance First", text: "Core Web Vitals optimized from day one. Every millisecond matters for conversion." },
      { title: "Conversion Architecture", text: "Strategic placement of CTAs, social proof, and trust signals based on behavioral research." },
      { title: "Brand Cohesion", text: "Pixel-perfect implementation of your brand identity across every breakpoint." },
    ],
    process: ["Discovery & Strategy", "Wireframing", "Visual Design", "Development", "Testing & Launch"],
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    tag: "02",
    image: serviceEcommerce,
    headline: "Scalable storefronts engineered for growth.",
    description:
      "From boutique shops to enterprise marketplaces, we build e-commerce platforms that handle complexity with grace — seamless checkout flows, inventory management, and payment integration.",
    details: [
      "Custom storefront design with headless commerce architecture",
      "Multi-currency and multi-language support",
      "Secure payment gateway integration (Stripe, PayPal, etc.)",
      "Inventory management and order fulfillment workflows",
    ],
    features: [
      { title: "Headless Architecture", text: "Decoupled frontend for maximum flexibility and performance at scale." },
      { title: "Checkout Optimization", text: "Frictionless purchase flows that reduce cart abandonment by up to 35%." },
      { title: "Analytics Dashboard", text: "Real-time insights into revenue, customer behavior, and product performance." },
    ],
    process: ["Platform Strategy", "UX Research", "Design System", "Development", "Payment Integration", "Launch & Optimize"],
  },
  {
    slug: "multi-page-websites",
    title: "Multi-page Websites",
    tag: "03",
    image: serviceMultipage,
    headline: "Content-rich websites with cohesive design systems.",
    description:
      "Complex websites that scale elegantly. We create design systems that maintain visual consistency across hundreds of pages while keeping content management effortless.",
    details: [
      "Modular design systems with reusable components",
      "CMS integration for non-technical content management",
      "SEO-optimized architecture and semantic markup",
      "Accessibility compliance (WCAG 2.1 AA)",
    ],
    features: [
      { title: "Design Systems", text: "Scalable component libraries that ensure visual consistency as your site grows." },
      { title: "CMS Integration", text: "Headless CMS solutions that empower your team to manage content independently." },
      { title: "SEO Architecture", text: "Technical SEO built into the foundation — structured data, sitemaps, and performance." },
    ],
    process: ["Information Architecture", "Content Strategy", "Design System", "Development", "CMS Setup", "Launch"],
  },
  {
    slug: "3d-websites",
    title: "3D Websites",
    tag: "04",
    image: service3d,
    headline: "Immersive WebGL experiences with spatial storytelling.",
    description:
      "We push the boundaries of web technology with interactive 3D experiences. From product configurators to virtual showrooms, we create digital spaces that captivate and engage.",
    details: [
      "WebGL and Three.js powered interactive environments",
      "Real-time 3D product configurators",
      "Optimized for performance across devices",
      "Spatial audio and physics-based interactions",
    ],
    features: [
      { title: "Three.js & WebGL", text: "Industry-leading 3D rendering technology for photorealistic web experiences." },
      { title: "Interactive Storytelling", text: "Scroll-driven narratives that guide users through immersive spatial content." },
      { title: "Performance Optimization", text: "Level-of-detail rendering and asset compression for smooth 60fps experiences." },
    ],
    process: ["Concept & Storyboard", "3D Asset Creation", "Scene Development", "Interaction Design", "Optimization", "Launch"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tag: "05",
    image: serviceUiux,
    headline: "Research-driven design systems and prototypes.",
    description:
      "Design that's grounded in understanding. We combine user research, interaction design, and visual craft to create interfaces that feel intuitive and look extraordinary.",
    details: [
      "User research and persona development",
      "Wireframing and interactive prototyping",
      "Design system creation with component libraries",
      "Usability testing and iteration cycles",
    ],
    features: [
      { title: "User Research", text: "Qualitative and quantitative research methods to understand your users deeply." },
      { title: "Interaction Design", text: "Micro-interactions and motion design that create delightful user experiences." },
      { title: "Design Systems", text: "Comprehensive component libraries in Figma with detailed documentation." },
    ],
    process: ["Research & Discovery", "User Flows", "Wireframes", "Visual Design", "Prototyping", "Handoff"],
  },
  {
    slug: "app-development",
    title: "App Development",
    tag: "06",
    image: serviceAppdev,
    headline: "Full-stack applications from PWAs to native mobile.",
    description:
      "We build applications that perform at scale. Whether it's a progressive web app, a cross-platform mobile app, or a complex SaaS platform, we engineer solutions built to last.",
    details: [
      "Cross-platform mobile development (React Native, Flutter)",
      "Progressive Web Apps with offline capability",
      "Cloud-native backend architecture",
      "CI/CD pipelines and automated testing",
    ],
    features: [
      { title: "Cross-Platform", text: "Single codebase, native performance across iOS, Android, and web." },
      { title: "Cloud Architecture", text: "Scalable serverless backends that grow with your user base." },
      { title: "DevOps", text: "Automated deployment pipelines, monitoring, and zero-downtime releases." },
    ],
    process: ["Requirements Analysis", "Architecture Design", "Sprint Development", "QA Testing", "Deployment", "Maintenance"],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    tag: "07",
    image: serviceMl,
    headline: "Custom-trained models — NLP to computer vision.",
    description:
      "We develop machine learning solutions tailored to your business needs. From natural language processing to predictive analytics, we turn your data into a competitive advantage.",
    details: [
      "Custom model development and training",
      "Natural language processing and sentiment analysis",
      "Computer vision and image recognition",
      "MLOps pipelines for model deployment and monitoring",
    ],
    features: [
      { title: "Custom Models", text: "Purpose-built ML models trained on your data for maximum accuracy and relevance." },
      { title: "NLP Solutions", text: "Text classification, entity extraction, chatbots, and semantic search." },
      { title: "MLOps", text: "Production-grade model serving with monitoring, versioning, and automated retraining." },
    ],
    process: ["Data Assessment", "Model Design", "Training & Validation", "Integration", "Deployment", "Monitoring"],
  },
  {
    slug: "ai-research",
    title: "AI Research Solutions",
    tag: "08",
    image: serviceResearch,
    headline: "End-to-end AI strategy grounded in cutting-edge research.",
    description:
      "We bridge the gap between academic research and production systems. Our team stays at the forefront of AI advancements to deliver solutions that leverage the latest breakthroughs.",
    details: [
      "AI strategy consulting and roadmap development",
      "Research paper implementation and benchmarking",
      "Large language model fine-tuning and deployment",
      "Responsible AI frameworks and bias auditing",
    ],
    features: [
      { title: "LLM Solutions", text: "Fine-tuning, RAG architectures, and custom AI agents for your specific domain." },
      { title: "Research to Production", text: "Translating cutting-edge papers into production-ready implementations." },
      { title: "Responsible AI", text: "Bias auditing, explainability frameworks, and ethical AI governance." },
    ],
    process: ["AI Audit", "Strategy Definition", "Research & Prototyping", "Development", "Deployment", "Evaluation"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
