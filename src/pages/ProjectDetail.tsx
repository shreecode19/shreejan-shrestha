import { Link, useParams } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { projects } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as const;

const rise = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
});

const slideIn = (delay = 0) => ({
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease } },
});

export default function ProjectDetail() {
    const { slug } = useParams();

    // ✅ Logic from your first code: find by slug
    const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

    // ✅ Used for hero parallax (design from second)
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

    // ✅ 404 UI (design from second) but still same logic
    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground">
                <span className="text-8xl font-black text-primary">404</span>
                <p className="text-muted-foreground">That project doesn&apos;t exist (yet).</p>
                <Link
                    to="/projects"
                    className="flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
                >
                    <ArrowLeft size={15} /> Back to Projects
                </Link>
            </div>
        );
    }

    const indexNumber = String(projects.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");

    return (
        <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
            {/* ── Sticky nav bar ────────────────────────────────────────────── */}
            <motion.nav
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="sticky top-0 z-50 flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-14 py-4 bg-background/80 backdrop-blur-md border-b border-border"
            >
                <Link
                    to="/projects"
                    className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                    All projects
                </Link>

                <div className="hidden sm:flex items-center gap-3">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                        >
                            <ExternalLink size={12} /> Live site
                        </a>
                    )}
                    {project.codeUrl && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                        >
                            <Github size={12} /> Source
                        </a>
                    )}
                </div>
            </motion.nav>

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section ref={heroRef} className="relative max-w-7xl mx-auto px-6 lg:px-14 pt-16 pb-0">
                {/* Ambient gradient blob */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-20"
                    style={{
                        background: "radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)",
                        filter: "blur(90px)",
                    }}
                />

                {/* Index number watermark */}
                <motion.span
                    variants={rise(0)}
                    initial="hidden"
                    animate="show"
                    aria-hidden
                    className="absolute right-6 lg:right-14 top-12 text-[10rem] font-black leading-none select-none pointer-events-none tabular-nums text-primary/5"
                >
                    {indexNumber}
                </motion.span>

                {/* Tag strip */}
                {project.tags?.length > 0 && (
                    <motion.div
                        variants={slideIn(0.1)}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap gap-2 mb-6"
                    >
                        {project.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                )}

                {/* Headline */}
                <motion.h1
                    variants={rise(0.15)}
                    initial="hidden"
                    animate="show"
                    className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight max-w-4xl text-foreground"
                >
                    {project.title}
                </motion.h1>

                {/* Divider line + role */}
                <motion.div
                    variants={rise(0.25)}
                    initial="hidden"
                    animate="show"
                    className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                    <div
                        className="h-px flex-1"
                        style={{
                            background:
                                "linear-gradient(to right, hsl(var(--primary)/0.6), hsl(var(--primary)/0.1), transparent)",
                        }}
                    />
                    {project.role && (
                        <span className="text-sm text-muted-foreground shrink-0">
                            <span className="text-foreground font-medium">Role — </span>
                            {project.role}
                        </span>
                    )}
                </motion.div>

                {/* One-liner */}
                {project.oneLiner && (
                    <motion.p
                        variants={rise(0.3)}
                        initial="hidden"
                        animate="show"
                        className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light"
                    >
                        {project.oneLiner}
                    </motion.p>
                )}

                {/* Mobile CTA buttons */}
                <motion.div
                    variants={rise(0.35)}
                    initial="hidden"
                    animate="show"
                    className="mt-8 flex sm:hidden flex-wrap gap-3"
                >
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                        >
                            <ExternalLink size={14} /> View Live
                        </a>
                    )}
                    {project.codeUrl && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border border-border text-muted-foreground"
                        >
                            <Github size={14} /> Source
                        </a>
                    )}
                </motion.div>

                {/* Hero image with parallax */}
                {project.image && (
                    <motion.div
                        variants={rise(0.4)}
                        initial="hidden"
                        animate="show"
                        className="mt-12 relative overflow-hidden rounded-2xl"
                        style={{
                            boxShadow:
                                "0 40px 100px -20px hsl(var(--primary)/0.15), 0 0 0 1px hsl(var(--border))",
                        }}
                    >
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            style={{ y: imgY, scale: imgScale }}
                            className="w-full h-[380px] sm:h-[520px] object-cover"
                        />
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(to bottom, transparent 60%, hsl(var(--background)/0.6) 100%)",
                            }}
                        />
                        <div
                            className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
                            style={{
                                background:
                                    "linear-gradient(90deg, transparent, hsl(var(--primary)/0.4), transparent)",
                            }}
                        />
                    </motion.div>
                )}
            </section>

            {/* ── CONTENT (logic/sections from your first code, styled like second) ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-14 mt-24 pb-32 space-y-24">
                {/* METRICS (from first code) */}
                {project.metrics?.length > 0 && (
                    <Reveal>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {project.metrics.map((m: any, i: number) => (
                                <motion.div
                                    key={m.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5, ease }}
                                    className="relative rounded-2xl p-6 text-center overflow-hidden group cursor-default bg-card border border-border hover:border-primary/30 transition-colors"
                                >
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background:
                                                "radial-gradient(circle at 50% 0%, hsl(var(--primary)/0.08), transparent 70%)",
                                        }}
                                    />
                                    <div className="text-4xl font-black mb-1 text-primary">{m.value}</div>
                                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                                        {m.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Reveal>
                )}

                {/* PROBLEM + USER INSIGHT (from first, styled like second) */}
                {(project.problem || project.userInsight) && (
                    <Reveal>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.problem && (
                                <NarrativeCard label="The Problem" number="01">
                                    {project.problem}
                                </NarrativeCard>
                            )}
                            {project.userInsight && (
                                <NarrativeCard label="User Insight" number="02">
                                    {project.userInsight}
                                </NarrativeCard>
                            )}
                        </div>
                    </Reveal>
                )}

                {/* DESIGN STRATEGY (from first, styled accent block) */}
                {project.designStrategy && (
                    <Reveal>
                        <div
                            className="relative rounded-3xl p-10 md:p-14 overflow-hidden border border-primary/15"
                            style={{
                                background:
                                    "linear-gradient(135deg, hsl(var(--primary)/0.06) 0%, hsl(var(--background)) 100%)",
                            }}
                        >
                            <div
                                aria-hidden
                                className="absolute -right-12 -top-12 w-64 h-64 rounded-full pointer-events-none opacity-10"
                                style={{
                                    background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
                                    filter: "blur(40px)",
                                }}
                            />
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/70">
                                    03
                                </span>
                                <div className="w-6 h-px bg-primary/30" />
                                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                                    Design Strategy
                                </span>
                            </div>
                            <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground max-w-3xl">
                                {project.designStrategy}
                            </p>
                            <div className="mt-6 w-12 h-1 rounded-full bg-primary/50" />
                        </div>
                    </Reveal>
                )}

                {/* LIST SECTIONS (from first code, styled like second) */}
                {[
                    { title: "UI System", items: project.uiSystem, num: "04" },
                    { title: "Interaction & Motion", items: project.interactionMotion, num: "05" },
                    { title: "React Component Strategy", items: project.componentStrategy, num: "06" },
                    { title: "Process", items: project.process, num: "07" },
                    { title: "Results & Impact", items: project.results, num: "08" },
                ]
                    .filter((s) => Array.isArray(s.items) && s.items.length > 0)
                    .map((section) => (
                        <Reveal key={section.title}>
                            <ListBlock title={section.title} items={section.items} number={section.num} />
                        </Reveal>
                    ))}

                {/* GALLERY (from first code, styled like second) */}
                {project.gallery?.length > 0 && (
                    <Reveal>
                        <div>
                            <SectionLabel number="09" title="Screenshots" />
                            <div className="mt-8 grid md:grid-cols-2 gap-5">
                                {project.gallery.map((img: string, i: number) => (
                                    <motion.div
                                        key={img}
                                        initial={{ opacity: 0, scale: 0.97 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.6, ease }}
                                        className="group overflow-hidden rounded-2xl border border-border"
                                    >
                                        <img
                                            src={img}
                                            alt={`Screenshot ${i + 1}`}
                                            className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                )}

                {/* FOOTER NAV */}
                <Reveal>
                    <div className="flex items-center justify-between pt-8 border-t border-border">
                        <Link
                            to="/projects"
                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            All projects
                        </Link>
                        <div className="flex gap-3">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                                >
                                    <ExternalLink size={12} /> Live site
                                </a>
                            )}
                            {project.codeUrl && (
                                <a
                                    href={project.codeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                                >
                                    <Github size={12} /> Source
                                </a>
                            )}
                        </div>
                    </div>
                </Reveal>
            </div>
        </main>
    );
}

