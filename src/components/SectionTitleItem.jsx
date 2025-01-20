const SectionTitleItem = ({ title }) => {
  return (
    <div className="border-b border-b-[#e1dfdf] dark:border-b-secondaryDarkColor relative flex justify-center">
      <h3 className="bg-[#fcfcfc] dark:bg-fourdDarkColor text-xs font-semibold px-10 py-4 rounded-full z-10 -rotate-[8deg] absolute mx-auto -top-5 w-fit">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitleItem;
