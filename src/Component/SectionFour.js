import React from 'react'
import { LineProgressBar } from '@frogress/line'
import devlopimageSecound from '../images/skills.png'

const SectionFour = () => {
  return (
    <>
    <div className='container py-5'>
      <div className="row">
        <div className="col-lg-6" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1500">
            <img className='w-100' src={devlopimageSecound} />
        </div>
        <div className="col-lg-6" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
            <h1 style={{ color: "#37517e" }}><strong>Voluptatem dignissimos quasi provident corporis voluptates</strong></h1>
            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
            <div className='my-2'>
            <p><i>HTML</i><i>80%</i></p>
            <LineProgressBar
             percent={80} 
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>CSS</i><i>70%</i></p>
            <LineProgressBar
             percent={70} 
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>Jqurey</i><i>70%</i></p>
            <LineProgressBar
             percent={70} 
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>Java Scripat</i><i>50%</i></p>
            <LineProgressBar
             percent={50} 
             progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>ReactJs</i><i>70%</i></p>
            <LineProgressBar
             percent={70} 
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>PhotoShop</i><i>50%</i>
            </p>
            <LineProgressBar
             percent={50} 
             progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
             rounded={36}             
             />
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SectionFour
