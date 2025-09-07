import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Card() {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="relative w-60 h-40 overflow-hidden rounded-md shadow-lg">
        {/* First Image */}
        <img
          className={`absolute w-full h-full object-cover transition-transform duration-700 ease-in-out ${
            val ? "-translate-x-full" : "translate-x-0"
          }`}
          src="https://images.unsplash.com/photo-1523846158961-525ef6a36f72?w=600&auto=format&fit=crop&q=60"
          alt=""
        />

        {/* Second Image */}
        <img
          className={`absolute w-full h-full object-cover transition-transform duration-700 ease-in-out ${
            val ? "translate-x-0" : "translate-x-full"
          }`}
          src="https://images.unsplash.com/photo-1756732839165-c31616c5fd96?w=800&auto=format&fit=crop&q=60"
          alt=""
        />
      </div>

      {/* Arrow Button */}
      <span
        onClick={() => setVal(!val)}
        className="flex justify-center items-center cursor-pointer absolute bottom-20 right-20 w-12 h-12 bg-white rounded-full text-black hover:bg-black hover:text-white border border-black transition-colors"
      >
        <FaArrowRight />
      </span>
    </div>
  );
}

export default Card;


