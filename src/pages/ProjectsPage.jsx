import PortfolioSection from "components/PortfolioSection";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();

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
        <PortfolioSection slice={false} />
      </div>
    </div>
  );
};

export default ProjectsPage;
