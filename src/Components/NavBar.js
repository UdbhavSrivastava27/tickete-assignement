import React from 'react'
import logo from'../Assest/Logo.png'
import { MdLock } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";



const NavBar = () => {
  return (
    <div className=' m-0 '>
        
         <div className=' bg-slate-100 flex flex-row justify-between  py-5  px-4 md:px-28  items-center'>
          <img src={logo} alt='logo' className=' hidden md:flex' />
          <FaArrowLeft className=' text-xl flex md:hidden'/>
          
         <span className=' flex flex-row items-center text-gray-600'>
          <MdLock className=' text-2xl '/>
          <h1 className=' font-semibold'>Checkout</h1>
          </span>

          <span className=' flex flex-row items-center text-gray-600'>
          <CiCircleQuestion className=' m- text-black text-2xl '/>
          <h1 className=' hidden md:block'>Help</h1>
          </span>
         </div>


         <div  className=' bg-black items-center justify-center'>
          <h1 className='text-center  py-3 text-white '>Holding your tickets for 30:00</h1>
         </div>
         
    </div>
  )
}

export default NavBar