/* ─── Sub-components ──────────────────────────────────────────────────── */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay, ease }}
        >
            {children}
        </motion.div>
    );
}

function NarrativeCard({
    label,
    number,
    children,
}: {
    label: string;
    number: string;
    children: React.ReactNode;
}) {
    return (
        <div className="relative rounded-2xl p-7 overflow-hidden group transition-all duration-300 hover:-translate-y-1 bg-card border border-border hover:border-primary/20">
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 0% 0%, hsl(var(--primary)/0.07), transparent 60%)",
                }}
            />
            <div
                className="absolute left-0 top-8 bottom-8 w-0.5 rounded-full"
                style={{
                    background: "linear-gradient(to bottom, hsl(var(--primary)), transparent)",
                }}
            />
            <div className="pl-4">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold tabular-nums text-primary/70">{number}</span>
                    <div className="w-4 h-px bg-primary/30" />
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {label}
                    </span>
                </div>
                <p className="text-muted-foreground leading-relaxed font-light">{children}</p>
            </div>
        </div>
    );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
    return (
        <div className="flex items-center gap-4">
            <span className="text-xs font-bold tabular-nums text-primary/50">{number}</span>
            <div className="w-5 h-px bg-border" />
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
            <div className="flex-1 h-px bg-border" />
        </div>
    );
}

function ListBlock({ title, items, number }: { title: string; items: string[]; number: string }) {
    return (
        <div>
            <SectionLabel number={number} title={title} />
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {items.map((item: string, i: number) => (
                    <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.4, ease }}
                        className="group flex items-start gap-3 rounded-xl px-4 py-3.5 text-sm text-muted-foreground bg-muted/40 border border-transparent hover:border-border hover:text-foreground hover:bg-primary/5 transition-all duration-200 cursor-default"
                    >
                        <ChevronRight
                            size={14}
                            className="mt-0.5 shrink-0 text-primary/50 group-hover:text-primary transition-colors"
                        />
                        {item}
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
