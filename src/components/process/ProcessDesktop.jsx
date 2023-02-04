import React from 'react';
import ProcessData from './ProcessData';
import CenterImg from '../../images/process/center_img.png';
import Icon1 from '../../images/process/ico1.png';
import Icon2 from '../../images/process/ico2.png';
import Icon3 from '../../images/process/ico3.png';
import Icon4 from '../../images/process/ico4.png';
import Icon5 from '../../images/process/ico5.png';
import ProcessContent from './ProcessContent';

const ProcessDesktop = () => {
  return (
    <div className='w-full flex justify-center select-none'>
        <div className='w-[400px] xl:w-[597px] py-[110px] xl:pt-[168px] xl:pb-[141px] relative'>
            <img src={CenterImg} alt="img" />
            <div 
            data-aos="fade-right"
            data-aos-duration="1500"
            className='w-[273px] h-[100px] flex items-center
            absolute left-[-43%] top-[15%]
            xl:left-[-40%] xl:top-[20%]'>
                <ProcessContent id={ProcessData[0].id} tittle={ProcessData[0].tittle} text={ProcessData[0].text} icon={Icon1} color="text-[#CF3530]"/>
            </div>
            <div 
            data-aos="fade-down"
            data-aos-duration="1500"
            className='w-[273px] h-[100px] flex items-center
            absolute left-[42%] top-[5%]
            xl:left-[40%] xl:top-[8%]'>
                <ProcessContent id={ProcessData[1].id} tittle={ProcessData[1].tittle} text={ProcessData[1].text} icon={Icon2} color="text-[#FF8F00]"/>
            </div>
            <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className='w-[273px] h-[100px] flex items-center
            absolute right-[-71%] top-[24%]
            xl:right-[-48%] xl:top-[28%]'>
                <ProcessContent id={ProcessData[2].id} tittle={ProcessData[2].tittle} text={ProcessData[2].text} icon={Icon3} color="text-[#FF8F00]"/>
            </div>
            <div 
            data-aos="fade-left"
            data-aos-duration="1500"
            className='w-[273px] h-[100px] flex items-center
            absolute right-[-50%] top-[69%]
            xl:right-[-28%] xl:top-[74%]'>
                <ProcessContent id={ProcessData[3].id} tittle={ProcessData[3].tittle} text={ProcessData[3].text} icon={Icon4} color="text-[#00C36D]"/>
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className='w-[273px] h-[100px] flex items-center
            absolute left-[-52%] top-[56%]
            xl:left-[-50%] xl:top-[62%]'>
                <ProcessContent id={ProcessData[4].id} tittle={ProcessData[4].tittle} text={ProcessData[4].text} icon={Icon5} color="text-[#00A8D4]"/>
            </div>
        </div>
    </div>
  )
}

export default ProcessDesktop