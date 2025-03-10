import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import 'swiper/css';


const Slider_component = ({img, img2, img3, title, caption}) => {

    const bg_img = {
        backgroundImage: `url(${img})`
    }
    const bg_img2 = {
        backgroundImage: `url(${img2})`
    }
    const bg_img3 = {
        backgroundImage: `url(${img3})`
    }
  return (
    <Link to={'/products'}>
    <div className='flex items-center gap-4 pt-5'>
    <p className='font-AmazonEmber text-[21px] py-2'>{title}</p>
    <p className='text-cyan-600 text-[14px] font-AmazonEmberRegular hover:text-red-600 hover:cursor-pointer'>{caption}</p>
    </div>
    
      <Swiper
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6, 
          },
          1024: {
            slidesPerView: 8, 
          },
          1280: {
            slidesPerView: 9, 
          },
        }}
        className="mySwiper bg-white" >
        <SwiperSlide><div style={bg_img} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[120px] h-[230px] bg-no-repeat bg-cover bg-center'></div></SwiperSlide>
        
        
      </Swiper>
    </Link>
  );
}

const Slider_component2 = ({img, img2, img3, img4, img5, img6, title, caption}) => {

    const bg_img = {
        backgroundImage: `url(${img})`
    }
    const bg_img2 = {
        backgroundImage: `url(${img2})`
    }
    const bg_img3 = {
        backgroundImage: `url(${img3})`
    }
    const bg_img4 = {
        backgroundImage: `url(${img4})`
    }
    const bg_img5 = {
        backgroundImage: `url(${img5})`
    }
    const bg_img6 = {
        backgroundImage: `url(${img6})`
    }
  return (
    <Link to={'/products'}>
    <div className='flex items-center gap-4 pt-5'>
    <p className='font-AmazonEmber text-[21px] py-2'>{title}</p>
    <p className='text-cyan-600 text-[14px] font-AmazonEmberRegular hover:text-red-600 hover:cursor-pointer'>{caption}</p>
    </div>
    
      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
          },
          1280: {
            slidesPerView: 8,
          },
        }}
        className="mySwiper bg-white" >
        <SwiperSlide><div style={bg_img} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img4} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img5} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img6} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img4} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img5} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img6} className='w-[160px] h-[200px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        
        
      </Swiper>
    </Link>
  );
}
const Slider_component3 = ({img, img2, img3, img4, img5, img6, title, caption}) => {

    const bg_img = {
        backgroundImage: `url(${img})`
    }
    const bg_img2 = {
        backgroundImage: `url(${img2})`
    }
    const bg_img3 = {
        backgroundImage: `url(${img3})`
    }
    const bg_img4 = {
        backgroundImage: `url(${img4})`
    }
    const bg_img5 = {
        backgroundImage: `url(${img5})`
    }
    const bg_img6 = {
        backgroundImage: `url(${img6})`
    }
  return (
    <Link to={'/products'}>
    <div className='flex items-center gap-4 pt-5'>
    <p className='font-AmazonEmber text-[21px] py-2'>{title}</p>
    <p className='text-cyan-600 text-[14px] font-AmazonEmberRegular hover:text-red-600 hover:cursor-pointer'>{caption}</p>
    </div>    
      <Swiper
       slidesPerView={2}
       breakpoints={{
         640: {
           slidesPerView: 4,
         },
         768: {
           slidesPerView: 6,
         },
         1024: {
           slidesPerView: 6,
         },
         1280: {
           slidesPerView: 6,
         },
       }}
        className="mySwiper bg-white" >
        <SwiperSlide><div style={bg_img} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img4} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img5} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img6} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>       
        <SwiperSlide><div style={bg_img} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img2} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img4} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img5} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>
        <SwiperSlide><div style={bg_img6} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div></SwiperSlide>       
           
        
      </Swiper>
    </Link>
  );
}

