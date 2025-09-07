import React, { useState } from 'react'

function Card() {
    const [val,_setVal] = useState(false);

  return (
    <div>
      val: {val.toString()}
      <h1>
        {val === false ? "Hello" : "World"}
      </h1>
        <button onClick={() => _setVal(!val)} className={`px-3 py-1 ${val ? "bg-red-300": "bg-orange-300 "}`}>Change Value</button>
    </div>
  )
}

export default Card
