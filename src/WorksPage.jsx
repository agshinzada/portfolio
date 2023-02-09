import { useEffect, useState } from "react";
import HeaderBox from "./HeaderBox";
import WorksBox from "./WorksBox";

function WorksPage({ works, setWorks }) {
  return (
    <>
      <HeaderBox title="Works" slogan="Meet my portfolio." />
      <WorksBox works={works} setWorks={setWorks} />
    </>
  );
}

export default WorksPage;
