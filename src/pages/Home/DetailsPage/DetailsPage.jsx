import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import shirt from "../../../../public/shirt.jpg";

const DetailsPage = () => {
  const [quantity, setQuantity] = useState(2);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const selectedSize = "XS";

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Product Image */}
      <div>
        <img src={shirt} alt="Shirt" className="rounded-sm w-full" />
        {/* Thumbnails */}
        <div className="flex gap-2 mt-4">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={shirt}
              alt="thumb"
              className="w-14 h-14 rounded-sm object-cover "
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-slate-800">
          Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual
          Shirt.
        </h2>

        {/* Ratings */}
        <div className="flex items-center gap-1 text-yellow-500">
          <h1 className="text-black">4.5</h1>
          {[...Array(5)].map((_, i) => (
            <>
              <FaStar key={i} />
            </>
          ))}
          <span className="text-slate-600 ml-2 text-sm">(2,254) ^</span>
        </div>

        {/* Price */}
        <div className="flex gap-2 items-center">
          <div className="text-2xl font-bold text-green-600">৳1,139.33</div>
          <div className="line-through text-gray-400">৳1500</div>
        </div>

        {/* Promotion */}
        <div className="flex gap-2 items-center text-base md:text-lg">
          <h1>Promotion</h1>
          <div className="badge badge-warning rounded-sm text-white">Min. spend ৳550</div>
        </div>

        {/* Color */}
        <div>
          <h4 className="font-semibold text-slate-700 mb-2">
            <span className="text-gray-500">Available Color:</span> Navy Blue
          </h4>

          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 border rounded-md overflow-hidden"
              >
                <img
                  src="https://i.imgur.com/QsPujVk.png"
                  alt="color"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
        </div>

        {/* Size */}
        <div>
          <h4 className="font-semibold text-slate-700 mt-4 mb-2">
            Select Size: {selectedSize}
          </h4>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`btn btn-sm ${
                  size === selectedSize
                    ? "btn-outline btn-success"
                    : "btn-outline"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4 mt-4">
          <span className="text-slate-700 font-semibold">Quantity</span>
          <div className="flex items-center border rounded-md px-3 py-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-xl"
            >
              <FiMinus />
            </button>
            <span className="mx-4 text-lg font-medium">
              {String(quantity).padStart(2, "0")}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-xl"
            >
              <FiPlus />
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <button className="btn btn-success w-full mt-4">Add to Cart</button>

        {/* Delivery & Seller Info */}
      </div>
    </div>
  );
};

export default DetailsPage;
