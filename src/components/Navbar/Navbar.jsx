import React, { useRef } from "react";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import logo from "../../assets/logo.svg";
import burger from "../../assets/burger.svg";
import NavLinkItem from "../utils/NavLinkItem";
import { motion, spring } from "framer-motion";

const Navbar = ({ position }) => {
  const navRef = useRef();
  const socialRef = useRef();

  function handleBurger() {
    navRef.current.classList.toggle("mobile:hidden");
    socialRef.current.classList.toggle("mobile:hidden");
    setBurgerState(true);
  }

  return (
    <motion.nav
      id="nav"
      className={`w-full pt-4  ${position} pb-4 z-30 bg-main-dark border-b border-[#242323]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="container flex gap-5 items-center justify-between">
        <a href="/">
          <img src={logo} alt="logo" className="w-32" />
        </a>
        <ul
          className="flex gap-10 text-white laptop:static laptop:flex-row laptop:gap-10 laptop:w-fit laptop:py-0 laptop:px-0 laptop:flex mobile:hidden mobile:absolute mobile:flex-col mobile:top-[77px] mobile:py-8 mobile:gap-8 mobile:px-10 mobile:right-0 mobile:left-0 mobile:w-full mobile:bg-main-dark "
          ref={navRef}
        >
          <motion.li
            key={1}
            whileHover={{ scale: 1.1, color: "#35DF32" }}
            transition={{ type: spring, stiffness: 300 }}
          >
            <NavLinkItem
              name={"Ana Səhifə"}
              url={"#"}
              handleBurger={handleBurger}
            />
          </motion.li>
          <motion.li
            key={2}
            whileHover={{ scale: 1.1, color: "#35DF32" }}
            transition={{ type: spring, stiffness: 300 }}
          >
            <NavLinkItem
              name={"Haqqımda"}
              url={"#about"}
              handleBurger={handleBurger}
            />
          </motion.li>
          <motion.li
            key={3}
            whileHover={{ scale: 1.1, color: "#35DF32" }}
            transition={{ type: spring, stiffness: 300 }}
          >
            <NavLinkItem
              name={"Portfolio"}
              url={"#portfolio"}
              handleBurger={handleBurger}
            />
          </motion.li>
          <motion.li
            key={4}
            whileHover={{ scale: 1.1, color: "#35DF32" }}
            transition={{ type: spring, stiffness: 300 }}
          >
            <NavLinkItem
              name={"Bloq"}
              url={"#blog"}
              handleBurger={handleBurger}
            />
          </motion.li>
          <motion.li
            key={5}
            whileHover={{ scale: 1.1, color: "#35DF32" }}
            transition={{ type: spring, stiffness: 300 }}
          >
            <NavLinkItem
              name={"Əlaqə"}
              url={"#contact"}
              handleBurger={handleBurger}
            />
          </motion.li>
        </ul>
        <ul
          className="flex gap-4 items-center laptop:flex laptop:static mobile:hidden mobile:absolute top-[21rem] right-5"
          ref={socialRef}
        >
          <li>
            <a href="https://www.facebook.com/agshinzada" target="_blank">
              <img src={facebook} alt="facebook" className="w-6" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/agshinzada/" target="_blank">
              <img src={linkedin} alt="linkedin" className="w-5" />
            </a>
          </li>
          <li>
            <a href="https://github.com/agshinzada" target="_blank">
              <img src={github} alt="github" className="w-5" />
            </a>
          </li>
        </ul>
        <div
          className="absolute top-5 right-5 mobile:block laptop:hidden cursor-pointer"
          onClick={handleBurger}
        >
          <img src={burger} alt="burger-menu" className=" w-10 " />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
