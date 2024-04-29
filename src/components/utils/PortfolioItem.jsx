import React from "react";
const PortfolioItem = ({ status, tags, name, image, url }) => {
  return (
    <div className="text-white w-full relative ">
      <img
        src={image}
        alt="project-image"
        className="max-w-96 w-[23rem] laptop:w-[22rem] rounded-md mobile:w-full mobile:max-w-full laptop:max-w-96"
      />
      <div className="absolute py-1 px-3 top-2 left-2 bg-main-green rounded-lg text-xs">
        <p className="uppercase">{status}</p>
      </div>
      <a
        href={url}
        target="_blank"
        className="bg-white py-3 px-4  absolute bottom-3 rounded-md text-black mr-auto ml-auto  left-0 right-0 w-[93%]"
      >
        <p className="text-xs text-main-green">{tags}</p>
        <p className="font-bold text-lg">{name}</p>
      </a>
    </div>
  );
};

export default PortfolioItem;
