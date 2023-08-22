import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Header from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import Abouts from './Component/Abouts';
import Skills from './Component/Skills';
import SectionFour from './Component/SectionFour';
import Service from './Component/Service';
import BuildingScroll from './Component/BuildingScroll';
import BackToTopBtn from './Component/BackToTopBtn';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';
import Footer from './Component/Footer';


export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header/>
      <HeroSection/>
      <Abouts/>
      <Skills/>
      <SectionFour/>
      <Service/>
      <BuildingScroll/>
      <Portfolio/>
      <BackToTopBtn/>
      <Contact/>
      <Footer/>
    </>
  )
}
