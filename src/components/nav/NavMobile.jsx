import React, { useState } from 'react';
import Logo from './nav_img/logo.png';
import Hambarger from './nav_img/hambarger.png';
import { MdClose } from 'react-icons/md';
import {  Link, useNavigate } from "react-router-dom";
import { BsArrowRightSquare } from 'react-icons/bs';
import { motion } from 'framer-motion';

const NavMobile = () => {
    const [hamwitdh, setHamwidth] = useState("w-0")
    const open = () =>{
        setHamwidth("w-[100%]");
    }
    const close = ()=>{
        setHamwidth("w-0");
    }
    // react router navigator
    let navigate = useNavigate();
    
    return (
    <div className='w-full lg:hidden'>
        <div className='md:flex sm:flex w-full inline-flex h-auto p-4 px-5 items-center justify-between transition-all ease-in-out duration-500'>
        {/* Logo Section */}
        <motion.div
        initial={{ y: -20, opacity:0 }}
        animate={{ y: 0, opacity:1 }}
        transition={{delay: 0, y: { duration:.5 }, ease: "linear", type: "spring", stiffness:100 }}
        className='flex items-center cursor-pointer mr-[20px] select-none'>
            <img className='w-[123px] h-[33.03px]' 
            onClick={()=>{
                navigate("/");
            }}
            src={Logo} alt="logo" />
        </motion.div>
        {/* Hamburger & Button*/}
        <div className='flex items-center gap-2'>
            <Link to="/">
            <motion.img 
            initial={{ y: -20, opacity:0 }}
            animate={{ y: 0, opacity:1 }}
            transition={{delay: 0.2, y: { duration:.5 }, ease: "linear", type: "spring", stiffness:100 }}
            onClick={open} className='min-w-[41px] h-[37px] select-none
            hamBargur p-3 rounded-[10px] cursor-pointer' 
            src={Hambarger} alt="hamLogo" />
            </Link>

            <motion.div className='sm:hidden headerButtonMobile items-center gap-1 select-none'
            initial={{ y: -20, opacity:0 }}
            animate={{ y: 0, opacity:1 }}
            transition={{delay: 0.4, y: { duration:.5 }, ease: "linear", type: "spring", stiffness:100 }}
            onClick={()=>{
                navigate("/contact");
            }}
            >
            <p className='text-[14px] text-left font-semibold
            text-white'>Start a project</p>
            <BsArrowRightSquare className='text-white hTextHover'></BsArrowRightSquare>

            </motion.div>
        </div>
        </div>
        {/* transparent section */}
        
        <div className={`flex fixed bg-[#000000]/90 ${hamwitdh} h-[100vh] top-0
        text-white justify-center items-center text-center text-[40px] tracking-[1px]
        overflow-hidden origin-left duration-500`}>
            <MdClose onClick={close} className='absolute top-5 right-5 cursor-pointer'/>
            <ul>
                <li className='hover:translate-y-[-5px]
                duration-500'><Link to="/">Home</Link></li>
                <li className='hover:translate-y-[-5px]
                duration-500'><Link to="/portfolio">Portfolio</Link>
                </li>
                <li className='hover:translate-y-[-5px]
                duration-500'><Link to="/casestudies">Case studies</Link>
                </li>
                <li className='hover:translate-y-[-5px]
                duration-500'><Link to="/about">About</Link>
                </li>
                <li className='hover:translate-y-[-5px]
                duration-500'><Link to="/contact">Contact</Link>
                </li>
                <li className='hover:translate-y-[-5px]
                duration-500'><Link to="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavMobile