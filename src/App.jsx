import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header'
// import {useEffect,useState} from 'react';
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'
import Footer from './Day-2-Components/Footer'
function App() {
  const headTitle="Logo";
  const sidebarTitle="Links";
  const sidebarLinks=[
    {url:'#',text:'women section'},
    {url:'#',text:'mens section'},
    {url:'#',text:'child section'}
  ];
  const description='find your style!!'
  return (
    <>
    <div className='realtive'>
    <div className='absolute flex flex-col'>
      <Header title={headTitle}/>
    </div>
    
    <div className=' grid grid-flow-col'>
       <div className='grid grid-cols-1 pl-38'>
        
        <Section1 title={sidebarTitle} link={sidebarLinks}/>
        <Section2 desription={description}/>
      </div>
    </div>
    <div className='absolute w-252 items-center '>
        <Footer/>
    </div>
    </div>
    </>
  )
}

export default App
