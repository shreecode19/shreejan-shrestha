import { motion } from "framer-motion";
import { Code, Palette, Figma, FileCode, Sparkles, PenTool, Atom } from "lucide-react";
import React from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML & CSS", icon: FileCode },
      { name: "TypeScript", icon: Code },
      { name: "React", icon: Atom },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "UI/UX Design", icon: Palette },
      { name: "Graphic Design", icon: PenTool },
      { name: "Figma", icon: Figma },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wider">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="text-center"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-primary uppercase tracking-wide mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-muted/50 to-card rounded-xl shadow-elegant transition-all duration-300 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <span className="text-lg font-medium text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
