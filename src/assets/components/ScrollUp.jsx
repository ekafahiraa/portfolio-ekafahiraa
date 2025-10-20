import React, { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";

export default function ScrollUp() {
  // State to control button visibility
  const [showButton, setShowButton] = useState(false);

  // State to control icon animation
  const [animate, setAnimate] = useState(false);

  // Effect to show or hide button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolling more than 300px down
      setShowButton(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to smoothly scroll back to the top
  const scrollToTop = () => {
    setAnimate(true); // Trigger icon animation
    setTimeout(() => {
      setAnimate(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600);
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-5 right-5
            bg-gradient-to-r from-[#921A40] to-[#C75B7A]
            text-white p-2 rounded-full shadow-md
            hover:from-[#C75B7A] hover:to-[#921A40]
            transition-all duration-300 ease-in-out
            focus:ring-2 focus:ring-[#C75B7A] focus:ring-offset-2
          "
        >
          <IoArrowUp
            className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
              animate ? "animate-moveIcon" : ""
            }`}
          />
        </button>
      )}
    </>
  );
}
