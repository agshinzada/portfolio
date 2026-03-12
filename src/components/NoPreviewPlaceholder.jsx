import React from "react";
import { motion } from "framer-motion";
import { ImageOff, Code2, Lock } from "lucide-react";

const NoPreviewPlaceholder = ({ category = "Backend Project" }) => {
  return (
    <div className="relative w-full h-[350px] lg:h-[450px] bg-slate-50 dark:bg-zinc-900/50 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-zinc-800 flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800 mb-6 text-slate-400"
        >
          <ImageOff size={32} strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            No Visual Preview Available
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
            This is a{" "}
            <span className="font-semibold text-indigo-500">{category}</span>{" "}
            focused on system logic, database architecture, and API integration.
            Due to its nature, there is no graphical user interface to display.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-zinc-800 rounded-xl text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            <Code2 size={14} />
            Backend Logic
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-zinc-800 rounded-xl text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            <Lock size={14} />
            Private Service
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NoPreviewPlaceholder;
