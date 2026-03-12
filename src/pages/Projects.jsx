import React, { useEffect, useState } from "react";
import { ArrowRight, FolderOpen, LayoutGrid, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "utils/supabase";
import Loader from "components/Loader";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from(process.env.REACT_APP_PROJECTS)
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: false });

    if (error) {
      console.log(error);
      setLoading(false);
      return;
    }
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const filters = [
    "All",
    ...new Set(projects?.map((project) => project.category)),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Planned":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <FolderOpen className="text-[#05CC05]" size={36} />
              Projects
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Selected web applications and architectures I've worked on,
              covering different areas (ERP, e-commerce)
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-slate-900 text-white shadow-md dark:bg-slate-100 dark:text-zinc-950"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:bg-zinc-800 dark:text-slate-100 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-slate-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-slate-200 dark:border-zinc-700" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={filteredProjects.length}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group bg-white dark:bg-zinc-950 rounded-3xl border border-slate-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:border-green-200 dark:hover:border-green-800 transition-all duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="h-48 relative overflow-hidden bg-slate-100 dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800">
                {project.is_service ? (
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-white p-4 leading-tight">
                      {`const sync = async () => {\n  const data = await db.fetch();\n  return process(data);\n}`}
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="p-4 bg-slate-700/50 rounded-2xl border border-slate-600 backdrop-blur-sm">
                        <Cpu className="text-indigo-400" size={32} />
                      </div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                        API / Service
                      </span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                <div className="absolute top-4 left-4">
                  <span
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm border border-white/10 ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-500 dark:text-slate-300 text-[11px] font-semibold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[11px] text-slate-400 self-center">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  to={`${project.slug}`}
                  className="inline-flex items-center justify-between w-full p-3 bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-xl hover:bg-green-600 dark:hover:bg-green-800  hover:text-white transition-all group/btn"
                >
                  View Details
                  <ArrowRight
                    size={18}
                    className="transform group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-zinc-950 rounded-2xl border border-slate-200 dark:border-zinc-700 border-dashed">
            <LayoutGrid className="mx-auto text-slate-300 mb-4" size={48} />
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">
              Project not found
            </h3>
            <p className="text-slate-500 dark:text-slate-300">
              No projects have been added to this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
