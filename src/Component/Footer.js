import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = (props) => {
  return (
    <>
    <footer className='footer'>
      <div className="container">
        <div className={`row text-center py-5 text-${props.mode === 'herosectionbg'?'dark':'light'}`}>
            <div className="col-8 mx-auto">
              <h4><strong>Join Our Newsletter</strong></h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <div className="bg-light footer_input_box w-100 my-4 d-flex shadow" style={{borderRadius:'30px'}}>
                  <input type="text" className='w-75 px-3' style={{background:'transparent',height:'50px',border:'none',outline:'none'}}/>
                  <button className='w-25 text-light fs-media' style={{borderRadius:'30px',border:'none',backgroundColor:'#47b2e4'}}>Subscibe</button>
              </div>
            </div>
        </div>
      </div>
    </footer>
<div className="container my-5">
  <footer
          className="text-center text-lg-start text-white"
          >
    <div className="container p-4 pb-0">
      <section className="">
        <div className={`row text-${props.mode === 'herosectionbg'?'dark':'light'}`}>
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              NEERAJ
            </h6>
            <p>
            Address: Haibatpur Sambhal 244302 Up India
            </p>
            <p><a className={`text-decoration-none text-${props.mode === 'herosectionbg'? 'dark':'light'}`} href="#!">Phone: 9457386375</a></p>
            <p><a className={`text-decoration-none text-${props.mode === 'herosectionbg'? 'dark':'light'}`} href="#!">Email: neerajkumarsbl1999@gmail.com</a></p>
          </div>

          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3  text-center">
            <h6 className="text-uppercase mb-4 font-weight-bold">Useful Links</h6>
            <p>
              <a className={`text-${props.mode === 'herosectionbg'?'dark':'light'}`}href='#!'>Home</a>
            </p>
            <p>
              <a className={`text-${props.mode === 'herosectionbg'?'dark':'light'}`}href='#!'>Abouts</a>
            </p>
            <p>
              <a className={`text-${props.mode === 'herosectionbg'?'dark':'light'}`}href='#!'>Services</a>
            </p>
            <p>
              <a className={`text-${props.mode === 'herosectionbg'?'dark':'light'}`}href='#!'>Terms of service</a>
            </p>
            <p>
              <a className={`text-${props.mode === 'herosectionbg'?'dark':'light'}`}href='#!'>Privacy policy</a>
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3  text-center">
            <h6 className="text-uppercase mb-4 font-weight-bold">Our Service</h6>
            <p><a className={`text-decoration-none text-${props.mode === 'herosectionbg'? 'dark':'light'}`} href="#!">Web Design</a></p>
            <p><a className={`text-decoration-none text-${props.mode === 'herosectionbg'? 'dark':'light'}`} href="#!">Web Development</a></p>
            <p><a className={`text-decoration-none text-${props.mode === 'herosectionbg'? 'dark':'light'}`} href="#!">Graphic Design</a></p>
            <p></p>
          </div>
          <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
            <a className='px-2 text-success'               
               href="#!"
               role="button"
               ><BsFacebook/></a>

            <a className='px-2 text-success'
               href="#!"
               role="button"
               ><BsWhatsapp/></a>

            <a className='px-2 text-success'
               href="#!"
               role="button"
               ><i className="fab fa-google"></i
              ><BsInstagram/></a>

            <a className='px-2 text-success'
               href="#!"
               role="button"
               > <BsLinkedin/></a>


            <a className='px-2 text-success'
               href="#!"
               role="button"
               ><BsTwitter/></a>
          </div>
        </div>
      </section>
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer
