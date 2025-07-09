import React from "react";

const DeliveryOption = () => {
  return (
    <div className="mt-6 border rounded-lg p-4 bg-slate-50">
      <h4 className="font-bold text-slate-700 mb-2">Delivery Options</h4>
      <p className="text-green-600">✔ Regular: 2-3 days</p>
      <p className="text-gray-400 line-through">✖ Express: Not Available</p>
      <div className="divider"></div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-slate-700">BD FASHION HOUSE</p>
          <div className="text-xs text-slate-500">
            Ship: 100% | Chat: 90% | Rating: 99.8%
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline btn-sm">Chat</button>
          <button className="btn btn-outline btn-sm">View Shop</button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOption;
