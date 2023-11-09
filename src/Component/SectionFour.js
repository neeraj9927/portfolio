import React from 'react'
import { LineProgressBar } from '@frogress/line'
import devlopimageSecound from '../images/skills.png'

const SectionFour = (props) => {
  return (
    <>
    <div className='container py-5'>
      <div className={`row text-${props.mode === 'herosectionbg'?'dark':'light'}`}>
        <div className="col-lg-6">
            <img className='w-100' src={devlopimageSecound} />
        </div>
        <div className="col-lg-6">
            <h1 className={`text-${props.mode === 'herosectionbg'? 'blue':'light'}`}><strong>My Skills</strong></h1>
            {/* <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p> */}
            <div className='my-2'>
            <p><i>HTML</i>&nbsp;<i>80%</i></p>
            <LineProgressBar
             percent={80} 
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>CSS</i>&nbsp;<i>70%</i></p>
            <LineProgressBar
             percent={70} 
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>Jqurey</i>&nbsp;<i>70%</i></p>
            <LineProgressBar
             percent={70} 
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>Java Scripat</i>&nbsp;<i>50%</i></p>
            <LineProgressBar
             percent={50} 
             progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>ReactJs</i>&nbsp;<i>60%</i></p>
            <LineProgressBar
             percent={60} 
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>PhotoShop</i>&nbsp;<i>75%</i>
            </p>
            <LineProgressBar
             percent={75} 
             progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
             rounded={36}             
             />
            </div>
            <div className='my-2'>
            <p><i>.Git</i>&nbsp;<i>75%</i>
            </p>
            <LineProgressBar
             percent={75} 
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
