// Projects.tsx
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export interface Project {
  id: number;
  slug: string;
  title: string;
  oneLiner: string;
  image: string;
  caseStudyUrl: string; // internal route
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    oneLiner: "Personal portfolio to help recruiters scan work quickly.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=540&fit=crop",
    caseStudyUrl: "/projects/portfolio-website",
    liveUrl: "https://shreejanstha.com.np",
  },
  {
    id: 2,
    slug: "movie-app",
    title: "Movie App",
    oneLiner: "Movie discovery app with fast search and clean browsing.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&h=540&fit=crop",
    caseStudyUrl: "/projects/movie-app",
    // liveUrl: "https://...",
  },
  {
    id: 3,
    slug: "calculator",
    title: "Calculator",
    oneLiner: "Simple calculator with clear hierarchy and states.",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=900&h=540&fit=crop",
    caseStudyUrl: "/projects/calculator",
    // liveUrl: "https://...",
  },
];

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
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A few highlights. Open a case study to see the full process.
          </p>
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
            const hasLive = !!project.liveUrl && project.liveUrl !== "#";

            return (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-elegant transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image + hover overlay actions */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                  />

                  {/* dark overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* hover buttons (desktop) */}
                  <div className="absolute inset-0 hidden items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                    <Button asChild variant="hero" size="sm">
                      <Link to={project.caseStudyUrl}>
                        Case Study <ArrowUpRight size={16} className="ml-1" />
                      </Link>
                    </Button>

                    {hasLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/90 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-background"
                      >
                        <ExternalLink size={16} />
                        View Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.oneLiner}
                  </p>

                  {/* "More" link (always visible) */}
                  <div className="mt-4">
                    <Link
                      to={project.caseStudyUrl}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      More <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  {/* Mobile actions (since hover doesn't exist) */}
                  <div className="mt-5 flex flex-wrap gap-3 md:hidden">
                    <Button asChild variant="hero" size="sm">
                      <Link to={project.caseStudyUrl}>Case Study</Link>
                    </Button>

                    {hasLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
                      >
                        <ExternalLink size={16} />
                        View Live
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
              <Link to="/projects">View More</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
