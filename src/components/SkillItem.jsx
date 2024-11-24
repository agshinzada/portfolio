const SkillItem = ({ img, title }) => {
  return (
    <div className="w-full z-10">
      <img src={img} alt="skill" className="max-w-16" />
      <h3>{title}</h3>
    </div>
  );
};

export default SkillItem;