const Slider_component4 = ({img, img2, img3, img4, img5, img6, 
  title, 
  img1caption, img1qty, discount1, discountprice1, price1,
  img2caption, img2qty, discount2, discountprice2, price2,
  img3caption, img3qty, discount3, discountprice3, price3,
  img4caption, img4qty, discount4, discountprice4, price4,
  img5caption, img5qty, discount5, discountprice5, price5,
  img6caption, img6qty, discount6, discountprice6, price6}) => {
  const bg_img = {
      backgroundImage: `url(${img})`
  }
  const bg_img2 = {
      backgroundImage: `url(${img2})`
  }
  const bg_img3 = {
      backgroundImage: `url(${img3})`
  }
  const bg_img4 = {
      backgroundImage: `url(${img4})`
  }
  const bg_img5 = {
      backgroundImage: `url(${img5})`
  }
  const bg_img6 = {
      backgroundImage: `url(${img6})`
  }
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; 

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Link className="relative" to={'/products'}>
      <p className='text-[18px] font-AmazonEmber'> {title}</p>
      <div className="text-right text-[14px] mb-2 font-AmazonEmberRegular">
        <p>Page {currentSlide + 1} of {totalSlides}</p>
      </div>

      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 4, 
          },
          768: {
            slidesPerView: 6, 
          },
          1024: {
            slidesPerView: 6, 
          },
          1280: {
            slidesPerView: 6,
          },
        }}

        slidesPerGroup={6}   
        onSlideChange={(swiper) => setCurrentSlide(Math.floor(swiper.activeIndex / 6))} 
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="mySwiper"
      >

        <SwiperSlide><div style={bg_img} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
        <div>
          <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img1caption}</p>
          <div className='flex items-center my-1'> {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img1qty}</span></div>
          {
            discount1  !== '' ? <div>
            <div className='flex items-center gap-2 my-1'> <span className='font-light text-[18px] text-red-800'>{discount1}</span>  <span className='flex items-center'><sup>$</sup><p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice1.split('.')[0]}</span><sup className='text-[11px]'>{discountprice1.split('.')[1]}</sup></p></span></div>
            <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price1}</span></div>
            </div> : <div>
          <div className='flex items-center gap-2 my-1'> <span className='flex items-center'><sup>$</sup>{price1}</span></div>
          </div>
          }                   
          <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
          <p>$40.20 shipping</p>
          </div>
        </div>
        </SwiperSlide>
      
        <SwiperSlide><div style={bg_img2} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
        <div>
          <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img2caption}</p>
          <div className='flex items-center my-1'> {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img2qty}</span></div>
          {
            discount2  !== '' ? <div>
            <div className='flex items-center gap-2 my-1'> <span className='font-light text-[18px] text-red-800'>{discount2}</span>  <span className='flex items-center'><sup>$</sup><p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice2.split('.')[0]}</span><sup className='text-[11px]'>{discountprice2.split('.')[1]}</sup></p></span></div>
            <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price2}</span></div>
            </div> : <div>
          <div className='flex items-center gap-2 my-1'> <span className='flex items-center'><sup>$</sup><p><span className='font-AmazonEmberRegular text-[18px]'>{price2.split('.')[0]}</span><sup className='text-[11px]'>{price2.split('.')[1]}</sup></p></span></div>
          </div>
          }                   
          <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
          <p>$40.20 shipping</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
        <div>
          <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img3caption}</p>
          <div className='flex items-center my-1'> {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img3qty}</span></div>
          {
            discount3  !== '' ? <div>
            <div className='flex items-center gap-2 my-1'> <span className='font-light text-[18px] text-red-800'>{discount3}</span>  <span className='flex items-center'><sup>$</sup><p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice3.split('.')[0]}</span><sup className='text-[11px]'>{discountprice3.split('.')[1]}</sup></p></span></div>
            <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price3}</span></div>
            </div> : <div>
          <div className='flex items-center gap-2 my-1'> <span className='flex items-center'><sup>$</sup><p><span className='font-AmazonEmberRegular text-[18px]'>{price3.split('.')[0]}</span><sup className='text-[11px]'>{price3.split('.')[1]}</sup></p></span></div>
          </div>
          }                   
          <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
          <p>$40.20 shipping</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
  <div style={bg_img4} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
  <div>
    <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img4caption}</p>
    <div className='flex items-center my-1'> 
      {[...Array(5)].map((_, index) => (<FaStar  key={index} className='text-[#DE7921]'/>))} 
      <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img4qty}</span>
    </div>
    {
      discount4 !== '' ? 
      <div>
        <div className='flex items-center gap-2 my-1'> 
          <span className='font-light text-[18px] text-red-800'>{discount4}</span>  
          <span className='flex items-center'>
            <sup>$</sup>
            <p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice4.split('.')[0]}</span>
            <sup className='text-[11px]'>{discountprice4.split('.')[1]}</sup></p>
          </span>
        </div>
        <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price4}</span></div>
      </div> : 
      <div>
        <div className='flex items-center gap-2 my-1'> 
          <span className='flex items-center'>
            <sup>$</sup>
            <p><span className='font-AmazonEmberRegular text-[18px]'>{price4.split('.')[0]}</span>
            <sup className='text-[11px]'>{price4.split('.')[1]}</sup></p>
          </span>
        </div>
      </div>
    }                   
    <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
      <p>$40.20 shipping</p>
    </div>
  </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={bg_img5} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
          <div>
            <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img5caption}</p>
            <div className='flex items-center my-1'> 
              {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} 
              <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img5qty}</span>
            </div>
            {
              discount5 !== '' ? 
              <div>
                <div className='flex items-center gap-2 my-1'> 
                  <span className='font-light text-[18px] text-red-800'>{discount5}</span>  
                  <span className='flex items-center'>
                    <sup>$</sup>
                    <p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice5.split('.')[0]}</span>
                    <sup className='text-[11px]'>{discountprice5.split('.')[1]}</sup></p>
                  </span>
                </div>
                <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price5}</span></div>
              </div> : 
              <div>
                <div className='flex items-center gap-2 my-1'> 
                  <span className='flex items-center'>
                    <sup>$</sup>
                    <p><span className='font-AmazonEmberRegular text-[18px]'>{price5.split('.')[0]}</span>
                    <sup className='text-[11px]'>{price5.split('.')[1]}</sup></p>
                  </span>
                </div>
              </div>
            }                   
            <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
              <p>$40.20 shipping</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={bg_img6} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
          <div>
            <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img6caption}</p>
            <div className='flex items-center my-1'> 
              {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} 
              <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img6qty}</span>
            </div>
            {
              discount6 !== '' ? 
              <div>
                <div className='flex items-center gap-2 my-1'> 
                  <span className='font-light text-[18px] text-red-800'>{discount6}</span>  
                  <span className='flex items-center'>
                    <sup>$</sup>
                    <p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice6.split('.')[0]}</span>
                    <sup className='text-[11px]'>{discountprice6.split('.')[1]}</sup></p>
                  </span>
                </div>
                <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price6}</span></div>
              </div> : 
              <div>
                <div className='flex items-center gap-2 my-1'> 
                  <span className='flex items-center'>
                    <sup>$</sup>
                    <p><span className='font-AmazonEmberRegular text-[18px]'>{price6.split('.')[0]}</span>
                    <sup className='text-[11px]'>{price6.split('.')[1]}</sup></p>
                  </span>
                </div>
              </div>
            }                   
            <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
              <p>$40.20 shipping</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div style={bg_img} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
        <div>
          <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img1caption}</p>
          <div className='flex items-center my-1'> {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img1qty}</span></div>
          {
            discount1  !== '' ? <div>
            <div className='flex items-center gap-2 my-1'> <span className='font-light text-[18px] text-red-800'>{discount1}</span>  <span className='flex items-center'><sup>$</sup><p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice1.split('.')[0]}</span><sup className='text-[11px]'>{discountprice1.split('.')[1]}</sup></p></span></div>
            <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price1}</span></div>
            </div> : <div>
          <div className='flex items-center gap-2 my-1'> <span className='flex items-center'><sup>$</sup>{price1}</span></div>
          </div>
          }                   
          <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
          <p>$40.20 shipping</p>
          </div>
        </div>
        </SwiperSlide>
      
        <SwiperSlide><div style={bg_img2} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
        <div>
          <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img2caption}</p>
          <div className='flex items-center my-1'> {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img2qty}</span></div>
          {
            discount2  !== '' ? <div>
            <div className='flex items-center gap-2 my-1'> <span className='font-light text-[18px] text-red-800'>{discount2}</span>  <span className='flex items-center'><sup>$</sup><p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice2.split('.')[0]}</span><sup className='text-[11px]'>{discountprice2.split('.')[1]}</sup></p></span></div>
            <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price2}</span></div>
            </div> : <div>
          <div className='flex items-center gap-2 my-1'> <span className='flex items-center'><sup>$</sup><p><span className='font-AmazonEmberRegular text-[18px]'>{price2.split('.')[0]}</span><sup className='text-[11px]'>{price2.split('.')[1]}</sup></p></span></div>
          </div>
          }                   
          <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
          <p>$40.20 shipping</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div style={bg_img3} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
        <div>
          <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img3caption}</p>
          <div className='flex items-center my-1'> {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img3qty}</span></div>
          {
            discount3  !== '' ? <div>
            <div className='flex items-center gap-2 my-1'> <span className='font-light text-[18px] text-red-800'>{discount3}</span>  <span className='flex items-center'><sup>$</sup><p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice3.split('.')[0]}</span><sup className='text-[11px]'>{discountprice3.split('.')[1]}</sup></p></span></div>
            <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price3}</span></div>
            </div> : <div>
          <div className='flex items-center gap-2 my-1'> <span className='flex items-center'><sup>$</sup><p><span className='font-AmazonEmberRegular text-[18px]'>{price3.split('.')[0]}</span><sup className='text-[11px]'>{price3.split('.')[1]}</sup></p></span></div>
          </div>
          }                   
          <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
          <p>$40.20 shipping</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
  <div style={bg_img4} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
  <div>
    <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img4caption}</p>
    <div className='flex items-center my-1'> 
      {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} 
      <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img4qty}</span>
    </div>
    {
      discount4 !== '' ? 
      <div>
        <div className='flex items-center gap-2 my-1'> 
          <span className='font-light text-[18px] text-red-800'>{discount4}</span>  
          <span className='flex items-center'>
            <sup>$</sup>
            <p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice4.split('.')[0]}</span>
            <sup className='text-[11px]'>{discountprice4.split('.')[1]}</sup></p>
          </span>
        </div>
        <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price4}</span></div>
      </div> : 
      <div>
        <div className='flex items-center gap-2 my-1'> 
          <span className='flex items-center'>
            <sup>$</sup>
            <p><span className='font-AmazonEmberRegular text-[18px]'>{price4.split('.')[0]}</span>
            <sup className='text-[11px]'>{price4.split('.')[1]}</sup></p>
          </span>
        </div>
      </div>
    }                   
    <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
      <p>$40.20 shipping</p>
    </div>
  </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={bg_img5} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
          <div>
            <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img5caption}</p>
            <div className='flex items-center my-1'> 
              {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} 
              <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img5qty}</span>
            </div>
            {
              discount5 !== '' ? 
              <div>
                <div className='flex items-center gap-2 my-1'> 
                  <span className='font-light text-[18px] text-red-800'>{discount5}</span>  
                  <span className='flex items-center'>
                    <sup>$</sup>
                    <p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice5.split('.')[0]}</span>
                    <sup className='text-[11px]'>{discountprice5.split('.')[1]}</sup></p>
                  </span>
                </div>
                <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price5}</span></div>
              </div> : 
              <div>
                <div className='flex items-center gap-2 my-1'> 
                  <span className='flex items-center'>
                    <sup>$</sup>
                    <p><span className='font-AmazonEmberRegular text-[18px]'>{price5.split('.')[0]}</span>
                    <sup className='text-[11px]'>{price5.split('.')[1]}</sup></p>
                  </span>
                </div>
              </div>
            }                   
            <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
              <p>$40.20 shipping</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={bg_img6} className='w-[180px] h-[180px] bg-no-repeat bg-contain bg-center'></div>
          <div>
            <p className='text-cyan-800 text-[14px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1'>{img6caption}</p>
            <div className='flex items-center my-1'> 
              {[...Array(5)].map((_, index) => (<FaStar key={index} className='text-[#DE7921]'/>))} 
              <span className='text-cyan-800 text-[11px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer'>{img6qty}</span>
            </div>
            {
              discount6 !== '' ? 
              <div>
                <div className='flex items-center gap-2 my-1'> 
                  <span className='font-light text-[18px] text-red-800'>{discount6}</span>  
                  <span className='flex items-center'>
                    <sup>$</sup>
                    <p><span className='font-AmazonEmberRegular text-[18px]'>{discountprice6.split('.')[0]}</span>
                    <sup className='text-[11px]'>{discountprice6.split('.')[1]}</sup></p>
                  </span>
                </div>
                <div className='text-gray-700 text-[13px] my-1'>List: <span className='line-through'>${price6}</span></div>
              </div> : 
              <div>
                <div className='flex items-center gap-2 my-1'> 
                  <span className='flex items-center'>
                    <sup>$</sup>
                    <p><span className='font-AmazonEmberRegular text-[18px]'>{price6.split('.')[0]}</span>
                    <sup className='text-[11px]'>{price6.split('.')[1]}</sup></p>
                  </span>
                </div>
              </div>
            }                   
            <div className='text-[12px] font-AmazonEmberRegular my-1'>Get it as soon as <span className='font-bold'>Friday, Oct 11</span>
              <p>$40.20 shipping</p>
            </div>
          </div>
        </SwiperSlide>
         
      </Swiper>
      <button ref={prevRef} className="z-10 prev-button absolute left-[-30px] top-1/3 transform -translate-y-1/2 border border-gray-400 hover:bg-gray-100  rounded-md w-12 h-12 flex items-center justify-center shadow-lg">
        &#10094;
      </button>

      <button ref={nextRef} className="z-10 next-button absolute right-[-30px] top-1/3 transform -translate-y-1/2 border border-gray-400 hover:bg-gray-100 rounded-md w-12 h-12 flex items-center justify-center shadow-lg">
        &#10095;
      </button>
    </Link>
  );
}

