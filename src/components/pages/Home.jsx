import React from 'react';
import Header from '../hero/Header';
import Portfolio from '../portfolio/Portfolio';
import Process from '../process/Process';
import Services from '../services/Services';
import Skills from '../skills/Skills';


const Home = () => {

  const hText = {
    services:{
      tittle:"My Services",
      headText:"What I've Been up to",
      color:"white",
      bg:"bg-tittleBgDark"
    },
    portfolio:{
      tittle:"My Portfolio",
      headText:"What I've Been up to",
      color:"black",
      bg:"bg-tittleBgLight"
    },
    process:{
      tittle:"My Process",
      headText:"Design Thinking Process",
      color:"black",
      bg:"bg-tittleBgLight"
    },
    skills:{
      tittle:"My Skills",
      headText:"Work and Education Timeline",
      color:"white",
      bg:"bg-tittleBgDark"
    },
    testimonial:{
      tittle:"Clinet Testimonilas",
      headText:"Kind Words From Beloved Clients",
      color:"white",
      bg:"bg-tittleBgDark"
    }
  };

  return (
    <div>
      <Header/>
      <Services tittle={hText.services.tittle} text={hText.services.headText} color={hText.services.color} bg={hText.services.bg}/>
      <Portfolio tittle={hText.portfolio.tittle} text={hText.portfolio.headText} color={hText.portfolio.color} bg={hText.portfolio.bg}/>
      <Process tittle={hText.process.tittle} text={hText.process.headText} color={hText.process.color} bg={hText.process.bg}/>
      <Skills tittle={hText.skills.tittle} text={hText.skills.headText} color={hText.skills.color} bg={hText.skills.bg}/>
      <Header/>
    </div>
  )
}

export default Home