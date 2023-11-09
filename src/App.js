import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css'
import Header from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import Abouts from './Component/Abouts';
// import Skills from './Component/Skills';
import SectionFour from './Component/SectionFour';
import Service from './Component/Service';
import BuildingScroll from './Component/BuildingScroll';
import BackToTopBtn from './Component/BackToTopBtn';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';
import Footer from './Component/Footer';


export default function App() {
  const [darkmode, setdarkmode] = useState('herosectionbg');
  const [skillsmode, setskillsmode] = useState('light-blue');

  
  const darkModeHandleClick = () =>{
    if(darkmode === 'herosectionbg'){
      setdarkmode('bodybg');
      document.body.style.backgroundColor = '#100F3A'
      setskillsmode('blue')
    }else{
      setdarkmode('herosectionbg');
      document.body.style.backgroundColor = 'white'
      setskillsmode('light-blue')
    }
  }

  return (
    <>
      <Header mode={darkmode}/>
      <HeroSection mode={darkmode} darkModeHandleClick={darkModeHandleClick}/>
      <Abouts mode={darkmode}/>
      {/* <Skills skillsmode={skillsmode} mode={darkmode}/> */}
      <SectionFour mode={darkmode}/>
      <Service skillsmode={skillsmode} mode={darkmode}/>
      <BuildingScroll/>
      <Portfolio mode={darkmode}/>
      <BackToTopBtn/>
      <Contact mode={darkmode}/>
      <Footer mode={darkmode}/>
    </>
  )
}
