import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa6";
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { appContex } from '../context/appContext';
import { APIcontext } from '../context/APIContext';
import { cartContext } from '../context/CartContex';
const Product_card = ({value, id}) => {
  const {currentUserInfo} = useContext(APIcontext)
  const navigate = useNavigate()
    const {title, quantity, price, image, rating} = value
    const {showSideCart} = useContext(appContex)
    const { addCart} = useContext(cartContext)
    const bg_img = {
        backgroundImage: `url(${image})`
    }
    const addToCart = ()=>{
      if(currentUserInfo){
        const data = {
          quantity: 1,
          user_id: currentUserInfo.id,
          product_id: id,
          has_variation: false
      }
      addCart(data)
      }      
      else{
        navigate('/login')
      }  
    }
    return (  
 <div className='border p-3 rounded-sm flex flex-col'> 
      <div style={bg_img} className='w-[200px] h-[200px] bg-no-repeat bg-contain bg-center self-center'></div>
        <div className='flex flex-col'>
         <Link to={`/products/${id}`} className='lg:text-left text-center'>
         <p className='text-cyan-800 text-[16px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{title.length > 100 ? `${title.substring(0, 100)}...` : title}</p>
         </Link>
          
          <div className='flex items-center my-1 lg:self-start self-center'> {[...Array(Math.round(rating))].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))}{[...Array(5-Math.round(rating))].map((_, index) => (<FaStar key={index} className='text-gray-200'/>))} <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{quantity}</span></div>
          {
        <div className='lg:self-start self-center'>
          <div className='flex items-center gap-2 my-1'> 
          <span className='flex items-center'>
                <sup className='text-[12px]'>$</sup>
                <p>
                <span className='font-AmazonEmberRegular text-[28px]'>
                    {price.split('.')[0]} 
                </span>
               
                </p>
                <sup className='text-[12px]'>
                    {price.split('.')[1] || '00'} 
                </sup>
            </span>
          </div>
          </div>
          }                   
          <div className='lg:self-start self-center text-[14px] font-AmazonEmberRegular my-1'>Delivery <span className='font-bold'>Friday, Oct 11</span>
          <p className='font-AmazonEmberRegular text-[11px] text-gray-700 my-1'>Ships to Nigeria</p>
          </div>
        </div>
       
       <div onClick={()=>{showSideCart(); addToCart()}} className='lg:self-start self-center'>
       <Button  text='Add to cart' classStyle={'bg-[#FFD814] hover:bg-[#F7CA00] font-AmazonEmberRegular text-[12px] hover:cursor-pointer self-start'} style ={{borderRadius:'40px'}}/>
       </div>
       
       
    </div>
  )
}

export default Product_card
