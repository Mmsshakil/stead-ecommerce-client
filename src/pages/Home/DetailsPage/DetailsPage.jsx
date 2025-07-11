import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import shirt from "../../../../public/shirt.jpg";
import { useForm } from "react-hook-form";

const DetailsPage = () => {
  const [quantity, setQuantity] = useState(2);
  const [color, setColor] = useState("White");
  const [size, setSize] = useState("XS");
  const sizes = ["XS", "S", "M", "L", "XL"];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ quantity, color, size });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
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
          <div className="badge badge-warning rounded-sm text-white">
            Min. spend ৳550
          </div>
        </div>

        {/* Color */}
        <div>
          <h4 className="font-semibold text-slate-700 mb-2">
            <span className="text-gray-500">Available Color:</span>
            {color}
          </h4>

          <div className="flex gap-2">
            <div
              onClick={() => setColor("White")}
              className="w-10 h-10 border rounded-md overflow-hidden"
            >
              <img
                src="https://i.imgur.com/QsPujVk.png"
                alt="color"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              onClick={() => setColor("Black")}
              className="w-10 h-10 border rounded-md overflow-hidden"
            >
              <img
                src="https://i.imgur.com/QsPujVk.png"
                alt="color"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              onClick={() => setColor("Green")}
              className="w-10 h-10 border rounded-md overflow-hidden"
            >
              <img
                src="https://i.imgur.com/QsPujVk.png"
                alt="color"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              onClick={() => setColor("Pink")}
              className="w-10 h-10 border rounded-md overflow-hidden"
            >
              <img
                src="https://i.imgur.com/QsPujVk.png"
                alt="color"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Size */}
        <div>
          <h4 className="font-semibold text-slate-700 mt-4 mb-2">
            Select Size: {size}
          </h4>
          <div className="flex gap-2">
            {sizes.map((s) => (
              <div
                // {...register({ s })}
                onClick={() => setSize(s)}
                key={s}
                className={`btn btn-sm ${
                  s === size ? "btn-outline btn-success" : "btn-outline"
                }`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4 mt-4">
          <span className="text-slate-700 font-semibold">Quantity</span>
          <div className="flex items-center border rounded-md px-3 py-1">
            <div
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-xl hover:text-green-600 hover:text-2xl"
            >
              <FiMinus />
            </div>
            <span className="mx-4 text-lg font-medium">
              {String(quantity).padStart(2, "0")}
            </span>
            <div
              onClick={() => setQuantity(quantity + 1)}
              className="text-xl hover:text-green-600 hover:text-2xl"
            >
              <FiPlus />
            </div>
          </div>
        </div>

        {/* Add to Cart */}
        <button type="submit" className="btn btn-success w-full mt-4">
          Add to Cart
        </button>

        {/* Delivery & Seller Info */}
      </div>
    </form>
  );
};

export default DetailsPage;
