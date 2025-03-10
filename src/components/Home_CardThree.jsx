import React from 'react'
import { Link } from 'react-router-dom';

const Home_CardThree = ({title, img, caption}) => {
    const bg_img = {
        backgroundImage: `url(${img})`
      }
  return (
    <Link className='bg-white p-4 border w-[300px] md:w-full'to={'/products'}>
    <p className='font-AmazonEmber text-[21px]'>{title}</p>
    <div className='h-[300px] max-w-[300px] flex justify-center items-center'>
    <div className="h-[280px] w-[280px] bg-no-repeat bg-center bg-cover" style={bg_img}></div>
    </div>    
    <p className='text-cyan-600 text-[12px] font-AmazonEmberRegular hover:text-red-600 hover:cursor-pointer mt-6'>{caption}</p>
    </Link>
  )
}

export default Home_CardThree
