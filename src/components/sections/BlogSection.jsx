import React from "react";
import SectionNavInfo from "../utils/SectionNavInfo";

const BlogSection = () => {
  return (
    <section
      className="after:content-[''] after:w-full after:bg-[#242323] after:h-[1px] after:block"
      id="blog"
    >
      <div className="relative container flex">
        <SectionNavInfo number={"05"} name={"blog"} />
        {/* <SectionTitle name={"Bloq"} /> */}
        <div className="text-white text-center font-bold text-lg my-28">
          TEZLİKLƏ
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
