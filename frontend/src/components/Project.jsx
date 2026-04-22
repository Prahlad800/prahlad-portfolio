import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import useFetchProjects from "./hooks/useFetchProjects.js";

// 🔹 Project Card
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.09 }}
    className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 
               shadow-lg hover:shadow-2xl hover:border-blue-500/30 transition duration-300"
  >
    {/* Top */}
    <div className="flex justify-between items-center mb-4">
      <Folder className="text-blue-400" size={24} />

      <div className="flex gap-3">
        <a href={project.html_url} target="_blank" rel="noreferrer">
          <FaGithub className="text-gray-400 hover:text-white" size={20} />
        </a>

        {project.homepage && (
          <a href={project.homepage} target="_blank" rel="noreferrer">
            <ExternalLink className="text-gray-400 hover:text-white" size={20} />
          </a>
        )}
      </div>
    </div>

    {/* Info */}
    <h3 className="text-lg font-semibold mb-2">
      {project.name}
    </h3>

    <p className="text-gray-400 text-sm mb-4">
      {project.description || "No description available."}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      {project.language && (
        <span className="px-2 py-1 text-xs bg-white/10 rounded-md">
          {project.language}
        </span>
      )}
      {/* <span className="px-2 py-1 text-xs bg-white/10 rounded-md">
        ⭐ {project.stargazers_count}
      </span> */}
    </div>
  </motion.div>
);

// 🔹 Skeleton Loader
const SkeletonCard = () => (
  <div className="p-6 rounded-2xl bg-white/5 animate-pulse border border-white/10">
    <div className="h-5 w-20 bg-white/10 rounded mb-4"></div>
    <div className="h-4 w-full bg-white/10 rounded mb-2"></div>
    <div className="h-4 w-3/4 bg-white/10 rounded mb-4"></div>
    <div className="h-4 w-16 bg-white/10 rounded"></div>
  </div>
);

// 🔹 Main Component
function Project() {
  const { projects, loading, error } = useFetchProjects("Prahlad800");

  return (
    <section id="projects" className="py-20 bg-[#020617] text-white">

      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400">
          Portfolio
        </span>

        <h2 className="text-4xl font-bold mt-4">
          Latest Projects
        </h2>

        {!loading && !error && (
          <p className="text-gray-400 mt-2">
            Total: {projects.length} Repositories
          </p>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="text-center mb-6">
          <p className="text-red-400">Error: {error}</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20">
        {loading
          ? Array()
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>
    </section>
  );
}

export default Project;