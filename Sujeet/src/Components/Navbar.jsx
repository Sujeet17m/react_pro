import React from 'react'

function Navbar() {
  return (
    <div className="w-full px-10 py-4 flex justify-between items-center shadow-sm">
      {/* Logo / Brand */}
      <h3 className="text-xl font-bold text-orange-600 tracking-wide">Orange</h3>

      {/* Favourites Badge */}
      <div className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-full shadow-sm cursor-pointer hover:bg-orange-600 transition">
        <h3 className="text-sm font-medium">Favourites</h3>
        <span className="text-xs font-semibold bg-white text-orange-600 px-2 py-0.5 rounded-full">
          2
        </span>
      </div>
    </div>
  )
}

export default Navbar

