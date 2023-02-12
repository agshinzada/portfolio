import HeaderBox from "./HeaderBox";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-hot-toast";
import { useRef } from "react";

function ContactPage() {
  const [state, handleSubmit] = useForm("mjvdygvg");
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  if (state.succeeded) {
    setTimeout(() => {
      nameRef.current.value = "";
      surnameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
    }, 1500);
    setTimeout(() => {
      toast.success("Uğurla göndərildi!");
    }, 2000);
  }
  return (
    <>
      <HeaderBox title="Contact" slogan="Feel free to contact me." />
      <div className="flex md:flex-row flex-col xl:px-28 xl:py-20 px-6 py-10 md:justify-between animate__animated animate__fadeIn">
        <form className="flex flex-col gap-3 basis-2/3" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <input
              type={"text"}
              placeholder="Ad"
              className="p-3 bg-transparent border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:transition text-xs w-full"
              required
              name="name"
              ref={nameRef}
            />
            <input
              type={"text"}
              placeholder="Soyad"
              className="p-3 bg-transparent border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:transition text-xs w-full"
              required
              name="surname"
              ref={surnameRef}
            />
          </div>
          <div className="flex gap-3">
            <input
              type={"email"}
              placeholder="Email"
              className="p-3 bg-transparent border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:transition text-xs w-full"
              required
              name="email"
              ref={emailRef}
            />
            <input
              type={"text"}
              placeholder="Nömrə"
              className="p-3 bg-transparent border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:transition text-xs w-full"
              required
              name="phone"
              ref={phoneRef}
            />
          </div>
          <div className="flex gap-3">
            <textarea
              rows="10"
              className="p-3 bg-transparent border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:transition text-xs w-full"
              placeholder="Message"
              required
              name="message"
              ref={messageRef}
            ></textarea>
          </div>
          <div className="md:pb-28 pb-8 mt-2">
            <button
              className="bg-black py-4 px-12 text-white text-xs font-bold rounded-sm hover:bg-gray-700 transition-all mx-auto"
              type="submit"
              disabled={state.submitting}
            >
              GÖNDƏR
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-bold">Email</h4>
            <p>agshinzada@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold">Mobile</h4>
            <div className="flex items-center gap-2 mt-2">
              <img src="whatsapp.svg" alt="whatsapp-logo" className="w-8" />
              <a
                href="https://api.whatsapp.com/send?phone=994504508750"
                target={"_blank"}
              >
                Whatsapp
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold">Adres</h4>
            <p>Ə.Naxçıvani küçəsi</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
