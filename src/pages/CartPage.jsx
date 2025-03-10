import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import { Slider_component5 } from '../components/Slider_component';
import CartItems from '../components/CartItems';
import LikedItems from '../components/LikedItems';
import { APIcontext } from '../context/APIContext';
import { cartContext } from '../context/CartContex';
import { appContex } from '../context/appContext';
import { FullScreenLoaders, MiniLoaders, SmallLoaders } from '../components/Loaders';

const CartPage = () => { 
  const navigate = useNavigate()
  const {currentUserInfo,  getLikes,  likes, getAllProducts, allProducts} = useContext(APIcontext)
  const {getCartItems, cartItems, cartLoader, cartItemsLength, checkOutCart, getUsersOrders, usersOrders, addCart, checkoutLoader, checkoutMsg, setCheckOutMsg } = useContext(cartContext)
  const {setclickedCart} = useContext(appContex)
  const [isVisible, setIsVisible] = useState(false); 

  const [buyAgain, setBuyAgain] = useState(true)
  const [showLiked, setShowLiked] = useState(false)
    
  const matchedProducts = allProducts.filter(product =>
    cartItems?.some(cartItem =>
      cartItem.products.some(cartProduct => cartProduct.id === product.id)
    )
  );

  const matchedOrders = allProducts.filter(product =>
    usersOrders?.some(orderItem =>
      orderItem.products.some(cartProduct => cartProduct.id === product.id)
    )
  );

  const products = cartItems && cartItems.length > 0 ? cartItems[0].products : [];

  const checkOut =()=>{
    if(currentUserInfo){
      const data = {
        user_id: currentUserInfo.id
    } 
      checkOutCart(data)
    }   
  }

  const addToCart = (id)=>{
    if(currentUserInfo){
      const data = {
        quantity: 1,
        user_id: currentUserInfo.id,
        product_id: id,
        has_variation: false
    }
    addCart(data)
    }    
    }

    useEffect(()=>{
      if(!currentUserInfo){
        navigate('/login')
      }
    },[currentUserInfo, navigate])  


      useEffect(()=>{
    setclickedCart(false)
    getAllProducts()
    getCartItems()
    getUsersOrders()
    if(currentUserInfo){
    getLikes(currentUserInfo.id)
          }
  }, [currentUserInfo])


    useEffect(()=>{
      if(checkoutMsg){
        setIsVisible(true); 

        const timer = setTimeout(() => {
          setIsVisible(false);
          setCheckOutMsg('')
        }, 2000);
        return () => clearTimeout(timer);
      }
    },[checkoutMsg])


    if(cartLoader) return <FullScreenLoaders/>


 if (matchedProducts.length === 0) return (
    <div className='bg-gray-200 w-full'>
<div className='grid gap-2 grid-cols 1 lg:grid-cols-[1.5fr_0.5fr]'>
      <div className='bg-white p-3 m-3'>
        <p className='font-AmazonEmberRegular text-[28px]'>Your Amazon Cart is empty</p>
        <p className='font-AmazonEmberRegular text-[14px]'>
        Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
        Continue shopping on the <Link to={'/'} className='text-cyan-700 hover:text-orange-700 hover:underline hover:cursor-pointer'> Amazon.com homepage</Link>, learn about <span className='text-cyan-700 hover:text-orange-700 hover:underline'>today's deals</span>, or visit your <span className='text-cyan-700 hover:text-orange-700 hover:underline'>Wish List</span>.
        </p>
      </div>

      <div className='bg-white p-3 m-3 flex flex-col gap-2 border border-gray-300 rounded-lg'>
        <div className='flex gap-2'>
            <img className='w-[50px] h-[50px]' src="https://m.media-amazon.com/images/G/01/marketing/prime/logos/established/2021/prime-logo-rgb-prime-blue._CB601899009_.svg" alt="primelogo" />
            <div className='p-1'>
            <p className='font-AmazonEmber text-[14px] mb-2 px-3'>Free fast delivery. No order minimum. Exclusive savings. Start your 30-day free trial of Prime.</p>
            <Button
            text='Join Prime'
            classStyle='text-[12px] py-1 border border-gray-400'
            style ={{borderRadius:'40px'}}
            />
            </div>            
        </div>      
        
      </div>

      <div className='bg-white p-3 m-3'>
            <p className='font-AmazonEmber text-[24px]'>Your Items</p>
            <div className='text-[14px] flex items-center gap-6 py-2 border border-t-0 border-l-0 border-r-0'>           
                <p onClick={()=>{setBuyAgain(false); setShowLiked(true)}} className='relative text-cyan-700 hover:text-orange-700 hover:underline ml-5 hover:cursor-pointer'>  {likes.length > 0? 'Saved Items' : 'No items saved for later'}
                <hr className={`border-orange-600 border-[0.5px] w-[100px] ${showLiked ? `absolute bottom-[-10px] right-[-10px]`: `hidden bottom-[-10px] right-[30px]`}`}/>
                </p>
                <p onClick={()=>{setBuyAgain(true); setShowLiked(false)}} className='font-AmazonEmber relative hover:cursor-pointer'>Buy it again          
                <hr className={`bottom-[-10px] right-[-10px] border-orange-600 border-[0.5px] w-[100px] ${buyAgain ? `absolute`: `hidden`}`}/>
                </p>
            </div>
                  <div className={`grid-cols-1 text-center md:text-left md:grid-cols-3 mt-10 gap-3 ${showLiked ? `grid` : `hidden`}`}>
                   {likes?.map((like)=>  {
                    const {user_id, product_id:{_id, title, images, price, quantity}} = like
                    return(
                      <LikedItems key={_id} title={title} image={images} price={price} quantity={quantity} product_id ={_id} userId = {user_id}/>
                    )                 
                    })}                
                  </div>
                  <div className={`justify-self-center md:justify-self-start grid-cols-1 md:grid-cols-3 mt-10 gap-3 ${buyAgain ? `grid` : `hidden`}`}>
                   
                   {matchedOrders?.map((order)=>  {
                    const {id, title, image, price, quantity} = order
                    
                    return(
                      <div className=" justify-self-center md:justify-self-start max-w-sm bg-white border border-gray-200 rounded-lg shadow p-3" key={id}>
                      <div className='flex justify-center'>
                          <img className="rounded-t-lg h-[200px] object-contain" src={image} alt={title} />
                      </div>
                      <div className="p-5">
                          <Link to ={`/products/${id}`}>
                              <h5 className="mb-2 font-AmazonEmberRegular text-[16px] text-gray-900">{title}</h5>
                          </Link>
                          <p className="mb-3 font-AmazonEmber text-[20px]">${price}</p>
                          <p className="mb-3 font-AmazonEmberRegular text-[12px] text-[#178546]">{quantity > 0 ? 'In Stock': 'Out of Stock'}</p>
                          {
                            quantity > 0 &&  <p onClick={()=>addToCart(id)} className="mb-3 font-AmazonEmberRegular text-[12px] text-[#42818D] hover:underline hover:cursor-pointer">Add to Cart</p>
                            
                          }                        
                      </div>
                  </div>
                    )               
                  })}               
                    <p className={`font-AmazonEmberRegular text-[14px] mt-2 ${matchedOrders.length > 0 ? `hidden`: `block`}`}>
                    No items to Buy again.
                      </p>
                  </div>
          </div>      
    </div>
    <p className='px-3 font-AmazonEmberRegular text-[12px] max-w-[68%] py-3 text-center mx-auto md:text-left md:m-0'>
      The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. <span className='text-cyan-700 hover:text-orange-700 hover:underline'>Learn more</span> Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
      </p>
      <div className='w-full bg-white pb-4'>
      <div className='px-10 w-[90vw] mx-auto bg-white mb-4 py-3 border border-b-0 border-l-0 border-r-0'>
           <Slider_component5
           listCat = {matchedOrders}
           caption="Related to items you viewed"
           />
     </div>
      </div>     
    </div>
  )

  return(
    <div className='bg-gray-200 w-full'>      
    <div className='grid gap-2 grid-cols 1 lg:grid-cols-[1.5fr_0.5fr]'>
          <div className='bg-white p-3 m-3 relative'>
            <p className='font-AmazonEmberRegular text-[28px]'>Shopping Cart</p>
            {isVisible && <div className="bg-green-500 text-white px-4 py-2 absolute top-[10px] left-2/4 rounded">
          <p className='font-AmazonEmberRegular text-[14px]'>{checkoutMsg}</p>
        </div> }
            
            <div className='flex items-center justify-between font-AmazonEmberRegular text-[15px]'>
                <p className='text-cyan-700 hover:text-orange-700 hover:underline hover:cursor-pointer mb-3'>Deselect all items</p>
                <p className='text-gray-600'>Price</p>
            </div>
            <div>
                {
                    matchedProducts?.map((item)=> {
                      const {id, title, image, price, quantity} = item
                      const fullAmt = products?.find((p) => p.id === id)?.amount ?? price
                      const qtyValue= products?.find((p) => p.id === id)?.quantity ?? 1
                      return (
                            <CartItems key={id}
                            id = {id}
                            image = {image}
                            quantity = {quantity}
                            title = {title}
                            amt ={fullAmt}
                            qtyValue ={qtyValue}/>
                        )
                    })
                }
            </div>
          </div>
    
          <div className='m-3 flex flex-col gap-2'>
          <div className='p-5 bg-white flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start'>
                  <p className='font-AmazonEmberRegular text-[18px]'>Subtotal ({cartItemsLength} items):<span className='font-AmazonEmber'> ${cartItems.length > 0 && cartItems[0].amount}</span></p>
                  <div className='flex items-center gap-2 font-AmazonEmberRegular text-[14px]'>
                    <input type="checkbox" name="" id="" />
                    <p>This order contains a gift</p>
                  </div>
                  <div onClick={checkOut}> 
                  <Button
                  text='Proceed to checkout'
                  classStyle='text-[12px] bg-[#FFD814] hover:bg-[#F7CA00] lg:w-full'
                  style ={{borderRadius:'40px'}}/>
                  {checkoutLoader&& <MiniLoaders/>}
                  </div>                  
            </div>   
            <div className='p-3 flex gap-2 bg-white  border border-gray-300 rounded-lg justify-center items-center lg:justify-start lg:items-start'>
                <img className='w-[50px] h-[50px]' src="https://m.media-amazon.com/images/G/01/marketing/prime/logos/established/2021/prime-logo-rgb-prime-blue._CB601899009_.svg" alt="primelogo" />
                <div className='p-1'>
                <p className='font-AmazonEmber text-[14px] mb-2 px-3'>Free fast delivery. No order minimum. Exclusive savings. Start your 30-day free trial of Prime.</p>
                <Button
                text='Join Prime'
                classStyle='text-[12px] py-1 border border-gray-400'
                style ={{borderRadius:'40px'}}
                />
                </div>            
            </div>      
          </div>
    
          <div className='bg-white p-3 m-3'>
            <p className='font-AmazonEmber text-[24px]'>Your Items</p>
            <div className='text-[14px] flex items-center gap-6 py-2 border border-t-0 border-l-0 border-r-0'>           
                <p  onClick={()=>{setBuyAgain(false); setShowLiked(true)}} className='relative text-cyan-700 hover:text-orange-700 hover:underline ml-5 hover:cursor-pointer'>  {likes.length > 0? 'Saved Items' : 'No items saved for later'}
                <hr className={`border-orange-600 border-[0.5px] w-[100px] ${showLiked ? `absolute bottom-[-10px] right-[-10px]`: `hidden`}`}/>
                </p>                
                <p onClick={()=>{setBuyAgain(true); setShowLiked(false)}} className='font-AmazonEmber relative hover:cursor-pointer'>Buy it again           
                <hr className={`bottom-[-10px] right-[-10px] border-orange-600 border-[0.5px] w-[100px] ${buyAgain ? `absolute`: `hidden`}`}/>
                </p>                
            </div>
                  <div className={`grid-cols-1 md:grid-cols-3 mt-10 gap-3 ${showLiked ? `grid` : `hidden`}`}>
                   {likes?.map((like)=>  {
                    const {user_id, product_id:{_id, title, images, price, quantity}} = like
                    return(
                      <LikedItems key={_id} title={title} image={images} price={price} quantity={quantity} product_id ={_id} userId = {user_id}/>
                    )                 
                    })}                
                  </div>

                  <div className={`justify-self-center md:justify-self-start grid-cols-1 md:grid-cols-3 mt-10 gap-3 ${buyAgain ? `grid` : `hidden`}`}>
                  {matchedOrders?.map((order)=>  {
                    const {id, title, image, price, quantity} = order
                    
                    return(
                      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-3" key={id}>
                      <div className='flex justify-center'>
                          <img className="rounded-t-lg h-[200px] object-contain" src={image} alt={title} />
                      </div>
                      <div className="p-5">
                          <Link to ={`/products/${id}`}>
                              <h5 className="mb-2 font-AmazonEmberRegular text-[16px] text-gray-900">{title}</h5>
                          </Link>
                          <p className="mb-3 font-AmazonEmber text-[20px]">${price}</p>
                          <p className="mb-3 font-AmazonEmberRegular text-[12px] text-[#178546]">{quantity > 0 ? 'In Stock': 'Out of Stock'}</p>
                          {
                            quantity > 0 &&  <p onClick={()=>addToCart(id)} className="mb-3 font-AmazonEmberRegular text-[12px] text-[#42818D] hover:underline hover:cursor-pointer">Add to Cart</p>
                            
                          }                         
                          
                      </div>
                  </div>
                    )                 
             })}                
                   
                    <p className={`font-AmazonEmberRegular text-[14px] mt-2 ${matchedOrders.length > 0 ? `hidden`: `block`}`}>
                    No items to Buy again.
                      </p>
                  </div>
          </div>
          
        </div>
        <p className='px-3 font-AmazonEmberRegular text-[12px] max-w-[68%] py-3 text-center mx-auto md:text-left md:m-0'>
          The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. <span className='text-cyan-700 hover:text-orange-700 hover:underline'>Learn more</span> Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
          </p>
          <div className='w-full bg-white pb-4'>
          <div className='px-10 w-[90vw] mx-auto bg-white mb-4 py-3 border border-b-0 border-l-0 border-r-0'>
               {matchedOrders.length > 0 ?<Slider_component5
               listCat = {matchedOrders}
               caption="Related to items you viewed"
               />: <SmallLoaders/>}
         </div>
          </div>     
        </div>
  )
}

export default CartPage
