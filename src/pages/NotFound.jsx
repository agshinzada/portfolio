import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, FileSearch } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-24 h-24 bg-indigo-50 dark:bg-zinc-900 text-indigo-500 dark:text-indigo-400 rounded-3xl mb-8 border border-indigo-100 dark:border-zinc-800"
        >
          <FileSearch size={48} />
        </motion.div>

        <h1 className="text-8xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
          4<span className="text-[#05CC05]">0</span>4
        </h1>

        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Page not found
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Unfortunately, the page you are looking for does not exist, has been
          deleted, or the address has been changed. You can continue navigation
          by returning to the home page.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-white transition-all shadow-lg"
          >
            <Home size={18} />
            Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-zinc-800 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
