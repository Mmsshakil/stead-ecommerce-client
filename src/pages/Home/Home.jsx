import React from "react";
import Description from "./Description/Description";
import Specification from "./Specification/Specification";
import DetailsPage from "./DetailsPage/DetailsPage";
import DeliveryOption from "./DetailsPage/DeliveryOption";
import DeliveryBy from "./DeliveryBy/DeliveryBy";

const Home = () => {
  return (
    <div className="bg-[#F1F5F9] text-black">
      <h1 className="bg-white">home</h1>

      {/* product details */}
      <div className="  max-w-7xl mx-auto grid grid-cols-3 px-2 md:px-0 py-1 md:py-7">
        <div className="col-span-3 md:col-span-2 flex flex-col gap-3">
          <DetailsPage></DetailsPage>
        </div>
        <div className="col-span-3 md:col-span-1">
          <DeliveryOption></DeliveryOption>
          <DeliveryBy></DeliveryBy>
        </div>
      </div>

      {/* descriptions */}
      <div className="  max-w-7xl mx-auto grid grid-cols-3 px-2 md:px-0 py-1 md:py-7">
        <div className="col-span-3 md:col-span-2 flex flex-col gap-3">
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
