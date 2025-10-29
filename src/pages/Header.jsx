import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {
  return (
    <header className="z-1 p-3h-10 w-full fixed bg-gray-500 shadow-sm  flex justify-between items-center space-x-5">
      <div className='flex '>
        <span className='text-lg font-bold text-gray-700 ml-3'>{props.title}</span>
        
      </div>
      <nav className="max-w-screen-xl ml-50 p-2 space-x-4 ">
        

        <div className=" flex justify-between items-center  flex-row-reverse space-x-reverse space-x-8 ">
          <Link to="#" className=" text-white p-0 bg-red-500 hover:text-blue-600"><p className='p-2 border-1'>Login</p></Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">Home</Link>
        </div>
      </nav>
    
    </header>
  );
}
