import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  // Variants for 404 number animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4D9D0] text-center px-6">
      {/* 404 number with animation per letter */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-7xl sm:text-8xl md:text-9xl font-bold mb-4 flex justify-center"
      >
        <motion.span variants={letterVariants} className="text-[#921A40]">
          4
        </motion.span>
        <motion.span variants={letterVariants} className="text-[#C75B7A]">
          0
        </motion.span>
        <motion.span variants={letterVariants} className="text-[#921A40]">
          4
        </motion.span>
      </motion.h1>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#C75B7A] mb-3"
      >
        Page Not Found!
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-gray-700 max-w-2xl mb-8 text-sm sm:text-base md:text-lg leading-relaxed"
      >
        Oops, the page you’re looking for doesn’t exist or may have been moved.
        Please return to the homepage and continue exploring.
      </motion.p>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#921A40] to-[#C75B7A] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:from-[#C75B7A] hover:to-[#921A40] transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
        >
          <FaArrowLeft className="text-base sm:text-lg" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
