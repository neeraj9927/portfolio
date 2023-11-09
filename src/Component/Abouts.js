import React from "react";
import { BsCheckAll } from "react-icons/bs";
import myImage from "../images/img-one.jpg";

const Abouts = (props) => {
  return (
    <div className="container" id="about">
      <div
        className={`row py-5 text-${
          props.mode === "herosectionbg" ? "dark" : "light"
        }`}
      >
        <h2
          className={`text-center mb-5 text-${
            props.mode === "herosectionbg" ? "blue" : "light"
          }`}
        >
          <strong className="abouts_hedding">ABOUT US</strong>
        </h2>
        <div className="col-md-6 text-center">
          <img src={myImage} alt="" className="w-50" />
        </div>
        <div className="col-md-6">
          <h2 className="mt-3">
            Hii My Name is Neeraj Kumar, I am from Sambhal
          </h2>
          <br />
          <h5>
            <BsCheckAll className="fs-4" style={{ color: "#47b2e4" }} /> I Am
            Six months Experience in Graphic design And Web design.
          </h5>
          <h5>
            <BsCheckAll className="fs-4" style={{ color: "#47b2e4" }} /> I
            worked in Webrife infotech systems as a graphic designer.
          </h5>
          <h5>
            <BsCheckAll className="fs-4" style={{ color: "#47b2e4" }} /> I'm
            Gradute from MJPRU University in Geography
          </h5>
          <br />
          <p>
            My name is Neeraj Kumar I am a Graphic Web Designer &
            Front-End-Devloper, I have 6 months of experience in this field and
            my pro skills are metioned below. HTML5, CSS3, JavaScript basic,
            Bootstrap, ReactJS basic, JQuery Photoshop, and Illustrator
          </p>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
