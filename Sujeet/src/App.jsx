import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const data = [
    {Image: "https://images.unsplash.com/photo-1756995260112-0960d3744f72?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", songName: "Song 1", artistName: "Artist 1", added: false},
    {Image: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWMlMjBjb25jZXJ0fGVufDB8fDB8fHww", songName: "Song 2", artistName: "Artist 2", added: false},
    {Image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", songName: "Song 3", artistName: "Artist 3", added: false},
    {Image: "https://images.unsplash.com/photo-1757351122506-3c6a394e9cd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D", songName: "Song 4", artistName: "Artist 4", added: false},
    {Image: "https://images.unsplash.com/photo-1729101144716-ee22fb4cde65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D", songName: "Song 5", artistName: "Artist 5", added: false},
  ];

  const [songData, setSongDate] = useState(data);
  
  return (
    <>
      <div className="w-full h-screen bg-slate-200 ">
        <Navbar />
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songData.map((obj)=>(<Card data={obj} />))}
        </div>
      </div>
    </>
  );
}

export default App;
