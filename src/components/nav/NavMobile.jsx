import React, { useState } from 'react';
import Logo from './nav_img/logo.png';
import Hambarger from './nav_img/hambarger.png';
import Arrow from './nav_img/arrow.svg';
import { MdClose } from 'react-icons/md';

const NavMobile = () => {
    const [hamwitdh, setHamwidth] = useState("w-0")
    const open = () =>{
        setHamwidth("w-[100%]");
    }
    const close = ()=>{
        setHamwidth("w-0");
    }
    
    return (
    <div className='w-full lg:hidden'>
        <div className='md:flex sm:flex w-full inline-flex h-auto p-4 px-5 items-center justify-between transition-all ease-in-out duration-500'>
        {/* Logo Section */}
        <div className='flex items-center cursor-pointer mr-[20px]'>
            <img className='w-[123px] h-[33.03px]' src={Logo} alt="logo" />
        </div>
        {/* Hamburger & Button*/}
        <div className='flex items-center gap-2'>
            <img onClick={open} className='w-[41px] h-[37px] object-contain
            hamBargur p-3 rounded-[10px] cursor-pointer
            ' 
            src={Hambarger} alt="hamLogo" />

            <div className='headerButtonMobile flex items-center gap-1 select-none'>
            <p className='text-[14px] text-left font-semibold
            text-white'>Start a project</p>
            <img className='' src={Arrow} alt="Arrow" />

            </div>
        </div>
        </div>
        {/* transparent section */}
        
        <div className={`flex fixed bg-[#2521EB]/60 ${hamwitdh} h-[100vh] top-0
        text-white justify-center items-center text-center text-[40px] tracking-[1px]
        overflow-hidden origin-left duration-500`}>
            <MdClose onClick={close} className='absolute top-5 right-5 cursor-pointer'/>
            <ul>
                <li className='hover:translate-y-[-5px]
                duration-500'><a href="/">Home</a></li>
                <li className='hover:translate-y-[-5px]
                duration-500'><a href="/">Portfolio</a></li>
                <li className='hover:translate-y-[-5px]
                duration-500'><a href="/">Case studies</a></li>
                <li className='hover:translate-y-[-5px]
                duration-500'><a href="/">About</a></li>
                <li className='hover:translate-y-[-5px]
                duration-500'><a href="/">Contact</a></li>
                <li className='hover:translate-y-[-5px]
                duration-500'><a href="/">Blog</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavMobile