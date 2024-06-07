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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`fixed md:static top-0 left-0 w-full h-full md:w-auto md:h-auto bg-slate-100 md:bg-transparent z-10 md:z-auto transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center h-full md:h-auto relative">
            <button onClick={toggleMenu} className="absolute top-4 right-4 md:hidden text-custom-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ul className="flex flex-col md:flex-row md:space-x-4 items-center justify-center w-full md:w-auto space-y-6 md:space-y-0">
              <li>
                <a href="#" className="block text-sm text-slate-800 hover:text-custom-500 px-8 py-2 bg-white-200 hover:bg-white hover:rounded-md transition-colors duration-200 ">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm text-slate-800 hover:text-custom-500 px-8 py-2 bg-white-200 hover:bg-white hover:rounded-md transition-colors duration-200 ">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm text-slate-800 hover:text-custom-500 px-8 py-2 bg-white-200 hover:bg-white hover:rounded-md transition-colors duration-200 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm text-slate-800 hover:text-custom-500 px-8 py-2 bg-white-200 hover:bg-white hover:rounded-md transition-colors duration-200 ">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
