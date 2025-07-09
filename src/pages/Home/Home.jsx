import React from "react";
import Description from "./Description/Description";
import Specification from "./Specification/Specification";

const Home = () => {
  return (
    <div className="bg-[#F1F5F9] text-black">
      <h1 className="bg-white">home</h1>

      <div className="  max-w-7xl mx-auto grid grid-cols-3  py-1 md:py-7">
        <div className="col-span-2 flex flex-col gap-3">
          <div className="">
            <Description></Description>
          </div>
          <div>
            <Specification></Specification>
          </div>
        </div>
        <div className="col-span-1">{/* <Description></Description> */}</div>
      </div>
    </div>
  );
};

export default Home;
