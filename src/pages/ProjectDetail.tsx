import { Link, useParams } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <main className="bg-background">

            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
                    >
                        <ArrowLeft size={16} /> Back
                    </Link>

                    <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-2xl shadow-elegant w-full h-[360px] object-cover"
                            />
                        </motion.div>

                        <div>
                            <h1 className="text-4xl font-bold">{project.title}</h1>
                            <p className="text-muted-foreground mt-4 text-lg">
                                {project.oneLiner}
                            </p>

                            <div className="mt-6 text-sm text-muted-foreground">
                                <strong className="text-foreground">Role:</strong> {project.role}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 rounded-full bg-muted"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex gap-3">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                                    >
                                        <ExternalLink size={16} /> Live
                                    </a>
                                )}

                                {project.codeUrl && (
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLEM */}
            <Section title="The Problem">
                {project.problem}
            </Section>

            {/* USER INSIGHT */}
            <Section title="User Insight">
                {project.userInsight}
            </Section>

            {/* DESIGN STRATEGY */}
            <Section title="Design Strategy">
                {project.designStrategy}
            </Section>

            {/* UI SYSTEM */}
            {project.uiSystem && (
                <ListSection title="UI System" items={project.uiSystem} />
            )}

            {/* INTERACTION & MOTION */}
            {project.interactionMotion && (
                <ListSection title="Interaction & Motion" items={project.interactionMotion} />
            )}

            {/* COMPONENT STRATEGY */}
            {project.componentStrategy && (
                <ListSection title="React Component Strategy" items={project.componentStrategy} />
            )}

            {/* PROCESS */}
            {project.process && (
                <ListSection title="Process" items={project.process} />
            )}

            {/* METRICS */}
            {project.metrics && (
                <section className="max-w-6xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {project.metrics.map((m) => (
                        <div key={m.label} className="bg-card rounded-xl p-6 text-center shadow-elegant">
                            <div className="text-2xl font-bold">{m.value}</div>
                            <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                        </div>
                    ))}
                </section>
            )}

            {/* RESULTS */}
            {project.results && (
                <ListSection title="Results & Impact" items={project.results} />
            )}

            {/* GALLERY */}
            {project.gallery && (
                <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-16">
                    <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {project.gallery.map((img) => (
                            <img key={img} src={img} className="rounded-xl shadow-elegant" />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}

/* Reusable Sections */

function Section({ title, children }: any) {
    return (
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-muted-foreground leading-relaxed">{children}</p>
        </section>
    );
}

function ListSection({ title, items }: any) {
    return (
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                {items.map((item: string) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </section>
    );
}
