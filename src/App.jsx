import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import AboutSection from "./components/sections/AboutSection";
import ResumeSection from "./components/sections/ResumeSection";
import ButtonSection from "./components/sections/ButtonSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import BlogSection from "./components/sections/BlogSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  const [position, setPosition] = useState("absolute bottom-0");

  useEffect(() => {
    const handleScroll = () => {
      const main = document.getElementById("main");
      const nav = document.getElementById("nav");
      const distanceFromTopMain = main.getBoundingClientRect();
      // const distanceFromTopNav = nav.getBoundingClientRect();
      if (distanceFromTopMain.top <= 0) {
        setPosition("fixed top-0");
      } else if (distanceFromTopMain.top >= 0) {
        setPosition(`absolute bottom-0`);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header position={position} />
      <main className="relative z-20 bg-main-dark min-h-screen" id="main">
        <AboutSection />
        <ResumeSection />
        <ButtonSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
