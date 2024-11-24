import SkillItem from "components/SkillItem";
import jsIcon from "assets/skills/javascript-icon.svg";
import reactIcon from "assets/skills/react-icon.svg";
import htmlIcon from "assets/skills/html5-icon.svg";
import cssIcon from "assets/skills/css3-icon.svg";
import sassIcon from "assets/skills/sass-icon.svg";
import nodeIcon from "assets/skills/node-icon.svg";
import expressIcon from "assets/skills/express-icon.svg";
import tailwindIcon from "assets/skills/tailwind-icon.svg";
import antIcon from "assets/skills/ant-icon.svg";
import typescriptIcon from "assets/skills/typescript-icon.svg";
import nextIcon from "assets/skills/next-icon.svg";
import bootstrapIcon from "assets/skills/bootstrap-icon.svg";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

const SkillSection = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 }); // 768px altı için true döner

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isSmallScreen ? 4 : 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    // <div className="border z-10 flex">
    <div className="py-10 md:px-3 overflow-hidden z-10 slider-container border-b border">
      <Slider {...settings} className="">
        <SkillItem img={jsIcon} title={false} />
        <SkillItem img={reactIcon} title={false} />
        <SkillItem img={htmlIcon} title={false} />
        <SkillItem img={cssIcon} title={false} />
        <SkillItem img={sassIcon} title={false} />
        <SkillItem img={nodeIcon} title={false} />
        <SkillItem img={expressIcon} title={false} />
        <SkillItem img={tailwindIcon} title={false} />
        <SkillItem img={antIcon} title={false} />
        <SkillItem img={typescriptIcon} title={false} />
        <SkillItem img={nextIcon} title={false} />
        <SkillItem img={bootstrapIcon} title={false} />
      </Slider>
    </div>
    // </div>
  );
};

export default SkillSection;
