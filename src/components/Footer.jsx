import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-950 dark:border-zinc-800 border-t border-slate-200 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          <div className="text-center md:text-left max-w-sm">
            <a
              href="/"
              className="text-xl font-extrabold tracking-tighter text-slate-900 flex items-center justify-center md:justify-start gap-2 mb-3"
            >
              <img
                src="/logo/logo.svg"
                alt="logo"
                className="w-28 md:w-32 dark:hidden"
              />
              <img
                src="/logo/logo-dark.svg"
                alt="logo"
                className="w-28 md:w-32 hidden dark:block"
              />
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
              Software Engineer specializing in solving complex business
              challenges with modern, user-centric web technologies.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-50 dark:bg-zinc-950 dark:border-zinc-800 dark:text-slate-300 dark:hover:bg-zinc-800 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-50 dark:bg-zinc-950 dark:border-zinc-800 dark:text-slate-300 dark:hover:bg-zinc-800 text-slate-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:senin@emailin.com"
              className="p-2.5 bg-slate-50 dark:bg-zinc-950 dark:border-zinc-800 dark:text-slate-300 dark:hover:bg-zinc-800 text-slate-600 rounded-lg hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <hr className="border-slate-100 dark:border-zinc-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Agshin Ismayilzada. All rights reserved</p>
          <p className="flex items-center gap-1">
            Baku, Azerbaijan{" "}
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1"></span>
          </p>
        </div>
      </div>
    </footer>
  );
};
