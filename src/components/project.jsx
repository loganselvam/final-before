import React from "react";

const projects = [
  {
    name: "Farming Assistant",
    description: "A tool to help farmers determine suitable crops and profit estimation.",
    year: "BCA Project",
    bgColor: "from-green-500 to-green-700",
  },
  {
    name: "Wifi Registration",
    description: "A portal providing free wifi access to students in an organization.",
    year: "MCA Project",
    bgColor: "from-blue-500 to-blue-700",
  },
  {
    name: "Black Jack",
    description: "A fun Blackjack game built during leisure time for practice.",
    year: "Time Pass Project",
    bgColor: "from-gray-600 to-gray-800",
  },
  {
    name: "MedApp",
    description: "A medical appointment booking system developed for Flattrade Company.",
    year: "Flattrade Project",
    bgColor: "from-purple-500 to-purple-700",
  },
];

const Projects = () => {
  return (
    <div className=" mt-12 text-white  ">
      <div className="grid grid-cols-4  p-10 mb-20 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${project.bgColor} shadow-lg border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="text-gray-200 mt-2">{project.description}</p>
            <span className="text-sm text-gray-300 italic block mt-3">{project.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
