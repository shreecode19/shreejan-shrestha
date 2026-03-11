// ProjectsPage.tsx
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  Palette,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import rovers from "@/assets/roversnepal.svg";
import portfolio from "@/assets/portfolio.png";
import pickncare from "@/assets/pickncare.png";
import unior from "@/assets/unior.png";
import tenx from "@/assets/tenx.png";
import school from "@/assets/school.png";
import speedpackers from "@/assets/speedpackers.png";


type ProjectItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  codeUrl?: string;
  liveUrl?: string;
  designUrl?: string;

  // ✅ adjustable image INSIDE a fixed container
  imageScale?: number; // 0.6, 0.8, 1, 1.2...
  imageFit?: "cover" | "contain";
  imagePosition?: string; // "center", "top", "left", "50% 40%" etc.
  imageBgClass?: string; // optional bg for container (useful for SVGs)
};

const allProjects: ProjectItem[] = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing my work and experience.",
    image: portfolio,
    codeUrl: "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task1",
    liveUrl: "https://shreejanstha.com.np",
    imageFit: "cover",
    imageScale: 1,
  },
  {
    id: 2,
    slug: "pickncare",
    title: "Pickncare",
    description: "A modern website UI design with clean aesthetics.",
    image:pickncare,
    designUrl:
      "https://www.figma.com/proto/eFRV2kLxtMCHgOriXDgpNl/pickncare?node-id=1348-1889&t=o2lxKPPhDdtwUgqI-1&scaling=scale-down&content-scaling=fixed&page-id=202%3A987&starting-point-node-id=1348%3A1889&show-proto-sidebar=1",
    liveUrl: "https://pickncare.com",
    imageFit: "contain",
    imageScale: 0.7,
  },
  {
    id: 3,
    slug: "rovers-nepal",
    title: "Rovers Nepal",
    description: "A modern website UI design with clean aesthetics.",
    image: rovers,
    designUrl:
      "https://www.figma.com/design/WjodL0dW58h5uxnZPulkIF/rovers?node-id=630-3387&t=qGw1nWgU7WPFMF9B-1",
    liveUrl: "https://roversnepal.com",
    // example tweaks:
    imageFit: "contain",
    imageScale: 0.7,
  },
  {
    id: 4,
    slug: "unior-consulting",
    title: "Unior Consulting",
    description: "A modern website UI design with clean aesthetics.",
    image: unior,
    designUrl:
      "https://www.figma.com/proto/eRiibNrcWTss0Y68nuZFHT/unior?node-id=454-458&t=UN1ov9nTgrBEttlS-0&scaling=scale-down&content-scaling=fixed&page-id=454%3A457",
    imageFit: "contain",
    imageScale: 0.7,
  },
  {
    id: 5,
    slug: "binaryburst-solutions",
    title: "Binaryburst Solutions",
    description: "A modern website UI design with clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    liveUrl: "https://binaryburstsolutions.com/",
    imageFit: "cover",
    imageScale: 1,
  },
  {
    id: 6,
    slug: "tenx-group",
    title: "TenX Group",
    description: "A modern website UI design with clean aesthetics.",
    image: tenx,
    designUrl: "https://www.figma.com/proto/jXcob59BZONDut1ytMKxBb/TenX-Group?node-id=38-573",
    liveUrl: "https://tenxnepal.com/",
    imageFit: "contain",
    imageScale: 1,
  },
  {
    id: 7,
    slug: "movie-app",
    title: "Movie App",
    description:
      "Movie app using React.js, featuring real-time movie search and interactive UI.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/shreecode19/reactjs/tree/master",
    imageFit: "cover",
    imageScale: 1,
  },
  {
    id: 8,
    slug: "calculator",
    title: "Calculator",
    description: "A calculator created using HTML, CSS, and JavaScript.",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task3",
    imageFit: "cover",
    imageScale: 1,
  },
  {
    id: 9,
    slug: "to-do-app",
    title: "To-Do App",
    description: "A simple to-do app using React.js.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/shreecode19/todo-app",
    imageFit: "cover",
    imageScale: 1,
  },
  {
    id: 10,
    slug: "dashboard-ui",
    title: "Dashboard UI",
    description: "A HR management dashboard design using Figma.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    designUrl: "https://figma.com",
    imageFit: "cover",
    imageScale: 1,
  },
  {
    id: 11,
    slug: "website-ui",
    title: "Website UI",
    description: "A modern website UI design with clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    designUrl: "https://figma.com",
    imageFit: "cover",
    imageScale: 1,
  },
  {
    id: 12,
    slug: "school-management-system",
    title: "School Management System",
    description: "A modern website UI design with clean aesthetics.",
    image: school,
    designUrl:
      "https://www.figma.com/proto/j9nBSUj255AY18cpbjFVE1/School?node-id=97-235&t=UN1ov9nTgrBEttlS-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=97%3A235",
    imageFit: "cover",
    imageScale: 1,
  },
  {
    id: 13,
    slug: "speed pakers-and-movers",
    title: "Speed Packers and Movers",
    description: "A modern website UI design with clean aesthetics.",
    image: speedpackers,
    designUrl:
      "https://www.figma.com/design/z2ZYwjciXMgHZ5cA6HnekR/forex?node-id=231-593&t=7LgAZpGo2CkSQFWg-1",
    liveUrl: "https://speedpmnepal.com/",
    imageFit: "cover",
    imageScale: 1,
  },
];

const isValidUrl = (url?: string) => !!url && url !== "#";

const buttonStyle =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/40";

const ProjectsPage = () => {
  // ✅ fixed container size for ALL project images
  const imageContainerClass = "h-52 w-full";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground hover:underline">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 opacity-70" />
                <span className="text-foreground font-medium">Projects</span>
              </li>
            </ol>
          </nav>
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
              All Projects
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project) => {
              const hasLive = isValidUrl(project.liveUrl);
              const hasCode = isValidUrl(project.codeUrl);
              const hasDesign = isValidUrl(project.designUrl);

              const fit = project.imageFit ?? "cover";
              const scale = project.imageScale ?? 1;
              const position = project.imagePosition ?? "center";
              const bgClass = project.imageBgClass ?? "";

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-elegant transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* ✅ Fixed Image Container */}
                  <div
                    className={`relative overflow-hidden ${imageContainerClass} ${bgClass}`}
                  >
                    {/* ✅ Adjustable Image Inside */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute left-1/2 top-1/2 max-w-none transition-transform duration-500 group-hover:scale-110"
                      style={{
                        transform: `translate(-50%, -50%) scale(${scale})`,
                        objectFit: fit,
                        objectPosition: position,
                        width: "100%",
                        height: "100%",
                      }}
                    />

                    {/* Desktop Overlay Buttons */}
                    <div className="absolute inset-0 hidden items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                      {hasCode && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonStyle}
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}

                      {hasLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonStyle}
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}

                      {hasDesign && (
                        <a
                          href={project.designUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonStyle}
                        >
                          <Palette size={16} />
                          Design
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    {/* More Link => INTERNAL route */}
                    <div className="mt-4">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        More <ArrowUpRight size={16} />
                      </Link>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="mt-5 flex flex-wrap gap-3 md:hidden">
                      {hasCode && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonStyle}
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}

                      {hasLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonStyle}
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}

                      {hasDesign && (
                        <a
                          href={project.designUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonStyle}
                        >
                          <Palette size={16} />
                          Design
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
