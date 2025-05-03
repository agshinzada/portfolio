import SkillItem from "components/SkillItem";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { supabase } from "utils/supabase";

const SkillSection = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 }); // 768px altı için true döner
  const [skills, setSkills] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isSmallScreen ? 4 : 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
  };

  const getData = async () => {
    const { data, error } = await supabase
      .from(process.env.REACT_APP_SKILL_VIEW)
      .select("*")
      .eq("active", 0);
    if (error) {
      console.log(error);
    }
    setSkills(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    // <div className="border z-10 flex">
    <div className="py-10 md:px-3 overflow-hidden z-10 slider-container border-b border dark:border-secondaryDarkColor">
      <Slider {...settings} className="">
        {skills?.map((item) => (
          <SkillItem img={item.url} title={item.title} key={item.id} />
        ))}
      </Slider>
    </div>
    // </div>
  );
};

export default SkillSection;
