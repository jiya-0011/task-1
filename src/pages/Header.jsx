import React from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <header className=" bg-gray-500 z-40 shadow-sm">
      <nav className="max-w-screen-xl ml-50 p-5">
        
          <div className="flex flex-row-reverse space-x-reverse space-x-8 ">
            <Link to="#" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
      </nav>
    </header>
  );
}
