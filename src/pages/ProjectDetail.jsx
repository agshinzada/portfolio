import React, { useEffect, useState } from "react";
import { CheckCircle2, ExternalLink, Github, Info, Layout } from "lucide-react";
import { supabase } from "utils/supabase";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";
import NoPreviewPlaceholder from "components/NoPreviewPlaceholder";
import ImagePendingPlaceholder from "components/ImagePendingPlaceholder";

const ProjectDetail = () => {
  const [projectDetail, setProjectDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from(process.env.REACT_APP_PROJECTS)
        .select("*")
        .eq("slug", slug);
      if (error) {
        console.log(error);
        setLoading(false);
        return;
      }
      setProjectDetail(data[0]);
      setLoading(false);
    };
    getData();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 dark:text-slate-100 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                  {projectDetail?.title}
                </h1>
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                  {projectDetail?.status}
                </span>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                {projectDetail?.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {projectDetail?.live_url && (
                <a
                  href={projectDetail?.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Preview
                </a>
              )}
              {projectDetail?.github_url && (
                <a
                  href={projectDetail?.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 dark:bg-slate-100 text-slate-700 dark:text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-200 transition-colors"
                >
                  <Github size={18} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </header>

        <hr className="border-slate-200 dark:border-slate-800" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <Info className="text-green-500" size={24} />
                About Project
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {projectDetail?.description}
              </p>

              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">
                Main Features:
              </h3>
              <ul className="space-y-2">
                {projectDetail?.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-green-500 shrink-0 mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectDetail?.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Role
              </h3>
              <p className="text-slate-800 dark:text-slate-100 font-medium">
                {projectDetail?.role}
              </p>
            </section>
          </div>
        </div>
        {projectDetail?.screenshots?.length > 0 && (
          <section className="space-y-6 pt-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <Layout className="text-green-500" size={24} />
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectDetail?.screenshots.length &&
                !projectDetail.is_service &&
                projectDetail?.screenshots.map((src, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-950"
                  >
                    <img
                      src={src}
                      alt={`${projectDetail?.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
            </div>
          </section>
        )}
        {projectDetail?.is_service && <NoPreviewPlaceholder />}
        {projectDetail?.screenshots?.length === 0 &&
          !projectDetail?.is_service && <ImagePendingPlaceholder />}
      </div>
    </div>
  );
};

export default ProjectDetail;
