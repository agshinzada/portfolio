import React, { useRef } from "react";
import {
  Mail,
  MessageCircle,
  MapPin,
  Github,
  Linkedin,
  Send,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const form = useRef(null);

  function sendEmail(e) {
    e.preventDefault();
    console.log(form.current);
    const promise = emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICEID,
      process.env.REACT_APP_EMAIL_TEMPLATEID,
      form.current,
      process.env.REACT_APP_EMAIL_PUBLICKEY,
    );
    toast.promise(promise, {
      loading: "Sending...",
      success: <b>Message sended.</b>,
      error: <b>Something is wrong.</b>,
    });
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Contact Me
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Do you have any project ideas or just want to say hello? You can
            write to me via the form below or other channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-zinc-950 rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 dark:border-zinc-700">
          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <a
                  href="mailto:agshinzada@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-slate-50 dark:bg-zinc-900 flex items-center justify-center rounded-xl group-hover:bg-green-50 group-hover:text-green-600 transition-colors text-slate-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Email
                    </p>
                    <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                      agshinzada@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/994703504750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-slate-50 dark:bg-zinc-900 flex items-center justify-center rounded-xl group-hover:bg-green-50 group-hover:text-green-600 transition-colors text-slate-500">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                      WhatsApp
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 dark:bg-zinc-900 flex items-center justify-center rounded-xl text-slate-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Location
                    </p>
                    <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                      Baku, Azerbaijan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-100 dark:border-slate-700" />

            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200 mb-4">
                Social Networks
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/agshinzada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-full hover:bg-slate-700 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/agshinzada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/agshin.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full hover:bg-green-700 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-slate-50 dark:bg-zinc-900 rounded-2xl p-6 sm:p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-6">
              Send a Message
            </h2>
            <form className="space-y-5" onSubmit={sendEmail} ref={form}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors bg-white dark:bg-zinc-900"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors bg-white dark:bg-zinc-900"
                  placeholder="youremail@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors bg-white dark:bg-zinc-900 resize-none"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium rounded-xl flex items-center justify-center gap-2 transition-colors focus:ring-4 focus:ring-slate-900/20"
              >
                Send
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
