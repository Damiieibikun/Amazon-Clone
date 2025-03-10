import React, { useContext, useEffect, useState } from 'react'
import SideCart from '../components/SideCart'
import Product_card from '../components/Product_card'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { APIcontext } from '../context/APIContext'
import { Slider_component6 } from '../components/Slider_component'
import { FullScreenLoaders, SmallLoaders } from '../components/Loaders'

const Categories = () => {
    const {id} = useParams()
    const{baseURL, merchantId, allCategories}= useContext(APIcontext)
const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([])
const [catLoader, setCatLoader] = useState(true)
const getCategoryProducts = async (id) => {

try {
    const response = await axios.get(`${baseURL}/products?merchant_id=${merchantId}&category_id=${id}`)
    setSelectedCategoryProducts(response.data.data)
    setCatLoader(false)
} catch (error) {
    console.log('Error says: ', error)
}
}
  useEffect(()=>{
    getCategoryProducts(id)
    },[id])
 
    if(catLoader) return <FullScreenLoaders/>
    if(selectedCategoryProducts.length === 0) return <div>
      <div>
        {allCategories.length > 0 ? <div>
          <Slider_component6
          listCat= {allCategories}
          /> 
        </div>:<SmallLoaders/>}
      </div>
      <div className='font-AmazonEmber flex justify-center items-center min-h-[70vh]'>
    No products in this category
    </div>
    </div>    
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
     {selectedCategoryProducts.length > 0 ? selectedCategoryProducts.map((products)=>(
       <Product_card 
       key={products.id}
       value = {products}
       id={products.id}/>
     )) : null}
    </div>
    </div>
  )
}

export default Categories
