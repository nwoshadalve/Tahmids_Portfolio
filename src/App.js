// import { AnimatePresence } from 'framer-motion';
import './components/common.css';
import { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';

function App() {
  
  // Navbar Changes on Scroll
  const [scrollNav, setScrollNav] = useState('');

  const onScrollHandaler = () =>{
    if(window.scrollY>30){
      setScrollNav("onScrollNav");
    }
    else if(window.scrollY<30){
      setScrollNav("");
    }

  }

  useEffect(()=>{
    window.addEventListener("scroll", onScrollHandaler);
  },[scrollNav]);
  
  return (
    <>
      <div className={`fixed ${scrollNav} w-full z-50 transition-all ease-in-out duration-500`}>
        <Nav/>
      </div>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
      <Nav/>
    </>
  );
}

export default App;
