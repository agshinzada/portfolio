import { supabase } from "utils/supabase";
import PortfolioItem from "./PortfolioItem";
import { useEffect, useState } from "react";

const PortfolioSection = ({ slice = true }) => {
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    const { data, error } = await supabase
      .from(process.env.REACT_APP_PROJECT_VIEW)
      .select("*")
      .order("sort", { ascending: false });
    if (error) {
      console.log(error);
    }
    setProjects(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects
        .slice(0, slice ? 6 : projects.length) // Eğer slice gerekiyorsa ilk 6 eleman
        .map((item) => (
          <li key={item.id}>
            <PortfolioItem data={item} />
          </li>
        ))}
    </ul>
  );
};

export default PortfolioSection;
