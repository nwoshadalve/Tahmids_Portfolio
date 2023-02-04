import React from 'react';
import { useState } from 'react';
import Menus from './Menus';
import hovericon from '../../images/portfolio/hovericon.png';
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
        <div 
        data-aos="fade-right"
        data-aos-duration="1500"
        className='w-full flex justify-center items-center'>
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
        <div className='w-full lg:w-[1000px] xl:w-[1400px] md:w-[700px] flex flex-col md:flex-row
         mt-[25px]
         justify-center items-center
         md:flex-wrap'>
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
              <motion.div
              initial={{
                x:-10,
                opacity:1
                
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
                duration: 0.8,
                delay: 1
              }}
              className='w-[260px] xxsm:w-[290px] xsm:w-[330px] sm:w-[400px]
              md:w-[320px] lg:w-[450px] xl:w-[636px] relative select-none
              portfolioCardHover'>

                <img
                data-aos="zoom-in-up"
                data-aos-duration="1200"
                src={img} alt="img" 
                className='w-full rounded-[15px] xl:rounded-[20px] object-contain'/>
                {/* Hover effect */}
                <div className='w-full h-0 absolute top-0 rounded-[15px]
                bg-[#2B373B] bg-opacity-80 mix-blend-multiply
                portfolioCardHoverBg lg:transition-[height] lg:ease-linear lg:duration-500'></div>
                <div className='w-full h-0 absolute top-0 rounded-[15px]
                 flex flex-col justify-center items-center
                 portfolioCardHoverContent
                 lg:transition-[height] lg:ease-linear lg:duration-[1000ms]'>
                  <img className='hidden opacity-0
                  lg:transition-opacity lg:ease-out lg:duration-500' src={hovericon} alt="icon" />
                  <a href={url} target='_blank' rel="noreferrer"
                  className='hidden opacity-0 text-[white] text-[18px]
                  leading-[40px] font-bold
                  lg:transition-opacity lg:ease-out lg:duration-[1000ms]'
                  >View full site</a>
                </div>
                </motion.div>
            </motion.div>

              )
            })
          }
        </div>
    </div>
  )
}

export default Gallery