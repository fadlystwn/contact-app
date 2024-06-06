"use client"
import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-custom-900 text-lg font-bold">MyContact</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-custom-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="md:flex md:space-x-6">

            <li>
              <a href="#" className="block md:inline-block text-slate-800 bg-white hover:text-custom-500 px-4 py-2 rounded-full bg-white-200 hover:bg-white transition-colors duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block md:inline-block text-slate-800 bg-white hover:text-custom-500 px-4 py-2 rounded-full bg-white-200 hover:bg-white transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav >
  );
};

export default Navigation;
