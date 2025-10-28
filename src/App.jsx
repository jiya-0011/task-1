import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header'
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'

function App() {
  
  return (
    <>
    <div className='grid grid-flow-col'>
      <Section1/>
   
     <div className='grid grid-cols-1 pl-38'>
        <Header/>
        <Section2/>
      </div>
    </div>
    </>
  )
}

export default App
