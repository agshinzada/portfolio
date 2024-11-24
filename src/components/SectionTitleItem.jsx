const SectionTitleItem = ({ title }) => {
  return (
    <div className="border-b border-b-[#e1dfdf] relative flex justify-center">
      <h3 className="bg-[#fcfcfc] text-xs font-semibold px-10 py-4 rounded-full z-10 -rotate-[8deg] absolute mx-auto -top-5 w-fit">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitleItem;