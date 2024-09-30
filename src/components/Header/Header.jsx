import { TypeAnimation } from "react-type-animation";
import SectionNavInfo from "../utils/SectionNavInfo";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const Header = ({ position }) => {
  return (
    <header
      className="flex flex-col items-center bg-cover relative min-h-screen"
      id="header"
    >
      <section className="w-full h-full flex fixed justify-center z-10">
        <div className="container w-full absolute">
          <SectionNavInfo number={"01"} name={"Welcome"} />
        </div>
        <div>
          <motion.div
            className="w-52 h-52 mobile:w-40 mobile:h-40 laptop:w-52 laptop:h-52 bg-main-green rotate-45 absolute right-[-40px] top-[-80px]"
            initial={{ x: 200, rotate: 45 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="w-52 h-52 mobile:w-40 mobile:h-40 laptop:w-52 laptop:h-52 rounded-full bg-second-green absolute right-[90px] top-[-100px] opacity-50"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        <div className="container flex flex-col items-center gap-6 self-center">
          {/* <img src={dots} alt="dots" className="w-16" /> */}
          <div className="flex flex-col text-center gap-2">
            <motion.h1
              className="text-[80px] bg-gradient-to-r from-main-green to-third-green bg-clip-text font-bold text-main-green mobile:text-[40px] laptop:text-[80px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              Agshin Ismayilzada
            </motion.h1>
            <TypeAnimation
              sequence={[
                "I am Front-end developer",
                500,
                "I am Front-end developer",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-2xl font-semibold text-second-green mobile:text-lg laptop:text-2xl"
            />
          </div>
        </div>
      </section>
      <Navbar position={position} />
    </header>
  );
};

export default Header;
