import { FaReact, FaJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiAxios,
  SiVite,
  SiFlask,
  SiTableau,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const hardSkills = [
    { icon: <FaReact className="text-[#61DBFB] text-5xl" />, name: "React.js" },
    { icon: <SiVite className="text-[#646CFF] text-5xl" />, name: "Vite" },
    {
      icon: <SiTailwindcss className="text-[#38BDF8] text-5xl" />,
      name: "Tailwind CSS",
    },
    { icon: <FaJs className="text-[#F7DF1E] text-5xl" />, name: "JavaScript" },
    { icon: <SiRedux className="text-[#764ABC] text-5xl" />, name: "Redux" },
    { icon: <SiAxios className="text-[#5A29E4] text-5xl" />, name: "Axios" },
    {
      icon: <FaGitAlt className="text-[#F05033] text-5xl" />,
      name: "Git/GitHub",
    },
    { icon: <SiMysql className="text-[#00758F] text-5xl" />, name: "SQL" },
    { icon: <FaPython className="text-[#3776AB] text-5xl" />, name: "Python" },
    { icon: <SiFlask className="text-[#000000] text-5xl" />, name: "Flask" },
    {
      icon: <SiTableau className="text-[#E97627] text-5xl" />,
      name: "Tableau",
    },
    { icon: <p className="text-5xl">🤖</p>, name: "Machine Learning" },
  ];

  const softSkills = [
    "Communication",
    "Critical Thinking",
    "Attention to Detail",
    "Time Management",
    "Problem Solving",
    "Teamwork",
    "Adaptability",
    "Analytical Thinking",
  ];

  return (
    <section id="skills" className="bg-[#F4D9D0] py-10 px-6 md:px-16">
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#921A40] mb-12 text-center">
        Skills
      </h2>

      {/* Hard Skills */}
      <div className="mb-16">
        <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#C75B7A] text-center mb-8">
          Hard Skills
        </h3>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {hardSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white p-4 rounded-full shadow-md flex items-center justify-center">
                {skill.icon}
              </div>
              <p className="text-xs sm:text-sm md:text-base font-medium text-[#2E2E2E] mt-2">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#C75B7A] text-center mb-8">
          Soft Skills
        </h3>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 justify-items-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {softSkills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#D9ABAB] text-[#921A40] px-4 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-sm hover:bg-[#C75B7A]/40 transition text-center"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// import { FaReact, FaJs, FaPython, FaGitAlt } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiRedux,
//   SiAxios,
//   SiVite,
//   SiFlask,
//   SiTableau,
//   SiMysql,
// } from "react-icons/si";
// import { motion } from "framer-motion";

// export default function Skills() {
//   return (
//     <section id="skills" className="bg-[#F4D9D0] py-20 px-6 md:px-16">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#921A40] mb-12">
//         Skills
//       </h2>

//       {/* Hard Skills */}
//       <div className="mb-16">
//         <h3 className="text-xl sm:text-2xl font-semibold text-[#C75B7A] text-center mb-8">
//           Hard Skills
//         </h3>

//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
//           {[
//             { icon: <FaReact className="text-[#61DBFB] text-4xl sm:text-5xl" />, name: "React.js" },
//             { icon: <SiVite className="text-[#646CFF] text-4xl sm:text-5xl" />, name: "Vite" },
//             { icon: <SiTailwindcss className="text-[#38BDF8] text-4xl sm:text-5xl" />, name: "Tailwind CSS" },
//             { icon: <FaJs className="text-[#F7DF1E] text-4xl sm:text-5xl" />, name: "JavaScript" },
//             { icon: <SiRedux className="text-[#764ABC] text-4xl sm:text-5xl" />, name: "Redux" },
//             { icon: <SiAxios className="text-[#5A29E4] text-4xl sm:text-5xl" />, name: "Axios" },
//             { icon: <FaGitAlt className="text-[#F05033] text-4xl sm:text-5xl" />, name: "Git/GitHub" },
//             { icon: <SiMysql className="text-[#00758F] text-4xl sm:text-5xl" />, name: "SQL" },
//             { icon: <FaPython className="text-[#3776AB] text-4xl sm:text-5xl" />, name: "Python" },
//             { icon: <SiFlask className="text-[#000000] text-4xl sm:text-5xl" />, name: "Flask" },
//             { icon: <SiTableau className="text-[#E97627] text-4xl sm:text-5xl" />, name: "Tableau" },
//             { icon: <p className="text-4xl sm:text-5xl">🤖</p>, name: "Machine Learning" },
//           ].map((skill, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <div className="bg-white p-3 sm:p-4 rounded-full shadow-md flex items-center justify-center">
//                 {skill.icon}
//               </div>
//               <p className="text-xs sm:text-sm font-medium text-[#2E2E2E] mt-2">
//                 {skill.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Soft Skills */}
//       <div>
//         <h3 className="text-xl sm:text-2xl font-semibold text-[#C75B7A] text-center mb-8">
//           Soft Skills
//         </h3>

//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4 justify-items-center max-w-5xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           viewport={{ once: true }}
//         >
//           {[
//             "Communication",
//             "Critical Thinking",
//             "Attention to Detail",
//             "Time Management",
//             "Problem Solving",
//             "Teamwork",
//             "Adaptability",
//             "Analytical Thinking",
//           ].map((skill, index) => (
//             <motion.span
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="bg-[#D9ABAB] text-[#921A40] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:bg-[#C75B7A]/40 transition text-center"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
