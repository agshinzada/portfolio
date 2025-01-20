import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "components/Header";
import Footer from "components/Footer";

const Layout = () => {
  return (
    <div className="dark:bg-primaryDarkColor transition-colors duration-500 dark:text-primaryDarkColor">
      <div className="w-full relative overflow-hidden px-4 md:px-6 lg:px-14 py-10 flex flex-col">
        <motion.div
          className="bg-[url('assets/bg-cover.png')] opacity-[0.05] -inset-[200%] w-[400%] h-[400%] absolute"
          animate={{
            x: ["0%", "20%", "0%", "-20%", "0%"], // X ekseninde ileri-geri hareket
            y: ["0%", "20%", "0%", "-20%", "0%"], // Y ekseninde yukarı-aşağı hareket
          }}
          transition={{
            duration: 0.5, // Hızlı bir hareket için kısa süre
            repeat: Infinity, // Sonsuz döngü
            repeatType: "mirror", // Hareketin simetrik olması için
          }}
        ></motion.div>
        <Header />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
