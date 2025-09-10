import React, { useState } from 'react'
import Card from './Card';

function App() {
  const raw = [
    { name: "Sujeet", profession: "Developer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Rahul", profession: "Designer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ankit", profession: "Manager", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Rohit", profession: "Tester" , image: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]

  const [data,setData] = useState(raw)
  const handleClick = (changingIndex)=>{
    setData((prev)=>{
      return prev.map((item, index)=>{
        if(index === changingIndex){return {...item, friends: !item.friends};}
        return item;
      });
    });
  }



  return (
    <>
     <div className='w-full h-screen bg-slate-200 flex items-center justify-center gap-5'>
      {data.map((item, index) => (
        <Card key={index} index={index} values={item} handleClick={handleClick}/>
      ))}
     </div>
    </>
    
  );
}

export default App;

