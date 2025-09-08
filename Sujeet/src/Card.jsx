import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Card({ text }) {


  return (
    <button className="px-3 py-1 bg-blue-300 rounded-md">{text}</button>
  );
}

export default Card;


