import React, {useEffect, useState, useRef} from 'react'
import Isotope from 'isotope-layout';
import 'isotope-layout';
import BrandCrub from '../images/brandcrub.png'
import micohospital from '../images/mico hospital.png'
import netflix from '../images/netflix img.png'
import eduma from '../images/edumimg.png'
import shopingtemp from '../images/shopingtemplate.png'
import jamboburger from '../images/jamboburger.webp'
import discountBurger from '../images/burger-discount-JPEG.jpg'
import watchDiscount from '../images/watch discount post.png'
import fooddelivery from '../images/fooddeliver-post.webp'

const Portfolio = (props) => {

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
 

  return (
    <section className="portfolio py-3 py-lg-5" id='portfolio'>
      <div className="container">
        <div className={`row text-${props.mode === 'herosectionbg' ? 'dark':'light'}`}>
          <h2 className={`text-center text-${props.mode === 'herosectionbg'? 'blue':'light'}`}>
            <strong className="portfolio_hedding">
              PORTFOLIO
            </strong>
          </h2>
          <p className="text-center mt-3">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          <h1 className='text-center my-2'><strong>My Project</strong></h1>
          <div className="tab_nav my-2">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#!"
                  onClick={handleFilterKeyChange("*")}
                >
                  All Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#!"
                  onClick={handleFilterKeyChange("website")}
                >
                  Website
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#!' onClick={handleFilterKeyChange("photoshope")}>Photoshop</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row filter-container">
        <div className="col-lg-4 col-md-6 filter-item website my-lg-0 my-3">
            <a href="https://netflixlandingpagens.netlify.app/" target='_'>
              <img style={{height:'200px'}} className='w-100' src={netflix} alt="netfliximagewebsite" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 filter-item website my-lg-0 my-3">
            <a href="https://edumaneeraj.netlify.app" target='_'><img style={{height:'200px'}} className='w-100' src={eduma} alt="edumawebsiteimage" /></a>
          </div>
          <div className="col-lg-4 col-md-6 filter-item website my-lg-0 my-3">
            <a href="https://shopingtamplate.netlify.app" target='_'><img style={{height:'200px'}} className='w-100' src={shopingtemp} /></a>
          </div>
          <div className="col-lg-4 col-md-6 filter-item website my-lg-0 my-3">
            <a href="https://brandcrub.netlify.app/" target='_'><img style={{height:'200px'}} src={BrandCrub} className='w-100' /></a>
          </div>
          <div className="col-lg-4 col-md-6 filter-item website my-lg-0 my-3">
            <a href="https://micohospitalreactjs.netlify.app" target='_'><img style={{height:'200px'}} className='w-100' src={micohospital}/></a>
          </div>
          <div className="col-lg-4 col-md-6 filter-item photoshope my-lg-0 my-3">
            <img src={jamboburger} style={{height:'600px'}} alt="" className='w-100' />
          </div>
          <div className="col-lg-4 col-md-6 filter-item photoshope my-lg-0 my-3">
            <img src={discountBurger} style={{height:'600px'}} alt="" className='w-100' />
          </div>
          <div className="col-lg-4 col-md-6 filter-item photoshope my-lg-0 my-3">
            <img src={fooddelivery} style={{height:'600px'}} alt="" className='w-100' />
          </div>
          <div className="col-lg-4 col-md-6 filter-item photoshope my-lg-3 my-3">
            <img src={watchDiscount} alt="" className='w-100' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio
