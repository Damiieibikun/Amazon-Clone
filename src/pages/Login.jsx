import React, { useContext, useEffect } from 'react'
import Button from '../components/Button'
import {Logo} from '../components/Logo'
import { appContex } from '../context/appContext'
import { IoCaretForwardOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaExclamation } from "react-icons/fa6";
import { APIcontext } from '../context/APIContext';

const Login = () => {
  const {setPage, handleloginInputValues, loginError, loginInputValues, handleEmailSubmit} = useContext(appContex)
  const{setFailedRegisterMsg} = useContext(APIcontext)
  
  const location = useLocation()
  useEffect(()=>{setPage(location.pathname)}, [location.pathname, setPage])
const navigate = useNavigate()

const checkEmailSubmit = (e)=>{
e.preventDefault()
if(handleEmailSubmit(e)){
  setFailedRegisterMsg('')
  navigate('/login/pass')
}
}

  return (
    <div className='p-3 mt-10 flex flex-col justify-between items-center min-h-[80vh]'>
      <Logo/>
      <form className='min-w-fit p-6 rounded-md border mt-8 flex flex-col justify-center w-[350px]' onSubmit={checkEmailSubmit}>
      {loginError.loginEmail && <p className='text-xs text-red-600 flex gap-[2px] items-center font-AmazonEmberRegular'> <FaExclamation className='italic'/> {loginError.loginEmail}</p>}
      <h1 className='font-AmazonEmberRegular text-[28px] mb-2'>Sign in</h1>
      <p className='font-AmazonEmber text-[13px] mb-[2px]'>Email or mobile phone number</p>
      <input onChange={handleloginInputValues} value={loginInputValues.email} name='email' type="text" className='p-1 border rounded-[4px] border-gray-400 mb-3 h-[31px] focus:ring-2 focus:outline-none  focus:ring-cyan-300' />
      <Button type={'submit'} text={'Continue'} classStyle={'text-[13px] bg-[#FFD814] hover:bg-[#F7CA00]'}/>
      <p className='font-AmazonEmberRegular text-[12px] mt-[18px]'>By continuing, you agree to Amazon's <span className='underline text-sky-700 hover:text-red-700 hover:cursor-pointer'>Conditions of Use</span> and <span className='underline text-sky-700 hover:text-red-700 hover:cursor-pointer'>Privacy Notice</span>.</p>
      <div className='flex items-center gap-[2px] py-5 border-b-2'>
      <IoCaretForwardOutline size={12} className='text-gray-700' /> 
      <p className='font-AmazonEmberRegular text-[13px] text-sky-700 hover:text-red-700 hover:cursor-pointer hover:underline'> Need help?</p>
      </div>
      <div className='py-4'>
        <p className='font-AmazonEmber text-[13px] mb-3'>Buying for work?</p>
        <p className='font-AmazonEmberRegular text-[13px] text-sky-700 hover:text-red-700 hover:cursor-pointer hover:underline'>Shop on Amazon Business</p>
      </div>      
      </form>

      <div className='mt-[22px] mb-[14px] grid grid-cols-3 justify-items-center items-center'>
        <hr className='border-gray-300 w-[90%]'></hr>
        <div className='text-[#767676] font-AmazonEmberRegular text-[12px]'>New to Amazon?</div>
        <hr className='border-gray-300 w-[90%]'></hr>    
      </div>
    <Link to={'/register'}>
    <Button type={'button'} text={'Create your Amazon account'} classStyle={'text-[13px] border w-full shadow-md hover:bg-gray-50 p-[6px]'}/>
    </Link>
     
    </div>
  )
}

export default Login
