import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Card({values, index,handleClick }) {
  const {name, profession, image, friends} = values;


  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className="w-full h-32 bg-sky-200" ></div>
      <img className="w-20 h-20 rounded-full border-4 border-white -mt-10 ml-3" src={image} alt="user" />
      <div className="w-full p-3"></div>
        <h3 className="ml-4 mb-2 text-xl font-semibold" >{name}</h3>
        <h5 className="ml-4 text-xs" >{profession}</h5>
        <button onClick={() => {handleClick(index)}} className={`mt-4 mb-2 ml-2 px-3 py-1 text-xs text-white ${friends ? "bg-green-600" : "bg-blue-500"} font-semibold rounded-md`}>{friends === true ? "Friends":"Add Friend"}</button>
    </div>
  );
}

export default Card;


