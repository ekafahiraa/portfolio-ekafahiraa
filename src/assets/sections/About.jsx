import { motion } from "framer-motion";
import aboutImage from "../images/Image 1.png"; // ganti sesuai nama file gambarmu

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-10 px-6 md:px-16 lg:px-24 bg-[#D9ABAB] text-[#2E2E2E]"
    >
      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#921A40] mb-12 text-center"
      >
        About Me
      </motion.h2>

      {/* Konten */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-7xl mx-auto">
        {/* Gambar di kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%] flex justify-center"
        >
          <img
            src={aboutImage}
            alt="Laptop workspace"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover border-4 border-[#F4D9D0]"
          />
        </motion.div>

        {/* Teks di kanan */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-[55%] text-justify text-xs sm:text-sm md:text-base lg:text-[15px] leading-relaxed tracking-wide"
        >
          <p>
            I’m a fresh graduate with a Bachelor’s degree in Information Systems
            at Universitas Pembangunan Nasional Veteran Jawa Timur. I am a
            passionate and detail-oriented individual with strong communication
            skills and the ability to work effectively in a team. During my
            studies, I actively participated in student organizations, where I
            developed leadership, collaboration, and problem-solving skills.
          </p>

          <p className="mt-4">
            My undergraduate thesis focused on aspect-based sentiment analysis
            on user perceptions of digital wallet applications using machine
            learning algorithms. My main interests lie in Front End Web
            Development, Data Analysis, and Machine Learning. I enjoy building
            responsive and user-friendly web applications as well as working
            with data to uncover insights and build predictive models. This
            portfolio showcases a selection of my projects and skills in both
            fields. I am eager to continue growing as a professional while
            contributing to impactful projects.
          </p>

          {/* <p className="mt-4">
            I enjoy building responsive and user-friendly web applications as
            well as working with data to uncover insights and build predictive
            models. My main interests lie in Front End Web Development, Data
            Analysis, and Machine Learning. This portfolio showcases a selection
            of my projects and skills in both fields. I am eager to continue
            growing as a professional while contributing to impactful projects.
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
