import React from 'react'
import { BsDribbble } from "react-icons/bs";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { BiTachometer } from "react-icons/bi";
import { BiLayer } from "react-icons/bi";

const Service = (props) => {

  const styled = {
    height:'250px',
  }
  return (
    <section className={`service bg-${props.skillsmode}`} id='service' style={{ padding: "70px 0" }}>
      <div className="container">
        <h2 className={`text-center text-${props.mode === 'herosectionbg'? 'blue':'light'}`}><strong className='service_hedding'>Service</strong></h2>
        <div className="row">
          <p className={`text-center text-${props.mode === 'herosectionbg'? 'dark':'light'}`}>I am Neeraj Kumar. I provide you Graphic design, Web design and Responsive web design services. I enjoy doing all these things or helping Everyone. I am Creative Graphic Designer and Web Designer..</p>
          <div className="col-md-6 col-lg-3 py- px-2 my-lg-4 my-md-3 my-2">
            <div className="card py-4 px-4" style={styled}>
            <BsDribbble className='fs-2' style={{color:'#47b2e4'}}/>
            <h3 className='my-2' style={{ color: "#37517e" }}><strong>Front-End-Developer</strong></h3>
            <p><i>I try to find new Front-End-Developer and Web Design for you and I have new creative designs.</i></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py- px-2 my-lg-4 my-md-3 my-2">
          <div className="card py-4 px-4" style={styled}>
            <BsFillFileEarmarkCodeFill className='fs-2' style={{color:'#47b2e4'}}/>
            <h3 className='my-2' style={{ color: "#37517e" }}><strong>Web Design</strong></h3>
            <p><i>I try to find new Web Design for you and I have new creative designs.</i></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py- px-2 my-lg-4 my-md-3 my-2">
          <div className="card py-4 px-4" style={styled}>
            <BiTachometer className='fs-2' style={{color:'#47b2e4'}}/>
            <h3 className='my-2' style={{ color: "#37517e" }}><strong>Web Developer
</strong></h3>
            <p><i>I am a creative web developer. I use HTML, Css and Bootstrap for web development. and I design websites very well.</i></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py- px-2 my-lg-4 my-md-3 my-2">
          <div className="card py-4 px-4" style={styled}>
            <BiLayer className='fs-2' style={{color:'#47b2e4'}}/>
            <h3 className='my-2' style={{ color: "#37517e" }}><strong>Responsive Web Design</strong></h3>
            <p><i>I use Bootstrap and Media queries for Responsive Web design on every screen.</i></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
