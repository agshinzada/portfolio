import React, { useEffect, useState } from "react";
import {
  Briefcase,
  GraduationCap,
  User,
  Code2,
  Award,
  Globe,
  ExternalLink,
  Linkedin,
} from "lucide-react";

import { motion } from "framer-motion";
import Loader from "components/Loader";
import { supabase } from "utils/supabase";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Resume = () => {
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const { data: experience, error: experienceError } = await supabase
      .from(process.env.REACT_APP_EXPERIENCE)
      .select("*")
      .order("order_index", { ascending: false });

    if (experienceError) {
      console.log(experienceError);
      setLoading(false);
      return;
    }
    setExperience(experience);

    const { data: education, error: educationError } = await supabase
      .from(process.env.REACT_APP_EDUCATION)
      .select("*")
      .order("id", { ascending: false });
    if (educationError) {
      console.log(educationError);
      setLoading(false);
      return;
    }
    setEducation(education);

    const { data: skills, error: skillsError } = await supabase
      .from(process.env.REACT_APP_SKILLS)
      .select("*");
    if (skillsError) {
      console.log(skillsError);
      setLoading(false);
      return;
    }
    const groupedSkills = skills?.reduce((acc, skill) => {
      const category = skill.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill.name);
      return acc;
    }, {});
    setSkills(groupedSkills);

    const { data: certifications, error: certificationsError } = await supabase
      .from(process.env.REACT_APP_CERTIFICATIONS)
      .select("*");
    if (certificationsError) {
      console.log(certificationsError);
      setLoading(false);
      return;
    }
    setCertifications(certifications);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-white dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-slate-200 dark:border-zinc-700 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative shrink-0"
            >
              <div className="absolute inset-0 bg-green-500 blur-2xl opacity-10 rounded-full"></div>
              <img
                src="/images/profile.png"
                alt="Agshin"
                className="relative w-32 h-32 rounded-3xl object-cover border-4 border-white dark:border-zinc-800 shadow-xl"
              />
            </motion.div>

            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
                Experience and Education
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Professional experience, technologies I use, and my education
                background.
              </p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/agshinzada/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-nowrap justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-sm focus:ring-4 focus:ring-blue-600/20"
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100 mb-5">
                <User className="text-green-500" size={24} />
                Summary
              </h2>
              <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Solution-oriented Software Engineer with extensive experience in
                Enterprise Resource Planning (ERP) systems, scalable e-commerce
                platforms, and full-stack development. I specialize in bridging
                the gap between complex legacy business logic and modern,
                high-performance web architectures. Proficient in the PERN
                stack, with a strong background in managing large-scale
                databases, architecting mediator systems for TMS and WMS
                integration, and delivering high-impact, user-centric e-commerce
                experiences.
              </div>
            </motion.section>

            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              key={experience?.length}
            >
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100 mb-5">
                <Briefcase className="text-green-500" size={24} />
                Work Experience
              </h2>
              <div className="space-y-6">
                {experience?.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-sm relative overflow-hidden group hover:border-green-200 dark:hover:border-green-800 transition-colors"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-medium text-green-600 dark:text-green-400">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              key={education?.length}
            >
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100 mb-5">
                <GraduationCap className="text-green-500" size={24} />
                Education
              </h2>
              <div className="space-y-6">
                {education?.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-sm relative overflow-hidden group hover:border-green-200 dark:hover:border-green-800 transition-colors"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-medium text-green-600 dark:text-green-400">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="inline-flex px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-full whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="space-y-8">
            <motion.section
              className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-sm"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              key={skills?.length}
            >
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100 mb-5">
                <Code2 className="text-green-500" size={22} />
                Skills
              </h2>
              <div className="space-y-5">
                {Object.keys(skills).map((category) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-slate-400 dark:text-slate-300 uppercase tracking-wider mb-3">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills[category].map((s, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-green-50 text-green-700 dark:text-slate-300 dark:bg-zinc-800 text-sm font-medium rounded-lg"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-sm"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              key={certifications?.length}
            >
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100 mb-4">
                <Award className="text-green-500" size={22} />
                Certifications
              </h2>
              <ul className="space-y-3">
                {certifications?.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                    <div>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-slate-800 dark:text-slate-300 flex items-center gap-2"
                      >
                        {cert.title} <ExternalLink color="green" size={10} />
                      </a>
                      <p className="text-sm text-slate-500 dark:text-slate-300">
                        {cert.issuer}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-sm"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100 mb-4">
                <Globe className="text-teal-500" size={22} />
                Languages
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Azerbaijani
                  </span>
                  <span className="text-sm px-2 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-md">
                    Native
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    English
                  </span>
                  <span className="text-sm px-2 py-1 bg-teal-50 dark:bg-zinc-800 text-teal-700 dark:text-slate-300 rounded-md">
                    Intermediate
                  </span>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
