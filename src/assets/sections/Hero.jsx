import { motion } from "framer-motion";
import profile from "../images/Portfolio-EkaFahira.jpg";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen 
                 px-6 md:px-16 lg:px-24 bg-[#F4D9D0] pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      {/* Left Text Section */}
      <motion.div
        className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-4 order-2 md:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#921A40]">
          Hello, I’m Eka Fahira!
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2E2E2E] leading-relaxed max-w-md">
          I’m interested in{" "}
          <span className="text-[#C75B7A] font-medium">Data Analytics</span> and{" "}
          <span className="text-[#C75B7A] font-medium">
            Front End Development
          </span>
          .
        </p>

        <motion.button
          onClick={scrollToAbout}
          className="bg-gradient-to-r from-[#921A40] to-[#C75B7A] text-white font-medium text-sm sm:text-base 
                     px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md transition-all duration-300 
                     hover:from-[#C75B7A] hover:to-[#921A40]"
          whileTap={{ scale: 0.95 }}
        >
          More About Me
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center order-1 md:order-2 mt-6 md:mt-0 mb-10 md:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.img
          src={profile}
          alt="Eka Fahira"
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover 
                     shadow-lg border-4 border-[#D9ABAB]"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />
      </motion.div>
    </section>
  );
}
