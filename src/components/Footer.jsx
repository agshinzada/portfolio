import React from "react";

const Footer = () => {
  return (
    <div className="px-6 py-5 md:px-20 md:py-10 bg-[#fcfcfc] dark:bg-primaryDarkColor flex justify-between dark:text-fourdDarkColor">
      <div className="text-xs md:text-sm">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <div className="flex gap-1 md:gap-3 text-xs md:text-sm">
        <a
          href="https://www.linkedin.com/in/agshinzada/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <span>/</span>
        <a
          href="https://github.com/agshinzada"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <span>/</span>
        <a
          href="https://www.instagram.com/agshin.dev/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
