import React from "react";
import { LayoutTemplate, Database, Wrench, Code2 } from "lucide-react";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend & UI",
      icon: <LayoutTemplate className="text-indigo-500" size={24} />,
      description: "Building user-centric, interactive, and modern interfaces.",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "NextJs", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Shadcn/ui", level: "Advanced" },
        { name: "Ant design", level: "Advanced" },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-emerald-500" size={24} />,
      description:
        "Developing scalable APIs and robust database architectures.",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express", level: "Intermediate" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Microsoft SQL Server", level: "Advanced" },
      ],
    },
    {
      title: "Tools & Architecture",
      icon: <Wrench className="text-amber-500" size={24} />,
      description:
        "Project management, version control, and system integrations.",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "RESTful API", level: "Advanced" },
        { name: "ERP Systems", level: "Advanced" },
        { name: "Logo Tiger (ERP)", level: "Advanced" },
        { name: "Mikro (ERP)", level: "Advanced" },
        { name: "Figma (UI/UX)", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 dark:border-zinc-800 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-[#05CC05] uppercase mb-3 flex items-center justify-center gap-2">
            <Code2 size={18} />
            Technical Stack
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
            Technologies & Tools
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I leverage modern tools to build seamless user interfaces and robust
            backend logic.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-slate-50 dark:bg-zinc-900 dark:border-zinc-800 rounded-3xl p-8 border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white dark:bg-zinc-950 dark:border-zinc-900 rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h4>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-zinc-950 dark:border-zinc-900 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-100 hover:border-indigo-300 hover:text-indigo-700 transition-colors cursor-default"
                  >
                    <span>{skill.name}</span>
                    {skill.level === "Learning" && (
                      <span
                        className="w-2 h-2 rounded-full bg-amber-400"
                        title="Öyrənirəm"
                      ></span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
