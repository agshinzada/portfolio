function HeaderBox({ title, slogan, add }) {
  return (
    <>
      <div className="flex flex-col text-center xl:gap-3 gap-1 items-center max-w-2xl mx-auto xl:pt-10 xl:py-16 px-3 sm:px-0 sm:pt-5 py-6">
        <h1 className="text-2xl xl:text-6xl sm:text-4xl font-extrabold">
          {title}
        </h1>
        <h2 className="text-md xl:text-2xl sm:text-lg font-bold">{slogan}</h2>
        {add ? (
          <p className="text-xs xl:text-md sm:text-xs xl:mt-3 mt-2">{add}</p>
        ) : (
          ""
        )}
      </div>
      <hr />
    </>
  );
}

export default HeaderBox;
