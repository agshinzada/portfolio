import HeaderBox from "./HeaderBox";
import WorksBox from "./WorksBox";

function HomePage() {
  return (
    <>
      <HeaderBox
        title="Hi, I’m Agshin"
        slogan="I’m IT specialist currently working at Mazarina"
        add="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        dolor cum, neque quisquam deleniti in sint earum deserunt harum tempore
        vitae, excepturi debitis minus inventore dolorem reiciendis ad eveniet
        praesentium!"
      />
      <WorksBox />
    </>
  );
}

export default HomePage;
