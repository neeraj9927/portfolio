import React, { useEffect, useState } from 'react';
import Scrollspy from 'react-scrollspy';
import logo from '../images/favicon.png'

function Header() {
    const [scroll, setscroll] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        setscroll(true);
      }else{
        setscroll(false);
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('div');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top py-2 ${scroll ? 'scroll':'scroll_none'}`}>
  <div className="container">
    <a className="navbar-brand text-light" href="#"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <Scrollspy className='navbar-nav ms-auto mb-2 mb-lg-0'
        items={['herosection', 'about','service','portfolio','contact']} 
        currentClassName="activeNavbar"
        offset={-10} 
        scrollThrottle={800}
        useBoxMethod={true}     
      >
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="#herosection">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#about">Abouts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href='#service'>Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href='#portfolio'>Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href='#contact'>Contact</a>
        </li>
        <button className='btn navbarbtn text-light px-4' style={{borderRadius:'25px',border:'2px solid #47b2e4'}}>Get Started</button>
        </Scrollspy>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Header;
