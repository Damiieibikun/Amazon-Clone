import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import Button from '../components/Button';
import { Slider_component5 } from '../components/Slider_component';
import { appContex } from '../context/appContext';
import { APIcontext } from '../context/APIContext';
import { SmallLoaders } from '../components/Loaders';

const WriteReview = () => {
    const location = useLocation()
    const {productInfo, arrayObj, text, ratedNum, review_id} = location.state
   const {id, title, images:[img]} = productInfo
   const {ratedVal, selectedRating, reviewError, reviewInput, handleReviewandRating, setSelectedRating,
    handleReviewInput, setclickedCart, productRated,editReview, setReviewInput
    } = useContext(appContex)

    const [isVisible, setIsVisible] = useState(false); 
    const {reviewMsg, ratingMsg, postedLikeMsg, setPostedLikeMsg, currentUserInfo} = useContext(APIcontext)

    const navigate = useNavigate()
    const postReviewAndRating = (e)=>{
      e.preventDefault()
      handleReviewandRating(id, review_id)
    }

    useEffect(()=>{
      if(!currentUserInfo){
        navigate('/login')
      }
    }, [navigate, currentUserInfo])



    useEffect(()=>{
      setclickedCart(false)

      if(productRated){
        setIsVisible(true);
        const timer = setTimeout(() => {
          setIsVisible(false);
          navigate(`/products/${id}`);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [productRated, navigate, setclickedCart, id])

    useEffect(()=>{
      if(editReview){
        setReviewInput({
          writereview: text
        })

        setSelectedRating(ratedNum)
      }
    },[editReview, ratedNum, text, setReviewInput, setSelectedRating])

    useEffect(()=>{
      if(postedLikeMsg.length > 0){
        setIsVisible(true);
        const timer = setTimeout(() => {
          setIsVisible(false);
          setPostedLikeMsg('')         
        }, 3000);
       
        return () => clearTimeout(timer);
      }
    },[])
  return (
    <div className='w-[90%] mx-auto'>
       <>
      {isVisible && (
        <div className='flex flex-col gap-2 fixed top-2 z-30'>
          <div className="bg-green-500 text-white px-4 py-3 rounded w-fit">
          <p className='font-AmazonEmberRegular text-[14px]'>{reviewMsg}</p>
        </div>
        <div className="bg-green-500 text-white px-4 py-3 rounded w-fit">
          <p className='font-AmazonEmberRegular text-[14px]'>{ratingMsg}</p>
        </div>
        <div className="bg-green-500 text-white px-4 py-3 rounded w-fit">
          <p className='font-AmazonEmberRegular text-[14px]'>{postedLikeMsg}</p>
        </div>
        </div>
       
      )}
    </>
 <form className='flex flex-col gap-2 my-5' onSubmit={postReviewAndRating}>
      <p className='font-AmazonEmber text-[18px]'>{editReview ? 'Edit Review':' Create Review'}</p>
      <div className='flex items-center gap-3 py-3 border border-t-0 border-l-0 border-r-0'>
        <img src={img} alt="" srcSet="" className='h-14 w-14'/>
        <p className='font-AmazonEmberRegular text-[12px]'>{title}</p>
      </div>
      <div className='py-5 border border-t-0 border-l-0 border-r-0'>
       {reviewError.writeReview && <p className='font-AmazonEmberRegular text-[11px] text-red-600'>{reviewError.rating}</p>}
      <div className='flex justify-between items-start'>
        <p className='font-AmazonEmber text-[13px]'>Overall rating</p>
        <p className='font-AmazonEmberRegular text-[11px] text-cyan-700 hover:cursor-pointer' onClick={()=>setSelectedRating(0)}>Clear</p>
        </div>
        <div className='flex gap-1 items-center'>
            {[...Array(5)].map((_, index) => (
                <IoIosStar
                    key={index}
                    size={28}
                    className={index < selectedRating ? 'text-[#ebba3f]' : 'text-gray-200'}
                    onClick={() => ratedVal(index)}
                    style={{ cursor: 'pointer' }} 
                />
            ))}
        </div>     
      </div>

      <div className='flex flex-col gap-2 py-5 border border-t-0 border-l-0 border-r-0'>
      {reviewError.writeReview && <p className='font-AmazonEmberRegular text-[11px] text-red-600'>{reviewError.writeReview}</p>}
        <p className='font-AmazonEmber text-[13px]'>Add a written review</p>
        <textarea onChange={handleReviewInput} value={reviewInput.writereview} name="writereview" id="" rows="5" className='border border-gray-400 rounded-md p-2'></textarea>
      </div>
      <p className='font-AmazonEmberRegular text-[11px]'>We will notify you via email as soon as your review is processed.</p>
    
    <Button
    text={editReview ? 'Edit Review': 'Submit'}
    classStyle='self-end text-[12px] bg-[#FFD814] hover:bg-[#F7CA00]'
    style ={{borderRadius:'40px'}}
    />
    </form>
    <div className='px-10 w-[90vw] mx-auto bg-white mb-4 py-3 border border-b-0 border-l-0 border-r-0'>
           {arrayObj.length > 0? <Slider_component5
           listCat = {arrayObj}
           caption="Related to items you viewed"
           />: <SmallLoaders/>}
     </div>
    </div>
   


  )
}

export default WriteReview
