import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/sections/Hero";
import About from "./assets/sections/About";
import Education from "./assets/sections/Education";
import Experience from "./assets/sections/Experience";
import Skills from "./assets/sections/Skills";
import Projects from "./assets/sections/Projects";
import Contact from "./assets/sections/Contact";
import NotFound from "./assets/components/NotFound";
import Footer from "./assets/sections/Footer";
import ScrollUp from "./assets/components/ScrollUp";

export default function App() {
  const location = useLocation();

  // Check if the current path is NotFound
  const isNotFoundPage =
    location.pathname !== "/" &&
    ![
      "/",
      "/about",
      "/education",
      "/experience",
      "/skills",
      "/projects",
      "/contact",
    ].includes(location.pathname);

  return (
    <div className="bg-[#F4D9D0] text-[#2E2E2E] min-h-screen flex flex-col">
      {/* Navbar only appears if it's not a 404 page */}
      {!isNotFoundPage && <Navbar />}

      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Education />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer and ScrollUp only appear if it's not a 404 page */}
      {!isNotFoundPage && (
        <>
          <Footer />
          <ScrollUp />
        </>
      )}

      <Toaster />
    </div>
  );
}
