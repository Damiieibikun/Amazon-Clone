import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { APIcontext } from '../context/APIContext'

const LikedItems = ({product_id, title, image, price, quantity}) => {
const {removeLike, currentUserInfo, getLikes} = useContext(APIcontext)
    const deleteLike =()=>{
        if(currentUserInfo){
            removeLike({
                product_id: product_id,
                user_id : currentUserInfo.id
            })
            getLikes(currentUserInfo.id)
        }        
    }
  return (  

<div className="justify-self-center max-w-sm bg-white border border-gray-200 rounded-lg shadow p-3">
    <div className='flex justify-center'>
        <img className="rounded-t-lg h-[200px] object-contain" src={image} alt={title} />
    </div>
    <div className="p-5">
        <Link>
            <h5 className="mb-2 font-AmazonEmberRegular text-[16px] text-gray-900">{title}</h5>
        </Link>
        <p className="mb-3 font-AmazonEmber text-[20px]">${new Intl.NumberFormat('en-US').format(price)}</p>
        <p className="mb-3 font-AmazonEmberRegular text-[12px] text-[#178546]">{quantity > 0 ? 'In Stock': 'Out of Stock'}</p>
        <p className="mb-3 font-AmazonEmberRegular text-[12px] text-[#42818D] hover:underline hover:cursor-pointer" onClick={deleteLike}>Remove from Wish List</p>
        
    </div>
</div>  
  )
}

export default LikedItems
