import React from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzbngjyd");

  if (state.succeeded) {
    toast("Məktub göndərildi. Tezliklə geri dönüş edəcəm.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-white pr-10 w-full flex flex-col gap-4 mobile:pr-0 laptop:pr-10"
    >
      <div className="flex gap-4">
        <div className="w-full">
          <label htmlFor="name" className="block mb-2 text-sm font-medium ">
            Ad*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-main-dark-slate outline-none transition-all   text-sm rounded-lg focus:ring-main-green focus:border-main-green block w-full p-2.5"
            placeholder="Adınız"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="block mb-2 text-sm font-medium ">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-main-dark-slate outline-none transition-all   text-sm rounded-lg focus:ring-main-green focus:border-main-green block w-full p-2.5"
            placeholder="Email adresiniz"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium">
            Mövzu
          </label>
          <input
            type="subject"
            id="text"
            name="subject"
            className="bg-main-dark-slate  outline-none transition-all   text-sm rounded-lg focus:ring-main-green focus:border-main-green block w-full p-2.5"
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Məktub*
          </label>
          <textarea
            type="text"
            name="message"
            rows={8}
            id="message"
            className="bg-main-dark-slate  outline-none transition-all   text-sm rounded-lg focus:ring-main-green focus:border-main-green block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        <button
          className="text-white bg-main-green hover:bg-main-green focus:ring-4 focus:ring-main-green font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 outline-none w-fit"
          type="submit"
          disabled={state.submitting}
        >
          Göndər
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
