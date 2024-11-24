import ExperienceItem from "./ExperienceItem";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-4 mt-20">
      <ExperienceItem
        date="2022 - Present"
        job="Front-end developer"
        company="Freelance"
      />
      <ExperienceItem
        date="2024 - Present"
        job="ERP administrator"
        company="Mazarina Trade Company"
      />
    </div>
  );
};

export default ExperienceSection;
