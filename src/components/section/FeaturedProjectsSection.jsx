import React, { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "utils/supabase";
import { Link } from "react-router-dom";
import Loader from "components/Loader";

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

const FeaturedProjectsSection = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from(process.env.REACT_APP_PROJECTS)
      .select("*")
      .eq("is_featured", true);
    if (error) {
      console.log(error);
      setLoading(false);
      return;
    }
    setFeaturedProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="py-24 bg-slate-50 dark:bg-zinc-900 dark:border-zinc-800 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-wider text-[#05CC05] uppercase mb-3 flex items-center gap-2">
              <FolderKanban size={18} />
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Featured Projects
            </h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              A selection of my recent web applications, focusing on scalable
              architecture and seamless user experience.
            </p>
          </div>

          <Link
            to="/projects"
            className="group hidden md:inline-flex items-center gap-2 text-[#05CC05] font-semibold hover:text-green-600 transition-colors"
          >
            View all projects
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={featuredProjects?.length}
        >
          {featuredProjects?.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group flex flex-col bg-white dark:bg-zinc-950 dark:border-zinc-800 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-zinc-900">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {(project.github_url || project.live_url) && (
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-slate-900 rounded-full hover:bg-indigo-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}{" "}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider text-[#05CC05] uppercase mb-2 block">
                    {project.category}
                  </span>
                  <Link to={`/projects/${project.slug}`}>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#05CC05] transition-colors">
                      {project.title}
                    </h4>
                  </Link>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-zinc-800">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-slate-50 dark:bg-zinc-900 dark:text-slate-400 text-slate-600 border border-slate-200 dark:border-zinc-800 text-xs font-medium rounded-md hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
          >
            View all projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
