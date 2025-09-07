import React, { useState } from 'react'

function Card() {
    const [val,setVal] = useState(false);

  return (
    <div>
      val: {val.toString()}
      <h1>
        {val === false ? "Hello" : "World"}
      </h1>
    </div>
  )
}

export default Card
