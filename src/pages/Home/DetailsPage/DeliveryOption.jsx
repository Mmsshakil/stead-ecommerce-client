import React from "react";
import { BsBoxSeam } from "react-icons/bs";

const DeliveryOption = () => {
  return (
    <div className="mt-6 flex flex-col gap-5 border rounded-lg p-4 bg-slate-50">
      <div>
        <div>
          <h4 className="font-semibold text-xl text-slate-700 mb-2">
            <span> Delivery Options</span>
          </h4>
          <p className="flex items-center gap-2 font-semibold">
            <span className="text-green-600 text-2xl">
              <BsBoxSeam></BsBoxSeam>
            </span>
            <span>Regular</span>
          </p>
        </div>
        <div>
          <h1 className="text-gray-600"> Delivery within 2-3 days</h1>
        </div>
      </div>
      <div className="text-gray-400">
        <div>
          <p className="flex items-center gap-2 font-semibold">
            <span className="text-2xl">
              <BsBoxSeam></BsBoxSeam>
            </span>
            <span>Express</span>
            <span className="text-red-300">Not Available</span>
          </p>
        </div>
        <div>
          <h1> Delivery within 2-3 days</h1>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOption;
