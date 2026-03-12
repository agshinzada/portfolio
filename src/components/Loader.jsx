import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <PuffLoader color="#05CC05" size={40} />
    </div>
  );
};

export default Loader;
