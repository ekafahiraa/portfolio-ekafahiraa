import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    // Validasi jika field kosong
    if (!name || !email || !message) {
      toast.error("Please fill in all fields before sending.", {
        icon: null,
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_pemq4xk", // Service ID
        "template_t0zgoco", // Template ID
        form.current,
        "8GLzL95bCx-d1Aweb" // Public Key
      )
      .then(
        () => {
          toast.success("Your message has been sent successfully!", {
            icon: null,
            style: {
              background: "#28A745",
              color: "#FFFFFF",
              borderRadius: "10px",
              fontSize: "14px",
              textAlign: "center",
              maxWidth: "900px",
            },
            position: "top-center",
            duration: 3000,
          });
          form.current.reset();
          setLoading(false);
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            icon: null,
            style: {
              background: "#FF0000",
              color: "#FFFFFF",
              borderRadius: "10px",
              fontSize: "14px",
              textAlign: "center",
              maxWidth: "900px",
            },
            position: "top-center",
            duration: 3000,
          });
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-10 px-6 md:px-16 lg:px-32 bg-[#F4D9D0] text-[#2E2E2E]"
    >
      <Toaster />

      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#921A40] mb-12 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Konten */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
        {/* Kiri: Info Kontak */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-sm sm:text-base"
        >
          <p className="text-gray-800 text-justify leading-relaxed text-xs sm:text-sm md:text-base">
            Feel free to reach out to me for collaborations, project
            discussions, or just to say hello! I'm also open to job
            opportunities or any exciting projects we can work on together.
          </p>

          <ul className="space-y-4 text-xs sm:text-sm md:text-base">
            <li className="flex items-center gap-4 border-b border-[#D9ABAB] pb-2">
              <FaMapMarkerAlt className="text-[#921A40] text-lg sm:text-xl" />
              <span>Surabaya, East Java, Indonesia</span>
            </li>
            <li className="flex items-center gap-4 border-b border-[#D9ABAB] pb-2">
              <FaEnvelope className="text-[#921A40] text-lg sm:text-xl" />
              <a
                href="mailto:ekafahirapr@gmail.com"
                className="hover:text-[#921A40] transition"
              >
                ekafahirapr@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4 border-b border-[#D9ABAB] pb-2">
              <FaWhatsapp className="text-[#921A40] text-lg sm:text-xl" />
              <a
                href="https://wa.me/6285702278865"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#921A40] transition"
              >
                +62 85702278865
              </a>
            </li>
            {/* <li className="flex items-center gap-4 border-b border-gray-300 pb-2">
              <FaLinkedin className="text-[#921A40] text-lg sm:text-xl" />
              <a
                href="https://id.linkedin.com/in/ekafahiraa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#921A40] transition break-words"
              >
                linkedin.com/in/ekafahiraa
              </a>
            </li>
            <li className="flex items-center gap-4 border-b border-gray-300 pb-2">
              <FaGithub className="text-[#921A40] text-lg sm:text-xl" />
              <a
                href="https://github.com/ekafahiraa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#921A40] transition break-words"
              >
                github.com/ekafahiraa
              </a>
            </li> */}
          </ul>
        </motion.div>

        {/* Kanan: Form Kontak */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-[#F0B5B5]/40 p-6 flex flex-col space-y-4 text-xs sm:text-sm md:text-base"
        >
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#921A40] mb-2 text-center sm:text-left">
            Send Me a Message
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            // required
            className="border border-[#D9ABAB] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#921A40]/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            // required
            className="border border-[#D9ABAB] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#921A40]/50"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            // required
            className="border border-[#D9ABAB] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#921A40]/50"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-gradient-to-r from-[#921A40] to-[#C75B7A] cursor-not-allowed"
                : "bg-gradient-to-r from-[#921A40] to-[#C75B7A] hover:from-[#C75B7A] hover:to-[#921A40]"
            } text-white font-medium rounded-full py-2 transition-all duration-300 flex items-center justify-center text-sm sm:text-base shadow-md`}
          >
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="w-6 h-6 animate-spin"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l5-5-5-5v4a12 12 0 00-12 12h4z"
                />
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
