import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = (props) => {
  return (
    <div id="contact" className="container py-5">
      <div
        className={`row text-${
          props.mode === "herosectionbg" ? "dark" : "light"
        }`}
      >
        <h2
          className={`text-center text-${
            props.mode === "herosectionbg" ? "blue" : "light"
          }`}
        >
          <strong className="contact_hedding">CONTACT</strong>
        </h2>
        <p className="text-center mt-3">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas
        </p>
        <div className="col-lg-6 py-4 px-4 my-3">
          <div className="px-5 py-5 shadow">
            <div className="location d-flex my-3">
              <li className="location_icon">
                <BiCurrentLocation />
              </li>
              <div className="content mx-3">
                <p className="fs-5">
                  <strong>Loctaion :</strong>
                </p>
                <p>Sambhal Up 244302</p>
              </div>
            </div>
            <div className="location d-flex my-3">
              <li className="location_icon">
                <MdMarkEmailRead />
              </li>
              <div className="content mx-3">
                <p className="fs-5">
                  <strong>Email :</strong>
                </p>
                <p>neerajkumarsbl1999@gmail.com</p>
              </div>
            </div>
            <div className="location d-flex my-3">
              <li className="location_icon">
                <BiSolidPhoneCall />
              </li>
              <div className="content mx-3">
                <p className="fs-5">
                  <strong>Call :</strong>
                </p>
                <p>+919457386375</p>
              </div>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.95741607037633!2d78.57156538402658!3d28.590215738587453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b18ca0aa308c9%3A0x7c77cab0efce31cd!2z4KS44KSu4KWN4KSt4KSyLCDgpIngpKTgpY3gpKTgpLAg4KSq4KWN4KSw4KSm4KWH4KS2!5e0!3m2!1shi!2sin!4v1686204181404!5m2!1shi!2sin"
                className="w-100"
                height="298"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-lg-6 py-4 px-4 my-3">
          <div className="shadow px-5 py-5">
            <div className="input_box d-flex">
              <div className="input_item w-50" style={{ padding: "0 7px 0 0" }}>
                <label htmlFor="!#">Your Name : </label>
                <br />
                <input
                  type="text"
                  className="w-100"
                  style={{ height: "50px", borderRadius: "5px" }}
                />
              </div>
              <div className="input_item w-50">
                <label htmlFor="!#">Your Email : </label>
                <br />
                <input
                  type="email"
                  className="w-100"
                  style={{ height: "50px", borderRadius: "5px" }}
                />
              </div>
            </div>
            <div className="input_item my-3">
              <label htmlFor="!#">Subject : </label>
              <br />
              <input
                type="email"
                className="w-100"
                style={{ height: "50px", borderRadius: "5px" }}
              />
            </div>
            <div className="textarea mt-4">
              <label htmlFor="!#">Message : </label>
              <br />
              <textarea
                className="w-100"
                name=""
                id=""
                rows="10"
                style={{ borderRadius: "5px" }}
              ></textarea>
            </div>
            <div className="sumbit_btn text-center mt-4">
              <button
                className="btn px-4"
                style={{
                  borderRadius: "25px",
                  border: "2px solid #47b2e4",
                  backgroundColor: "#47b2e4",
                  color: "#fff",
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
