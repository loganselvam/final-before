import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiDjango, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Django", icon: <SiDjango className="text-green-600" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className=" min-h-[385px] mt-4  text-white">
      

      <div className=" grid grid-cols-2  gap-4 p-2  ">
      {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 h-16 bg-black rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-700 p-4"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-lg text-white font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
