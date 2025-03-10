import React, { useContext, useEffect, useState } from 'react'
import Button from '../components/Button'
import {Logo} from '../components/Logo'
import { appContex } from '../context/appContext'
import { IoCaretForwardOutline } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import { PiWarningThin } from "react-icons/pi";
import { APIcontext } from '../context/APIContext';
import { FaExclamation } from "react-icons/fa6";
import { MiniLoaders } from '../components/Loaders';

const Password_page = () => {
    const {setPage, handleloginInputValues, loginError, loginInputValues,handleLoginSubmit, setLoginInputValues} = useContext(appContex)
    const {successfullLogin, failedLoginMsg, loginMsg, loginLoader, setFailedRegisterMsg} = useContext(APIcontext)
    const [isVisible, setIsVisible] = useState(false); 
    const location = useLocation()
    const navigate = useNavigate()  
   

    useEffect(() => {
      
      setPage(location.pathname);
    }, [location.pathname, setPage]);
  
    useEffect(() => {
      if (successfullLogin) {
        setIsVisible(true);
        setLoginInputValues({
          email: '',
          password: ''
        });
        
        setFailedRegisterMsg('')

        const timer = setTimeout(() => {
          setIsVisible(false);
          navigate('/');
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [successfullLogin, setLoginInputValues, navigate]);
    

    return (
      <div className='p-3 mt-10 flex flex-col items-center min-h-[80vh]'>
        <>
      {isVisible && (
        <div className="bg-green-500 text-white px-4 py-3 fixed top-1 rounded">
          <p className='font-AmazonEmberRegular text-[14px]'>{loginMsg}</p>
        </div>
      )}
    </>
        <Logo/>
        {loginLoader && <MiniLoaders/>}
        {
          failedLoginMsg && <div className="rounded-md border border-red-500 p-5 mt-6 flex gap-2 shadow-inner shadow-red-200">
            <div>
            <PiWarningThin size={35} className='text-red-700'/>
            </div>
            <div>
            <p className='font-AmazonEmberRegular text-red-700'>There was a problem!</p>
            <p className='font-AmazonEmberRegular text-[13px]'>{failedLoginMsg}</p>
            </div>            
          </div>
        }
        
       
        <form className='min-w-fit p-6 rounded-md border mt-6 flex flex-col justify-center w-[350px]' onSubmit={handleLoginSubmit}>
        
        <h1 className='font-AmazonEmberRegular text-[28px] mb-2'>Sign in</h1>
        {loginError.loginPassword && <p className='font-AmazonEmberRegular flex items-center text-xs text-red-700'><FaExclamation className='italic'/>{loginError.loginPassword}</p>}
        <div className='flex justify-between'>
        <p className='font-AmazonEmber text-[13px] mb-[2px]'>Password</p>
        <p className='font-AmazonEmberRegular text-[13px] mb-[2px] text-sky-700 hover:text-red-700 hover:cursor-pointer hover:underline'>Forgot password?</p>
        </div>
        
        <input onChange={handleloginInputValues} value={loginInputValues.password} name='password' type="password" className='p-1 border rounded-[4px] border-gray-400 mb-3 h-[31px] focus:ring-2 focus:outline-none  focus:ring-cyan-300' />
        <Button type={'submit'} text={'Sign in'} classStyle={'text-[13px] bg-[#FFD814] hover:bg-[#F7CA00]'}/>
        
        <div className='flex gap-[6px] items-center mt-[24px]'>
            <input type="checkbox" name="" id="" />
            <p className='font-AmazonEmberRegular text-[13px]'>Keep me signed in.</p>
            <span className='font-AmazonEmberRegular text-[13px] mb-[2px] text-sky-700 hover:text-red-700 hover:cursor-pointer hover:underline flex gap-[2px] items-center'>Details <IoCaretForwardOutline size={12} className='text-gray-700' /> </span>
        </div>
        <div className='mt-[22px] mb-[14px] grid grid-cols-3 justify-items-center items-center'>
          <hr className='border-gray-300 w-[95%]'></hr>
          <div className='text-[#767676] font-AmazonEmberRegular text-[12px]'>or</div>
          <hr className='border-gray-300 w-[95%]'></hr>    
        </div>
      
      <Button type={'button'} text={'Sign in with a passkey'} classStyle={'text-[13px] border w-full shadow-md hover:bg-gray-50 p-[6px]'}/>
      
        </form>
  
        
      </div>
    )
}

export default Password_page
