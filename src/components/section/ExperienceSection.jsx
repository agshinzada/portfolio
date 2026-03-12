import React from "react";
import { History, ArrowRight, Database, Layout } from "lucide-react";
import { motion } from "framer-motion";
export const ExperienceSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 dark:border-zinc-800 border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-[#05CC05] uppercase mb-3 flex items-center justify-center gap-2">
            <History size={18} />
            Career Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            From Legacy Systems to Modern Web
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-indigo-50 dark:bg-zinc-900 rounded-full border-4 border-white dark:border-zinc-900 shadow-sm z-10 items-center justify-center"
          >
            <ArrowRight size={20} className="text-[#05CC05]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-slate-50 dark:bg-zinc-900 dark:border-zinc-800 rounded-3xl p-8 lg:p-10 border border-slate-200 text-center md:text-right hover:border-slate-300 transition-colors"
          >
            <div className="w-14 h-14 bg-white dark:bg-zinc-950 dark:border-zinc-800 rounded-2xl shadow-sm flex items-center justify-center border border-slate-200 md:ml-auto mx-auto mb-6 text-slate-600">
              <Database size={28} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Enterprise Roots
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Early in my career, I worked extensively with{" "}
              <strong className="text-slate-800 dark:text-slate-200">
                Logo Tiger
              </strong>{" "}
              and{" "}
              <strong className="text-slate-800 dark:text-slate-200">
                Mikro ERP{" "}
              </strong>
              systems to master complex business logic and database management.
              This foundation gave me deep insights into handling large-scale
              data and optimizing enterprise workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-green-800 rounded-3xl p-8 lg:p-10 border border-[#40513B] text-center md:text-left transform md:translate-y-4 shadow-xl shadow-indigo-900/10"
          >
            <div className="w-14 h-14 bg-white dark:bg-zinc-950 dark:border-zinc-800 rounded-2xl flex items-center justify-center border border-slate-200 mx-auto md:mr-auto md:ml-0 mb-6 text-slate-600 dark:text-white">
              <Layout size={28} />
            </div>
            <h4 className="text-2xl font-bold text-slate-200 mb-4">
              Modern Architecture
            </h4>
            <p className="text-slate-400 leading-relaxed mb-6">
              Today, I bridge that robust business logic with the PERN stack{" "}
              <strong className="text-slate-100">
                (PostgreSQL, Express, React, Node.js)
              </strong>
              . I focus on building fast, interactive, and scalable management
              dashboards that deliver exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
