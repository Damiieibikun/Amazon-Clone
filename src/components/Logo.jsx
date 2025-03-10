import React from 'react'
import img from '../assets/amazonlogopng.png'
import darkimg from '../assets/amaondark.png'
import footerimg from '../assets/amazonfooterlogo.png'

const Logo = () => {
    
  return (
    <div className='flex items-center justify-center'>
      <img src={img} alt="" className='w-[120px]' />
    </div>
  )
}

const Dark_logo = () =>{
  return (
    <div className='flex items-center justify-center'>
      <img src={darkimg} alt="" className='w-[120px]' />
    </div>
  )
}
const Footer_logo = () =>{
  return (
    <div className='flex items-center justify-center'>
      <img src={footerimg} alt="" className='w-[100px]' />
    </div>
  )
}

export  {Logo, Dark_logo, Footer_logo}
