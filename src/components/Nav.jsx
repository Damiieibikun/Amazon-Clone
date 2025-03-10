import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { appContex } from '../context/appContext'
import { Dark_logo } from './Logo'
import { LuMapPin } from "react-icons/lu";
import { BsSearch } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { APIcontext } from '../context/APIContext'
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { cartContext } from '../context/CartContex'


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); 
    const {setPage, showPopper, hidePopper, removeSideCart} = useContext(appContex)
    const {currentUserInfo, getAllCategories, allCategories, setCurrenUserInfo, setSuccessfulLogin, getAllProducts,} = useContext(APIcontext)
     const {cartItemsLength, getCartItems, setCartItemsLength} = useContext(cartContext)

const logout = ()=>{
  localStorage.removeItem('CurrentUserInfo')
  setCurrenUserInfo(null)
  setSuccessfulLogin(false)
  setCartItemsLength(0)
}

    useEffect(()=>{
      getAllProducts()
      getAllCategories()
      getCartItems()
    }, [currentUserInfo])

   
  return (
    <nav className='w-full relative'>
<div className='flex justify-between min-w-fit px-4 bg-[#131921] text-white items-center pt-[6px] pb-[4px]'>
  <div className='flex items-center gap-[10px]'>
    <div className='border-2 border-transparent hover:border-white hover:cursor-pointer'>
      <Link to={'/'} onClick={removeSideCart}>
      <Dark_logo />
      </Link>
   
    </div>
    
    <Link to={'/'} className='hidden md:flex items-end border-2 p-2 border-transparent hover:border-white hover:cursor-pointer'>
    <LuMapPin size={20}/>
      <div className='leading-[14px]'>
      <p className='text-[12px] m-0 font-light'>Deliver to</p>
      <p className='font-AmazonEmber text-[14px] m-0'>Nigeria</p>
      </div>      
    </Link>
    </div>

  <div>    
  <div className="hidden md:flex space-x-4 max-w-full lg:w-[500px] xl:w-[650px]">
        <div className="flex rounded-sm overflow-hidden w-full">
        <button className="bg-gray-100 hover:bg-gray-200 font-AmazonEmberRegular text-gray-700 rounded-l-[3px] text-[12px] px-4 flex items-center">All <RiArrowDownSFill className='text-gray-600' /></button>
          <input type="text" className="w-full rounded-md rounded-r-none rounded-l-none pt-2 pb-3 pl-1 placeholder:font-[13px] placeholder:text-gray-500" placeholder='Search Amazon' />
          <button className="bg-[#f0c14b] hover:bg-[#F7CA00] text-black rounded-r-[3px] px-4"><BsSearch size={17}/></button>
        </div>        
      </div>
  </div>

  <div className='flex'>
    <Link to={'/'} className=' hidden md:flex flex-col justify-end'>
    <div className='flex items-center justify-center border-2 p-2 border-transparent hover:border-white hover:cursor-pointer'>
    <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" className='w-[20px]'/>
  <p className='ml-[3px] font-AmazonEmber'>EN</p>
  <RiArrowDownSFill size={15} className='text-white' />
    </div>
    </Link>
    
    <div className='leading-[14px] border-2 p-2 border-transparent hover:border-white hover:cursor-pointer flex flex-col justify-end' onMouseOver={showPopper} >
      <p className='text-[12px] m-0 font-AmazonEmberRegular capitalize'>Hello, {currentUserInfo ? currentUserInfo.first_name: 'sign in'}</p>
      <div className='flex'>
      <p className='font-AmazonEmber m-0 text-[14px]'>Account & Lists</p>
      <RiArrowDownSFill size={15} className='text-white self-end' />
      </div>      
    </div>
    <Link to={'/'} className='hidden leading-[14px] border-2 p-2 border-transparent hover:border-white hover:cursor-pointer md:flex flex-col justify-end'>
      <p className='text-[12px] m-0 font-AmazonEmberRegular'>Returns</p>
      <div className='flex'>
      <p className='font-AmazonEmber m-0 text-[14px]'>& Orders</p>
      </div>      
    </Link>
    <div className='flex flex-col justify-end'>
    <div className='flex items-center border-2 p-2 border-transparent hover:border-white hover:cursor-pointer'>
      <Link to={'/cart'}>
      <div className='relative'>
      <PiShoppingCartSimpleLight  size={40} onClick={removeSideCart}/>
        <p className='absolute top-[-12px] right-[15px] text-[#F08804] font-AmazonEmber'>{cartItemsLength}</p>
      </div>
      </Link>
      

      <div className='font-AmazonEmber self-end'>Cart</div>
    </div>
    </div>
  </div>
</div>

<div className='absolute min-h-screen h-[150vh] w-full bg-black opacity-50 invisible z-40' id='popperbg'>
</div>
<div className='absolute right-[45px] bg-white min-w-fit flex flex-col mx-auto z-40 p-4 rounded-[4px] invisible' id='popperSignin' onMouseLeave={hidePopper}>  
    <div className={`flex-col ${currentUserInfo ? `hidden`: `flex`}`}>
    <Link to={'/login'} className='text-center flex justify-center' onClick={removeSideCart}>
    <Button text='Sign in' classStyle={'bg-[#FFD814] w-[50%] font-AmazonEmberRegular text-[12px] hover:underline'}/>
    </Link>
    <p className='text-[11px] flex gap-[2px] items-center justify-center mt-1'>New customer? 
      <Link to={'/register'} onClick={()=>{setPage('/register')}}>      
      <span className='text-cyan-600 hover:underline hover:text-yellow-600 font-[500]'>Start here.</span>
      </Link>       
      </p>
    </div>
   

      <div>
        <div className='mt-4 border border-b-0 border-r-0 border-l-0 p-3 grid grid-cols-2 justify-self-start'>
          <div className='border border-b-0 border-l-0 border-t-0 p-3'>
            <p className='font-AmazonEmber mb-2'>Your Lists</p>
            <ul className='leading-5'>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Create a List</li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'> Find a List or Registry </li>
            </ul>            
            </div>
            <div className='p-3'>
            <p className='font-AmazonEmber mb-2'>Your Account</p>
            <ul className='leading-5'> 
              <div className={currentUserInfo ? `block`: `hidden`}>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'> Switch Accounts</li>
              <Link to={'/login'} onClick={logout} className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700 border border-l-0 border-r-0 border-t-0 pb-2'>Sign Out </Link>
              </div>
              
              
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700 pt-2'> Account</li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Orders </li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Recommendations </li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Browsing History </li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Watchlist </li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Video Purchases & Rentals </li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Kindle Unlimited </li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Content & Devices </li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Subscribe & Save Items </li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Memberships & Subscriptions </li>
              <li className='font-AmazonEmberRegular text-[13px] hover:underline hover:text-yellow-600 hover:cursor-pointer text-gray-700'>Music Library </li>
            </ul>            
            </div>
        </div>
        </div>    
  </div>
<div className='bg-[#232F3E] text-white text-[12px] md:text-[15px]'>
  <ul className='flex'>
    <li  onClick={() => setIsOpen(true)} className='font-AmazonEmberRegular p-2 mb-[2px] border border-transparent hover:border-white hover:cursor-pointer flex items-center gap-[4px]'><GiHamburgerMenu /> All</li>
    <Link to={'/'} className='font-AmazonEmberRegular p-2 mb-[2px] border border-transparent hover:border-white hover:cursor-pointer'>Today's Deals</Link>
    <Link to={'/'} className='font-AmazonEmberRegular p-2 mb-[2px] border border-transparent hover:border-white hover:cursor-pointer'> Customer Service</Link>
    <Link to={'/'}i className='font-AmazonEmberRegular p-2 mb-[2px] border border-transparent hover:border-white hover:cursor-pointer'>Registry</Link>
    <Link to={'/'} className='font-AmazonEmberRegular p-2 mb-[2px] border border-transparent hover:border-white hover:cursor-pointer'>Gift Cards</Link>
    <Link to={'/'} className='font-AmazonEmberRegular p-2 mb-[2px] border border-transparent hover:border-white hover:cursor-pointer'>Sell</Link>
  </ul>
</div>
<div>
      <div className={
        "fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 opacity-0 translate-x-full")
      }>
        <section
          className={
            "w-screen max-w-[22rem] left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
            (isOpen ? "translate-x-0" : "-translate-x-full")
          }
        >
          <article onClick={() => setIsOpen(false)} className="relative w-screen max-w-[22rem] pb-10 overflow-y-scroll h-full">
            <header className="p-4 font-AmazonEmber text-lg bg-[#232F3E] text-white capitalize flex gap-2 items-center"> <FaUserCircle size={30}/>Hello, {currentUserInfo ? currentUserInfo.first_name: 'sign in'}</header>
           <div className='p-5 flex flex-col space-y-6'>
           <p className='font-AmazonEmber'>Trending</p>
            <p className='font-AmazonEmberRegular text-[14px]'>Best Sellers</p>
            <p className='font-AmazonEmberRegular text-[14px]'>New Releases</p>
            </div>
            <hr className='border'/>
           <div className='p-5 flex flex-col space-y-6'>
           <p className='font-AmazonEmber'>Shop By Categories</p>
           <Link to={'/products'}>
           <p className='font-AmazonEmberRegular text-[14px]'>All</p>
           </Link>
           {
            allCategories?.map((cat)=>{
              const {id, name} = cat
              return(
                <Link to={`/categories/${id}`} key={id} className='font-AmazonEmberRegular text-[14px] capitalize'>{name}</Link>
              )
            })
           }            
            </div>
            <hr className='border'/>  
            <div className='p-5 flex flex-col space-y-6'>
           <p className='font-AmazonEmber'>Help & Settings</p>
            <p className='font-AmazonEmberRegular text-[14px]'>Your Account</p>
           <div className='flex items-center gap-1'>
           <HiOutlineGlobeAlt className='text-gray-400' />
           <p className='font-AmazonEmberRegular text-[14px]'>English</p>
           </div>           
            <div className='flex items-center gap-2'>
            <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" className='w-[20px]'/>
            <p className='font-AmazonEmberRegular text-[14px]'>United States</p>
            </div>
           
            <p className='font-AmazonEmberRegular text-[14px]'>Customer Service</p>
            <Link to={'/login'} onClick={logout} className='font-AmazonEmberRegular text-[14px]'>{currentUserInfo ? 'Sign Out': 'Sign In'}</Link>
            </div>                   
          </article>
        </section>
        <section
          className="w-screen h-full cursor-pointer"
          onClick={() => setIsOpen(false)}
        ></section>
      </div>
    </div>
</nav>
    
  )
}

export default Nav
