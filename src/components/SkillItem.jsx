import { ReactSVG } from "react-svg";

const SkillItem = ({ img, title }) => {
  return (
    <div className="w-full z-10">
      <ReactSVG
        src={img}
        className="w-24 dark:fill-thirdDarkColor fill-[#2e2e2e]"
      />
      <h3>{title}</h3>
    </div>
  );
};

export default SkillItem;
