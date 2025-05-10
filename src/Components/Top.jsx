
import React from 'react';


const Top = () => {
  return (
    <header className="fixed w-full z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 mt-4 shadow-lg">
        <div className="flex items-center justify-between w-full">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">YourLogo</span>
          </a>
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            <li><a href="#" className="hover:text-blue-400 transition">Work</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Top;
