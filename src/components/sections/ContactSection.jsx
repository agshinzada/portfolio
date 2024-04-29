import React from "react";
import SectionTitle from "../utils/SectionTitle";
import emailIcon from "../../assets/email.svg";
import locationIcon from "../../assets/location.svg";
import profile from "../../assets/profile.webp";
import SectionNavInfo from "../utils/SectionNavInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../Form/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="relative container flex mb-28 mobile:flex-col laptop:flex-row">
        <SectionNavInfo number={"06"} name={"contact"} />
        <div className="w-full pr-12 mobile:pr-0 laptop:pr-12">
          <SectionTitle name={"Əlaqə"} />
          <div className="flex">
            <ContactForm />
          </div>
        </div>
        <div className="pl-10 mobile:pl-0 laptop:pl-10 w-1/3 border-l border-[#242323] pt-20 mobile:w-full mobile:border-l-0 laptop:w-1/3 laptop:border-l">
          <div className="pb-12 pr-10 mobile:pr-0 laptop:pr-10 flex justify-center">
            <img src={profile} alt="profile" className="w-[12rem]" />
          </div>
          <ul className="text-white mobile:text-sm laptop:text-md text-md">
            <li className="flex gap-3 items-center border-b border-[#242323] py-3">
              <img src={emailIcon} alt="email-icon" className="w-8" />
              <span>agshinzada@gmail.com</span>
            </li>
            <li className="flex gap-3 items-center border-b border-[#242323] py-3">
              <img src={locationIcon} alt="location-icon" className="w-6" />
              <span>Baku</span>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </section>
  );
};

export default ContactSection;
