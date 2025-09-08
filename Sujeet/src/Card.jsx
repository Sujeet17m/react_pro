import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Card({ text,color }) {


  return (
    <button className={`px-3 py-1 ${color} text-zinc-100 text-xs rounded-md `}>{text}</button>
  );
}

export default Card;


