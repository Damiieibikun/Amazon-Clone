import React from 'react'
import { Link } from 'react-router-dom';
const Home_CardTwo = ({title, catmain, mainimg, cat1, cat1img, cat2, cat2img, cat3, cat3img, caption}) => {
  const bg_imgmain = {
    backgroundImage: `url(${mainimg})`
  }
  const bg_img1 = {
    backgroundImage: `url(${cat1img})`
  }
  const bg_img2 = {
    backgroundImage: `url(${cat2img})`
  }
  const bg_img3 = {
    backgroundImage: `url(${cat3img})`
  }
  
  
  return (
    <Link className='bg-white p-4 border w-[300px] md:w-full' to={'/products'}>
    <p className='font-AmazonEmber text-[21px] mb-2'>{title}</p>
     <div className="h-[145px] max-w-[300px] bg-no-repeat bg-center bg-cover" style={bg_imgmain}></div>
     <p className='font-AmazonEmberRegular mb-3 text-gray-800'>{catmain}</p>
     <div className='grid grid-cols-3 gap-[2px]'>
       <div>
         <div className="h-[70px] max-w-[98px] bg-no-repeat bg-center bg-cover" style={bg_img1}></div>
         <p className='font-AmazonEmberRegular text-gray-800'>{cat1}</p>
       </div>
       <div>
         <div className="h-[70px] max-w-[98px] bg-no-repeat bg-center bg-cover" style={bg_img2}></div>
         <p className='font-AmazonEmberRegular text-gray-800'>{cat2}</p>
       </div>
       <div>
         <div className="h-[70px] max-w-[98px] bg-no-repeat bg-center bg-cover" style={bg_img3}></div>
         <p className='font-AmazonEmberRegular text-gray-800'>{cat3}</p>
       </div>        
     </div>
     <p className='text-cyan-600 text-[12px] font-AmazonEmberRegular hover:text-red-600 hover:cursor-pointer mt-3'>{caption}</p>
   </Link>
  )
}

export default Home_CardTwo
