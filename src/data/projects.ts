import portfolio from "@/assets/portfolio.png";
import portfolio2 from "@/assets/portfolio2.png";
import pickncare from "@/assets/pickncare.png";
import roversNepal from "@/assets/roversnepal.svg";
import uniorConsulting from "@/assets/unior.png";
import tenxNepal from "@/assets/tenx.png";



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
},
  {
    id: 3,
    slug: "rovers-nepal",
    title: "Rovers Nepal",
    oneLiner:
        "A travel and hotel booking platform designed to help users explore destinations, book stays, and discover adventure tours in one place.",

    role: "UI/UX Designer",
    duration: "1–1.5 months",
    team: "Client project",
    platform: "Responsive web",
    tools: ["Figma"],

    tags: ["UI/UX", "Travel", "Hotel Booking", "Responsive"],
    image: roversNepal,

    caseStudyUrl: "/projects/rovers-nepal",
    liveUrl: " https://roversnepal.com/ ",
    designUrl: " https://www.figma.com/design/WjodL0dW58h5uxnZPulkIF/rovers?node-id=630-3387&p=f&t=GcmqjIqWRGFHbmlH-0 ",

    overview:
        "Rovers Nepal is a travel and hospitality platform where users can search travel destinations, book hotels, and explore adventure tour packages. The goal was to bring hotel listings and adventure experiences together in one website while keeping the experience visually clear, organized, and easy to navigate.",

    problem:
        "The client wanted a platform that combined hotel booking and adventure tours in a single experience without making it feel overwhelming. They also wanted to encourage more hotel listings on the platform, which meant the hotel presentation and listing structure needed to feel trustworthy and appealing.",

    goal:
        "Create a visually engaging and well-structured website that helps users easily browse hotels, destinations, and tour packages while supporting the client's business goal of growing hotel listings.",

    solution:
        "I designed a clean and structured booking experience with strong hierarchy, reusable UI components, and brand-aligned visuals. The layout was planned to keep key actions visible, especially inquiries and bookings, while making hotel and package details easier to scan. I also created supporting pages like the blog and footer sections in a way that handled a large amount of content without losing clarity.",

    responsibilities: [
      "Designed the overall UI/UX for the website",
      "Researched similar travel and hotel platforms for structure and feature ideas",
      "Defined colors, spacing, icons, buttons, and reusable UI components in Figma",
      "Created layouts for landing page, listing cards, package details, blog page, and footer",
      "Improved visual hierarchy for booking and inquiry-focused flows",
      "Prepared design documentation and handed off files to frontend developers",
    ],

    process: [
      "Started with client discussions to understand their goals, visual expectations, and feature requirements.",
      "Researched similar travel and hotel websites, including booking platforms, to study layout patterns and content structure.",
      "Created simple sketches to identify the required sections, features, and user flows.",
      "Moved directly into UI design in Figma and built reusable components such as dropdowns, buttons, hover states, and dialogs.",
      "Explored multiple color directions and refined the final palette based on client feedback and the brand logo.",
      "Designed the landing page and researched what information was most important to include in destination and hotel cards.",
      "Focused on detail pages for hotels and packages, placing the inquiry form near the top so users could take action quickly.",
      "Solved content-heavy sections like the footer by studying references and organizing the information into a clearer structure.",
      "Designed a blog page with simple hierarchy, featured content, and category-based organization.",
      "Completed documentation and handed the design system and screens to frontend developers for implementation.",
    ],

    impact: [
      "Created a clearer user journey across hotels, destinations, and adventure packages",
      "Made booking and inquiry actions easier to access",
      "Helped present hotel listings in a more trustworthy and organized way",
      "Delivered a structured UI system that supported smoother developer handoff",
    ],

    challenges: [
      "Combining hotel booking and adventure tours in one website without making the experience feel crowded",
      "Designing hotel and package detail pages that balanced information and action",
      "Organizing a content-heavy footer in a way that stayed clean and usable",
      "Maintaining consistency across many sections and interaction patterns",
    ],

    learnings: [
      "Researching similar products helps reveal what users expect in booking experiences",
      "Clear structure and hierarchy are essential in content-heavy travel platforms",
      "Reusable components improve consistency and speed during design",
      "Keeping important actions visible, like inquiry and booking, improves usability",
      "Client feedback can strengthen the design direction when explored thoughtfully",
    ],

    quickStats: [
      { value: "1–1.5 months", label: "Project duration" },
      { value: "Responsive", label: "Web design" },
      { value: "Figma", label: "Design tool" },
      { value: "Booking + Tours", label: "Platform focus" },
    ],

    gallery: [
      {
        src: roversNepal,
        caption:
            "Landing page designed to showcase destinations, hotels, and adventure experiences with clear visual hierarchy.",
      },
      {
        src: roversNepal,
        caption:
            "Detail and supporting pages structured to make inquiries, content discovery, and navigation easier.",
      },
    ],
  },
  {
    id: 4,
    slug: "unior-consulting",
    title: "Unior Consulting",
    oneLiner:
        "A responsive consultancy website designed to help nurses explore overseas job opportunities with clarity and confidence.",

    role: "UI/UX Designer",
    duration: "3 weeks",
    team: "Client project",
    platform: "Responsive web",
    tools: ["Figma"],

    tags: ["UI/UX", "Responsive", "Consultancy", "Healthcare"],
    image: uniorConsulting,

    caseStudyUrl: "/projects/unior-consulting",
    liveUrl: "",
    codeUrl: "",

    overview:
        "Unior Consulting is a consultancy platform focused on helping nurses find job opportunities in countries like the USA, UK, and others. The goal of the project was to create a simple and trustworthy website that guides nurses through information related to international job opportunities in a clear and easy-to-understand way.",

    problem:
        "Nurses looking for jobs abroad often need clear guidance, structured information, and a trustworthy platform to understand opportunities, requirements, and processes. Without a well-organized experience, important information can feel confusing or difficult to follow.",

    goal:
        "Design a clean and responsive website that helps nurses quickly understand overseas job opportunities and find relevant information with ease.",

    solution:
        "I created a minimal and structured web experience with strong spacing, clear hierarchy, and brand-aligned colors. The design focused on presenting information in a simple, easy-to-scan format so users could navigate smoothly and understand the consultancy’s services without distraction.",

    responsibilities: [
      "Understood the company background, goals, and user needs",
      "Conducted requirement analysis for the website structure and content",
      "Sketched simple wireframes to plan the page layout",
      "Designed responsive UI layouts with a minimal visual style",
      "Applied brand-based colors, spacing, and hierarchy for a polished experience",
    ],

    process: [
      "Started by learning about the company, its services, and what the client wanted to communicate.",
      "Analyzed the requirements to understand what information nurses needed most when exploring jobs abroad.",
      "Created simple wireframes to define the basic page structure and content flow.",
      "Designed the interface in a clean and minimal style so the website would feel approachable and trustworthy.",
      "Used colors inspired by the brand identity and maintained consistent spacing throughout the design.",
      "Focused on responsiveness so the experience remained clear across different screen sizes.",
    ],

    impact: [
      "Made overseas job-related information easier for nurses to understand",
      "Created a more professional and trustworthy digital presence for the consultancy",
      "Delivered a simple, responsive design that supports clear user guidance",
    ],

    challenges: [
      "Presenting informative content in a simple and uncluttered way",
      "Balancing minimal design with enough detail to guide users properly",
      "Maintaining consistency and readability across responsive layouts",
    ],

    learnings: [
      "Simple websites still need strong structure and thoughtful hierarchy",
      "Minimal design works best when spacing and readability are handled carefully",
      "Understanding the client’s service deeply leads to more useful design decisions",
      "Responsive design improves accessibility and usability for a wider audience",
    ],

    quickStats: [
      { value: "3 weeks", label: "Project duration" },
      { value: "Responsive", label: "Platform" },
      { value: "Minimal", label: "Design style" },
      { value: "Nurse jobs abroad", label: "Core focus" },
    ],

    gallery: [
      {
        src: uniorConsulting,
        caption:
            "Homepage designed to guide nurses through international job opportunities with a clean and trustworthy layout.",
      },
      {
        src: uniorConsulting,
        caption:
            "Responsive sections structured with minimal visuals, clear spacing, and easy-to-follow information.",
      },
    ],
  },
  {
    id: 5,
    slug: "tenx-group",
    title: "TenX Group",
    oneLiner:
        "A corporate investment website designed to communicate trust, clarify a multi-sector business, and guide users through services, projects, and inquiry paths.",

    role: "UI/UX Designer",
    duration: "",
    team: "Case study",
    platform: "Responsive web",
    tools: ["Figma"],

    tags: ["UI/UX", "Corporate", "Investment", "Responsive"],
    image: tenxNepal,

    caseStudyUrl: "/projects/tenx-nepal",
    liveUrl: "",
    codeUrl: "",

    overview:
        "TenX Nepal is an investment-focused brand working across sustainable sectors such as clean energy, tourism, and strategic growth initiatives. The website was designed to present the company as both visionary and credible by clearly explaining its services, showcasing projects, highlighting leadership, and creating a direct path for user inquiry.",

    problem:
        "The business operates across multiple sectors, which can make the brand story feel complex and difficult to communicate. The challenge was to build trust quickly, explain the company’s offerings clearly, and organize a large amount of corporate content into a user-friendly experience.",

    goal:
        "Create a professional and trustworthy digital experience that simplifies the company’s multi-sector identity, communicates long-term value, and encourages potential clients or partners to get in touch.",

    solution:
        "I designed a trust-first corporate experience with strong information hierarchy, section-based storytelling, and premium visual language. The structure was built to guide users from brand introduction to services, projects, leadership credibility, and inquiry. Clear navigation, service cards, project highlights, and easy-to-scan content blocks helped make the platform feel both authoritative and approachable.",

    responsibilities: [
      "Planned the overall UI/UX structure for a multi-sector corporate website",
      "Defined information hierarchy to simplify complex business messaging",
      "Designed clear navigation and section-based user flow",
      "Created layouts for homepage, about page, services, projects, portfolio, and inquiry flow",
      "Focused on premium visual language that supports trust and credibility",
      "Balanced professionalism with readability through clean content organization",
    ],

    process: [
      "Started by understanding the brand’s investment focus, sector diversity, and positioning goals.",
      "Mapped the user journey to introduce the company, explain services, build trust through proof, and guide users toward contact.",
      "Structured the website into clear sections such as brand messaging, investment services, leadership, project showcases, and inquiry points.",
      "Used strong content hierarchy and visual grouping to make complex information easier to scan.",
      "Designed service cards, project sections, and credibility-focused blocks to support storytelling across the site.",
      "Prioritized leadership visibility and proof-based content to strengthen user trust.",
      "Created a direct and accessible contact flow to support conversion and business inquiries.",
    ],

    impact: [
      "Made a complex multi-sector business easier to understand",
      "Strengthened the brand’s credibility through clearer structure and visual trust signals",
      "Created a more professional and future-focused corporate presence",
      "Improved the user journey from information discovery to inquiry",
    ],

    challenges: [
      "Simplifying a broad investment brand without losing strategic depth",
      "Balancing premium presentation with clear readability",
      "Creating a consistent experience across different content-heavy sections",
      "Designing for trust in a business where authority and clarity are both essential",
    ],

    learnings: [
      "Strong hierarchy is critical when designing for complex business models",
      "Trust can be built through structure, clarity, and visible proof points",
      "Section-based storytelling makes corporate content more engaging and easier to follow",
      "Premium design works best when paired with simple navigation and scannable layouts",
    ],

    quickStats: [
      { value: "Responsive", label: "Platform" },
      { value: "Multi-sector", label: "Business model" },
      { value: "Trust-first", label: "Design approach" },
      { value: "Inquiry-driven", label: "User flow" },
    ],

    gallery: [
      {
        src: tenxNepal,
        caption:
            "Homepage designed to communicate brand vision, investment focus, and trust through structured storytelling.",
      },
      {
        src: tenxNepal,
        caption:
            "Internal pages organized with clear hierarchy to showcase services, leadership, projects, and inquiry paths.",
      },
    ],
  }
];