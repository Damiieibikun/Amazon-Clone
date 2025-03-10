import React from 'react'
import { Link } from 'react-router-dom';

const Home_CardOne = ({title, cat1, cat1img, cat2, cat2img, cat3, cat3img, cat4, cat4img, caption}) => {
  const bg_img1 = {
    backgroundImage: `url(${cat1img})`
  }
  const bg_img2 = {
    backgroundImage: `url(${cat2img})`
  }
  const bg_img3 = {
    backgroundImage: `url(${cat3img})`
  }
  const bg_img4 = {
    backgroundImage: `url(${cat4img})`
  }
   return (
    <Link className='bg-white p-4 w-[300px] md:w-full' to={'/products'}>
      <p className='font-AmazonEmber text-[21px] mb-2'>{title}</p>
      <div className='grid grid-cols-2 grid-rows-2 mb-4 gap-3'>
        <div>
          <div className="h-[120px] max-w-[130px] bg-no-repeat bg-center bg-cover" style={bg_img1}></div>
          <p className='font-AmazonEmberRegular text-[11px]'>{cat1}</p>
        </div>
        <div>
          <div className="h-[120px] max-w-[130px] bg-no-repeat bg-center bg-cover" style={bg_img2}></div>
          <p className='font-AmazonEmberRegular text-[11px]'>{cat2}</p>
        </div>
        <div>
          <div className="h-[120px] max-w-[130px] bg-no-repeat bg-center bg-cover" style={bg_img3}></div>
          <p className='font-AmazonEmberRegular text-[11px]'>{cat3}</p>
        </div>
        <div>
          <div className="h-[120px] max-w-[130px] bg-no-repeat bg-center bg-cover" style={bg_img4}></div>
          <p className='font-AmazonEmberRegular text-[11px]'>{cat4}</p>
        </div>        
      </div>
          <p className='text-cyan-600 text-[12px] font-AmazonEmberRegular hover:text-red-600 hover:cursor-pointer mt-9'>{caption}</p>
      
     </Link>
  )
}

export default Home_CardOne