const Slider_component5 = ({ listCat, caption }) => {
  const [screen_size, setScreenSize] = useState(window.innerWidth);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [slidesPerGroup, setSlidesPerGroup] = useState(2);
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize(width);
      let view = 2;
      let group = 2; 
      if (width >= 640 && width < 768) {
        view = 2;
      } else if (width >= 768 && width < 1024) {
        view = 3;
        group = 3;
      } else if (width >= 1024 && width < 1280) {
        view = 4;
        group = 4;
      } else if (width >= 1280) {
        view = 5;
        group = 5;
      }

      setSlidesPerView(view);
      setSlidesPerGroup(group);
      setTotalSlides(Math.ceil(listCat.length / view));
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [listCat.length]);

  return (
    <Link className="relative" to={'/products'}>
      <p className="text-[18px] font-AmazonEmber">{caption}</p>
      <div className="text-right text-[14px] mb-2 font-AmazonEmberRegular">
        <p>
          Page {currentSlide + 1} of {totalSlides}
        </p>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        onSlideChange={(swiper) => setCurrentSlide(Math.floor(swiper.activeIndex / slidesPerGroup))}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="mySwiper"
      >
        {listCat?.map((item, index) => {
          const { title, price, images: [image] } = item;
          return (
            <SwiperSlide key={index}>
              <div
                style={{ backgroundImage: `url(${image})` }}
                className="w-[150px] h-[150px] bg-no-repeat bg-contain bg-center"
              ></div>
              <div>
                <p className="text-cyan-800 text-[13px] font-AmazonEmberRegular hover:text-red-700 hover:cursor-pointer my-1">
                  {title}
                </p>

                <div>
                  <div className="flex items-center gap-2 my-1">
                    <span className="flex items-center">
                      <sup className="text-[12px]">$</sup>
                      <p>
                        <span className="font-AmazonEmberRegular text-[28px]">
                          {price.split(".")[0]}
                        </span>
                      </p>
                      <sup className="text-[12px]">
                        {price.split(".")[1] || "00"}
                      </sup>
                    </span>
                  </div>
                </div>

                <div className="text-[12px] font-AmazonEmberRegular my-1">
                  Get it as soon as <span className="font-bold">Friday, Oct 11</span>
                  <p>$40.20 shipping</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        ref={prevRef}
        className="z-10 prev-button absolute left-[-55px] md:left-[-70px] top-1/2 transform -translate-y-1/2 border border-gray-400 hover:bg-gray-100  rounded-md w-12 h-12 flex items-center justify-center shadow-lg"
      >
        &#10094; 
      </button>
      <button
        ref={nextRef}
        className="z-10 next-button absolute right-[-35px] md:right-[-70px] top-1/2 transform -translate-y-1/2 border border-gray-400 hover:bg-gray-100 rounded-md w-12 h-12 flex items-center justify-center shadow-lg"
      >
        &#10095; </button>
    </Link>
  );
};
const Slider_component6 = ({ listCat }) => {
  const [screen_size, setScreenSize] = useState(window.innerWidth);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [slidesPerGroup, setSlidesPerGroup] = useState(2);
  const [setCurrentSlide] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize(width);


      let view = 4; 
      let group = 4;
      if (width >= 640 && width < 768) {
        view = 4;
      } else if (width >= 768 && width < 1024) {
        view = 6;
        group = 6;
      } else if (width >= 1024 && width < 1280) {
        view = 7;
        group = 7;
      } else if (width >= 1280) {
        view = 8;
        group = 8;
      }

      setSlidesPerView(view);
      setSlidesPerGroup(group);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [listCat.length]);

  return (
    <div className="relative mt-12 pb-5 w-[85%] mx-auto" to={'/products'}>   
      <Swiper     
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        onSlideChange={(swiper) => setCurrentSlide(Math.floor(swiper.activeIndex / slidesPerGroup))}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="mySwiper"
      >
        {listCat?.map((cat, index)=>{
          const {id, image, name} = cat
          return (
            <SwiperSlide key={index}>
            <Link to={`/categories/${id}`} key={id} className='ml-7 flex flex-col gap-3 justify-center items-center shadow-md'>
         
            <div style={{ backgroundImage: `url(${image})` }}
                className="w-[45px] h-[45px] p-3 bg-no-repeat bg-contain bg-center"
              ></div>             
             
              <p className='capitalize font-AmazonEmberRegular text-[13px] text-center'>{name}</p>
              <div className='flex items-center justify-between w-[60%] mx-auto'>
             
              </div>
          </Link>
          </SwiperSlide>
          )
        })}
      </Swiper>    
      <button
        ref={prevRef}
        className="z-10 prev-button absolute left-[-25px] md:left-[-25px] top-1/2 transform -translate-y-1/2 border border-gray-400 hover:bg-gray-100  rounded-md w-8 h-8 flex items-center justify-center shadow-lg"
      >
        &#10094; 
      </button>      
      <button
        ref={nextRef}
        className="z-10 next-button absolute right-[-25px] md:right-[-25px] top-1/2 transform -translate-y-1/2 border border-gray-400 hover:bg-gray-100 rounded-md w-8 h-8 flex items-center justify-center shadow-lg"
      >
        &#10095; 
      </button>
    </div>
  );
};



export {Slider_component, Slider_component2, Slider_component3, Slider_component4, Slider_component5, Slider_component6};
