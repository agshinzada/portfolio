function HeaderBox({ title, slogan, add }) {
  return (
    <>
      <div className="flex flex-col text-center gap-3 items-center max-w-2xl mx-auto pt-10 py-16">
        <h1 className="text-6xl font-extrabold">{title}</h1>
        <h2 className="text-2xl font-bold">{slogan}</h2>
        {add ? <p className="text-md mt-3">{add}</p> : ""}
      </div>
      <hr />
    </>
  );
}

export default HeaderBox;
