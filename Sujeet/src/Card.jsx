import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

function Card() {
    const [val,_setVal] = useState(false)
  return (
    <div className='w-full h-screen  flex justify-center items-center'>
        <div className='relative w-60 h-32  rounded-md flex overflow-hidden'>
            <img className={`shrink-0 transition-transform duration-500 ease-in-out ${val === false ? "-translate-x-[50%]":"-translate-y-[50%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1523846158961-525ef6a36f72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8" alt="" />
            <img className={`shrink-0 transition-transform duration-500 ease-in-out ${val === false ? "-translate-x-[50%]":"-translate-y-[50%]"}`} src="https://images.unsplash.com/photo-1756732839165-c31616c5fd96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="" />
        </div>
        <span onClick={()=>_setVal(!val)} className='flex justify-center items-center cursor-pointer absolute bottom-20 right-20 w-12 h-12 bg-white rounded-full text-black hover:bg-black hover:text-white border border-black transition-colors'>
            <FaArrowRight />
        </span>
      
    </div>
  )
}

export default Card

