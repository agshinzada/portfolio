function WorksBox() {
  return (
    <>
      <div className="max-w-2xl mx-auto py-10">
        <ul className="font-medium text-sm flex gap-8 justify-center">
          <li className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer tracking-tighter">
            All works
          </li>
          <li className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer tracking-tighter">
            HTML/CSS
          </li>
          <li className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer tracking-tighter">
            Javascript
          </li>
          <li className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer tracking-tighter">
            React
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-3 px-28 justify-items-center">
        <div className="flex flex-col gap-3 animate__animated animate__fadeInUp">
          <div>
            <a href="/">
              <img
                src="/react-logo.png"
                className="w-64 rounded-sm hover:scale-95 transition-all"
              />
            </a>
          </div>
          <div>
            <a href="/">
              <h4 className="text-md font-medium">Inventory management app</h4>
            </a>

            <p className="text-xs text-gray-500">
              Using Redux and Tailwind CSS
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 animate__animated animate__fadeInUp">
          <div>
            <a href="/">
              <img
                src="/react-logo.png"
                className="w-64 rounded-sm hover:scale-95 transition-all"
              />
            </a>
          </div>
          <div>
            <a href="/">
              <h4 className="text-md font-medium">Yeni müştəri app</h4>
            </a>

            <p className="text-xs text-gray-500">
              Using Redux and Tailwind CSS
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 animate__animated animate__fadeInUp">
          <div>
            <a href="/">
              <img
                src="/react-logo.png"
                className="w-64 rounded-sm hover:scale-95 transition-all"
              />
            </a>
          </div>
          <div>
            <a href="/">
              <h4 className="text-md font-medium">Inventory management app</h4>
            </a>

            <p className="text-xs text-gray-500">
              Using Redux and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-28 flex justify-center">
        <button className="bg-black py-4 px-12 text-white text-xs font-bold rounded-full hover:bg-gray-700 transition-all mx-auto">
          LOAD MORE
        </button>
      </div>
    </>
  );
}

export default WorksBox;
