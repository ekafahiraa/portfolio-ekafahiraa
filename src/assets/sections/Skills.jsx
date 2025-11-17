// src/assets/sections/Skills.jsx
import { FaReact, FaJs, FaPython, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiAxios,
  SiVite,
  SiFlask,
  SiTableau,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiBootstrap,
} from "react-icons/si";
import { motion } from "framer-motion";

/* Inline Vue SVG fallback (small, lightweight) */
function VueIcon({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 261.76 226.69"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#41B883"
        d="M130.88 0L0 226.69h52.37L130.88 87.9 209.39 226.69H261.76z"
      />
      <path
        fill="#35495E"
        d="M130.88 0L78.51 86.46 130.88 200.64 183.26 86.46z"
      />
    </svg>
  );
}

export default function Skills() {
  const hardSkills = [
    { icon: <FaReact className="text-[#61DBFB] text-5xl" />, name: "React.js" },
    { icon: <VueIcon className="w-12 h-12" />, name: "Vue.js" },
    { icon: <SiVite className="text-[#646CFF] text-5xl" />, name: "Vite" },

    {
      icon: <SiTailwindcss className="text-[#38BDF8] text-5xl" />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiBootstrap className="text-[#7952B3] text-5xl" />,
      name: "Bootstrap",
    },

    { icon: <FaJs className="text-[#F7DF1E] text-5xl" />, name: "JavaScript" },
    {
      icon: <SiTypescript className="text-[#3178C6] text-5xl" />,
      name: "TypeScript",
    },

    { icon: <SiRedux className="text-[#764ABC] text-5xl" />, name: "Redux" },
    { icon: <SiAxios className="text-[#5A29E4] text-5xl" />, name: "Axios" },

    { icon: <FaNodeJs className="text-[#3C873A] text-5xl" />, name: "Node.js" },
    { icon: <SiMysql className="text-[#00758F] text-5xl" />, name: "MySQL" },
    {
      icon: <SiPostgresql className="text-[#336791] text-5xl" />,
      name: "PostgreSQL",
    },

    {
      icon: <FaGitAlt className="text-[#F05033] text-5xl" />,
      name: "Git/GitHub",
    },

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
