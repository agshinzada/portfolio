import React from "react";
import { motion } from "framer-motion";
import { Camera, RefreshCcw, Layout } from "lucide-react";

const ImagePendingPlaceholder = () => {
  return (
    <div className="relative w-full h-[350px] lg:h-[450px] bg-slate-50 dark:bg-zinc-900/30 rounded-[2.5rem] border-2 border-dashed border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none flex flex-col gap-4 p-10">
        <div className="w-full h-12 bg-current rounded-xl"></div>
        <div className="w-2/3 h-12 bg-current rounded-xl"></div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="h-32 bg-current rounded-2xl"></div>
          <div className="h-32 bg-current rounded-2xl"></div>
          <div className="h-32 bg-current rounded-2xl"></div>
        </div>
      </div>

      <div className="max-w-md text-center relative z-10">
        <div className="relative inline-flex mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800 flex items-center justify-center text-indigo-500"
          >
            <Camera size={32} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-zinc-900 shadow-sm"
          >
            <RefreshCcw size={12} strokeWidth={3} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            Visuals Coming Soon
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
            The interface for this project is currently being captured.
            High-quality mockups and screenshots will be available shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-full text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest border border-indigo-100 dark:border-indigo-500/20"
        >
          <Layout size={14} />
          Preparing Assets
        </motion.div>
      </div>
    </div>
  );
};

export default ImagePendingPlaceholder;
