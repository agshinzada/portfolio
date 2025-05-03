const SkillItem = ({ img, title }) => {
  return (
    <div className="w-full z-10">
      <img
        src={img}
        className="w-20 dark:fill-thirdDarkColor fill-[#2e2e2e]"
        alt="title"
      />
      {/* <h3>{title}</h3> */}
    </div>
  );
};

export default SkillItem;
