import React from "react";

function Card({data}) {

  const {Image, songName, artistName, added} = data;


  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md flex gap-4 relative">
      {/* Thumbnail */}
      <div className="w-20 h-20 bg-orange-500 rounded-md flex-shrink-0 overflow-hidden">
        <img className="w-full h-full object-cover rounded-md" src={Image} alt="Song Cover" />
      </div>

      {/* Song Info */}
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold leading-tight">{songName}</h3>
        <h6 className="text-sm text-gray-600">{artistName}</h6>
      </div>

      {/* Button */}
      <button
        className={`absolute -bottom-4 left-1/2 -translate-x-1/2 ${ added === false? "bg-orange-500" : "bg-green-500"} hover:bg-orange-600 text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-md transition`}
      >
        {added ? "Added" : "Add to Favourites"}
      </button>
    </div>
  );
}

export default Card;

