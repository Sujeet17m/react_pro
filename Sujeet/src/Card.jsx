import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Card({image, name, profession}) {


  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className="w-full h-32 bg-sky-200" ></div>
      <img className="w-20 h-20 rounded-full border-4 border-white -mt-10 ml-3" src={image} alt="user" />
      <div className="w-full p-3"></div>
        <h3 className="ml-4 mb-2 text-xl font-semibold" >{name}</h3>
        <h5 className="ml-4 text-xs" >{profession}</h5>
        <button className="mt-4 mb-2 ml-2 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md">Add Friend</button>
    </div>
  );
}

export default Card;


