import {Link} from 'react-router-dom';
import React from 'react'

function Section1(props){
    console.log(props);
    return(
        
        <div className='flex'>
        <div className="h-200 p-3 pt-15
         fixed text-white left-0 w-38 shadow-3 bg-gray-500">
            {/* <h2 className="text-lg text-gray-700 font-bold mb-4">LOGO</h2> */}
            <hr/>
            <h2 className="text-lg pt-3 font-bold mb-4">{props.title}</h2>
            <ul>
                {
                    props.link.map((link,index)=>(
                        <li key={index}>
                            <Link to={link.url} className="hover:text-gray-300">{link.text}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        </div>
    );
}

export default Section1