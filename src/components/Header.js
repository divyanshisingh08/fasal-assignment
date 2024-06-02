import React from 'react'
import logo1 from './images/logo1.png'


const Header = () => {
  return (
 
    <div className=' absolute px-8 py-2  bg-gradient-to-b from-black z-10'>
     <img className='w-16 h-16' src={logo1} alt="logo" />
    </div>
    
  )
}

export default Header
