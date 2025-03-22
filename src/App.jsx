import { useState } from "react";
import AboutMe from "./components/about";
import SkillsSection from "./components/skills";
import Projects from "./components/project";
import Contact from "./components/contact";
import { Menu, X } from "lucide-react"; // Importing icons

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu when clicking a link
  };

  return (
    <div className={`font-montserrat h-screen bg-black w-screen ${menuOpen ? "overflow-hidden" : ""}`}>
      <h1 className="text-5xl text-left p-3 text-green-300">Portfolio</h1>

      <div className="grid grid-cols-1 tablet:grid-cols-[3fr_1.2fr] m-3 p-4 ">
        {/* Mobile Menu Button */}
        <div className="block tablet:hidden text-white text-3xl flex justify-between items-center px-4">
          <span>Menu</span>
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={30} />
          </button>
        </div>

        {/* Full-Screen Overlay Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50">
            <button
              className="absolute top-5 right-5 text-white text-4xl"
              onClick={() => setMenuOpen(false)}
            >
              <X size={40} />
            </button>
            <ol className="list-none text-white text-center text-3xl space-y-6">
              {["home", "about", "skill", "project", "contact"].map((item) => (
                <li
                  key={item}
                  className="hover:scale-110 cursor-pointer transition transform duration-200"
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Left Section (Main Content) */}
        <div className="h-[500px] overflow-y-scroll glass-scrollbar snap-y snap-mandatory p-4">
          {/* Home Section */}
          <div id="home" className="p-2 grid tablet:grid-cols-[3fr_2fr] mobile:grid-rows-2 relative snap-start min-h-[400px]">
            <div>
              <h1 className="text-[3rem] mobile:text-[4rem] tablet:text-[5rem] lapsmall:text-[6rem] laplarge:text-[7rem] lapxl:text-[8rem] text-left mobile:text-left tablet:text-center laplarge:text-left text-white font-bold">
                LOGAN
              </h1>
              <h3 className="text-[1.2rem] mobile:text-[1.5rem] tablet:text-[2rem] lapsmall:text-[2.5rem] laplarge:text-[3rem] lapxl:text-[3.5rem] text-left tablet:text-center laplarge:text-right text-green-300">
                Software Developer
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <img src="src/assets/logan-bw.png" alt="Loganatha" className="object-contain w-full h-96 shadow-lg" />
            </div>
          </div>

          {/* About Me */}
          <div id="about" className="mt-20 min-h-[400px] p-1  snap-start">
            <h1 className="text-4xl ms-5 text-left text-amber-200">About</h1>
            <AboutMe />
          </div>

          {/* Skills Section */}
          <div id="skill" className="mt-20  min-h-[400px] p-1 snap-start">
            <h1 className="text-4xl ms-20 text-left inline text-amber-200">Skills</h1>
            <SkillsSection />
          </div>

          {/* Project Section */}
          <div id="project" className="mt-4 min-h-[400px] p-1 snap-start">
            <div className="ms-7">
              <h1 className="text-4xl inline text-left text-amber-200">Project</h1>
            </div>
            <Projects />
          </div>

          {/* Contact Section */}
          <div id="contact" className="mt-4 min-h-[400px] p-2 snap-start">
            <h1 className="text-4xl inline text-left text-amber-200">Contact</h1>
            <Contact />
          </div>
        </div>

        {/* Sidebar (Visible only on larger screens) */}
        <div className="hidden tablet:block h-120 p-4">
          <ol className="list-decimal list-inside text-left text-3xl p-3 leading-loose font-robot text-black">
            <li className="hover:scale-105 text-white w-auto cursor-pointer" onClick={() => scrollToSection("home")}>
              Home
            </li>
            <li className="hover:scale-105 text-white w-auto cursor-pointer" onClick={() => scrollToSection("about")}>
              About
            </li>
            <li className="hover:scale-105 text-white w-auto cursor-pointer" onClick={() => scrollToSection("skill")}>
              Skills
            </li>
            <li className="hover:scale-105 text-white w-auto cursor-pointer" onClick={() => scrollToSection("project")}>
              Project
            </li>
            <li className="hover:scale-105 text-white w-auto cursor-pointer" onClick={() => scrollToSection("contact")}>
              Contact
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
