import portfolio from "@/assets/portfolio.png";
import portfolio2 from "@/assets/portfolio2.png";
export interface Project {
  id: number;
  slug: string;
  title: string;

  oneLiner: string;
  role: string;

  // UX Framing
  problem: string;
  userInsight: string;
  designStrategy: string;

  tags: string[];
  image: string;

  caseStudyUrl: string;

  // Optional links
  prototypeUrl?: string;
  liveUrl?: string;
  codeUrl?: string;

  // Case Study Sections
  uiSystem?: string[];
  interactionMotion?: string[];
  componentStrategy?: string[];
  process?: string[];
  results?: string[];

  metrics?: {
    value: string;
    label: string;
  }[];

  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    oneLiner:
      "A structured, case-study-first portfolio designed for recruiter scannability.",
    role: "UI/UX Designer + React Developer",

    problem:
      "Recruiters spend less than 20 seconds scanning portfolios. Traditional layouts hide important information behind clutter.",
    userInsight:
      "Recruiters prioritize clarity, impact, and project depth over decorative visuals.",
    designStrategy:
      "Designed a case-study-first layout with clear hierarchy, strong typography, and minimal distractions.",

    tags: ["React", "Responsive"],

    image:
      portfolio,
    

    caseStudyUrl: "/projects/portfolio-website",

    liveUrl: "https://shreejanstha.com.np",
    codeUrl:
      "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task1",

    uiSystem: [
      "Consistent spacing scale (8pt system)",
      "Clear typography hierarchy",
      "Reusable button and card styles",
      "Muted palette with strong primary accents",
    ],

    interactionMotion: [
      "Subtle fade-in animations using Framer Motion",
      "Hover states to communicate affordance",
      "Smooth image scaling for visual feedback",
    ],

    componentStrategy: [
      "Reusable Card and Button components",
      "Data-driven project rendering",
      "Slug-based routing for scalability",
      "Separation of layout and content data",
    ],

    process: [
      "Defined recruiter priorities",
      "Simplified navigation structure",
      "Built reusable UI system",
      "Iterated on visual clarity",
    ],

    metrics: [
      { value: "100%", label: "Responsive" },
      { value: "Fast", label: "Load Speed" },
      { value: "Clear", label: "Hierarchy" },
    ],

    results: [
      "Improved recruiter scannability",
      "Stronger presentation of structured case studies",
      "More professional visual identity",
    ],

