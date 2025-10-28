import {Link} from 'react-router-dom';
import React from 'react'
function Section1(){
    return(
        <div className="p-4 z-0 top-0 fixed h-screen text-white left-0 w-38 shadow-3 bg-gray-500">
            <h2 className="text-lg text-gray-700 font-bold mb-4">LOGO</h2>
            <hr/>
            <h2 className="text-lg pt-3 font-bold mb-4">untitetled sidebar</h2>
            <ul>
                <li>
                    <Link to="#" className="hover:text-gray-300">Mens Section</Link>
                </li>
                <li>
                    <Link to="#" className="hover:text-gray-300">Womens Section</Link>
                </li>
                <li>
                    <Link to="#" className="hover:text-gray-300">Child Section</Link>
                </li>
            </ul>
        </div>
    );
}

export default Section1