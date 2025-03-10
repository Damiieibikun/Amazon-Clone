import React, { useContext, useEffect } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import Button from './Button';
import RatingCard from './RatingCard';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { appContex } from '../context/appContext';

import { APIcontext } from '../context/APIContext';
import { SmallLoaders } from './Loaders';
const CustomersReview = ({productInfo, arrayObj}) => {
    const {id} = productInfo
    const {removeSideCart, setProductRated, setEditReview} = useContext(appContex)
    const {reviews, getReviews, reviewsLoader, ratings, getRatings, currentUserInfo,  removeReviews,  removeRatings, reviewMsg} = useContext(APIcontext)   

    const deleteReview = (review_id, user_id)=>{
        const reviewData = {
            review_id: review_id,
            user_id : user_id,
            id: id
        }

        const ratingData = {
            user_id : user_id,
            product_id: id
        }
        removeReviews(reviewData)
        removeRatings(ratingData)
    }

    useEffect(() => {
        getRatings(id);
        getReviews(id);
    }, [id]);

   
  return (
    <div className='grid p-4 grid-cols-1 md:grid-cols-[0.5fr_1.5fr]'>
        <div className='pb-5 w-fit min-w-[400px] flex flex-col content-center'>
        <hr className='w-3/4 mb-4'/>
      <p className='font-AmazonEmber text-[21px]'>Customer's reviews</p>     
         <RatingCard ratings = {ratings}/>
        <div className='mt-5 py-5 flex flex-col gap-2'>
            <hr className='w-3/4 mb-4'/>
            <p className='font-AmazonEmber text-[18px]'>Review this product</p>
            <p className='font-AmazonEmberRegular text-[14px]'>Share your thoughts with other customers</p>
            <Link to={'/writereview'} state={{productInfo, arrayObj}} onClick={()=>{removeSideCart(); setProductRated(false)}}>
            <Button
            text='Write a customer review'
            classStyle='border border-gray-400 text-[13px] py-[6px] w-[80%] hover:bg-gray-100'
            style={{borderRadius: '40px'}}
            />
            </Link>
         
            <hr className='w-3/4 mt-5'/>
        </div>
    </div>
    <div className='p-5 border border-l-0  border-b-0 border-r-0'>
   

        <p className='font-AmazonEmber text-[18px] mb-2'>{reviews.length > 0 ? 'Reviews from Customers': 'No reviews yet for this product'}</p>
        {reviewsLoader ? <SmallLoaders/>:null}
        {
          reviews?.map((review) => {
            const { id, text, created_at, user: { id:user_id, first_name, last_name } } = review;
            const rating = ratings.find((r) => r.user.id === user_id);
            const ratedNum = rating ? rating.value: null
            const formattedDate = new Date(created_at).toLocaleDateString('en-US', { dateStyle: 'long' });
         
            return (
                <div className='flex flex-col my-3 gap-2' key={id}>
                    <div className='flex items-center gap-3'>
                        <FaCircleUser size={35} className='text-gray-400' />
                        <p className='font-AmazonEmberRegular text-[13px]'>{first_name[0]}. {last_name}</p>
                    </div>
                    
                    <div className='flex items-start gap-2'>
                        <div className="flex items-center mb-2">
                        
                            {
                                rating ? (
                                    <>
                                       
                                        {[...Array(Math.floor(rating.value))].map((_, index) => (
                                            <IoIosStar size={18} className='text-[#DE7921]' key={index} />
                                        ))}
                                       
                                        {[...Array(5 - Math.floor(rating.value))].map((_, index) => (
                                            <IoIosStarOutline size={18} className='text-[#DE7921]' key={index} />
                                        ))}
                                    </>
                                ) : null
                            }
                   
                
                </div>
                        <p className='font-AmazonEmber capitalize'>{text}</p>
                    </div>
                    <p className='font-AmazonEmberRegular text-[14px] text-gray-600'>Reviewed on {formattedDate}</p>
                    <p className='font-AmazonEmberRegular text-[14px] capitalize'>{text}</p>
                    <div className='flex gap-3 items-center'>
                        <Button
                        text='Helpful'
                        style={{borderRadius: '40px'}}
                        classStyle='border border-gray-500 px-8 py-[3px] text-[14px]'
                        />
        
                        <p className='font-AmazonEmberRegular text-[14px] text-gray-600 px-3 border border-r-0 border-t-0 border-b-0 hover:cursor-pointer'>Report</p>
                        {currentUserInfo && user_id === currentUserInfo.id ? <div className='flex gap-3 items-center'>
                            <Link to={'/writereview'} state={{productInfo, arrayObj, text, ratedNum, review_id:id}} className='font-AmazonEmberRegular text-[12px] text-gray-600 px-3 border border-r-0 border-t-0 border-b-0 hover:cursor-pointer' onClick={()=>{setEditReview(true); setProductRated(false)}}>Edit</Link>
                            <div className='flex flex-col gap-2'>
                            {reviewMsg ? <p className='font-AmazonEmberRegular text-[12px] text-white bg-green-600 rounded-md p-2'>{reviewMsg}</p>: null}
                            <p className='font-AmazonEmberRegular text-[12px] text-gray-600 px-3 border border-r-0 border-t-0 border-b-0 hover:cursor-pointer' onClick={()=>deleteReview(id,user_id)}>Delete</p>
                            </div>
                            
                          
                        </div>: null}
                       
                    </div>
                </div>
            )
            } )
        }      


    </div>
        
    </div>
    
  )
}

export default CustomersReview
