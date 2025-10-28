import React from 'react';
import image from '../images/image2.jpeg';
import {Link} from 'react-router-dom';


export default function Section2() {
  return (
    <>
      <div
        className="w-full h-80 flex justify-center items-center bg-no-repeat bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-black/40 px-6 py-3 rounded-lg text-center">
          Welcome to our Website
        </h1>
       
        
      </div>

      <div className="bg-white py-12 w-full flex justify-center items-center text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Views</h2>
          <div className=" border-3 border-sky-500 max-w-2xl mx-auto text-lg text-gray-600 ">
            Explore amazing DRESSES and discover new styles here.
          </div>
        </div>
      </div>
    </>
  );
}
