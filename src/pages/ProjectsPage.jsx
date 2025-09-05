import PortfolioItem from "components/PortfolioItem";
import { useEffect, useState } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { supabase } from "utils/supabase";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const getData = async () => {
    const { data, error } = await supabase
      .from(process.env.REACT_APP_PROJECT_VIEW)
      .select("*")
      .eq("type", 1)
      .order("sort", { ascending: false });
    if (error) {
      console.log(error);
    }
    setProjects(data);
  };

  const getOtherData = async () => {
    const { data, error } = await supabase
      .from(process.env.REACT_APP_PROJECT_VIEW)
      .select("*")
      .eq("type", 2)
      .order("sort", { ascending: false });
    if (error) {
      console.log(error);
    }
    setOtherProjects(data);
  };
  useEffect(() => {
    getData();
    getOtherData();
  }, []);

  return (
    <div className="bg-[#fcfcfc] dark:bg-primaryDarkColor transition-colors duration-500 dark:border-t-secondaryDarkColor dark:border-t">
      <div className="px-6 md:px-20 py-10 flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <button onClick={() => navigate(-1)}>
            <IoArrowBackCircle className="text-5xl dark:text-thirdDarkColor" />
          </button>{" "}
          <h4 className="text-[46px] md:text-[52px] font-bold dark:text-fourdDarkColor">
            Projects
          </h4>
        </div>
        <p className="text-gray-500 text-sm md:text-[16px] dark:text-fourdDarkColor">
          Below, you can discover the e-commerce platforms and ERP web
          applications I have developed, showcasing my expertise in creating{" "}
          <br />
          user-friendly interfaces and efficient solutions. Feel free to explore
          these projects to learn more about my work.
        </p>
      </div>
      <div className="px-6 md:px-20 py-2">
        <div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item) => (
              <li key={item.id}>
                <PortfolioItem data={item} />
              </li>
            ))}
          </ul>
          <div>
            <h2 className="text-2xl mt-10 mb-5 dark:text-white">
              Other projects
            </h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {otherProjects.map((item) => (
                <li key={item.id}>
                  <div className="border py-3 px-4 rounded-lg flex md:flex-row flex-col gap-2 md:justify-between md:items-center bg-white dark:bg-fourdDarkColor">
                    <div>
                      <h5 className="font-semibold text-lg">{item.title}</h5>
                      <p className="text-xs md:text-sm text-gray-500 mb-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        {item.tags.split(",").map((tag, index) => (
                          <span
                            key={index}
                            class="bg-blue-100 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={item.repo}
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github <FaExternalLinkSquareAlt />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
