import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#921A40] text-white py-8 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Name / Identity */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg sm:text-xl font-semibold">Eka Fahira</h2>
          <p className="text-sm text-gray-100 mt-1">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Social media */}
        <div className="flex flex-col items-center">
          <p className="text-sm mb-2 font-medium">Connect with me</p>
          <div className="flex items-center gap-5 text-2xl">
            <a
              href="https://www.instagram.com/ekafahiraa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://id.linkedin.com/in/ekafahiraa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ekafahiraa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:ekafahirapr@gmail.com"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
