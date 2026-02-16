// ProjectsPage.tsx
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type ProjectItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  codeUrl?: string;
  liveUrl?: string;
  designUrl?: string;
  caseStudyUrl?: string;
};

const allProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing my work and experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    codeUrl:
      "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task1",
    liveUrl: "https://shreejanstha.com.np",
  },
  {
    id: 2,
    title: "Pickncare",
    description: "A modern website UI design with clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    designUrl: "https://www.figma.com/proto/eFRV2kLxtMCHgOriXDgpNl/pickncare?node-id=1348-1889&t=o2lxKPPhDdtwUgqI-1&scaling=scale-down&content-scaling=fixed&page-id=202%3A987&starting-point-node-id=1348%3A1889&show-proto-sidebar=1",
    liveUrl: "https://pickncare.com"
  },
  {
    id: 3,
    title: "Rovers Nepal",
    description: "A modern website UI design with clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    designUrl: "https://www.figma.com/design/WjodL0dW58h5uxnZPulkIF/rovers?node-id=630-3387&t=qGw1nWgU7WPFMF9B-1",
    liveUrl: "https://roversnepal.com",
  },
  {
    id: 4,
    title: "Unior Consulting",
    description: "A modern website UI design with clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    designUrl: "https://www.figma.com/proto/eRiibNrcWTss0Y68nuZFHT/unior?node-id=454-458&t=UN1ov9nTgrBEttlS-0&scaling=scale-down&content-scaling=fixed&page-id=454%3A457",
  },
  {
    id: 5,
    title: "Binaryburst Solutions",
    description: "A modern website UI design with clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    liveUrl: "https://binaryburstsolutions.com/",
  },
  {
    id: 6,
    title: "TenX Group",
    description: "A modern website UI design with clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    designUrl: "https://www.figma.com/proto/jXcob59BZONDut1ytMKxBb/TenX-Group?node-id=38-573",
    liveUrl: "https://tenxnepal.com/",
  },
  {
    id: 7,
    title: "Movie App",
    description:
      "Movie app using React.js, featuring real-time movie search and interactive UI.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/shreecode19/reactjs/tree/master",
  },
  {
    id: 8,
    title: "Calculator",
    description:
      "A calculator created using HTML, CSS, and JavaScript.",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&h=300&fit=crop",
    codeUrl:
      "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task3",
  },
  {
    id: 9,
    title: "To-Do App",
    description: "A simple to-do app using React.js.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/shreecode19/todo-app",
  },
  {
    id: 10,
    title: "Dashboard UI",
    description: "A HR management dashboard design using Figma.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    designUrl: "https://figma.com",
  },
  {
    id: 11,
    title: "Website UI",
    description: "A modern website UI design with clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    designUrl: "https://figma.com",
  },
  {
    id: 12,
    title: "School Management System",
    description: "A modern website UI design with clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    designUrl: "https://www.figma.com/proto/j9nBSUj255AY18cpbjFVE1/School?node-id=97-235&t=UN1ov9nTgrBEttlS-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=97%3A235",
  },

];

const isValidUrl = (url?: string) => !!url && url !== "#";

const buttonStyle =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/40";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
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

              const moreLink =
                project.caseStudyUrl ||
                project.designUrl ||
                project.codeUrl ||
                project.liveUrl ||
                "/projects";

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-elegant transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
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

                    {/* More Link */}
                    <div className="mt-4">
                      <a
                        href={moreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        More <ArrowUpRight size={16} />
                      </a>
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
