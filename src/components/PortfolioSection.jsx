import PortfolioItem from "./PortfolioItem";
import projects from "../assets/data/projects.json";

const PortfolioSection = ({ slice = true }) => {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects
        .sort((a, b) => a.sort - b.sort)
        .slice(0, slice ? 6 : projects.length) // Eğer slice gerekiyorsa ilk 6 eleman
        .map((item) => (
          <li key={item.id}>
            <PortfolioItem
              name={item.name}
              tags={item.skills}
              status={item.status}
              image={item.cover}
              url={item.url}
            />
          </li>
        ))}
    </ul>
  );
};

export default PortfolioSection;
