import React from 'react'
import { BsDribbble } from "react-icons/bs";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { BiTachometer } from "react-icons/bi";
import { BiLayer } from "react-icons/bi";

const Service = () => {
  return (
    <section className='service' id='service' style={{ backgroundColor: "#f3f5fa", padding: "70px 0" }}>
      <div className="container">
        <h1 className='text-center' style={{ color: "#37517e" }}><strong className='service_hedding'>Service</strong></h1>
        <div className="row" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="1500">
          <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          <div className="col-md-6 col-lg-3 py- px-2 my-lg-4 my-md-3 my-2" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="500">
            <div className="card py-4 px-4">
            <BsDribbble className='fs-2' style={{color:'#47b2e4'}}/>
            <h3 className='my-2' style={{ color: "#37517e" }}><strong>Lorem Ipsum</strong></h3>
            <p><i>Voluptatum deleniti atque corrupti quos dolores et quas molestias</i></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py- px-2 my-lg-4 my-md-3 my-2" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="500">
          <div className="card py-4 px-4">
            <BsFillFileEarmarkCodeFill className='fs-2' style={{color:'#47b2e4'}}/>
            <h3 className='my-2' style={{ color: "#37517e" }}><strong>Sed ut perspici</strong></h3>
            <p><i>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</i></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py- px-2 my-lg-4 my-md-3 my-2" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="500">
          <div className="card py-4 px-4">
            <BiTachometer className='fs-2' style={{color:'#47b2e4'}}/>
            <h3 className='my-2' style={{ color: "#37517e" }}><strong>Magni Dolores</strong></h3>
            <p><i>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</i></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py- px-2 my-lg-4 my-md-3 my-2" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="500">
          <div className="card py-4 px-4">
            <BiLayer className='fs-2' style={{color:'#47b2e4'}}/>
            <h3 className='my-2' style={{ color: "#37517e" }}><strong>Nemo Enim</strong></h3>
            <p><i>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</i></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
