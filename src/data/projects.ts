import portfolio from "@/assets/portfolio.png";
import portfolio2 from "@/assets/portfolio2.png";
import pickncare from "@/assets/pickncare.png";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectGalleryItem {
  src: string;
  caption?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  oneLiner: string;

  role: string;
  duration?: string;
  team?: string;
  platform?: string;
  tools?: string[];

  tags: string[];
  image: string;

  caseStudyUrl: string;
  prototypeUrl?: string;
  liveUrl?: string;
  codeUrl?: string;
  designUrl?: string;

  overview?: string;
  problem: string;
  goal?: string;
  solution: string;

  responsibilities?: string[];
  process?: string[];
  impact?: string[];
  challenges?: string[];
  learnings?: string[];

  quickStats?: ProjectMetric[];
  gallery?: ProjectGalleryItem[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    oneLiner:
      "A recruiter-friendly portfolio designed to make case studies easier to scan and evaluate.",

    role: "UI/UX Designer + React Developer",
    duration: "2 weeks",
    team: "Solo project",
    platform: "Responsive web",
    tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],

    tags: ["React", "Responsive", "Portfolio"],
    image: portfolio,

    caseStudyUrl: "/projects/portfolio-website",
    liveUrl: "https://shreecode19.github.io/shreejan-shrestha/",
    codeUrl: "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task1",

    overview:
      "This project was built to present work in a cleaner, more structured way for recruiters and hiring managers. The focus was on faster scanning, stronger visual hierarchy, and reusable layout patterns for future case studies.",

    problem:
      "Recruiters often scan portfolios quickly, so important work can get buried under cluttered layouts, weak hierarchy, and long blocks of content.",

    goal:
      "Create a portfolio that highlights project value within the first screen and makes each case study easy to follow.",

    solution:
      "I designed a case-study-first portfolio with a stronger content hierarchy, reusable sections, responsive layout, and subtle motion that supports readability instead of distracting from it.",

    responsibilities: [
      "Defined the overall information architecture",
      "Designed the visual hierarchy and spacing system",
      "Built reusable React components for scalable project pages",
      "Implemented responsive layouts and interaction states",
    ],

    process: [
      "Started by identifying what recruiters need first: project type, role, problem, and outcome.",
      "Reworked the layout so the most important information appears above the fold.",
      "Used a consistent spacing system and typography scale to improve readability.",
      "Built reusable components so new projects can be added without redesigning the page structure.",
      "Added subtle motion and hover states for feedback while keeping the experience lightweight.",
    ],

    impact: [
      "Made project pages easier to scan in the first few seconds",
      "Created a stronger and more professional visual identity",
      "Established a reusable structure for future case studies",
    ],

    challenges: [
      "Balancing visual polish with recruiter-friendly readability",
      "Keeping the interface premium without making it feel crowded",
    ],

    learnings: [
      "Content hierarchy matters more than decorative effects",
      "Showing impact early makes a project more memorable",
      "Reusable structure improves both design consistency and development speed",
    ],

    quickStats: [
      { value: "8pt", label: "Spacing system" },
      { value: "Responsive", label: "Layout" },
      { value: "Reusable", label: "Components" },
      { value: "Case-study", label: "Content model" },
    ],

    gallery: [
      {
        src: portfolio,
        caption:
          "Hero section designed to surface project value, role, and actions quickly.",
      },
      {
        src: portfolio2,
        caption:
          "Detail page broken into short, scannable sections for easier review.",
      },
    ],
  },
  {
  id: 2,
  slug: "pickncare",
  title: "Pickncare",
  oneLiner:
    "A service-based platform that helps users find trusted caretakers and helps caretakers discover job opportunities.",

  role: "UI/UX Designer",
  duration: "3 Months",
  team: "Collaborative project",
  platform: "Responsive web + Mobile app",
  tools: ["Figma"],

  tags: ["UI/UX", "Responsive", "Mobile App", "Service Platform"],
  image: pickncare,

  caseStudyUrl: "/projects/pickncare",
  liveUrl: "https://pickncare.com/",
  designUrl: " ",

  overview:
    "Pickncare is a service-oriented platform designed for two types of users: people looking for caretakers and individuals searching for caretaker jobs. The project began as a website and later expanded into a mobile app. My role focused on creating a clear, user-friendly experience that made it easy to explore features, navigate the platform, and build trust in the brand.",

  problem:
    "The platform included many features and content areas, which made it challenging to maintain a smooth user experience. Users needed a clearer structure to understand where features were located and how to complete their tasks without confusion.",

  goal:
    "Design a clean and intuitive experience that helps users quickly understand the platform, move smoothly through its features, and feel confident using the brand across web and mobile.",

  solution:
    "I created a structured and consistent UI system with improved hierarchy, responsive layouts, thoughtful color and font choices, and smoother navigation patterns. I shifted the visual direction from a cream-based palette to a pink theme to better align the interface with the brand identity and logo, while keeping the experience clean, accessible, and trustworthy.",

  responsibilities: [
    "Designed the overall UI/UX for web and mobile experiences",
    "Defined visual hierarchy, layout structure, and responsive behavior",
    "Selected colors, typography, and interface styles aligned with the brand",
    "Improved navigation flow for feature-heavy screens",
    "Created reusable components in Figma for consistency and scalability",
    "Helped strengthen brand loyalty through a more cohesive visual system",
  ],

  process: [
    "Started with project requirement analysis to understand user needs, business goals, and platform structure.",
    "Researched similar brands, competitors, and design patterns to identify opportunities for a cleaner experience.",
    "Created wireframes to organize features and content into a clearer structure.",
    "Explored color and font directions, then shifted the interface toward a pink theme to better match the brand logo.",
    "Designed the UI for the landing page, dashboard, responsive web layouts, mobile views, and later the mobile app.",
    "Built reusable Figma components to maintain consistency across screens and speed up design decisions.",
    "Prepared documentation to support collaboration and handoff within the team.",
  ],

  impact: [
    "Made the platform easier to understand and navigate despite its many features",
    "Created a stronger visual connection between the product and the brand identity",
    "Improved consistency across web and mobile experiences",
    "Established a reusable design system in Figma for future scalability",
  ],

  challenges: [
    "Designing a smooth user experience for a feature-rich platform with a lot of content",
    "Maintaining clear navigation and hierarchy across multiple sections",
    "Ensuring consistency and accessibility across screens and devices",
  ],

  learnings: [
    "Reusable components make design systems more efficient and scalable",
    "Consistency in layout and interaction patterns improves usability",
    "Clear hierarchy and smooth navigation are essential in feature-heavy products",
    "Brand alignment through color and visual language strengthens the overall experience",
  ],

  quickStats: [
    { value: "Figma", label: "Design tool" },
    { value: "Responsive", label: "Web experience" },
    { value: "Mobile app", label: "Expanded platform" },
    // { value: "Component-based", label: "Design system" },
  ],

  gallery: [
    {
      src: pickncare,
      caption:
        "Landing page designed with a cleaner structure, improved hierarchy, and brand-aligned visuals.",
    },
    {
      src: pickncare,
      caption:
        "Responsive and mobile app screens created to keep navigation smooth across devices.",
    },
  ],
}
];