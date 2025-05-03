import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoSvg from "./LogoSvg";
import { Around } from "@theme-toggles/react";

const Header = () => {
  const [copyText, setCopyText] = useState("Copy");

  function handleTheme(params) {
    const htmlEl = document.getElementById("html");
    htmlEl.classList.toggle("dark");
  }

  function handleCopy(params) {
    navigator.clipboard
      .writeText("agshinzada@gmail.com")
      .then(() => {
        setCopyText("Copied!"); // Kopyalanma durumu başarılı ise state güncellenir
      })
      .catch((err) => {
        console.error("Copy error: ", err);
      });
  }

  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        <div className="flex gap-4 md:border-slate-100 md:border dark:md:border-fourdDarkColor rounded-full p-1 items-center">
          <div className="text-xs ml-4 hidden md:block dark:text-fourdDarkColor transition-colors duration-500">
            <h4>agshinzada@gmail.com</h4>
          </div>
          <button
            className="bg-[#252525] dark:bg-fourdDarkColor dark:text-primaryDarkColor hidden md:block text-white md:text-black md:bg-white text-xs font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full z-10 transition-colors duration-500"
            type="button"
            onClick={handleCopy}
          >
            {copyText}
          </button>
          <a
            className="bg-[#252525] dark:bg-fourdDarkColor dark:text-primaryDarkColor md:hidden text-white md:text-black md:bg-white text-xs font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full z-10 transition-colors duration-500"
            href="mailto:agshinzada@gmail.com"
          >
            Email
          </a>
        </div>
        <a
          className="bg-white dark:bg-fourdDarkColor dark:text-primaryDarkColor text-xs font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full z-10 transition-colors duration-500"
          href="https://tqvgatbdxqewsovfeztw.supabase.co/storage/v1/object/public/project-images//Agshin-Ismayilzada.pdf"
          download={"Agshin-Ismayilzada.pdf"}
        >
          CV
        </a>
        <a
          className="bg-white dark:bg-fourdDarkColor text-xs font-semibold px-8 py-3 hidden md:flex md:px-10 md:py-4 rounded-full z-10 transition-colors duration-500"
          href="https://api.whatsapp.com/send/?phone=994703504750&text=Salam"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="text-lg text-black" />
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Around
          duration={750}
          className="z-50 text-4xl text-primaryDarkColor dark:text-fourdDarkColor"
          // toggled={(e) => console.log(e)}
          // toggle={setToggle}
          onToggle={handleTheme}
          title=""
        />
        <Link to={"/"} className="cursor-pointer z-10 relative">
          <LogoSvg className="w-28 md:w-36" />
          {/* <img src={logo} alt="logo" className="w-24 md:w-28" /> */}
        </Link>
      </div>
    </div>
  );
};

export default Header;
