import HeaderBox from "./HeaderBox";
import WorksBox from "./WorksBox";

function HomePage({ works, setWorks }) {
  return (
    <>
      <HeaderBox
        title="Hi, I’m Agshin"
        slogan="I’m IT specialist currently working at Mazarina"
        add="1 ilə yaxındır ki, front-end proqramlaşdırma üzrə araşdırmalar edirəm. Aşağıdakı kateqoriyalar üzrə proyektlərimlə tanış ola bilərsiz."
      />
      <WorksBox works={works} setWorks={setWorks} />
    </>
  );
}

export default HomePage;
