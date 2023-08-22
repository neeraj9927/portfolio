import React, {useEffect, useState} from 'react'

import { BsArrowBarUp } from "react-icons/bs";

const BackToTopBtn = () => {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);   

  return (
    showButton && 
        (<button className="back-to-top" onClick={handleScrollToTop}><BsArrowBarUp/></button>)
  )
}

export default BackToTopBtn
