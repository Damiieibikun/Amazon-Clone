import React, { useContext } from 'react'
import { appContex } from '../context/appContext'

const Footer_login = () => {
    const {currentYear} = useContext(appContex)
  return (
    <footer className='min-h-[180px] mt-[26px] bg-slate-50 w-full flex flex-col justify-center items-center'>
      <ul className='flex gap-4 mb-[10px]'>
        <li className='font-AmazonEmberRegular text-[12px] text-sky-700 hover:text-red-600 hover:cursor-pointer'>
        Conditions of Use  
        </li>
        <li className='font-AmazonEmberRegular text-[12px] text-sky-700 hover:text-red-600 hover:cursor-pointer'>
        Privacy Notice 
        </li>
        <li className='font-AmazonEmberRegular text-[12px] text-sky-700 hover:text-red-600 hover:cursor-pointer'>
        Help   
        </li>
      </ul>
      <p className='font-AmazonEmberRegular text-[11px] text-gray-700'>&copy; 1996-{currentYear}, Amazon.com, Inc. or its affiliates</p>
    </footer>
  )
}

export default Footer_login
