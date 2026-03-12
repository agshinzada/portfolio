import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

const ErrorPage = ({ resetErrorBoundary }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-zinc-950 border border-red-100 dark:border-red-900/30 p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-red-500/5 text-center max-w-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500/20"></div>

        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 dark:bg-red-900/10 text-red-500 rounded-2xl mb-8">
          <AlertTriangle size={40} />
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
          An unexpected error occurred.
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          There was a technical error in the system. Please refresh the page or
          check again later.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/25"
          >
            <RefreshCw size={18} />
            Reload
          </button>

          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-zinc-800 transition-all"
          >
            <Home size={18} />
            Home
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
