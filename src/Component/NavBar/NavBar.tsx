// import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

function NavBar() {
  return (
    <div className="fixed left-0 top-0 w-full z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
  {/* Left Section: SidebarTrigger + Logo Space */}
  <div className="flex items-center space-x-4 w-[200px]">
    {/* <SidebarTrigger /> */}
    <div className="text-xl font-bold text-gray-800">MyLogo</div>
  </div>

  {/* Center Section: Search Input (perfectly centered) */}
  <div className="flex-1 flex justify-center">
    <input
      type="text"
      placeholder="Search..."
      className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Right Section: Sign In Button */}
  <div className="w-[200px] flex justify-end">
    <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
      Sign In
    </button>
  </div>
</div>

  )
}

export default NavBar
