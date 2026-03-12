import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "components/ScrollToTop";

const Layout = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.getElementById("html").classList.add(theme);
    }
  }, []);

  return (
    <div className="dark:bg-primaryDarkColor transition-colors duration-500 dark:text-primaryDarkColor">
      <Header />
      <main className="flex-1">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;
