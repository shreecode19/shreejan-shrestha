// Projects.tsx
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import rovers from "@/assets/roversnepal.svg";
import pickncare from "@/assets/Logo.svg";
import portfolio from "@/assets/portfolio.png";

type ProjectItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  codeUrl?: string;
  liveUrl?: string;
  designUrl?: string;

  // ✅ image inside fixed container controls
  imageScale?: number; // 0.6, 0.8, 1, 1.2...
  imageFit?: "cover" | "contain";
  imagePosition?: string; // e.g. "center", "top", "left", "50% 40%"
  imageBgClass?: string; // optional background for container (useful for svgs)
};

export const projects: ProjectItem[] = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing my work and experience.",
    image:
      portfolio,
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
    image: pickncare,
    designUrl:
      "https://www.figma.com/proto/eFRV2kLxtMCHgOriXDgpNl/pickncare?node-id=1348-1889&t=o2lxKPPhDdtwUgqI-1&scaling=scale-down&content-scaling=fixed&page-id=202%3A987&starting-point-node-id=1348%3A1889&show-proto-sidebar=1",
    liveUrl: "https://pickncare.com",
    imageFit: "contain",
    imageScale: 0.7,
    imageBgClass: "bg-white",
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

    // ✅ SVG/logo style: keep container same, but scale the image smaller inside
    imageFit: "contain",
    imageScale: 0.7,
    imageBgClass: "bg-white",
  },
];

const isValidUrl = (url?: string) => !!url && url !== "#";

const buttonStyle =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/40";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

interface ProjectsProps {
  showAll?: boolean;
}

const Projects = ({ showAll = false }: ProjectsProps) => {
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // ✅ fixed container size for ALL images (same height everywhere)
  const imageContainerClass = "h-52 w-full"; // change once, applies to all cards

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
            Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {displayedProjects.map((project) => {
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
                variants={itemVariants}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-elegant transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* ✅ Fixed Image Container */}
                <div
                  className={`relative overflow-hidden ${imageContainerClass} ${bgClass}`}
                >
                  {/* ✅ Image can be resized inside without changing container */}
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

                  {/* More => INTERNAL route */}
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
        </motion.div>

        {/* View more */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-12 text-center"
          >
            <Button variant="hero" size="lg" asChild>
              <Link
                to="/projects"
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                  }, 0);
                }}
              >
                View More
              </Link>
            </Button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;
