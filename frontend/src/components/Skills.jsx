import React from "react";
import { motion } from "framer-motion";

const Skills = () => {

  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind", "React", "Responsive UI"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST API"]
    },
    {
      title: "Languages",
      skills: ["C", "C++", "Java", "JavaScript"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"]
    },
    {
      title: "AI Tools",
      skills: ["ChatGPT", "Copilot", "Gemini", "Claude"]
    },
    {
      title: "Design",
      skills: ["Figma", "Canva"]
    },
    {
      title: "Productivity",
      skills: ["Word", "Excel", "PowerPoint"]
    }
  ];

  // duplicate for infinite effect
  const loopSkills = [...skillGroups, ...skillGroups];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b bg-[#020617] overflow-hidden">

      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400">
          Abilities
        </span>

        <h2 className="text-4xl font-bold mt-4 text-white">
          Tech Stack & Tools
        </h2>
      </div>

      {/* 🔥 Row 1 (Left → Right) */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 mb-10 w-max"
      >
        {loopSkills.map((group, i) => (
          <div
            key={i}
            className="min-w-[200px] p-5 rounded-2xl 
            bg-gradient-to-br from-white/10 to-white/5 
            backdrop-blur-xl border border-white/10 
            shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-purple-400 font-semibold mb-2">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full 
                  bg-white/10 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* 🔥 Row 2 (Right → Left) */}
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 w-max"
      >
        {loopSkills.map((group, i) => (
          <div
            key={i}
            className="min-w-[200px] p-5 rounded-2xl 
            bg-gradient-to-br from-white/10 to-white/5 
            backdrop-blur-xl border border-white/10 
            shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-indigo-400 font-semibold mb-2">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full 
                  bg-white/10 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Skills;