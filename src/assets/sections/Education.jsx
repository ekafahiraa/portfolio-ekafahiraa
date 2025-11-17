// import upnvjtlogo from "../images/upnvjt.png";
// import binarlogo from "../images/binaracademy.png";
// import kariermulogo from "../images/kariermu.png";

// export default function Education() {
//   const educations = [
//     {
//       logo: upnvjtlogo,
//       title: "Universitas Pembangunan Nasional Veteran Jawa Timur",
//       major: "Information Systems",
//       year: "2021 - 2025",
//       gpa: "GPA 3.86/4.00",
//     },
//     {
//       logo: kariermulogo,
//       title: "Karier.mu (PT. Semesta Integrasi Digital)",
//       major: "Data Analyst",
//       year: "2023",
//       gpa: "GPA 92/100",
//     },
//     {
//       logo: binarlogo,
//       title: "Binar Academy (PT. Lentera Bangsa Benderang)",
//       major: "Front End JavaScript",
//       year: "2024",
//       gpa: "GPA 92.44/100",
//     },
//   ];

//   return (
//     <section
//       id="education"
//       className="py-24 px-6 md:px-16 lg:px-24 bg-[#F4D9D0] text-[#2E2E2E]"
//     >
//       {/* Judul */}
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#921A40] mb-12 text-center">
//         Education
//       </h2>

//       {/* Card Education */}
//       <div className="grid gap-8 max-w-5xl mx-auto">
//         {educations.map((edu, index) => (
//           <div
//             key={index}
//             className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-[#D9ABAB]/40"
//           >
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <img
//                 src={edu.logo}
//                 alt={edu.title}
//                 className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg"
//               />
//             </div>

//             {/* Detail */}
//             <div className="text-center sm:text-left">
//               <h3 className="text-lg sm:text-xl font-semibold text-[#921A40] mb-1">
//                 {edu.title}
//               </h3>
//               <p className="text-sm sm:text-base font-medium text-[#C75B7A]">
//                 {edu.major}
//               </p>
//               <p className="text-sm text-gray-700 mt-1">{edu.year}</p>
//               <p className="text-sm font-medium text-gray-800 mt-1">
//                 {edu.gpa}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import upnvjtlogo from "../images/upnvjt.png";
// import binarlogo from "../images/binaracademy.png";
// import kariermulogo from "../images/kariermu.png";

// export default function Education() {
//   const educations = [
//     {
//       logo: upnvjtlogo,
//       title: "Universitas Pembangunan Nasional Veteran Jawa Timur",
//       major: "Information Systems",
//       year: "2021 - 2025",
//       gpa: "GPA 3.86/4.00",
//     },
//     {
//       logo: kariermulogo,
//       title: "Karier.mu (PT. Semesta Integrasi Digital)",
//       major: "Data Analyst",
//       year: "2023",
//       gpa: "GPA 92/100",
//     },
//     {
//       logo: binarlogo,
//       title: "Binar Academy (PT. Lentera Bangsa Benderang)",
//       major: "Front End JavaScript",
//       year: "2024",
//       gpa: "GPA 92.44/100",
//     },
//   ];

//   return (
//     <section
//       id="education"
//       className="py-24 px-6 md:px-16 lg:px-32 bg-[#F4D9D0] text-[#2E2E2E]"
//     >
//       {/* Judul */}
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#921A40] mb-12 text-center">
//         Education
//       </h2>

//       {/* Card Education */}
//       <div className="grid gap-8 max-w-6xl mx-auto">
//         {educations.map((edu, index) => (
//           <div
//             key={index}
//             className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-[#D9ABAB]/40"
//           >
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <img
//                 src={edu.logo}
//                 alt={edu.title}
//                 className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg"
//               />
//             </div>

//             {/* Detail */}
//             <div className="text-center sm:text-left max-w-xl">
//               <h3 className="text-lg sm:text-xl font-semibold text-[#921A40] mb-1">
//                 {edu.title}
//               </h3>
//               <p className="text-sm sm:text-base font-medium text-[#C75B7A]">
//                 {edu.major}
//               </p>
//               <p className="text-sm text-gray-700 mt-1">{edu.year}</p>
//               <p className="text-sm font-medium text-gray-800 mt-1">
//                 {edu.gpa}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import upnvjtlogo from "../images/upnvjt.png";
import binarlogo from "../images/binaracademy.png";
import kariermulogo from "../images/kariermu.png";

export default function Education() {
  const educations = [
    {
      logo: upnvjtlogo,
      title: "Universitas Pembangunan Nasional Veteran Jawa Timur",
      major: "Information Systems",
      year: "2021 - 2025",
      gpa: "GPA 3.86/4.00",
    },
    {
      logo: binarlogo,
      title: "Binar Academy (PT Lentera Bangsa Benderang)",
      major: "Front End JavaScript",
      year: "2024",
      gpa: "GPA 92.44/100",
    },
    {
      logo: kariermulogo,
      title: "Karier.mu (PT Semesta Integrasi Digital)",
      major: "Data Analyst",
      year: "2023",
      gpa: "GPA 92/100",
    },
  ];

  return (
    <section
      id="education"
      className="py-10 px-6 md:px-16 lg:px-32 bg-[#F4D9D0] text-[#2E2E2E]"
    >
      {/* Section */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#921A40] mb-12 text-center"
      >
        Education
      </motion.h2>

      {/* Card Education */}
      <div className="grid gap-8 max-w-6xl mx-auto">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow:
                "0 8px 25px rgba(146, 26, 64, 0.15), 0 4px 10px rgba(0,0,0,0.05)",
            }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-[#D9ABAB]/40"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={edu.logo}
                alt={edu.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Detail */}
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-[#921A40] mb-1 whitespace-normal break-words">
                {edu.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#C75B7A] mb-1">
                {edu.major}
              </p>
              <p className="text-sm text-gray-700 mb-1">{edu.year}</p>
              <p className="text-sm font-medium text-gray-800">{edu.gpa}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
