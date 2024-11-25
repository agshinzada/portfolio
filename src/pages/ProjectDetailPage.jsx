import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../assets/data/projects.json";
import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import ScrollToTop from "components/ScrollToTop";

const ProjectDetailPage = () => {
  const params = useParams();
  const project = projects.find((project) => project.url === params.url);
  const navigate = useNavigate();

  return (
    <div className="bg-[#fcfcfc]">
      <ScrollToTop />
      <div className="px-6 md:px-20 py-10 flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <button onClick={() => navigate(-1)}>
            <IoArrowBackCircle className="text-5xl" />
          </button>
          <h4 className="text-[30px] md:text-[48px] font-bold">
            {project.name}
          </h4>
        </div>{" "}
        <p className="text-gray-500 max-w-[1000px] text-sm md:text-[16px]">
          {project.summary}
        </p>
        <div className="flex items-start md:items-end flex-col gap-2">
          <h4 className="text-sm font-semibold">
            Technologies Used:{" "}
            <span className="font-medium">{project.skills}</span>
          </h4>
          <div className="flex gap-3 justify-end">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel={"noreferrer"}
                className="flex gap-1 items-center text-sm"
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
                className="flex gap-1 items-center text-sm"
              >
                <FaGithub className="text-lg" />
                <span>Public source</span>
              </a>
            ) : (
              <button
                className="flex gap-1 items-center disabled:opacity-60 text-sm"
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
            <img src={project.cover} alt="img1" />
          </div>
          <div className="col-span-2 row-start-2 h-fit">
            <img src={project.img1} alt="img1" />
          </div>
          <div className="col-span-2 col-start-3 row-start-2 h-fit">
            <img src={project.img2} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
