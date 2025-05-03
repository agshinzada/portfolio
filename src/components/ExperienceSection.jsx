import { useEffect, useState } from "react";
import ExperienceItem from "./ExperienceItem";
import { supabase } from "utils/supabase";

const ExperienceSection = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data, error } = await supabase
      .from(process.env.REACT_APP_EXPERIENCE_VIEW)
      .select("*")
      .order("sort", { ascending: true });
    if (error) {
      console.log(error);
    }
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col gap-4 mt-20">
      {data?.map((item) => (
        <ExperienceItem data={item} />
      ))}
    </div>
  );
};

export default ExperienceSection;
