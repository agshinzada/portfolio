import React from "react";
import reactIcon from "../../assets/skills/react.svg";
import jsIcon from "../../assets/skills/javascript.svg";
import cssIcon from "../../assets/skills/css.svg";
import htmlIcon from "../../assets/skills/html.svg";
import nodeIcon from "../../assets/skills/nodejs.svg";
import expressIcon from "../../assets/skills/express.svg";
import bootstrapIcon from "../../assets/skills/bootstrap.svg";
import antIcon from "../../assets/skills/ant.svg";
import tailwind from "../../assets/skills/tailwind.svg";
const SkillBox = () => {
  return (
    <ul className="flex gap-8 flex-wrap mobile:justify-center">
      <li className="flex flex-col items-center gap-2">
        <img
          src={reactIcon}
          alt="react-icon"
          className="w-16 mobile:w-10 laptop:w-16"
        />
        <span>React</span>
      </li>
      <li className="flex flex-col items-center gap-2">
        <img
          src={jsIcon}
          alt="react-icon"
          className="w-16 mobile:w-10 laptop:w-16"
        />
        <span>Javascript</span>
      </li>
      <li className="flex flex-col items-center gap-2">
        <img
          src={cssIcon}
          alt="react-icon"
          className="w-16 mobile:w-10 laptop:w-16"
        />
        <span>CSS</span>
      </li>
      <li className="flex flex-col items-center gap-2">
        <img
          src={htmlIcon}
          alt="react-icon"
          className="w-16 mobile:w-10 laptop:w-16"
        />
        <span>HTML</span>
      </li>
      <li className="flex flex-col items-center gap-2">
        <img
          src={nodeIcon}
          alt="react-icon"
          className="w-16 mobile:w-10 laptop:w-16"
        />
        <span>Node.js</span>
      </li>
      <li className="flex flex-col items-center gap-2">
        <img
          src={expressIcon}
          alt="react-icon"
          className="w-16 mobile:w-10 laptop:w-16"
        />
        <span>Express.js</span>
      </li>
      <li className="flex flex-col items-center gap-2">
        <img
          src={bootstrapIcon}
          alt="react-icon"
          className="w-16 mobile:w-10 laptop:w-16"
        />
        <span>Bootstrap</span>
      </li>
      <li className="flex flex-col items-center gap-2">
        <img
          src={antIcon}
          alt="react-icon"
          className="w-16 mobile:w-10 laptop:w-16"
        />
        <span>Ant Design</span>
      </li>
      <li className="flex flex-col items-center gap-2">
        <img
          src={tailwind}
          alt="react-icon"
          className="w-16 mobile:w-10 laptop:w-16"
        />
        <span>Tailwind CSS</span>
      </li>
    </ul>
  );
};

export default SkillBox;
