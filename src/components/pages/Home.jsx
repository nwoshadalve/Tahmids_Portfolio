import React from 'react';
import Header from '../hero/Header';
import Portfolio from '../portfolio/Portfolio';
import Services from '../services/Services';


const Home = () => {

  const hText = {
    services:{
      tittle:"My Services",
      headText:"What I've Been up to",
      color:"white",
      bg:"tittleBgDark"
    },
    portfolio:{
      tittle:"My Portfolio",
      headText:"What I've Been up to",
      color:"black",
      bg:"tittleBgLight"
    },
    process:{
      tittle:"My Process",
      headText:"Design Thinking Process",
      color:"black",
      bg:"tittleBgLight"
    },
    skills:{
      tittle:"My Skills",
      headText:"Work and Education Timeline",
      color:"white",
      bg:"tittleBgLight"
    },
    testimonial:{
      tittle:"Clinet Testimonilas",
      headText:"Kind Words From Beloved Clients",
      color:"white",
      bg:"tittleBgDark"
    }
  };

  return (
    <div>
      <Header/>
      <Services tittle={hText.services.tittle} text={hText.services.headText} color={hText.services.color} bg={hText.services.bg}/>
      <Portfolio tittle={hText.portfolio.tittle} text={hText.portfolio.headText} color={hText.portfolio.color} bg={hText.portfolio.bg}/>
      <Header/>
    </div>
  )
}

export default Home