import React, { useState } from "react";

const Description = () => {
  const [showMore, setShowMore] = useState(false);

  const fullText = `Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays.`;
  const firstFadedtext = `Technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything`;

  const fadedText = `Advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything`;

  return (
    <div className="max-w-full mx-auto bg-white p-1 md:p-6 ">
      <h2 className="text-lg md:text-2xl font-semibold text-[#1C1C2A] mb-1 md:mb-4">
        Description
      </h2>

      <p className="text-[#434A59] text-sm md:text-lg leading-relaxed">
        {fullText}
      </p>

      {showMore ? (
        <p className="text-[#434A59] text-sm md:text-lg mt-3 leading-relaxed">
          {firstFadedtext}
        </p>
      ) : (
        <p className="text-[#B0B7C3] text-sm md:text-lg mt-3 leading-relaxed">
          {firstFadedtext}
        </p>
      )}

      {showMore && (
        <p className="text-[#434A59] text-sm md:text-lg mt-3 leading-relaxed">
          {fadedText}
        </p>
      )}

      <div className="flex flex-col items-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 text-sm  font-semibold text-[#1C1C2A] flex items-center  gap-1"
        >
          See
          {showMore ? <p>Less</p> : <p>More</p>}
          <span
            className={`transform transition-transform ${
              showMore ? "rotate-180" : ""
            }`}
          >
            ⌄
          </span>
        </button>
      </div>
    </div>
  );
};

export default Description;
