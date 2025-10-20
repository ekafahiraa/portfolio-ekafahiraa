import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import biflight from "../images/biflight.png";
import applicant from "../images/applicant.png";
import admin from "../images/admin.png";
import streamflix from "../images/streamflix.png";

export default function Projects() {
  const projects = [
    {
      title: "BiFlight – Flight Booking Website",
      description:
        "A responsive flight booking platform with real-time flight search, booking summary, and total price calculation including taxes and passengers.",
      tech: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "ReactJS",
        "Redux",
        "API Integration",
      ],
      demo: "https://biflight.vercel.app/",
      image: biflight,
    },
    {
      title: "Applicant Website – Research & Internship Requests",
      description:
        "Website for applicants to request recommendation letters for research or internship purposes with form validation and document upload.",
      tech: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "ReactJS",
        "API Integration",
      ],
      demo: "https://bakesbangpol-pelayanan-rekomendasi-penelitian.vercel.app/",
      image: applicant,
    },
    {
      title: "Admin Website – Research & Internship Management",
      description:
        "Admin dashboard to manage applicant submissions, track status, and generate recommendation letters with real-time data updates.",
      tech: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "ReactJS",
        "Redux",
        "API Integration",
      ],
      demo: "https://bakesbangpol-admin-pelayanan-rekomendasi-penelitian.vercel.app/",
      image: admin,
    },
    {
      title: "Streamflix – Movie Trailer Website",
      description:
        "A web-based platform for exploring movie trailers powered by TMDB API. Users can register, log in, view detailed movie pages, and manage their favorite list.",
      tech: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "ReactJS",
        "Redux",
        "TMDB API",
      ],
      demo: "https://streamflixx.vercel.app/",
      image: streamflix,
    },
    {
      title: "OVO Review Aspects and Sentiment Predictions",
      description:
        "A responsive flight booking platform with real-time flight search, booking summary, and total price calculation including taxes and passengers.",
      tech: ["HTML", "CSS", "Python", "JavaScript", "Flask"],
      demo: "https://biflight.vercel.app/",
      image: biflight,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Dynamically detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set the number of projects per slide
  const slides = [];
  for (let i = 0; i < projects.length; i += isMobile ? 1 : 2) {
    slides.push(projects.slice(i, i + (isMobile ? 1 : 2)));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-10 px-6 md:px-16 lg:px-32 bg-[#D9ABAB] text-[#2E2E2E]"
    >
      {/* Section Title */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#921A40] mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Wrapper Carousel */}
      <div className="relative flex flex-col items-center justify-center max-w-5xl mx-auto">
        {/* Desktop Navigation Buttons */}
        <div className="hidden lg:flex justify-between items-center w-full z-20">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute -left-20 top-1/2 -translate-y-1/2 pointer-events-auto 
    bg-gradient-to-r from-[#921A40] to-[#C75B7A] text-white 
    w-11 h-11 rounded-full flex items-center justify-center 
    hover:from-[#C75B7A] hover:to-[#921A40] 
    transition duration-300 shadow-md ${
      currentSlide === 0 ? "opacity-40 cursor-not-allowed" : ""
    }`}
          >
            <FaChevronLeft className="w-16" />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-auto 
    bg-gradient-to-r from-[#921A40] to-[#C75B7A] text-white 
    w-11 h-11 rounded-full flex items-center justify-center 
    hover:from-[#C75B7A] hover:to-[#921A40] 
    transition duration-300 shadow-md ${
      currentSlide === slides.length - 1 ? "opacity-40 cursor-not-allowed" : ""
    }`}
          >
            <FaChevronRight className="w-16" />
          </button>
        </div>

        {/* Container Slide */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {slide.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col border border-[#F0B5B5]/40"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/9] object-contain scale-75 rounded-t-2xl"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-[#921A40] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 mb-3 flex-grow text-justify">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#D9ABAB] text-[#921A40] rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#921A40] font-semibold text-xs sm:text-sm group inline-block"
                      >
                        <span className="relative inline-block pb-[2px]">
                          View Project
                          <span
                            className="absolute left-0 bottom-0 h-[2px] bg-[#921A40] rounded-full 
                           w-0 transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"
                          ></span>
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Indicator */}
        <div className="hidden lg:flex justify-center items-center mt-10 space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "bg-[#921A40] w-5"
                  : "bg-[#F4D9D0] hover:bg-[#C75B7A]"
              }`}
            />
          ))}
        </div>

        {/* Indicator + Navigation Buttons for Mobile & Tablet */}
        <div className="flex items-center justify-center mt-8 space-x-6 md:flex lg:hidden">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`bg-gradient-to-r from-[#921A40] to-[#C75B7A] text-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:from-[#C75B7A] hover:to-[#921A40] transition shadow-md ${
              currentSlide === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <FaChevronLeft className="w-14" />
          </button>

          {/* Mobile & Tablet Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "bg-[#921A40] w-5"
                    : "bg-[#F4D9D0] hover:bg-[#C75B7A]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`bg-gradient-to-r from-[#921A40] to-[#C75B7A] text-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:from-[#C75B7A] hover:to-[#921A40] transition shadow-md ${
              currentSlide === slides.length - 1
                ? "opacity-40 cursor-not-allowed"
                : ""
            }`}
          >
            <FaChevronRight className="w-14" />
          </button>
        </div>
      </div>
    </section>
  );
}
