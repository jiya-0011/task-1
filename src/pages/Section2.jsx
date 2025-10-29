import React, { useEffect } from 'react';
import image from '../images/image2.jpeg';
import { Link } from 'react-router-dom';
import image2 from '../images/image3.jpeg';

import { useState ,useRef} from 'react';

export default function Section2(props) {
  const [backgroundimg,setbackgroundimg] = useState(image);
  const images=[image,image2];

  const[time,setTime]=useState('10');

  const inputdata=useRef();

  const focusInput = () => {
    inputdata.current.focus();
  };

  useEffect(()=>{
    if(time<=0) return;

    let intervalId = setInterval(() => {
      setTime(time-1);
    },1000);
    return ()=>clearInterval(intervalId);
  },[time]);
  console.log(props);
  return (
    <>
    <div className='pt-16 pl-1 pr-1'>
      <div
        className="w-full h-80  flex justify-center items-center bg-no-repeat bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${backgroundimg})` }}
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-black/40 px-6 py-3 rounded-lg text-center">
          {props.desription}
        </h1>
        
        <button className="rounded-md p-1 m-1" style={{backgroundColor:'red'}} onClick={()=>setbackgroundimg(backgroundimg==images[0]?images[1]:images[0])}>Click me!</button>     
      </div>
    </div>
      <div className="bg-white py-12 w-full flex justify-center items-center text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Views</h2>
          <div className=" border-3 border-sky-500 max-w-2xl mx-auto text-lg text-gray-600 ">
            Explore amazing DRESSES and discover new styles here.
          </div>
          <div>
            <h1>{time}</h1>
          </div>
          <div>
            <input placeholder='enter here..' className="p-1 border-1 border-black-100 " type="text" ref={inputdata} onClick={focusInput}/>
          </div>
        </div>
      </div>
    </>
  );
}
