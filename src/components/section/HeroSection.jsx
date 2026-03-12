import React from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = (initialRotate, initialY, floatDuration, delay) => ({
  initial: { opacity: 0, x: 50, rotate: initialRotate },
  animate: {
    opacity: 1,
    x: 0,
    rotate: initialRotate,
    y: [0, -15, 0],
    transition: {
      opacity: { duration: 0.8, delay },
      x: { duration: 0.8, delay },
      y: {
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  },
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-20 pb-32 lg:pt-32 lg:pb-40 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="max-w-2xl text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 dark:text-white dark:border-slate-800 border border-slate-200 text-slate-700 text-sm font-medium mb-8 shadow-sm"
            >
              <Sparkles size={16} className="text-indigo-500" />
              <span>Full Stack & ERP Developer</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]"
            >
              Modern <span className="text-[#05CC05]">interfaces</span> for
              complex <br className="hidden lg:block" />
              enterprise systems.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 dark:text-slate-300"
            >
              Transforming ideas into interactive digital experiences. I build
              large-scale web applications and admin panels using clean code and
              modern technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 dark:bg-[#05CC05] dark:hover:bg-green-600 text-white font-medium rounded-xl hover:bg-slate-800 transition-all focus:ring-4 focus:ring-slate-900/20 shadow-lg shadow-slate-900/10"
              >
                View My Works
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <div className="flex items-center gap-4 border-l-0 sm:border-l sm:border-slate-200 sm:pl-6">
                <a
                  href="https://github.com/agshinzada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/agshinzada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:text-white text-slate-600 border border-slate-200 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/agshin.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800 text-slate-600 border border-slate-200 rounded-lg hover:bg-red-800 hover:text-white hover:border-red-800 transition-all shadow-sm"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:agshinzada@gmail.com"
                  className="p-2.5 bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800 text-slate-600 border border-slate-200 rounded-lg hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-sm"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative h-[400px] lg:h-[550px] hidden md:block w-full">
            <motion.div
              variants={cardVariants(6, 12, 5, 0.4)}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 0.95,
                rotate: 10,
                y: -20,
                opacity: 1,
                zIndex: 40,
              }}
              className="absolute right-0 top-12 w-[85%] h-64 lg:h-80 bg-white dark:bg-zinc-950 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-xl overflow-hidden cursor-pointer z-10 opacity-70"
            >
              <div className="h-8 bg-slate-100 dark:bg-zinc-950 dark:border-zinc-800 border-b border-slate-200 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              </div>
              <img
                src="/images/gemstone-hero.png"
                alt="hero-3"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              variants={cardVariants(3, 24, 6, 0.2)}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1,
                rotate: 6,
                y: -20,
                opacity: 1,
                zIndex: 40,
              }}
              className="absolute right-12 top-24 w-[85%] h-64 lg:h-80 bg-white dark:bg-zinc-950 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden cursor-pointer z-20 opacity-90"
            >
              <div className="h-8 bg-slate-100 dark:bg-zinc-950 dark:border-zinc-800 border-b border-slate-200 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              </div>
              <img
                src="/images/kinometraj-hero.png"
                alt="hero-2"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              variants={cardVariants(0, 36, 4.5, 0)}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.02, y: -10, zIndex: 40 }}
              className="absolute right-24 top-36 w-[85%] h-64 lg:h-80 bg-white dark:bg-zinc-950 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] overflow-hidden cursor-pointer z-30"
            >
              <div className="h-8 bg-slate-100 dark:bg-zinc-950 dark:border-zinc-800 border-b border-slate-200 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              </div>
              <img
                src="/images/nicheceramic-hero.png"
                alt="hero-1"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
