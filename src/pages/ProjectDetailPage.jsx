import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import ScrollToTop from "components/ScrollToTop";
import { useEffect, useState } from "react";
import { supabase } from "utils/supabase";

const ProjectDetailPage = () => {
  const params = useParams();
  const [project, setProject] = useState({});
  const [cover, setCover] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    const { data, error } = await supabase
      .from(process.env.REACT_APP_PROJECT_VIEW)
      .select("*")
      .eq("slug_url", params.url)
      .single();
    if (error) {
      console.log(error);
    }
    setCover(data?.images?.find((item) => item.type === 2).url);
    setProject(data);
  };

  useEffect(() => {
    getData();
  }, [params.url]);

  return (
    <div className="bg-[#fcfcfc] dark:bg-primaryDarkColor transition-colors duration-500 dark:border-t-secondaryDarkColor dark:border-t">
      <ScrollToTop />
      <div className="px-6 md:px-20 py-10 flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <button onClick={() => navigate(-1)}>
            <IoArrowBackCircle className="text-5xl dark:text-thirdDarkColor" />
          </button>
          <h4 className="text-[30px] md:text-[48px] font-bold dark:text-fourdDarkColor">
            {project.title}
          </h4>
        </div>
        <p className="text-gray-500 max-w-[1000px] text-sm md:text-[16px] dark:text-thirdDarkColor">
          {project.description}
        </p>
        <div className="flex items-start md:items-end flex-col gap-2">
          <h4 className="text-sm font-semibold dark:text-fourdDarkColor">
            Technologies Used:{" "}
            <span className="font-medium">{project.tags}</span>
          </h4>
          <div className="flex gap-3 justify-end">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel={"noreferrer"}
                className="flex gap-1 items-center text-sm dark:text-thirdDarkColor"
              >
                <RxExternalLink className="text-lg" />
                <span>Visit website</span>
              </a>
            ) : (
              ""
            )}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel={"noreferrer"}
                className="flex gap-1 items-center text-sm dark:text-thirdDarkColor"
              >
                <FaGithub className="text-lg" />
                <span>Public source</span>
              </a>
            ) : (
              <button
                className="flex gap-1 items-center disabled:opacity-60 text-sm dark:text-fourdDarkColor"
                disabled={true}
              >
                <FaGithub className="text-lg" />
                <span>Private source</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="px-6 md:px-20 py-2">
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-4">
            <img src={cover} alt="cover" />
          </div>
          {project?.images
            ?.filter((item) => item.type === 1)
            .map((item) => (
              <div className="col-span-2 row-start-2 h-fit" key={item.id}>
                {item ? <img src={item.url} alt={item.title} /> : ""}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
