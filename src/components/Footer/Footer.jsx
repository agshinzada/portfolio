import React from "react";
import footerBg from "../../assets/footer-bg.webp";

const Footer = () => {
  return (
    <footer
      className="bg-cover text-white border-t border-[#242323] relative z-40"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="container py-8 mobile:py-8 laptop:py-8 mobile:flex-col mobile:gap-5 laptop:flex-row flex justify-between">
        <p className="text-xs">
          ©{new Date().getFullYear()} Bütün hüquqlar qorunur.
        </p>
        <ul className="flex gap-8 text-xs">
          <li>
            <a href="https://www.facebook.com/agshinzada" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/agshinzada/" target="_blank">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/agshinzada" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
