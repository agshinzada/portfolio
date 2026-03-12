import { Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
export const CTASection = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-green-800 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
          ></motion.div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          ></motion.div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6"
            >
              Looking for an <span className="text-[#05CC05]">expert</span>{" "}
              <br className="hidden md:block" /> for your next project?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 mb-10 leading-relaxed"
            >
              I’m always open to new challenges. Whether you have a complex idea
              or need a scalable digital product, let’s connect and turn your
              vision into reality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white text-lg font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25 transform hover:-translate-y-1 active:scale-95"
              >
                Get in Touch
                <Send size={20} />
              </Link>

              <a
                href="mailto:senin@emailin.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-lg font-semibold rounded-xl transition-all active:scale-95"
              >
                Email Me
                <Mail size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
