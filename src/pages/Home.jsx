import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { appContex } from '../context/appContext'
import Home_CardOne from '../components/Home_CardOne'
import Home_CardThree from '../components/Home_CardThree'
import Home_CardTwo from '../components/Home_CardTwo'
import {Slider_component, Slider_component2, Slider_component3, Slider_component4} from '../components/Slider_component'

const Home = () => {
    const {setPage, setclickedCart} = useContext(appContex)
  const location = useLocation()

  useEffect(()=>{
    setPage(location.pathname)
    setclickedCart(false)
    localStorage.setItem('cart-clicked', false)
  },[location.pathname, setPage, setclickedCart])

  return (
    <div className='w-full relative'>
     <div className="bg-[url('https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg')] h-[60vh] bg-no-repeat bg-cover bg-top w-full relative z-[1]"></div>
     <div className="xl:w-[85%] lg:w-[90%] w-full mx-auto border-none bottom-0 before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#E3E6E6] before:via-[#E3E6E6]/50 before:to-black relative top-[-100px]">   
     
     <div className='grid grid-cols-1 md:grid-cols-4 gap-3 relative z-10 justify-items-center mb-[8px]'>
        <Home_CardOne
        title = 'Gaming accessories'
        cat1 = 'Headsets'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
        cat2 = 'Keyboards'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
        cat3 = 'Computer mice'
        cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg'
        cat4 = 'Chairs'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg'
        caption= 'See more'
        /> 
        <Home_CardTwo
        title = 'Top categories in Kitchen appliances'
        catmain = 'Cooker'
        mainimg = 'https://m.media-amazon.com/images/I/313wAT6Iy2L._SY160_.jpg'
        cat1='Coffee'
        cat1img="https://m.media-amazon.com/images/I/21W7-lndINL._SY75_.jpg"
        cat2='Pots and pans'
        cat2img="https://m.media-amazon.com/images/I/21B-NkA9p-L._SY75_.jpg"
        cat3='Kettles'
        cat3img="https://m.media-amazon.com/images/I/217GQ1a2QzL._SY75_.jpg"
        caption='Explore all products in Kitchen'
        />
        <Home_CardOne
        title = 'Shop for your home essentials'
        cat1 = 'Cleaning Tools'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg'
        cat2 = 'Home Storage'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg'
        cat3 = 'Home Decor'
        cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg'
        cat4 = 'Bedding'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_1x._SY116_CB563137408_.jpg'
        caption= 'Discover more in Home'     
        />
        <Home_CardOne
        title = 'New home arrivals under $50'
        cat1 = 'Kitchen & dining'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg'
        cat2 = 'Home improvement'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg'
        cat3 = 'Decor'
        cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg'
        cat4 = 'Bedding & bath'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_1x._SY116_CB555960040_.jpg'
        caption= 'Shop the latest from Home'
        />         
    </div>

      <div className='grid grid-cols-1 md:grid-cols-4  gap-3 relative z-10 justify-items-center mb-[8px]'>
        <Home_CardOne
          title = 'Shop deals in Fashion'
          cat1 = 'Jeans under $50'
          cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg'
          cat2 = 'Tops under $25'
          cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg'
          cat3 = 'Dresses under $30'
          cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg'
          cat4 = 'Shoes under $50'
          cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg'
          caption= 'See all deals'
          /> 
        <Home_CardOne
          title = 'Refresh your space'
          cat1 = 'Dining'
          cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg'
          cat2 = 'Home'
          cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg'
          cat3 = 'Kitchen'
          cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg'
          cat4 = 'Health and Beauty'
          cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg'
          caption= 'See more'
          />
        <Home_CardThree
        title = 'Get your game on'
        img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg'
        caption='Shop gaming'
        />
        <Home_CardThree
        title = 'Toys under $25'
        img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg'
        caption='Shop now'
              />
          </div>      
     
     <div className='px-10 py-3 w-full relative z-10 bg-white mb-[8px]'>
     <Slider_component
     title="Related to items you've viewed"
     caption = 'See more'
     img='https://m.media-amazon.com/images/I/612eTmq3hVL._AC_SY200_.jpg'
     img2= 'https://m.media-amazon.com/images/I/61uOq5AWCqL._AC_SY200_.jpg'
     img3= 'https://m.media-amazon.com/images/I/51UFkiE+AlL._AC_SY200_.jpg'
     />
     </div>

     <div className='px-10 w-full relative z-10 bg-white mb-[8px] py-3'>
     <Slider_component
     title="Based on your browsing history"
     caption = 'See more'
     img='https://m.media-amazon.com/images/I/714kSYZTGpL._AC_SY200_.jpg'
     img2= 'https://m.media-amazon.com/images/I/71XP8jeGibL._AC_SY200_.jpg'
     img3= 'https://m.media-amazon.com/images/I/61Zcq4BThbL._AC_SY200_.jpg'
     />
     </div>
    
     <div className='grid grid-cols-1 md:grid-cols-4  gap-3 relative z-10 justify-items-center mb-[8px]'>
        <Home_CardOne
        title = 'Gaming merchandise'
        cat1 = 'Apparel'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg'
        cat2 = 'Hats'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg'
        cat3 = 'Action figures'
        cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg'
        cat4 = 'Mugs'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg'
        caption= 'See more'
        /> 
        <Home_CardOne
        title = 'Most-loved watches'
        cat1 = 'Women'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/WomenWatches_1x._SY116_CB564394432_.jpg'
        cat2 = 'Men'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/MenWatches_1x._SY116_CB564394432_.jpg'
        cat3 = 'Girls'
        cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/GirlWatches_1x._SY116_CB564394432_.jpg'
        cat4 = 'Boys'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/BoyWatches_1x._SY116_CB564394432_.jpg'
        caption= 'Discover more'
        />         
        <Home_CardOne
        title = 'Wireless Tech'
        cat1 = 'Smartphones'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Smartphone_1x._SY116_CB566164844_.jpg'
        cat2 = 'Watches'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Watches_1x._SY116_CB566164844_.jpg'
        cat3 = 'Headphones'
        cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Headphone_1x._SY116_CB566164844_.jpg'
        cat4 = 'Tablets'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Tablet_1x._SY116_CB566164844_.jpg'
        caption= 'Discover more'     
        />
        <Home_CardOne
        title = 'Score the top PCs & Accessories'
        cat1 = 'Desktops'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Desktops._SY116_CB558654384_.jpg'
        cat2 = 'Laptops'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_laptop._SY116_CB558654384_.jpg'
        cat3 = 'Hard Drives'
        cat3img ='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Hard_Drives._SY116_CB558654384_.jpg'
        cat4 = 'PC Accessories'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Accessories._SY116_CB558654384_.jpg'
        caption= 'See more'
        />         
    </div>

    <div className='px-10 w-full relative z-10 bg-white mb-[8px] py-3'>
     <Slider_component2
     title="Best Sellers in Clothing, Shoes & Jewelry"
     caption = ''
     img='https://m.media-amazon.com/images/I/81D+bCgn8hL._AC_SY200_.jpg'
     img2= 'https://m.media-amazon.com/images/I/81LPwvQLXJL._AC_SY200_.jpg'
     img3= 'https://m.media-amazon.com/images/I/71CgcMEo59L._AC_SY200_.jpg'
     img4= 'https://m.media-amazon.com/images/I/513fraGQXWL._AC_SY200_.jpg'
     img5= 'https://m.media-amazon.com/images/I/61Y8pQkviDL._AC_SY200_.jpg'
     img6= 'https://m.media-amazon.com/images/I/9171uzu8PEL._AC_SY200_.jpg'
     />
     </div>
    <div className='px-10 w-full relative z-10 bg-white mb-[8px] py-3'>
     <Slider_component3
     title="Home Décor Under $20"
     caption = 'Shop now'
     img='https://m.media-amazon.com/images/I/81jhky6KIBL._AC_SY200_.jpg'
     img2= 'https://m.media-amazon.com/images/I/51L3RwkaTBL._AC_SY200_.jpg'
     img3= 'https://m.media-amazon.com/images/I/617Ai2XeEoL._AC_SY200_.jpg'
     img4= 'https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SY200_.jpg'
     img5= 'https://m.media-amazon.com/images/I/71lYwpEFaqL._AC_SY200_.jpg'
     img6= 'https://m.media-amazon.com/images/I/71vuZisPpYL._AC_SY200_.jpg'
     />
     </div>

     <div className='grid grid-cols-1 md:grid-cols-4  gap-3 relative z-10 justify-items-center mb-[8px]'>
        <Home_CardOne
        title = 'Have more fun with family'
        cat1 = 'Outdoor Play Sets'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Playground_sets._SY116_CB558654384_.jpg'
        cat2 = 'Learning Toys'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_STEM_toys_or_learning_toys._SY116_CB558654384_.jpg'
        cat3 = 'Action figures'
        cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Action_figure._SY116_CB558654384_.jpg'
        cat4 = 'Pretend Play Toys'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg'
        caption= 'See more'
        /> 
        <Home_CardOne
        title = 'Most-loved travel essentials'
        cat1 = 'Backpacks'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Backpack_1x._SY116_CB566100767_.jpg'
        cat2 = 'Suitcases'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/TravelBag_1x._SY116_CB566100767_.jpg'
        cat3 = 'Accessories'
        cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Accessories_1x._SY116_CB566100767_.jpg'
        cat4 = 'Handbags'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Handbags_1x._SY116_CB566100767_.jpg'
        caption= 'Discover more'
        />         
        <Home_CardOne
        title = 'Vacation getaway'
        cat1 = 'Handbags'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bag_1X._SY116_CB563194051_.jpg'
        cat2 = 'Swimwear'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Swim_1X._SY116_CB563194051_.jpg'
        cat3 = 'Skincare'
        cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Beauty_1X._SY116_CB563194051_.jpg'
        cat4 = 'Sandals'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Shoes_1X._SY116_CB563194051_.jpg'
        caption= 'Shop more'     
        />
        <Home_CardOne
        title = 'Fantastic Finds for Home'
        cat1 = 'Kitchen'
        cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Kitchen._SY116_CB558654384_.jpg'
        cat2 = 'Home Decor'
        cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Home_decor._SY116_CB558654384_.jpg'
        cat3 = 'Dining'
        cat3img ='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Dining._SY116_CB558654384_.jpg'
        cat4 = 'Smart Home'
        cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Smart_home._SY116_CB558654384_.jpg'
        caption= 'See more'
        />         
    </div>

    <div className='px-10 w-full relative z-10 bg-white mb-[8px] py-3'>
     <Slider_component3
     title="Best Sellers in Sports & Outdoors"
     caption = ''
     img='https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SY200_.jpg'
     img2= 'https://m.media-amazon.com/images/I/51SxIyLWwUL._AC_SY200_.jpg'
     img3= 'https://m.media-amazon.com/images/I/712fToMD1rS._AC_SY200_.jpg'
     img4= 'https://m.media-amazon.com/images/I/71S4-NjoTDL._AC_SY200_.jpg'
     img5= 'https://m.media-amazon.com/images/I/71Sssq9cWcL._AC_SY200_.jpg'
     img6= 'https://m.media-amazon.com/images/I/71hYbAifNoL._AC_SY200_.jpg'
     />
     </div>
    <div className='px-10 w-full relative z-10 bg-white mb-[8px] py-3'>
     <Slider_component3
     title="Best Sellers in Kitchen & Dining"
     caption = ''
     img='https://m.media-amazon.com/images/I/81OcvnCIH1L._AC_SY200_.jpg'
     img2= 'https://m.media-amazon.com/images/I/61J0e7d0GEL._AC_SY200_.jpg'
     img3= 'https://m.media-amazon.com/images/I/51zaCVh6SIL._AC_SY200_.jpg'
     img4= 'https://m.media-amazon.com/images/I/61YO+aQShHL._AC_SY200_.jpg'
     img5= 'https://m.media-amazon.com/images/I/814WEkpf3-L._AC_SY200_.jpg'
     img6= 'https://m.media-amazon.com/images/I/61UFMf2FffL._AC_SY200_.jpg'
     />
     </div>


     <div className='grid grid-cols-1 md:grid-cols-4  gap-3 relative z-10 justify-items-center mb-[8px]'>
        <Home_CardOne
          title = 'Level up your beauty routine'
          cat1 = 'Makeup'
          cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Make-up._SY116_CB558654384_.jpg'
          cat2 = 'Brushes'
          cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Brushes._SY116_CB558654384_.jpg'
          cat3 = 'Sponges'
          cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Sponges._SY116_CB558654384_.jpg'
          cat4 = 'Mirrors'
          cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Mirrors._SY116_CB558654384_.jpg'
          caption= 'See more'
          /> 
        <Home_CardOne
          title = 'Level up your gaming'
          cat1 = 'PC gaming'
          cat1img = 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_.jpg'
          cat2 = 'Xbox'
          cat2img = 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NE_GamingWeek_Xbox_v2_1x._SY116_CB558844445_.jpg'
          cat3 = 'PlayStation'
          cat3img = 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_SW_GamingWeek_Sony_v2_1x._SY116_CB558844445_.jpg'
          cat4 = 'Nintendo Switch'
          cat4img = 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_SE_GamingWeek_Nintendo_v2_1x._SY116_CB558844445_.jpg'
          caption= 'Shop the latest in gaming'
          />
       
        <Home_CardThree
        title = 'Shop activity trackers and smartwatches'
          img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg'
          caption='Shop now'
      />

<Home_CardTwo
        title = 'Gift ideas in Sheet & Pillowcase Sets'
        catmain = 'Utopia Bedding Twin Bed Sheets Set - 3 Piece Bedding - Brushed Microfiber - Shrinkage and Fad...'
        mainimg = 'https://m.media-amazon.com/images/I/71iB9q6GJ1L._AC_SY175_.jpg'
        cat1=''
        cat1img="https://m.media-amazon.com/images/I/71iB9q6GJ1L._AC_SY175_.jpg"
        cat2=''
        cat2img="https://m.media-amazon.com/images/I/81GOe-AzgAL._AC_SY55_.jpg"
        cat3=''
        cat3img="https://m.media-amazon.com/images/I/71X58zDZFoL._AC_SY55_.jpg"
        caption='Show more'
        />

    </div>

    <div className='px-10 w-full relative z-10 bg-white mb-[8px] py-3'>
     <Slider_component3
     title="Best Sellers in Home & Kitchen"
     caption = ''
     img='https://m.media-amazon.com/images/I/711Pd4pAs3L._AC_SY200_.jpg'
     img2= 'https://m.media-amazon.com/images/I/71pdJMZpB7L._AC_SY200_.jpg'
     img3= 'https://m.media-amazon.com/images/I/713afJ6oJ+L._AC_SY200_.jpg'
     img4= 'https://m.media-amazon.com/images/I/71HHm6ymvZL._AC_SY200_.jpg'
     img5= 'https://m.media-amazon.com/images/I/81v4Q00FOyL._AC_SY200_.jpg'
     img6= 'https://m.media-amazon.com/images/I/71329CVoVDL._AC_SY200_.jpg'
     />
     </div>
      <div className='px-10 w-full relative z-10 bg-white mb-4 py-3'>
      <Slider_component4
      title='Best Sellers in Clothing'
      caption = ''
     img='https://images-na.ssl-images-amazon.com/images/I/81lkOoE6hHL._AC_UL165_SR165,165_.jpg'
     img1caption='ANRABESS Women Long Sleeve Crewneck Rib Knit Slim Fit Shirts Basic Tee Tops 2024 Casual T-Shirt Going Out Workout Outfits'
     img1qty='108'
     discount1 = '-25%'
     discountprice1 = '14.99'
     price1 = '19.99'

     img2='https://images-na.ssl-images-amazon.com/images/I/81lkOoE6hHL._AC_UL165_SR165,165_.jpg'
     img2caption='Roselux Womens Long Sleeve Stretch Crewneck Ribbed T-Shirt Fitted Casual Basic Tops'
     img2qty='821'
     discount2 = ''
     discountprice2 = ''
     price2 = '23.99'

     img3='https://images-na.ssl-images-amazon.com/images/I/71DadUvnmLL._AC_UL165_SR165,165_.jpg'
     img3caption="PALINDA Womne's Ribbed Round Neck Slim Fitted T Shirts Basic Solid Long Sleeve Layering Tee Tops..."
     img3qty='393'
     discount3 = '-17%'
     discountprice3 = '18.99'
     price3 = '22.99'

     img4='https://images-na.ssl-images-amazon.com/images/I/712yf461Q1L._AC_UL165_SR165,165_.jpg'
     img4caption="GEMBERA Womens Ribbed Long Sleeve Crewneck Casual Slim Basic Shirts Fitted Knit..."
     img4qty='952'
     discount4 = ''
     discountprice4 = ''
     price4 = '23.99'

     img5='https://images-na.ssl-images-amazon.com/images/I/71WKszQatzL._AC_UL165_SR165,165_.jpg'
     img5caption="AUTOMET Womens Long Sleeve Shirts Basic Crop Tops Going Out Fall Fashion Slim Fit Y2K To..."
     img5qty='103'
     discount5 = ''
     discountprice5 = ''
     price5 = '14.99'

     img6='https://images-na.ssl-images-amazon.com/images/I/718DcnGaztL._AC_UL165_SR165,165_.jpg'
     img6caption="Zeagoo Womens Long Sleeve Stretch Crewneck Ribbed T-Shirt Slim Fit Casual Basic Tops S-XXL"
     img6qty='113'
     discount6 = ''
     discountprice6 = ''
     price6 = '17.99'
      />
      </div>   
     </div>
    </div>
  )
}

export default Home
