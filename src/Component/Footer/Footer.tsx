import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 shadow-inner h-[70px] my-auto">
      <div className="px-6 flex flex-col md:flex-row justify-between items-center gap-4 !w-full">
        
        {/* Left - Logo or Site Name */}
        <div className="text-lg font-semibold">
          MySite
        </div>

        {/* Center - Navigation Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>

        {/* Right - Copyright */}
        <div className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
