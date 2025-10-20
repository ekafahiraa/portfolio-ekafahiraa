// import bakesbangpolLogo from "../images/bakesbangpoljatim.png";
// import himasifoLogo from "../images/himasifoupnvjt.png";

// export default function Experience() {
//   const experiences = [
//     {
//       logo: bakesbangpolLogo,
//       title:
//         "Badan Kesatuan Bangsa dan Politik (Bakesbangpol) Provinsi Jawa Timur",
//       role: "Website Developer Intern",
//       period: "July 2024 – September 2024 | Surabaya, Indonesia",
//       description: [
//         "Contributed to designing and developing the 'Permohonan Rekomendasi Penelitian dan Magang' website to facilitate online submissions.",
//         "Developed responsive and user-friendly interfaces using HTML, CSS, Tailwind CSS, JavaScript, and ReactJS.",
//         "Integrated dynamic forms with validation and document upload features.",
//         "Built the admin dashboard for managing and processing submissions.",
//         "Collaborated closely with the backend team for API integration and end-to-end workflows.",
//       ],
//     },
//     {
//       logo: himasifoLogo,
//       title: "Himpunan Mahasiswa Sistem Informasi UPN “Veteran” Jawa Timur",
//       role: "Deputy Head of Internal Affairs Department",
//       period: "March 2023 – February 2024 | Surabaya, Indonesia",
//       description: [
//         "Led and supervised all programs under the Internal Affairs Department.",
//         "Coordinated with department members and executives to ensure smooth activity execution.",
//         "Represented the Head of Department when absent, including leading meetings and decision-making processes.",
//         "Facilitated forums and initiatives to support Information Systems students’ development.",
//         "Provided evaluations and recommendations for future departmental improvements.",
//       ],
//     },
//     {
//       logo: himasifoLogo,
//       title: "Himpunan Mahasiswa Sistem Informasi UPN “Veteran” Jawa Timur",
//       role: "Staff of Internal Affairs Department",
//       period: "April 2022 – March 2023 | Surabaya, Indonesia",
//       description: [
//         "Assisted in executing all agendas and programs of the Internal Affairs Department.",
//         "Served as the main organizer for events such as Himasifo Bukber, Sambut Maba, and Sambut Wisuda.",
//         "Managed budgeting and financial reporting as Treasurer for the Information Systems Anniversary program.",
//         "Contributed to event logistics and catering coordination during the Information System Competition program.",
//         "Conducted evaluations to enhance the quality of future organizational programs.",
//       ],
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF5F2] text-[#2E2E2E]"
//     >
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#921A40] mb-12 text-center">
//         Experience
//       </h2>

//       <div className="space-y-10 max-w-5xl mx-auto">
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
//           >
//             {/* Logo Section */}
//             <div className="flex justify-center sm:justify-start w-full sm:w-auto">
//               <img
//                 src={exp.logo}
//                 alt={exp.title}
//                 className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
//               />
//             </div>

//             {/* Text Section */}
//             <div className="text-center sm:text-left w-full">
//               <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#921A40]">
//                 {exp.title}
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base font-medium">
//                 {exp.role}
//               </p>
//               <p className="text-xs sm:text-sm text-gray-700 italic mb-2">
//                 {exp.period}
//               </p>
//               <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-justify space-y-1">
//                 {exp.description.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import bakesbangpolLogo from "../images/bakesbangpoljatim.png";
// import himasifoLogo from "../images/himasifoupnvjt.png";

// export default function Experience() {
//   const experiences = [
//     {
//       logo: bakesbangpolLogo,
//       title:
//         "Badan Kesatuan Bangsa dan Politik (Bakesbangpol) Provinsi Jawa Timur",
//       role: "Website Developer Intern",
//       period: "July 2024 – September 2024 | Surabaya, Indonesia",
//       description: [
//         "Contributed to designing and developing the 'Permohonan Rekomendasi Penelitian dan Magang' website to facilitate online submissions.",
//         "Developed responsive and user-friendly interfaces using HTML, CSS, Tailwind CSS, JavaScript, and ReactJS.",
//         "Integrated dynamic forms with validation and document upload features.",
//         "Built the admin dashboard for managing and processing submissions.",
//         "Collaborated closely with the backend team for API integration and end-to-end workflows.",
//       ],
//     },
//     {
//       logo: himasifoLogo,
//       title: "Himpunan Mahasiswa Sistem Informasi UPN “Veteran” Jawa Timur",
//       role: "Deputy Head of Internal Affairs Department",
//       period: "March 2023 – February 2024 | Surabaya, Indonesia",
//       description: [
//         "Led and supervised all programs under the Internal Affairs Department.",
//         "Coordinated with department members and executives to ensure smooth activity execution.",
//         "Represented the Head of Department when absent, including leading meetings and decision-making processes.",
//         "Facilitated forums and initiatives to support Information Systems students’ development.",
//         "Provided evaluations and recommendations for future departmental improvements.",
//       ],
//     },
//     {
//       logo: himasifoLogo,
//       title: "Himpunan Mahasiswa Sistem Informasi UPN “Veteran” Jawa Timur",
//       role: "Staff of Internal Affairs Department",
//       period: "April 2022 – March 2023 | Surabaya, Indonesia",
//       description: [
//         "Assisted in executing all agendas and programs of the Internal Affairs Department.",
//         "Served as the main organizer for events such as Himasifo Bukber, Sambut Maba, and Sambut Wisuda.",
//         "Managed budgeting and financial reporting as Treasurer for the Information Systems Anniversary program.",
//         "Contributed to event logistics and catering coordination during the Information System Competition program.",
//         "Conducted evaluations to enhance the quality of future organizational programs.",
//       ],
//     },
//   ];

//   // Variants untuk animasi
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="experience"
//       className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF5F2] text-[#2E2E2E]"
//     >
//       {/* Judul Section */}
//       <motion.h2
//         className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#921A40] mb-12 text-center"
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         Experience
//       </motion.h2>

//       <div className="space-y-10 max-w-5xl mx-auto">
//         {experiences.map((exp, index) => (
//           <motion.div
//             key={index}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
//           >
//             {/* Logo Section */}
//             <div className="flex justify-center sm:justify-start w-full sm:w-auto">
//               <img
//                 src={exp.logo}
//                 alt={exp.title}
//                 className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
//               />
//             </div>

//             {/* Text Section */}
//             <div className="text-center sm:text-left w-full">
//               <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#921A40]">
//                 {exp.title}
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base font-medium">
//                 {exp.role}
//               </p>
//               <p className="text-xs sm:text-sm text-gray-700 italic mb-2">
//                 {exp.period}
//               </p>
//               <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-justify space-y-1">
//                 {exp.description.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import bakesbangpolLogo from "../images/bakesbangpoljatim.png";
import himasifoLogo from "../images/himasifoupnvjt.png";

export default function Experience() {
  const experiences = [
    {
      logo: bakesbangpolLogo,
      title:
        "Badan Kesatuan Bangsa dan Politik (Bakesbangpol) Provinsi Jawa Timur",
      role: "Website Developer Intern",
      period: "July – September 2024 | Surabaya, Indonesia",
      description: [
        "Contributed to designing and developing the 'Permohonan Rekomendasi Penelitian dan Magang' website to facilitate online submissions.",
        "Developed responsive and user-friendly interfaces using HTML, CSS, Tailwind CSS, JavaScript, and ReactJS.",
        "Integrated dynamic forms with validation and document upload features.",
        "Built the admin dashboard for managing and processing submissions.",
        "Collaborated closely with the backend team for API integration and end-to-end workflows.",
      ],
    },
    {
      logo: himasifoLogo,
      title: "Himpunan Mahasiswa Sistem Informasi UPN “Veteran” Jawa Timur",
      role: "Deputy Head of Internal Affairs Department",
      period: "March 2023 – February 2024 | Surabaya, Indonesia",
      description: [
        "Led and supervised all programs under the Internal Affairs Department.",
        "Coordinated with department members and executives to ensure smooth activity execution.",
        "Represented the Head of Department when absent, including leading meetings and decision-making processes.",
        "Facilitated forums and initiatives to support Information Systems students’ development.",
        "Provided evaluations and recommendations for future departmental improvements.",
      ],
    },
    {
      logo: himasifoLogo,
      title: "Himpunan Mahasiswa Sistem Informasi UPN “Veteran” Jawa Timur",
      role: "Expert Staff of Internal Affairs Department",
      period: "April 2022 – March 2023 | Surabaya, Indonesia",
      description: [
        "Assisted in executing all agendas and programs of the Internal Affairs Department.",
        "Served as the main organizer for events such as Himasifo Bukber, Sambut Maba, and Sambut Wisuda.",
        "Managed budgeting and financial reporting as Treasurer for the Information Systems Anniversary program.",
        "Contributed to event logistics and catering coordination during the Information System Competition program.",
        "Conducted evaluations to enhance the quality of future organizational programs.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-10 px-6 md:px-16 lg:px-32 bg-[#D9ABAB] text-[#2E2E2E]"
    >
      {/* Section */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#921A40] mb-12 text-center"
      >
        Experience
      </motion.h2>

      {/* Card Experience */}
      <div className="space-y-10 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              // scale: 1.02,
              boxShadow:
                "0 8px 25px rgba(146, 26, 64, 0.15), 0 4px 10px rgba(0,0,0,0.05)",
            }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-[#F0B5B5]/40"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={exp.logo}
                alt={exp.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Detail */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-[#921A40] mb-1">
                {exp.title}
              </h3>
              <p className="text-sm sm:text-base font-medium mb-1 text-[#C75B7A]">
                {exp.role}
              </p>
              <p className="text-xs sm:text-sm text-gray-700 italic mb-2">
                {exp.period}
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm md:text-base space-y-1 text-justify">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
