import React, { useContext, useEffect, useState } from 'react'
import { appContex } from '../context/appContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {Logo} from '../components/Logo'
import { IoCaretForwardOutline } from "react-icons/io5";
import Button from '../components/Button';
import { FaExclamation } from "react-icons/fa6";
import { APIcontext } from '../context/APIContext';
import { MiniLoaders } from '../components/Loaders';


const Register = () => {
    const {setPage, inputValues,
        handleInputs,
        error,
        handleSubmit, setInputValues} = useContext(appContex)

    const {successRegister, registerMsg, registerLoader} = useContext(APIcontext)
    const [isVisible, setIsVisible] = useState(false);  

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
      setPage(location.pathname)
    }, [location.pathname, setPage])

    useEffect(()=>{
      if(successRegister){  
        setIsVisible(true);
        setInputValues({
          email: '',
          password: '',
          repeat_password: '',
          first_name: '',
          last_name: '',
          phone: ''   
        });  
        const timer = setTimeout(() => {
          setIsVisible(false);
          navigate('/login');
        }, 2000);

        return () => clearTimeout(timer);
        }
    }, [successRegister, navigate, setInputValues])
 
  return (
    <div className='p-3 mt-7 flex flex-col justify-between items-center min-h-[80vh]'>
        <>
      {isVisible && (
        <div className="bg-green-500 text-white px-4 py-3 rounded fixed top-1">
          <p className='font-AmazonEmberRegular text-[14px]'>{registerMsg}</p>
        </div>
      )}
    </>

      <Logo/>
      <form className='min-w-fit p-6 rounded-md border mt-8 flex flex-col justify-center w-[350px]' onSubmit={handleSubmit}>
      <h1 className='font-AmazonEmberRegular text-[28px] mb-2'>Create account</h1>
      <div>
      <p className='font-AmazonEmber text-[13px] mb-[2px]'>Your First Name</p>
      <input onChange={handleInputs} value={inputValues.first_name} type="text" name='first_name' className={`${error.first_name ? `border-red-600 border-[2px]` : null}  p-2 border rounded-[4px] border-gray-400 mb-3 h-[31px] focus:ring-2 focus:outline-none  focus:ring-cyan-300 w-full placeholder:font-AmazonEmberRegular text-[12px] placeholder:text-gray-600`} placeholder='First Name'/>
      {error.first_name && <p className='text-xs text-red-600 flex gap-[2px] items-center font-AmazonEmberRegular'> <FaExclamation className='italic'/> {error.first_name}</p>}
      </div>
      <div>
      <p className='font-AmazonEmber text-[13px] mb-[2px]'>Your Last Name</p>
      <input onChange={handleInputs} value={inputValues.last_name} type="text" name='last_name' className={`${error.last_name ? `border-red-600 border-[2px]` : null}  p-2 border rounded-[4px] border-gray-400 mb-3 h-[31px] focus:ring-2 focus:outline-none  focus:ring-cyan-300 w-full placeholder:font-AmazonEmberRegular text-[12px] placeholder:text-gray-600`} placeholder='Last Name'/>
      {error.last_name && <p className='text-xs text-red-600 flex gap-[2px] items-center font-AmazonEmberRegular'> <FaExclamation className='italic'/> {error.last_name}</p>}
      </div>
      <div>
      <p className='font-AmazonEmber text-[13px] mb-[2px]'>Phone Number</p>
      <input onChange={handleInputs} value={inputValues.phone} type="text" name='phone' className={`${error.phone ? `border-red-600 border-[2px]` : null}  p-2 border rounded-[4px] border-gray-400 mb-3 h-[31px] focus:ring-2 focus:outline-none  focus:ring-cyan-300 w-full placeholder:font-AmazonEmberRegular text-[12px] placeholder:text-gray-600`} placeholder='Phone number'/>
      {error.phone && <p className='text-xs text-red-600 flex gap-[2px] items-center font-AmazonEmberRegular'> <FaExclamation className='italic'/> {error.phone}</p>}
      </div>
      <div>
      <p className='font-AmazonEmber text-[13px] mb-[2px]'>Email</p>
      <input onChange={handleInputs}  value={inputValues.email}  name= 'email' type="text" className={`${error.email ? `border-red-600 border-[2px]` : null}  p-2 border rounded-[4px] border-gray-400 mb-3 h-[31px] focus:ring-2 focus:outline-none  focus:ring-cyan-300 w-full placeholder:font-AmazonEmberRegular text-[12px] placeholder:text-gray-600`} />
      {error.email && <p className='text-xs text-red-600 flex gap-[2px] items-center font-AmazonEmberRegular'> <FaExclamation className='italic'/> {error.email}</p>}
      </div>
      <div>
      <p className='font-AmazonEmber text-[13px] mb-[2px]'>Password</p>
      <input onChange={handleInputs} value={inputValues.password} name='password' type="password" className={`${error.password ? `border-red-600 border-[2px]` : null}  p-2 border rounded-[4px] border-gray-400 mb-3 h-[31px] focus:ring-2 focus:outline-none  focus:ring-cyan-300 w-full placeholder:font-AmazonEmberRegular text-[12px] placeholder:text-gray-600`} placeholder='At least 6 Characters' />
      {error.password && <p className='text-xs text-red-600 flex gap-[2px] items-center font-AmazonEmberRegular'> <FaExclamation className='italic'/> {error.password}</p>}
      </div>
      <div>
      <p className='font-AmazonEmber text-[13px] mb-[2px]'>Re-enter password</p>
      <input onChange={handleInputs} value={inputValues.repeat_password} name='repeat_password' type="password" className={`${error.repeat_password ? `border-red-600 border-[2px]` : null}  p-2 border rounded-[4px] border-gray-400 mb-3 h-[31px] focus:ring-2 focus:outline-none  focus:ring-cyan-300 w-full placeholder:font-AmazonEmberRegular text-[12px] placeholder:text-gray-600`} />
      {error.repeat_password && <p className='text-xs text-red-600 flex gap-[2px] items-center font-AmazonEmberRegular'> <FaExclamation className='italic'/> {error.repeat_password}</p>}
      </div>
      
      <Button text={'Continue'} classStyle={'text-[13px] bg-[#FFD814] hover:bg-[#F7CA00] '}/>
      {registerLoader && <MiniLoaders/>}
      <p className='font-AmazonEmberRegular text-[12px] mt-[18px]'>By creating an account, you agree to Amazon's <span className='underline text-sky-700 hover:text-red-700 hover:cursor-pointer'>Conditions of Use</span> and <span className='underline text-sky-700 hover:text-red-700 hover:cursor-pointer'>Privacy Notice</span>.</p>
      
      <div className='py-4 border-none shadow-md mb-[18px] p-2'>
        <p className='font-AmazonEmber text-[13px] mb-3'>Buying for work?</p>
        <p className='font-AmazonEmberRegular text-[13px] text-sky-700 hover:text-red-700 hover:cursor-pointer hover:underline'>Create a free business account</p>
      </div> 
      <div className='font-AmazonEmberRegular text-[13px] flex gap-[3px] items-center'>Already have an account?
      <Link to={'/login'}>
         <span className='text-sky-700 hover:text-red-700 hover:cursor-pointer hover:underline flex gap-[2px] items-center'>Sign in <IoCaretForwardOutline size={12} /></span> 
         </Link>
         </div>
           
      </form>
    </div>
  )
}

export default Register
