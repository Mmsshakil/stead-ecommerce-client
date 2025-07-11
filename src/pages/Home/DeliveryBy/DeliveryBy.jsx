import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

const DeliveryBy = () => {
  return (
    <div className="mt-6 flex flex-col gap-5 border rounded-lg p-4 bg-slate-50">
      <div>
        <div>
          <h4 className=" text-sm text-slate-700 mb-2">
            <span> Sold By</span>
          </h4>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-green-600 text-2xl">
                <BsBoxSeam></BsBoxSeam>
              </span>
            </div>

            <div className=" flex gap-3">
              <div className="flex flex-col  gap-1 font-semibold">
                <div className="flex items-center gap-1">
                  <h1>BD FASHION HOUSE</h1>
                  <span className="text-blue-700">
                    <MdVerified></MdVerified>
                  </span>
                </div>
                <div>
                  <h1 className="text-white text-center rounded-sm bg-fuchsia-800 ">
                    Rising Star
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-400 flex gap-3 border-b-2 border-b-neutral-300 pb-4">
        <button className="btn btn-outline btn-success">
          {" "}
          <AiOutlineMessage></AiOutlineMessage> Chat Now
        </button>
        <button className="btn btn-outline">View Shop</button>
      </div>

      <div className="flex gap-2 text-sm md:text-neutral">
        <div>
          <h1>Ship on Time</h1>
          <p className="text-lg md:text-2xl text-gray-500">100 %</p>
        </div>
        <div>
          <h1>Chat Response</h1>
          <p className=" text-lg md:text-2xl text-gray-500">90 %</p>
        </div>
        <div>
          <h1>Shop Rating</h1>
          <p className="text-lg md:text-2xl text-gray-500">99.8 %</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBy;
