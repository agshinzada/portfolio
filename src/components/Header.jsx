import React, { useState } from "react";
import {
  Moon,
  Sun,
  Copy,
  CheckCheck,
  MessageCircle,
  Menu,
  X,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { MdWhatsapp } from "react-icons/md";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  const email = "agshinzada@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  function handleTheme() {
    setIsDarkMode(!isDarkMode);
    const htmlEl = document.getElementById("html");
    htmlEl.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 dark:bg-zinc-950 backdrop-blur-md dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-extrabold tracking-tighter text-slate-900 flex items-center gap-2"
            >
              {isDarkMode ? (
                <img
                  src="/logo/logo-dark.svg"
                  alt="logo"
                  className="w-28 md:w-32"
                />
              ) : (
                <img src="/logo/logo.svg" alt="logo" className="w-28 md:w-32" />
              )}
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-slate-600 dark:text-slate-200 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-100 transition-colors text-sm font-medium text-slate-600 dark:text-slate-100 dark:hover:bg-zinc-800"
              title="Copy email"
            >
              {isCopied ? (
                <CheckCheck size={16} className="text-emerald-500" />
              ) : (
                <Copy
                  size={16}
                  className="group-hover:text-slate-900 dark:group-hover:text-slate-100"
                />
              )}
              <span>{isCopied ? "Copied!" : "Email"}</span>
            </button>

            <a
              href="https://wa.me/994703504750"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 transition-colors dark:text-slate-100 dark:hover:text-slate-100 dark:hover:bg-zinc-800"
              title="WhatsApp"
            >
              <MdWhatsapp size={18} />
            </a>

            <button
              onClick={() => handleTheme()}
              className="p-2 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors  dark:text-slate-100 dark:hover:text-slate-100 dark:hover:bg-zinc-800"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-4 px-3">
              <button
                onClick={handleCopyEmail}
                className="p-2 bg-slate-100 rounded-md text-slate-600"
              >
                {isCopied ? (
                  <CheckCheck size={20} className="text-emerald-500" />
                ) : (
                  <Mail size={20} />
                )}
              </button>
              <a
                href="https://wa.me/994XXXXXXXXX"
                className="p-2 bg-emerald-50 text-emerald-600 rounded-md"
              >
                <MessageCircle size={20} />
              </a>
              <button
                onClick={() => handleTheme()}
                className="p-2 bg-slate-100 rounded-md text-slate-600"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
