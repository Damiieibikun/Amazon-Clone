import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { IoMdInformationCircle } from 'react-icons/io';
import { FaStar } from 'react-icons/fa6';
import { Slider_component5 } from '../components/Slider_component';
import CustomersReview from '../components/CustomersReview';
import SideCart from '../components/SideCart';
import { appContex } from '../context/appContext';
import axios from 'axios';
import { APIcontext } from '../context/APIContext';
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartContex';
import { FaHeart } from "react-icons/fa";
import { FullScreenLoaders, SmallLoaders } from '../components/Loaders';

const Product_details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [productErrorMsg, setProductErrorMsg] = useState('');
    const [reviews, setReviews] = useState([]);
    const [ratings, setRatings] = useState([]);
    const { showSideCart, setPage } = useContext(appContex);
    const {currentUserInfo, postLike, postedLikeMsg, setPostedLikeMsg, allProducts, getLikes, likes} = useContext(APIcontext)
    const {addCart,  quantityChosen, handleSelectQuantity, usersOrders, getUsersOrders} = useContext(cartContext)
    const [isVisible, setIsVisible] = useState(false); 
    const navigate = useNavigate()
    const location = useLocation()

    const [viewImg, setViewImage] = useState(0)

    const baseURL = process.env.REACT_APP_BASE_URL;  
    const getProduct = async () => {      
        try {
            const response = await axios.get(`${baseURL}/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
            setProductErrorMsg('Product not Found')
        }
    };

    const getReviews = async () => {
        try {
            const response = await axios.get(`${baseURL}/reviews?product_id=${id}`);
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const getRatings = async () => {
        try {
            const response = await axios.get(`${baseURL}/ratings?product_id=${id}`);
            setRatings(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };
    
    const submitLike = ()=>{
        if(currentUserInfo){
            const data =  {
                product_id: id,
                user_id: currentUserInfo.id
            }    
            postLike(data)
        }
        else{
                navigate('/login')
        }       
    }
    const addToCart = ()=>{
        if(currentUserInfo){
          const data = {
            quantity: parseInt(quantityChosen),
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
    
    useEffect(() => {
        setPage(location.pathname)
        getProduct();
        getRatings();
        getReviews();
        getUsersOrders();
        if(currentUserInfo){
            getLikes(currentUserInfo.id);
        }      
    }, [id, location.pathname, setPage, currentUserInfo]);

    useEffect(()=>{
        if(postedLikeMsg.length>0){
            setIsVisible(true)
            const timer = setTimeout(() => {
                setIsVisible(false);
                setPostedLikeMsg('')
              }, 3000);
              return () => clearTimeout(timer);
        }
    },[postedLikeMsg])

    const matchedOrders = allProducts?.filter(product =>
        usersOrders?.some(orderItem =>
          orderItem.products.some(cartProduct => cartProduct.id === product.id)
        )
      );

      const found_like = likes?.find((like=> like.product_id._id === id))
    if(productErrorMsg) return <h1 className='min-h-screen flex justify-center items-center font-AmazonEmber'>No product Found</h1>

    if (!product || Object.keys(product).length === 0) {
        return <FullScreenLoaders/>
    }
    const { title, quantity, price, rating, images, has_discount, discount, descp, brand, variations, has_refund_policy } = product;
    const validRating = Math.max(0, Math.min(5, Math.floor(rating ?? 0)));

    const colorVariation = variations?.find(variation => variation.type === "color");
    const colors = colorVariation?.content.map(item => item.display[0]?.value) || [];
    const sizeVariation = variations?.find(variation => variation.type === "size");
    const size = sizeVariation?.content.map(item => item.display[0]?.value) || [];
    const bg_img = {
        backgroundImage: `url(${images?.[viewImg]})`, 
    };
    const calculateDiscountedPrice = (price, discount) => {
        const finalPrice = parseFloat(price - (price * discount) / 100).toFixed(2);
        return finalPrice.split('.');
    };
    const finalPrice = has_discount ? calculateDiscountedPrice(parseFloat(price.replace(/,/g, '')), discount) : price.split('.');  
    
    return (
        <div>
            <SideCart/>
            <div className="grid min-h-screen p-3 gap-6 grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
          
                <div className='flex gap-5 min-h-[500px] lg:h-auto'>
                    <div className='flex flex-col gap-2 mt-5'>
                        {images?.map((img, index) => (
                            <div key={index} className='w-[50px] h-[50px] border border-gray-700 rounded-md flex justify-center items-center'>
                                <div onClick={()=> setViewImage(index)} className='w-[40px] h-[40px] bg-no-repeat bg-contain bg-center rounded-md hover:cursor-pointer' style={{ backgroundImage: `url(${img})` }}></div>
                            </div>
                        ))}
                    </div>
                    <div style={bg_img} className='h-full w-full bg-no-repeat bg-contain lg:bg-center'></div>
                </div>
                
                <div className='min-h-[120vh] lg:overflow-y-auto p-3 sm:flex gap-4 hide-scrollbar'>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='font-AmazonEmberRegular text-[22px]  text-gray-800 my-auto'>{title}</p>
                        <p className='px-3 m-0 font-AmazonEmberRegular text-[14px] text-cyan-700 hover:underline hover:text-red-600 cursor-pointer'>Visit the {brand} Store</p>

                        <div className='flex items-center gap-1 font-AmazonEmberRegular text-[14px] border border-t-0 border-r-0 border-l-0 p-3'>
                            <p>{rating}</p>
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    size={17}
                                    key={index}
                                    className={index < validRating ? 'text-[#DE7921]' : 'text-gray-200'}
                                />
                            ))}
                            <p className='text-cyan-700'>{quantity} in stock</p>
                        </div>

                        <div>
                            {has_discount ? (
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2 mt-1'>
                                        <span className='text-[28px] font-light text-red-600'>-{discount}%</span>
                                        <span className='flex items-center'>
                                            <sup className='text-[12px]'>$</sup>
                                            <p>
                                                <span className='font-AmazonEmberRegular text-[28px]'>{new Intl.NumberFormat('en-US').format(finalPrice[0])}</span>
                                            </p>
                                            <sup className='text-[12px]'>{finalPrice[1]}</sup>
                                        </span>
                                    </div>
                                    <div className='text-gray-600 text-[13px] font-AmazonEmberRegular flex items-center gap-1'>
                                        List price: <span className='line-through'>${price}</span>{' '}
                                        <IoMdInformationCircle className='text-gray-500' />
                                    </div>
                                </div>
                            ) : (
                                <div className='flex items-center gap-2 my-1'>
                                    <span className='flex items-center'>
                                        <sup className='text-[12px]'>$</sup>
                                        <p><span className='font-AmazonEmberRegular text-[28px]'>{price.split('.')[0]}</span></p>
                                        <sup className='text-[12px]'>{price.split('.')[1] || '00'}</sup>
                                    </span>
                                </div>
                            )}
                        </div>

                        <p className='font-AmazonEmberRegular text-gray-700 text-[14px]'>$10 Shipping & Import Fees Deposit to Nigeria</p>
                        <p className='flex items-center gap-1 text-[14px] font-AmazonEmberRegular'>
                            <IoMdInformationCircle size={18} className='text-cyan-600' /> Sales taxes may apply at checkout
                        </p>
                        <div className='flex flex-col gap-1'>
                        {colorVariation && (
                            <div className='flex items-center gap-2'>
                                {colors.map((color, index) => (
                                    <div key={index} className='h-[30px] w-[30px] border hover:border-gray-400 hover:cursor-pointer rounded-full flex justify-center items-center bg-gray-100'>
                                        <div className='h-[20px] w-[20px] rounded-full' style={{ backgroundColor: color }}></div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {sizeVariation && (
                            <div className='flex items-center gap-2'>
                                {size.map((size, index) => (                                    
                                        <div key={index} className='border hover:border-gray-400 hover:cursor-pointer rounded-sm flex justify-center items-center py-1 px-3 font-AmazonEmberRegular text-[13px]'>{size}</div>
                                ))}
                            </div>
                        )}
                                </div>
                        <div className='flex items-center gap-6 text-[13px] text-gray-700 border border-t-0 border-r-0 border-l-0 p-3'>
                            <p className='font-AmazonEmber'>Brand</p>
                            <p className='font-AmazonEmberRegular'>{brand}</p>
                        </div>

                        <div>
                            <p className='font-AmazonEmber text-[18px]'>About this item</p>
                            <p className='font-AmazonEmberRegular text-[14px]'>{descp}</p>
                        </div>
                    </div>

                    <div className='bg-white lg:static lg:w-[400px] p-4 border rounded-md flex flex-col gap-3'>
                        <div className='flex items-center gap-2 my-1'>
                            <span className='flex items-center'>
                                <sup className='text-[12px]'>$</sup>
                                <p><span className='font-AmazonEmberRegular text-[28px]'>{new Intl.NumberFormat('en-US').format(finalPrice[0])}</span></p>
                                <sup className='text-[12px]'>{finalPrice[1]}</sup>
                            </span>
                        </div>

                        <p className='text-[14px] text-gray-600 font-AmazonEmberRegular'>$10 Shipping & Import Fees Deposit to Nigeria </p>
                        <p className='flex items-center gap-1 text-[14px] font-AmazonEmberRegular'>
                            <IoMdInformationCircle size={18} className='text-cyan-600' /> Sales taxes may apply at checkout
                        </p>

                        <p className='font-AmazonEmberRegular text-[18px] text-[#007600]'>In Stock</p>
                        <select onChange={handleSelectQuantity}
                            className='bg-[#F0F2F2] px-1 py-2 font-AmazonEmberRegular text-[13px] rounded-md text-gray-800'
                        >
                            {[...Array(quantity)].map((_, index) => (
                                <option key={index} value={index + 1}>Quantity: {index + 1}</option>
                            ))}
                        </select>
                        <div onClick={()=>{showSideCart(); addToCart()}}>
                            <Button text='Add to cart' classStyle={'bg-[#FFD814] hover:bg-[#F7CA00] font-AmazonEmberRegular text-[13px] hover:cursor-pointer w-full'} style={{ borderRadius: '20px' }} />
                        </div>
                        <Button text='Buy Now' classStyle={'bg-[#fc9825] hover:bg-[#FA8900] font-AmazonEmberRegular text-[13px] hover:cursor-pointer'} style={{ borderRadius: '20px' }} />
                        <div className='font-AmazonEmberRegular text-[12px] flex items-center gap-5'>
                            <span className='text-gray-700'>Sold by</span>
                            <span className=' text-cyan-700'>A Vendor</span>
                        </div>

                        {has_refund_policy && (
                            <div className='font-AmazonEmberRegular text-[12px] flex items-center gap-5'>
                                <span className='text-gray-700'>Returns</span>
                                <span className=' text-cyan-700'>30-day refund/replacement</span>
                            </div>
                        )}
                        <div className='font-AmazonEmberRegular text-[12px] flex items-center gap-5'>
                            <span className='text-gray-700'>Packaging</span>
                            <span className=' text-cyan-700'>Ships in product packaging</span>
                        </div>
                        <div className='font-AmazonEmberRegular text-[12px] flex items-center gap-5'>
                            <span className='text-gray-700'>Payment</span>
                            <span className=' text-cyan-700'>Secure transaction</span>
                        </div>
                        {
                            isVisible &&  <div className="bg-green-500 text-white px-4 rounded w-fit self-end">
                            <p className='font-AmazonEmberRegular text-xs'>{postedLikeMsg}</p>
                            </div>
                        }
                       
                        <div onClick={submitLike}>
                       
                        <Button text='Add to List'
                        classStyle='w-full font-AmazonEmberRegular text-[12px] border border-gray-400 focus:outline-none focus:ring focus:ring-cyan-300'
                        style={{ borderRadius: '20px' }}
                        svg = {<FaHeart className={`${found_like ? 'text-red-600': 'text-gray-600'}`}/>}                        
                        />                        
                        </div>                      
                    </div>
                </div>
            </div>
     
            <CustomersReview productInfo={product} arrayObj={matchedOrders} getReviews={getReviews} />
            
            
            {currentUserInfo ?  <div className='px-10 w-[83vw] mx-auto bg-white mb-4 py-3 border border-b-0 border-l-0 border-r-0'>
                {matchedOrders.length > 0 ? <Slider_component5 listCat={matchedOrders} caption="Other related products" />:
                
            <SmallLoaders/>}
            </div>: <div className='border w-[98%] mx-auto py-8'>
                <h1 className='text-center font-AmazonEmber text-[20px] mb-2'>See personalized recommendations </h1>
                
                <Link className='flex justify-center' to={'/login'}>
                <Button text='Sign in' classStyle={'bg-[#FFD814] hover:bg-[#F7CA00] font-AmazonEmberRegular text-[12px] hover:cursor-pointer w-[25%]'} style={{ borderRadius: '20px' }} />
                </Link>                
                 
                 <div className='text-[11px] flex gap-[2px] items-center justify-center mt-1'>New customer? 
                      <Link to={'/register'}>      
                      <span className='text-cyan-700 underline hover:text-cyan-900 font-[500]'>Start here.</span>
                      </Link>       
                      </div>
                </div>}
        </div>
    );
};

export default Product_details;
