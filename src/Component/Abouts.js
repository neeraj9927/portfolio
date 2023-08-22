import React from 'react'
import { BsCheckAll } from "react-icons/bs";


const Abouts = () => {
  return (
    <div className="container" id='about'>
      <div className="row py-5">
        <h1 className="text-center mb-5" style={{ color: "#37517e" }}>
          <strong className="abouts_hedding">ABOUT US</strong>
        </h1>
        <div className="col-md-6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            <BsCheckAll className="fs-4" style={{ color: "#47b2e4" }} /> Ullamco
            laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <p>
            <BsCheckAll className="fs-4" style={{ color: "#47b2e4" }} /> Duis
            aute irure dolor in reprehenderit in voluptate velit
          </p>
          <p>
            <BsCheckAll className="fs-4" style={{ color: "#47b2e4" }} /> Ullamco
            laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <div>
            <button
              className="btn my-3 learnmorebtn"
              style={{ borderRadius: "5px", border: "2px solid #47b2e4" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouts
