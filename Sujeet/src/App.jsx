import React from 'react'
import { useState } from 'react'

function App() {
  const[val,setVal] = useState([1,2,3,4,5])
  return (
    <div>
      {val.map((item)=><h1 key={item}>{item}</h1>)}
      <button onClick={()=>setVal([...val,val.length+1])}>Add Number</button>
    </div>
  )
}

export default App

