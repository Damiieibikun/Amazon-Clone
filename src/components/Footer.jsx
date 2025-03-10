import React, { useContext } from 'react'
import { IoChevronForward } from "react-icons/io5";
import { RxGlobe } from "react-icons/rx";
import { PiCaretUpDownFill } from "react-icons/pi";
import { Footer_logo } from './Logo'
import { appContex } from '../context/appContext';
import imgFooter from '../assets/icon-cpra.svg'

const Footer = () => {
  const {currentYear, scrollToTop} = useContext(appContex)
  return (
    <footer className='w-full min-w-fit relative'>
      <div onClick={scrollToTop} className='bg-[#425061] hover:bg-[#485769] hover:cursor-pointer py-4 w-full text-white text-center font-AmazonEmberRegular text-[13px]'><p>Back to top</p></div>
      <div className='bg-[#232F3E]'>
        <div className='py-[40px] grid grid-cols-1 gap-4 text-center md:text-left sm:grid-cols-3 md:grid-cols-4 md:gap-5 w-[80%] mx-auto text-white border border-t-0 border-l-0 border-r-0 border-gray-600 justify-items-center'>
          <div>
            <ul className='leading-[28px]'>
              <li className='font-AmazonEmber'>Get to Know Us</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Careers</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Blog</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>About Amazon</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Investor Relations</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Amazon Devices</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Amazon Science</li>
            </ul>
          </div>
          <div>
            <ul className='leading-[28px]'>
              <li className='font-AmazonEmber'>Make Money with Us</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Sell products on Amazon</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Sell on Amazon Business</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Sell apps on Amazon</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Become an Affiliate</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Advertise Your Products</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Self-Publish with Us</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Host an Amazon Hub</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300 flex items-center'><IoChevronForward />See More Make Money with Us</li>
            </ul>
          </div>
          <div>
            <ul className='leading-[28px]'>
              <li className='font-AmazonEmber'>Amazon Payment Products</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Amazon Business Card</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Shop with Points</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Reload Your Balance</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Amazon Currency Converter</li>
            </ul>
          </div>
          <div>
            <ul className='leading-[28px]'>
              <li className='font-AmazonEmber'>Let Us Help You</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Amazon and COVID-19</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Your Account</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Your Orders</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Shipping Rates & Policies</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Returns & Replacements</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Manage Your Content and Devices</li>
              <li className='font-AmazonEmberRegular text-[14px] hover:underline hover:cursor-pointer text-gray-300'>Help</li>
            </ul>
          </div>
        </div>

        <div className='w-[90%] mx-auto pt-[25px] pb-[35px] flex items-center flex-wrap text-gray-300 font-AmazonEmberRegular text-[13px] justify-center gap-[60px]'>
          <div><Footer_logo /></div>
          <div className='flex gap-2'>
            <div className='rounded-sm border border-gray-400 p-2 flex items-center gap-[2px]'><RxGlobe /><p className='mr-3'>English</p> <PiCaretUpDownFill className='text-gray-500'/></div>
            <div className='rounded-sm border border-gray-400 p-2'>$ &nbsp; USD - U.S. Dollar</div>
            <div className='rounded-sm border border-gray-400 p-2 flex items-center gap-[3px]'>
            <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" className='w-[20px]'/>
              <p>United States</p>
              </div>
          </div>
        </div>
      </div>
      <div className='bg-[#131A22] py-[30px] text-white'>
        <div className='w-[70%] mx-auto  grid grid-cols-3 md:grid-cols-7 grid-rows-4 font-AmazonEmberRegular text-[12px] justify-items-center gap-[16px]'>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Amazon Music br <span className='text-gray-400'>Stream millions
          of songs</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Amazon Ads <br /><span className='text-gray-400'>
              Reach customers
              wherever they
              spend their time</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>6pm <br /><span className='text-gray-400'>         
            Score deals
            on fashion brands</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>AbeBooks <br /><span className='text-gray-400'>         
          Books, art
          & collectibles</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>ACX <br /><span className='text-gray-400'>         
            Audiobook Publishing
            Made Easy</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Sell on Amazon <br /><span className='text-gray-400'>         
          Start a Selling Account</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Veeqo <br /><span className='text-gray-400'>         
              Shipping Software
              Inventory Management</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Amazon Business <br /><span className='text-gray-400'>              
          Everything For
          Your Business</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>AmazonGlobal <br /><span className='text-gray-400'>              
Ship Orders
Internationally</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Home Services <br /><span className='text-gray-400'>              
          
Experienced Pros
Happiness Guarantee</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Amazon Web Services <br /><span className='text-gray-400'>              
Scalable Cloud
Computing Services</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Audible <br /><span className='text-gray-400'>              
Listen to Books & Original
Audio Performances</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Box Office Mojo <br /><span className='text-gray-400'>              
Find Movie
Box Office Data</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Goodreads <br /><span className='text-gray-400'>              
Book reviews
& recommendations</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>IMDb <br /><span className='text-gray-400'>              
          IMDb
Movies, TV
& Celebrities</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>IMDbPro <br /><span className='text-gray-400'>              
Get Info Entertainment
Professionals Need</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Kindle Direct Publishing <br /><span className='text-gray-400'>              
Indie Digital & Print Publishing
Made Easy</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Prime Video Direct <br /><span className='text-gray-400'>              
Video Distribution
Made Easy</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Shopbop <br /><span className='text-gray-400'>              
Designer
Fashion Brands</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Woot! <br /><span className='text-gray-400'>              
Deals and
Shenanigans</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Zappos <br /><span className='text-gray-400'>              
Shoes &
Clothing</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Ring <br /><span className='text-gray-400'>              
Smart Home
Security Systems</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>eero WiFi <br /><span className='text-gray-400'>              
Stream 4K Video
in Every Room</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'>Blink <br /><span className='text-gray-400'>              
Smart Security
for Every Home</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'> Neighbors App <br /><span className='text-gray-400'>              
Real-Time Crime
& Safety Alerts</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'> Amazon Subscription Boxes <br /><span className='text-gray-400'>              
          Top subscription boxes – right to your door</span>
          </div>
          <div className='max-w-[100px] leading-[14px] hover:underline hover:cursor-pointer'> PillPack <br /><span className='text-gray-400'>              
          
Pharmacy Simplified</span>
          </div>
        </div>

        <div className='font-AmazonEmberRegular text-[12px] py-[30px]'>       
          <div className='items-center justify-center flex flex-wrap gap-[12px]'>
          <p className='hover:underline hover:cursor-pointer'>Conditions of Use</p>
          <p className='hover:underline hover:cursor-pointer'>Privacy Notice</p>
          <p className='hover:underline hover:cursor-pointer'>Consumer Health Data Privacy Disclosure</p>
          <div className='flex items-center gap-[2px]'>
          <p className='hover:underline hover:cursor-pointer'>Your Ads Privacy Choices</p>
            <img src={imgFooter} alt="" className='w-[30px]'/>
          </div>
          
          </div>
          <p className='text-center'>&copy; 1996 - {currentYear} , Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
