import React from 'react';
import { useState } from 'react';
import Menus from './Menus';
import { motion } from 'framer-motion';

const Gallery = () => {


  const [items, setItems] = useState(Menus);
  const [active,setActive] = useState("");
  const [activeAll,setActiveAll] = useState("activeMenu");

  // console.log(currentCatagory)

  const filterItem = (categItem) => {
    const updatedItems = Menus.filter((currElem) => {
       return currElem.catagory === categItem;
    })
    setActive(updatedItems[1].catagory);
    setItems(updatedItems);
    setActiveAll("");
  }
  const onClickAllItem = () =>{
    setItems(Menus);
    setActive("");
    setActiveAll("activeMenu");


  }

  return (
    <div className='w-full flex flex-col justify-center items-center pt-5 pb-5'>
        {/* Menus */}
        <div className='w-full flex justify-center items-center'>
            <div className='w-auto flex flex-wrap
            opacity-[0.9]
            font-[600] text-[#7983A4] text-[16px]
            xxxsm:text-[12px] xxsm:text-[14px]
            mx-3 select-none
            '>
                <div 
                onClick={()=> onClickAllItem()}
                className='px-5 py-5 mb-2 bg-[#ECF2F7] text-center
                grow-[1] borderHeight cursor-pointer
                ' ><span className={`${activeAll}`}>All</span></div>
                <div
                onClick={()=> filterItem('web')}
                className='px-5 py-5 mb-2 bg-[#ECF2F7] text-center
                grow-[1] borderHeight cursor-pointer
                '><span className={`${active === 'web'? "activeMenu" : ""}`}>Website</span></div>
                <div
                onClick={()=> filterItem('app')}
                className='px-5 py-5 mb-2 bg-[#ECF2F7] text-center
                grow-[1] borderHeight cursor-pointer

                '><span className={`${active === 'app'? "activeMenu" : ""}`}>Mobile app</span></div>
                <div
                onClick={()=> filterItem('social')}
                className='px-5 py-5 mb-2 bg-[#ECF2F7] text-center
                grow-[1] borderHeight cursor-pointer

                '><span className={`${active === 'social'? "activeMenu" : ""}`}>Social post</span></div>
                <div
                onClick={()=> filterItem('logo')}
                className='px-5 py-5 mb-2 bg-[#ECF2F7] text-center
                grow-[1] xsm:grow-0 fixGrow borderHeight
                cursor-pointer
                '><span className={`${active === 'logo'? "activeMenu" : ""}`}>Logo Design</span></div>
                <div
                onClick={()=> filterItem('poster')}
                className='px-5 py-5 mb-2 bg-[#ECF2F7] text-center
                 cursor-pointer
                '><span className={`${active === 'poster'? "activeMenu" : ""}`}>Flyer/Poster</span></div>
            </div>
        </div>
        {/* Gallary */}
        <div className='w-full lg:w-[1000px] flex flex-col lg:flex-row
         mt-[10px] mb-[10px]
         justify-center items-center
         lg:flex-wrap'>
          {
            items.slice(0, 4).map((elem) => {
            const { id, img, url } = elem;

            return(
            <motion.div
            layout
            transition={{
              
              layout: { duration: 0.8 },
              duration: 0.5
            }}
            key={id.toString()} 
            className='w-[auto] mx-[10px] mb-[15px]
            flex justify-center items-center
            '>
              <a href={url} target='_blank' rel="noreferrer">
              <motion.img
              initial={{
                x:-10,
                opacity:0
                
              }}
              animate={{
                x:0,
                opacity:1
              }}
              exit={{
                x:10,
                opacity: 0
              }}
              transition={{
                opacity: { ease: "linear" },
                duration: 0.8
              }}
              className='w-[290px] sm:w-[400px] rounded-[15px]
              md:w-[450px] cursor-pointer' src={img} alt="img" />
              </a>
            </motion.div>

              )
            })
          }
        </div>

    </div>
  )
}

export default Gallery