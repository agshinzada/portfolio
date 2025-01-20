import agree from "assets/agree.svg";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="border dark:border-thirdDarkColor rounded-full w-fit p-6 bg-gradient-to-br from-transparent to-gray-200 dark:bg-thirdDarkColor">
        <img src={agree} alt="agreement" className="w-6 md:w-12 opacity-70" />
      </div>
      <div>
        <h2
          style={{
            backgroundImage:
              "linear-gradient(97.0286deg, rgb(11, 11, 11) 0%, rgba(12, 12, 12, 0.55) 100%, rgba(12, 12, 12, 0.55) 100%)",
          }}
          className="text-[36px] md:text-[56px] text-center font-bold bg-clip-text text-transparent leading-[2.5rem] md:leading-[4rem] tracking-tighter mb-3 dark:text-fourdDarkColor"
        >
          Tell me about your next <br /> project
        </h2>
      </div>
      <div className="flex gap-2 flex-wrap">
        <a
          href="mailto:agshinzada@gmail.com"
          className="bg-black dark:bg-fourdDarkColor dark:text-black text-white text-xs font-semibold px-8 py-4 rounded-full z-10 flex gap-2 items-center"
        >
          <MdOutlineEmail className="text-lg text-white dark:text-black" />{" "}
          Email Me
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=994703504750&text=Salam"
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] text-white dark:text-black text-xs font-semibold px-8 py-4 rounded-full z-10 flex gap-2 items-center"
        >
          <FaWhatsapp className="text-lg text-white dark:text-black" /> Whatsapp
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
