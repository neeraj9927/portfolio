import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import images_animation from '../images/hero-img.png'

const HeroSection = () => {
  return (
    <section className="herosection" id='herosection' style={{ backgroundColor: "#37517e" }}>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 text-light py-5 mt-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
            <h1>
              <strong><TypeAnimation             
                                        sequence={[
                                          'Better Solutions For Your Business',
                                          2000,
                                        ]}
                                        wrapper="span"
                                        speed={10}
                                        style={{ display: 'inline-block' }}
                                        repeat={0}
                                        preRenderFirstString={false}
              /></strong>
            </h1>
            <h4 className="my-3">
              I am of talented developer making websites with -     
              <TypeAnimation
                          sequence={[
                            'Html',
                            2000,
                            'Css',
                            2000,
                            'Java Script',
                            3000,
                            'Jqurey',
                            2000,
                            'ReactJs',
                            2000,
                            'PhotoShop',
                            2000
                          ]}
                          wrapper="span"
                          speed={50}
                          style={{ fontSize: '1.5em', display: 'inline-block' }}
                          repeat={Infinity}
                        />
            </h4>
            <button
              className="btn px-4 my-4 fw-bold"
              style={{
                borderRadius: "25px",
                border: "2px solid #47b2e4",
                backgroundColor: "#47b2e4",
                color: "#fff",
              }}
            >
              Get Started
            </button>
          </div>
          <div className="col-md-6" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1500">
            <div className="image-animation">
              <img
                src={images_animation}
                className="w-100"
                alt="image_animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
