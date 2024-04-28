import React from "react";
import PortfolioItem from "../utils/PortfolioItem";
import SectionTitle from "../utils/SectionTitle";
import SectionNavInfo from "../utils/SectionNavInfo";
import pr4 from "../../assets/portfolio/project4.webp";
import pr3 from "../../assets/portfolio/project3.webp";
import pr2 from "../../assets/portfolio/project2.webp";
import pr1 from "../../assets/portfolio/project1.webp";

const PortfolioSection = () => {
  return (
    <section
      className="after:content-[''] after:w-full after:bg-[#242323] after:h-[1px] after:block"
      id="portfolio"
    >
      <div className="relative container">
        <SectionNavInfo number={"04"} name={"portfolio"} />
        <SectionTitle name={"Portfolio"} />
        <ul className="flex flex-wrap gap-6 mb-16">
          <li>
            <PortfolioItem
              name={"Nicheceramic.az"}
              tags={"React, Node.js, Ant Design"}
              status={"working"}
              image={pr4}
              url={"https://nicheceramic.az/"}
            />
          </li>
          <li>
            <PortfolioItem
              name={"Archive web app"}
              tags={"React, Node.js, Ant Design"}
              status={"working"}
              image={pr3}
              url={
                "https://www.linkedin.com/posts/agshinzada_javascript-react-nodejs-activity-7188500652430434306-Wc0g?utm_source=share&utm_medium=member_desktop"
              }
            />
          </li>
          <li>
            <PortfolioItem
              name={"New Client"}
              tags={"React, Node.js, Ant Design"}
              status={"completed"}
              image={pr2}
              url={
                "https://www.linkedin.com/posts/agshinzada_javascript-react-nodejs-activity-7188112888425775104-oA7c?utm_source=share&utm_medium=member_desktop"
              }
            />
          </li>
          <li>
            <PortfolioItem
              name={"Inventory management"}
              tags={"React, Node.js, Tailwind CSS"}
              status={"completed"}
              image={pr1}
              url={
                "https://www.linkedin.com/posts/agshinzada_javascript-react-nodejs-activity-7188871894756937730-glSc?utm_source=share&utm_medium=member_desktop"
              }
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PortfolioSection;
