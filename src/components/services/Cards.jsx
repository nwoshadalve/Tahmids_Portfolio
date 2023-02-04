import React from 'react';
import c1 from '../../images/services/cardImg/card_1.png';
import c2 from '../../images/services/cardImg/card_2.png';
import c3 from '../../images/services/cardImg/card_3.png';

const Cards = () => {
  
  const cardInfo =[
    {
      img: c1,
      title: "UX-UI",
      description:"A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea ."
    },
    {
      img: c2,
      title: "Graphics",
      description:"A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea ."
    },
    {
      img: c3,
      title: "Branding",
      description:"A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea ."
    }
  ]
  
  return (
    <div className='w-full flex flex-col lg:flex-row justify-center items-center pt-[30px] md:pt-[44px] gap-5 xl:gap-10 select-none'>
      {
        cardInfo.map((item,i)=>(
          <div key={i.toString()} 
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className='w-[270px] xl:w-[410px] h-[330px] xl:h-[452px] 
          flex relative flex-col items-center xl:justify-center  
          px-6 py-8 xl:px-[42.5px] xl:py-0 
          border border-cardBorder rounded-[20px] xl:rounded-[24px] 
          cardEffect'>
            <img className='w-36 h-36 xl:w-auto xl:h-[auto] object-contain ' src={item.img} alt="img" />
            <p className='font-bold py-2 xl:pt-[30px] xl:pb-[16px] text-[24px] xl:text-[36px] xl:leading-[35px] text-cardBorderBottom fontBold'>{item.title}<span className='text-white'> Design</span></p>
            <p className='text-left text-[13px] xl:text-[16px] xl:leading-[22px] fontRegular text-slate-200 font-[100]'>{item.description}</p>
            <div className='w-[272px] xl:w-[412px] h-7 xl:h-[45px] absolute -bottom-[2px] 
            border-r-2 xl:border-r-4 border-r-cardBorderBottom
            border-l-2 xl:border-l-4 border-l-cardBorderBottom
            border-b-2 xl:border-b-4 border-b-cardBorderBottom
            rounded-b-[20px] xl:rounded-b-[24px]
            rounded-t-[2.1px] xl:rounded-t-[3px]
            '>

            </div>
          </div>
        ))
      }
      
    </div>

  )
}

export default Cards