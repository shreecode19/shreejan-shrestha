import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  codeUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing my work and experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task1",
    liveUrl: "https://shreejanstha.com.np",
  },
  {
    id: 2,
    title: "Movie App",
    description: "Movie app using React.js, featuring real-time movie search, interactive UI, and seamless user experience.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/shreecode19/reactjs/tree/master",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Calculator",
    description: "An application that works as a calculator, created using HTML, CSS, and JavaScript.",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/shreecode19/CODSOFT/tree/main/codsoft_task3",
    liveUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface ProjectsProps {
  showAll?: boolean;
}

const Projects = ({ showAll = false }: ProjectsProps) => {
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wider">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-card rounded-xl overflow-hidden shadow-elegant card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-3 justify-center">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
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
