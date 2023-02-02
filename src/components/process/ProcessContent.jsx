import React from 'react';

const ProcessContent = (props) => {
    const textColor = props.color;
    const icon= props.icon;
    return (
    <>
    <div className='hidden items-center lg:flex'>
        {/* Desktop */}
        <div className={`w-[50px] h-[50px] 
        xl:w-[90px] xl:h-[90px]
        rounded-[50%]
            flex justify-center items-center
            mr-[10px]`}>
            <img className='w-[50px] h-[50px] xl:w-[90px] xl:h-[90px]' src={icon} alt="icon" />
        </div>
        <div className='w-[217px] xl:w-[273px] border border-transparent'>
        <p className={`text-left text-[18px] xl:text-[24px] xl:leading-[23.21px] font-bold fontBold ${textColor}`}>{props.id}</p>
        <p className='text-left text-[18px] xl:text-[24px] xl:leading-[23.21px] xl:py-[4px] font-bold fontBold leading-[15px]'>{props.tittle}</p>
        <p className='text-left text-[12px] xl:text-[16px] xl:leading-[21.82px] font-normal fontRegular leading-[14px] pt-1'>{props.text}</p>
        </div>
    </div>

    {/* Mobile & tab */}
    <div className='flex lg:hidden'>
        <p className={`text-left text-[18px] xsm:text-[20px] md:text-[24px] font-bold ${textColor}`}>{props.id}</p>
    </div>
    </>
  )
}

export default ProcessContent;