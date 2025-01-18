import profile from "assets/profile.jpg";
import { motion } from "framer-motion";
import { RxExternalLink } from "react-icons/rx";
import { TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const CoverSection = () => {
  return (
    <div className="flex flex-col items-center gap-6 px-2 pt-20 md:pt-24 pb-20">
      <div className="flex relative">
        <img
          src={profile}
          alt="profile"
          className="z-10 w-36 md:w-44 rounded-full border-4 border-white"
        />
        <motion.div
          className="flex gap-1 text-xs rounded-full px-3 md:px-6 py-4 bg-white z-10 h-fit -rotate-[8deg] absolute shadow-sm left-[100px] md:left-[125px] top-4 text-nowrap tracking-tight md:tracking-normal"
          initial={{
            rotate: -8,
          }}
          animate={{
            y: ["20%", "80%"],
            rotate: -8,
          }}
          transition={{
            duration: 4, // Hızlı bir hareket için kısa süre
            ease: "easeInOut",
            repeat: Infinity, // Sonsuz döngü
            repeatType: "mirror", // Hareketin simetrik olması için
          }}
        >
          <h1 className="">Agshin Ismayilzada</h1>
          <span>👋🏼</span>
        </motion.div>
      </div>
      <div>
        <h2
          style={{
            backgroundImage:
              "linear-gradient(97.0286deg, rgb(11, 11, 11) 0%, rgba(12, 12, 12, 0.55) 100%, rgba(12, 12, 12, 0.55) 100%)",
          }}
          className="text-[36px] md:text-[56px] text-center font-bold bg-clip-text text-transparent leading-tight tracking-tight"
        >
          Transforming ideas into <br />
          interactive digital experiences.
        </h2>
      </div>
      <div className="flex gap-3 mb-6">
        <a
          href="https://www.linkedin.com/in/agshinzada/"
          target="_blank"
          className="bg-black z-10 block rounded-full p-2"
          rel={"noreferrer"}
        >
          <TiSocialLinkedin className="text-[20px] text-white" />
        </a>
        <a
          href="https://github.com/agshinzada"
          target="_blank"
          className="bg-black z-10 block rounded-full p-2"
          rel={"noreferrer"}
        >
          <FaGithub className="text-[20px] text-white" />
        </a>
        <a
          href="https://www.instagram.com/agshin.dev/"
          target="_blank"
          className="bg-black z-10 block rounded-full p-2"
          rel={"noreferrer"}
        >
          <FaInstagram className="text-[20px] text-white" />
        </a>
        <a
          href="https://www.facebook.com/agshinzada/"
          target="_blank"
          className="bg-black z-10 block rounded-full p-2"
          rel={"noreferrer"}
        >
          <TiSocialFacebook className="text-[20px] text-white" />
        </a>
      </div>
      <div className="flex">
        <Link
          to={"projects"}
          className="bg-black text-white text-xs font-semibold px-6 py-5 md:px-10 md:py-6 rounded-full z-10 flex gap-2 items-center"
        >
          Latest Projects <RxExternalLink className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default CoverSection;
