import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when user scrolls (UX)
  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F4D9D0]/10 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        {/* Nama kiri */}
        <h1
          onClick={() => {
            const homeSection = document.getElementById("home");
            if (homeSection) {
              homeSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-lg sm:text-xl md:text-2xl font-bold text-[#921A40] cursor-pointer transition duration-300 hover:text-[#C75B7A]"
        >
          Eka Fahira
        </h1>

        {/* Hamburger (mobile) */}
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-[#921A40] text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen((s) => !s)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 text-[#2E2E2E] font-medium text-sm sm:text-base lg:text-lg">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(`#${item.id}`);
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  setIsMenuOpen(false); // untuk tutup menu di mobile
                }}
                className="inline-block transition-transform duration-200 ease-in-out group-focus:text-[#921A40] group-hover:text-[#921A40]"
              >
                <span className="block group-hover:-translate-y-[1px] group-focus:-translate-y-[1px] active:translate-y-[1px] transition-transform">
                  {item.label}
                </span>
              </a>

              {/* animated underline */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] bg-[#921A40] rounded-full
                           w-0 transition-all duration-300
                           group-hover:w-full group-focus:w-full"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-transparent backdrop-blur-lg
`}
      >
        <ul className="flex flex-col space-y-4 py-6 px-6 text-[#2E2E2E] font-medium text-sm sm:text-base">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                className="block w-full py-2 transition-colors rounded-md focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="block text-left group-active:translate-y-[1px] active:translate-y-[1px]">
                  {item.label}
                </span>
              </a>

              {/* underline for mobile: appears on focus/hover/active */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] bg-[#921A40] rounded-full
                           w-0 transition-all duration-300
                           group-hover:w-full group-focus:w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
