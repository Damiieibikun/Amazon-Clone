import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const RatingCard = ({ratings = []}) => {
const stars = ratings.length > 0 ? ratings.reduce((acc, r) => acc + r.value, 0) / ratings.length : 0;
const percentagefiveStars = ratings.length > 0 ? ((ratings.filter((r)=> r.value === 5).length/ratings.length) * 100).toFixed(1) : 0
const percentagefourStars = ratings.length > 0 ? ((ratings.filter((r)=> r.value === 4).length/ratings.length) * 100).toFixed(1) : 0
const percentagethreeStars = ratings.length > 0 ? ((ratings.filter((r)=> r.value === 3).length/ratings.length) * 100).toFixed(1) : 0
const percentagetwoStars = ratings.length > 0 ? ((ratings.filter((r)=> r.value === 2).length/ratings.length) * 100).toFixed(1) : 0
const percentageOneStar = ratings.length > 0 ? ((ratings.filter((r)=> r.value === 1).length/ratings.length) * 100).toFixed(1) : 0
  return (
    <div>      
      <div className="flex items-center mb-2">
            {[...Array(Math.floor(stars))].map((_, index) =>(
                <IoIosStar size={20} className='text-[#DE7921]' key={index}/>
            ))}
            {
            [...Array(5 - Math.floor(stars))].map((_, index) =>(
                <IoIosStarOutline size={20} className=' text-[#DE7921]' key={index}/>
            ))  
            }
        
        <div className='font-AmazonEmberRegular flex items-center text-[18px]'>
        <p className="ms-1 font-medium">{stars}</p>
            <p className="ms-1  font-medium">out of</p>
            <p className="ms-1  font-medium">5</p>
        </div>        
        </div>

        <div>
            <p className="text-sm font-AmazonEmberRegular text-gray-600">{ratings.length} global ratings</p>
            <div className="flex items-center mt-4 font-AmazonEmberRegular">
                <p className="text-sm  text-cyan-700 hover:underline">5 star</p>
                <div className="w-2/4 h-[21px] mx-4 border border-gray-400 rounded">
                    <div className="h-5 bg-[#DE7921] rounded-l" style={{width: `${Math.round(percentagefiveStars)}%`}}></div>
                </div>
                <span className="text-sm font-medium text-cyan-700">{Math.round(percentagefiveStars)}%</span>
            </div>
            <div className="flex items-center mt-4 font-AmazonEmberRegular">
                <p className="text-sm  text-cyan-700 hover:underline">4star</p>
                <div className="w-2/4 h-[21px] mx-4 border border-gray-400 rounded">
                    <div className="h-5 bg-[#DE7921] rounded-l" style={{width: `${Math.round(percentagefourStars)}%`}}></div>
                </div>
                <span className="text-sm font-medium text-cyan-700">{Math.round(percentagefourStars)}%</span>
            </div>
            <div className="flex items-center mt-4 font-AmazonEmberRegular">
                <p className="text-sm  text-cyan-700 hover:underline">3 star</p>
                <div className="w-2/4 h-[21px] mx-4 border border-gray-400 rounded">
                    <div className="h-5 bg-[#DE7921] rounded-l" style={{width: `${Math.round(percentagethreeStars)}%`}}></div>
                </div>
                <span className="text-sm font-medium text-cyan-700">{Math.round(percentagethreeStars)}%</span>
            </div>
            <div className="flex items-center mt-4 font-AmazonEmberRegular">
                <p className="text-sm  text-cyan-700 hover:underline">2 star</p>
                <div className="w-2/4 h-[21px] mx-4 border border-gray-400 rounded">
                    <div className="h-5 bg-[#DE7921] rounded-l" style={{width: `${Math.round(percentagetwoStars)}%`}}></div>
                </div>
                <span className="text-sm font-medium text-cyan-700">{Math.round(percentagetwoStars)}%</span>
            </div>
            <div className="flex items-center mt-4 font-AmazonEmberRegular">
                <p className="text-sm  text-cyan-700 hover:underline">1 star</p>
                <div className="w-2/4 h-[21px] mx-4 border border-gray-400 rounded">
                    <div className="h-5 bg-[#DE7921] rounded-l" style={{width: `${Math.round(percentageOneStar)}%`}}></div>
                </div>
                <span className="text-sm font-medium text-cyan-700">{Math.round(percentageOneStar)}%</span>
            </div>
        </div>
    </div>
  )
}

export default RatingCard
