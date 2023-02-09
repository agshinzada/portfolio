import { NavLink } from "react-router-dom";

function WorksBox({ works, setWorks }) {
  const params = [
    {
      name: "All works",
      id: 1,
    },
    {
      name: "HTML/CSS",
      id: 2,
    },
    {
      name: "Javascript",
      id: 3,
    },
    {
      name: "React",
      id: 4,
    },
  ];

  const filterWorks = async (e, name) => {
    console.log(e);
    try {
      const res = await fetch("./projects.json");
      const data = await res.json();
      name === "All works"
        ? setWorks(data)
        : setWorks(data.filter((d) => d.category === name));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="xl:max-w-2xl mx-auto py-10">
        <ul className="font-medium text-sm flex gap-8 justify-center">
          {params.map((f) => (
            <li
              className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer tracking-tighter"
              key={f.id}
              onClick={(e) => filterWorks(e, f.name)}
            >
              {f.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 sm:row-gap-2 xl:px-28 sm:px-6  justify-items-center">
        {works.map((work) => (
          <div
            className="flex flex-col gap-3 animate__animated animate__fadeInUp"
            key={work.id}
          >
            <div>
              <a href={work.link} target="_blank">
                <img
                  src={work.image}
                  className="w-64 rounded-sm hover:scale-95 transition-all"
                />
              </a>
            </div>
            <div>
              <a href="/">
                <h4 className="text-md font-medium">{work.title}</h4>
              </a>

              <p className="text-xs text-gray-500">{work.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:pt-16 md:pb-28 sm:pb-10 sm:pt-6 flex justify-center">
        <button
          className="bg-black disabled:bg-gray-500 md:py-4 md:px-12 sm:py-3 sm:px-8 text-white text-xs font-bold rounded-full hover:bg-gray-700 transition-all mx-auto"
          disabled
        >
          LOAD MORE
        </button>
      </div>
    </>
  );
}

export default WorksBox;
