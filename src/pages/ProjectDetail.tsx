import { Link, useParams } from "react-router-dom";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    BadgeCheck,
    Clock3,
    ExternalLink,
    Github,
    Layers3,
    MonitorSmartphone,
    Users,
    Wrench,
} from "lucide-react";
import { projects } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay, ease },
    },
});

export default function ProjectDetail() {
    const { slug } = useParams();

    const project = useMemo(
        () => projects.find((item) => item.slug === slug),
        [slug]
    );

    if (!project) {
        return (
            <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
                <div className="text-center">
                    <p className="text-7xl font-black text-primary">404</p>
                    <h1 className="mt-4 text-2xl font-semibold">Project not found</h1>
                    <p className="mt-2 text-muted-foreground">
                        The project you are looking for does not exist.
                    </p>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to projects
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={16} />
                        All projects
                    </Link>

                    <div className="hidden sm:flex items-center gap-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                            >
                                <ExternalLink size={15} />
                                Live site
                            </a>
                        )}

                        {project.codeUrl && (
                            <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                            >
                                <Github size={15} />
                                Source
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
                    <div>
                        {project.tags?.length > 0 && (
                            <motion.div
                                variants={fadeUp(0)}
                                initial="hidden"
                                animate="show"
                                className="mb-6 flex flex-wrap gap-2"
                            >
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        )}

                        <motion.h1
                            variants={fadeUp(0.05)}
                            initial="hidden"
                            animate="show"
                            className="max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl"
                        >
                            {project.title}
                        </motion.h1>

                        <motion.p
                            variants={fadeUp(0.1)}
                            initial="hidden"
                            animate="show"
                            className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
                        >
                            {project.oneLiner}
                        </motion.p>

                        <motion.div
                            variants={fadeUp(0.15)}
                            initial="hidden"
                            animate="show"
                            className="mt-8 flex flex-wrap gap-3 sm:hidden"
                        >
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                                >
                                    <ExternalLink size={15} />
                                    Live site
                                </a>
                            )}

                            {project.codeUrl && (
                                <a
                                    href={project.codeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground"
                                >
                                    <Github size={15} />
                                    Source
                                </a>
                            )}
                        </motion.div>

                        {project.quickStats?.length ? (
                            <motion.div
                                variants={fadeUp(0.2)}
                                initial="hidden"
                                animate="show"
                                className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4"
                            >
                                {project.quickStats.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-2xl border border-border bg-card p-5"
                                    >
                                        <div className="text-2xl font-black text-foreground">
                                            {item.value}
                                        </div>
                                        <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        ) : null}

                        {project.image && (
                            <motion.div
                                variants={fadeUp(0.25)}
                                initial="hidden"
                                animate="show"
                                className="mt-10 overflow-hidden rounded-3xl border border-border bg-card"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                                />
                            </motion.div>
                        )}
                    </div>

                    <motion.aside
                        variants={fadeUp(0.15)}
                        initial="hidden"
                        animate="show"
                        className="h-fit rounded-3xl border border-border bg-card p-6 lg:sticky lg:top-24"
                    >
                        <h2 className="text-lg font-semibold text-foreground">
                            Project overview
                        </h2>

                        {project.overview && (
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                {project.overview}
                            </p>
                        )}

                        <div className="mt-6 space-y-4">
                            <InfoRow icon={<Layers3 size={16} />} label="Role" value={project.role} />
                            {project.duration && (
                                <InfoRow
                                    icon={<Clock3 size={16} />}
                                    label="Duration"
                                    value={project.duration}
                                />
                            )}
                            {project.team && (
                                <InfoRow icon={<Users size={16} />} label="Team" value={project.team} />
                            )}
                            {project.platform && (
                                <InfoRow
                                    icon={<MonitorSmartphone size={16} />}
                                    label="Platform"
                                    value={project.platform}
                                />
                            )}
                        </div>

                        {project.tools?.length ? (
                            <div className="mt-6">
                                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                                    <Wrench size={16} />
                                    Tools
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                        {project.responsibilities?.length ? (
                            <div className="mt-6">
                                <div className="mb-3 text-sm font-medium text-foreground">
                                    Responsibilities
                                </div>
                                <ul className="space-y-2">
                                    {project.responsibilities.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                                        >
                                            <BadgeCheck size={15} className="mt-0.5 shrink-0 text-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </motion.aside>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12">
                <div className="space-y-16">
                    {project.impact?.length ? (
                        <RevealSection>
                            <SectionTitle
                                eyebrow="01"
                                title="Key outcomes"
                                description="The most important takeaways from the project."
                            />
                            <BulletCardList items={project.impact} />
                        </RevealSection>
                    ) : null}

                    <RevealSection>
                        <SectionTitle
                            eyebrow="02"
                            title="Problem"
                            description="What issue the project needed to solve."
                        />
                        <ContentCard>{project.problem}</ContentCard>
                    </RevealSection>

                    {project.goal ? (
                        <RevealSection>
                            <SectionTitle
                                eyebrow="03"
                                title="Goal"
                                description="What success looked like for this project."
                            />
                            <ContentCard>{project.goal}</ContentCard>
                        </RevealSection>
                    ) : null}

                    <RevealSection>
                        <SectionTitle
                            eyebrow="04"
                            title="Solution"
                            description="How the design and development approach addressed the problem."
                        />
                        <AccentCard>{project.solution}</AccentCard>
                    </RevealSection>

                    {project.process?.length ? (
                        <RevealSection>
                            <SectionTitle
                                eyebrow="05"
                                title="Process"
                                description="The key steps used to shape and build the project."
                            />
                            <BulletCardList items={project.process} />
                        </RevealSection>
                    ) : null}

                    {(project.challenges?.length || project.learnings?.length) ? (
                        <RevealSection>
                            <SectionTitle
                                eyebrow="06"
                                title="Challenges and learnings"
                                description="What was difficult and what improved through the work."
                            />
                            <div className="grid gap-6 md:grid-cols-2">
                                {project.challenges?.length ? (
                                    <SimpleListCard title="Challenges" items={project.challenges} />
                                ) : null}

                                {project.learnings?.length ? (
                                    <SimpleListCard title="Learnings" items={project.learnings} />
                                ) : null}
                            </div>
                        </RevealSection>
                    ) : null}

                    {project.gallery?.length ? (
                        <RevealSection>
                            <SectionTitle
                                eyebrow="07"
                                title="Gallery"
                                description="Screens that support the case study."
                            />
                            <div className="grid gap-5 md:grid-cols-2">
                                {project.gallery.map((item, index) => (
                                    <motion.figure
                                        key={`${item.src}-${index}`}
                                        variants={fadeUp(index * 0.05)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, margin: "-80px" }}
                                        className="overflow-hidden rounded-3xl border border-border bg-card"
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.caption || `${project.title} screen ${index + 1}`}
                                            className="w-full object-cover"
                                        />
                                        {item.caption && (
                                            <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                                                {item.caption}
                                            </figcaption>
                                        )}
                                    </motion.figure>
                                ))}
                            </div>
                        </RevealSection>
                    ) : null}

                    <RevealSection>
                        <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <ArrowLeft size={16} />
                                Back to all projects
                            </Link>

                            <div className="flex flex-wrap gap-3">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                                    >
                                        <ExternalLink size={15} />
                                        Live site
                                    </a>
                                )}

                                {project.codeUrl && (
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                                    >
                                        <Github size={15} />
                                        Source
                                    </a>
                                )}
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </main>
    );
}

function RevealSection({ children }: { children: ReactNode }) {
    return (
        <motion.section
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
        >
            {children}
        </motion.section>
    );
}

function SectionTitle({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.18em] text-primary/70">
                    {eyebrow}
                </span>
                <div className="h-px w-8 bg-border" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Section
                </span>
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {title}
            </h2>

            {description && (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}

function ContentCard({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {children}
            </p>
        </div>
    );
}

function AccentCard({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <p className="max-w-3xl text-lg leading-relaxed text-foreground sm:text-xl">
                {children}
            </p>
        </div>
    );
}

function BulletCardList({ items }: { items: string[] }) {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
                <motion.div
                    key={`${item}-${index}`}
                    variants={fadeUp(index * 0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="rounded-2xl border border-border bg-card p-5"
                >
                    <div className="flex items-start gap-3">
                        <BadgeCheck size={16} className="mt-1 shrink-0 text-primary" />
                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {item}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function SimpleListCard({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <ul className="mt-4 space-y-3">
                {items.map((item, index) => (
                    <li
                        key={`${item}-${index}`}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                        <BadgeCheck size={15} className="mt-0.5 shrink-0 text-primary" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function InfoRow({
    icon,
    label,
    value,
}: {
    icon: ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 text-primary">{icon}</div>
            <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
            </div>
        </div>
    );
}