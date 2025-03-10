import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartContex';
import { APIcontext } from '../context/APIContext';
const CartItems = ({id, image, title, amt, qtyValue}) => {
    const{handleEditCartInfo, deleteCartItems} = useContext(cartContext)
    const{currentUserInfo, postLike} = useContext(APIcontext)
  

    const submitLike = ()=>{
        if(currentUserInfo){
            const data =  {
                product_id: id,
                user_id: currentUserInfo.id
            }    
            postLike(data)
        }
      
    }
  return (
    <div className='grid grid-cols-1 gap-3 md:px-3 py-5 border border-l-0 border-r-0 lg:grid-cols-[0.5fr_2fr_0.5fr]'>

                <div className='flex items-center h-[200px] lg:h-auto'>
                    <input className='w-4 h-4' type="checkbox" name="" id="" />
                    <div className='w-[90%] h-full bg-no-repeat bg-center bg-contain m-auto' style={{backgroundImage: `url(${image})`}}></div>
                </div>
                <div>
                    <Link to={`/products/${id}`} className='font-AmazonEmberRegular text-[18px] mb-2'>{title}</Link>
                    <p className='font-AmazonEmberRegular text-[12px] text-[#187642]'>In Stock</p>
                    
                    <div className='font-AmazonEmberRegular  py-2 flex items-center'>
                    <select onChange={(e)=> handleEditCartInfo(e, id)} className='text-[13px] bg-gray-200 border rounded-md border-gray-300 px-2 py-1 mr-3' name="" id="" value={qtyValue}>
                        {[...Array(10)].map((_, index) => (
                            <option key={index} value={index + 1}>
                            {`Qty: ${index + 1}`}
                            </option>
                        ))}
                        </select>
                        <p onClick={deleteCartItems} className='text-cyan-700 hover:text-orange-700 hover:underline hover:cursor-pointer border border-gray-300 border-r-0 border-b-0 border-t-0 px-3 text-[12px]'>Delete</p>
                        <p onClick={submitLike} className='text-cyan-700 hover:text-orange-700 hover:underline hover:cursor-pointer border border-gray-300 border-r-0 border-b-0 border-t-0 px-3 text-[12px]'>Save for later</p>
                        <p className='text-cyan-700 hover:text-orange-700 hover:underline hover:cursor-pointer border border-gray-300 border-r-0 border-b-0 border-t-0 px-3 text-[12px]'>Compare with similar items</p>
                        <p className='text-cyan-700 hover:text-orange-700 hover:underline hover:cursor-pointer border border-gray-300 border-r-0 border-b-0 border-t-0 px-3 text-[12px]'>Share</p>
                       
                    </div>
                </div>
                <div className='text-[18px] font-AmazonEmber text-right'>${amt}</div>
            </div>
  )
}

export default CartItems