    gallery: [
      portfolio,
      portfolio2,
    ],
  },
  {
    id: 2,
    slug: "pickncare",
    title: "Pickncare",
    oneLiner:
      "A structured, case-study-first portfolio designed for recruiter scannability.",
    role: "UI/UX Designer + React Developer",

    problem:
      "Recruiters spend less than 20 seconds scanning portfolios. Traditional layouts hide important information behind clutter.",
    userInsight:
      "Recruiters prioritize clarity, impact, and project depth over decorative visuals.",
    designStrategy:
      "Designed a case-study-first layout with clear hierarchy, strong typography, and minimal distractions.",

    tags: ["React", "UX Writing", "Responsive", "Framer Motion"],

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop",

    caseStudyUrl: "/projects/portfolio-website",

    liveUrl: "https://shreejanstha.com.np",
    codeUrl:
      "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task1",

    uiSystem: [
      "Consistent spacing scale (8pt system)",
      "Clear typography hierarchy",
      "Reusable button and card styles",
      "Muted palette with strong primary accents",
    ],

    interactionMotion: [
      "Subtle fade-in animations using Framer Motion",
      "Hover states to communicate affordance",
      "Smooth image scaling for visual feedback",
    ],

    componentStrategy: [
      "Reusable Card and Button components",
      "Data-driven project rendering",
      "Slug-based routing for scalability",
      "Separation of layout and content data",
    ],

    process: [
      "Defined recruiter priorities",
      "Simplified navigation structure",
      "Built reusable UI system",
      "Iterated on visual clarity",
    ],

    metrics: [
      { value: "100%", label: "Responsive" },
      { value: "Fast", label: "Load Speed" },
      { value: "Clear", label: "Hierarchy" },
    ],

    results: [
      "Improved recruiter scannability",
      "Stronger presentation of structured case studies",
      "More professional visual identity",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    ],
  },
  {
    id: 3,
    slug: "rovers-nepal",
    title: "Rovers Nepal",
    oneLiner:
      "A structured, case-study-first portfolio designed for recruiter scannability.",
    role: "UI/UX Designer + React Developer",

    problem:
      "Recruiters spend less than 20 seconds scanning portfolios. Traditional layouts hide important information behind clutter.",
    userInsight:
      "Recruiters prioritize clarity, impact, and project depth over decorative visuals.",
    designStrategy:
      "Designed a case-study-first layout with clear hierarchy, strong typography, and minimal distractions.",

    tags: ["React", "UX Writing", "Responsive", "Framer Motion"],

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop",

    caseStudyUrl: "/projects/portfolio-website",

    liveUrl: "https://shreejanstha.com.np",
    codeUrl:
      "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task1",

    uiSystem: [
      "Consistent spacing scale (8pt system)",
      "Clear typography hierarchy",
      "Reusable button and card styles",
      "Muted palette with strong primary accents",
    ],

    interactionMotion: [
      "Subtle fade-in animations using Framer Motion",
      "Hover states to communicate affordance",
      "Smooth image scaling for visual feedback",
    ],

    componentStrategy: [
      "Reusable Card and Button components",
      "Data-driven project rendering",
      "Slug-based routing for scalability",
      "Separation of layout and content data",
    ],

    process: [
      "Defined recruiter priorities",
      "Simplified navigation structure",
      "Built reusable UI system",
      "Iterated on visual clarity",
    ],

    metrics: [
      { value: "100%", label: "Responsive" },
      { value: "Fast", label: "Load Speed" },
      { value: "Clear", label: "Hierarchy" },
    ],

    results: [
      "Improved recruiter scannability",
      "Stronger presentation of structured case studies",
      "More professional visual identity",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    ],
  },
  {
    id: 4,
    slug: "unior-consulting",
    title: "Unior Consulting",
    oneLiner:
        "A structured, case-study-first portfolio designed for recruiter scannability.",
    role: "UI/UX Designer + React Developer",

    problem:
        "Recruiters spend less than 20 seconds scanning portfolios. Traditional layouts hide important information behind clutter.",
    userInsight:
        "Recruiters prioritize clarity, impact, and project depth over decorative visuals.",
    designStrategy:
        "Designed a case-study-first layout with clear hierarchy, strong typography, and minimal distractions.",

    tags: ["React", "UX Writing", "Responsive", "Framer Motion"],

    image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop",

    caseStudyUrl: "/projects/portfolio-website",

    liveUrl: "https://shreejanstha.com.np",
    codeUrl:
        "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task1",

    uiSystem: [
      "Consistent spacing scale (8pt system)",
      "Clear typography hierarchy",
      "Reusable button and card styles",
      "Muted palette with strong primary accents",
    ],

    interactionMotion: [
      "Subtle fade-in animations using Framer Motion",
      "Hover states to communicate affordance",
      "Smooth image scaling for visual feedback",
    ],

    componentStrategy: [
      "Reusable Card and Button components",
      "Data-driven project rendering",
      "Slug-based routing for scalability",
      "Separation of layout and content data",
    ],

    process: [
      "Defined recruiter priorities",
      "Simplified navigation structure",
      "Built reusable UI system",
      "Iterated on visual clarity",
    ],

    metrics: [
      { value: "100%", label: "Responsive" },
      { value: "Fast", label: "Load Speed" },
      { value: "Clear", label: "Hierarchy" },
    ],

    results: [
      "Improved recruiter scannability",
      "Stronger presentation of structured case studies",
      "More professional visual identity",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    ],
  },

];
