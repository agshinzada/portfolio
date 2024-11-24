import logo from "assets/logo-black.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [copyText, setCopyText] = useState("Copy");

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
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="flex gap-4 md:border-slate-100 md:border rounded-full p-1 items-center">
          <div className="text-xs ml-4 hidden md:block">
            <h4>agshinzada@gmail.com</h4>
          </div>
          <button
            className="bg-[#252525] hidden md:block text-white md:text-black md:bg-white text-xs font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full z-10"
            type="button"
            onClick={handleCopy}
          >
            {copyText}
          </button>
          <a
            className="bg-[#252525] md:hidden text-white md:text-black md:bg-white text-xs font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full z-10"
            href="mailto:agshinzada@gmail.com"
          >
            Email
          </a>
        </div>
        <button
          className="bg-white text-xs font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full z-10"
          type="button"
        >
          CV
        </button>
      </div>
      <Link to={"/"} className="cursor-pointer z-10 relative">
        <img src={logo} alt="logo" className="w-24 md:w-28" />
      </Link>
    </div>
  );
};

export default Header;
