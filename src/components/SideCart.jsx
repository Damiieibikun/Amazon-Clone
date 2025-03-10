import React, { useContext, useEffect } from 'react'
import { appContex } from '../context/appContext'
import { Link } from 'react-router-dom'
import Button from './Button'
import { PiTrashSimpleBold } from "react-icons/pi";
import { APIcontext } from '../context/APIContext';
import { cartContext } from '../context/CartContex';

const SideCart = () => {
    const {clickedCart, removeSideCart} = useContext(appContex)
    const{getAllProducts, allProducts, currentUserInfo} = useContext(APIcontext)
    const {getCartItems, cartItems, sideCartLoader, handleEditCartInfo, deleteCartItems} = useContext(cartContext)

    const matchedProducts = allProducts.filter(product =>
      cartItems.some(cartItem =>
        cartItem.products.some(cartProduct => cartProduct.id === product.id)
      )
    );
    const products = cartItems && cartItems.length > 0 ? cartItems[0].products : [];
    const deleteCart =()=>{
      const data = {
        user_id: currentUserInfo.id
    }    
      deleteCartItems(data)
    }
    useEffect(()=>{
      getAllProducts()
      getCartItems()
    }, [clickedCart])
    if(sideCartLoader && currentUserInfo) return <div role="status" className={`w-[130px] p-2 h-full fixed right-0 border top-0 flex flex-col justify-center items-center bg-white z-50 ${ clickedCart ? `block`: `hidden`}`}>
    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>

  return (
    <div className={`${clickedCart ? `hidden md:flex w-[130px] md:p-2 md:h-full md:fixed md:right-0 md:border md:top-0 md:flex-col md:bg-white md:z-50`: `hidden`}`}>
      <p className='font-AmazonEmberRegular text-center text-[12px]'>Subtotal</p>
      <p className='font-AmazonEmber text-center text-[14px] text-red-700'>${cartItems.length > 0 && cartItems[0].amount}</p>
      <Link to={'/cart'} className='pb-3' onClick={removeSideCart}>
      <Button
      text='Go to Cart'
      classStyle='text-[12px] py-[2px] border border-gray-400 w-full'
        style ={{borderRadius:'40px'}}
      />
      </Link>
      <div className='overflow-y-scroll hide-scrollbar'>
        {matchedProducts?.map((item) => {
          const {id, image, quantity} = item
          return  (
            <div className='py-3 mt-4 border border-l-0 border-r-0 border-b-0' key={id}>
                <div className='w-[90%] h-[130px] bg-no-repeat bg-center bg-contain m-auto' style={{backgroundImage: `url(${image})`}}></div>
                <p className='font-AmazonEmber text-center text-[14px] mb-4'>${products?.find((p) => p.id === id)?.amount ?? null}</p>
                <div className='flex justify-evenly items-center'>
                    <select onChange={(e)=>handleEditCartInfo(e, id)} name="" id="" className='text-[11px] bg-gray-100 border rounded-md border-gray-300 px-2 py-[2px]' value={products?.find((p) => p.id === id)?.quantity ?? 1}>
                    {[...Array(quantity)].map((_, index) => (
                            <option key={index} value={index + 1}>
                            {`${index + 1}`}
                            </option>
                        ))}
                    </select>
                    <div onClick={deleteCart} className='py-[2px] px-1 border border-gray-400 flex justify-center items-center rounded-lg'>
                        <PiTrashSimpleBold size={15}/>
                    </div>
                </div>
            </div>
        )
        }
        
       )}
      </div>
    </div>
  )
}

export default SideCart
