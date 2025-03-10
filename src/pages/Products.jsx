import React, { useContext, useEffect } from 'react'
import Product_card from '../components/Product_card'
import SideCart from '../components/SideCart'
import { APIcontext } from '../context/APIContext'
import { appContex } from '../context/appContext'
import { useLocation } from 'react-router-dom'
import { Slider_component6 } from '../components/Slider_component'
import { FullScreenLoaders, SmallLoaders } from '../components/Loaders'

const Products = () => {
    const{allProducts, getAllProducts, productsLoader, allCategories}= useContext(APIcontext)
   const{setPage} = useContext(appContex)

   const location = useLocation()
    useEffect(()=>{
      setPage(location.pathname)
      getAllProducts()
    }, [location.pathname, setPage])


    if(productsLoader) return <FullScreenLoaders/>

  return (
    <div>
      <SideCart/>
      <div>
        {allCategories.length > 0 ? <div>
          <Slider_component6
          listCat= {allCategories}
          />
        </div>:<SmallLoaders/>}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-[95%] mx-auto justify-items-center py-5'>
     {allProducts?.map((products)=>(
       <Product_card 
       key={products.id}
       value = {products}
       id={products.id}/>
     ))}
    </div>
    </div>
   
  )
}

export default Products
