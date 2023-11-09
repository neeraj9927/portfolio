import React from "react";
import { TypeAnimation } from "react-type-animation";
import images_animation from "../images/hero-img.png";
import { BsBrightnessHighFill } from "react-icons/bs";

const HeroSection = (props) => {
  return (
    <section className={`herosection ${props.mode}`} id="herosection">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 text-light py-5 mt-5">
            <h1>
              <strong>
                <TypeAnimation
                  sequence={["Hi I am Neeraj Kumar", 2000]}
                  wrapper="span"
                  speed={10}
                  style={{ display: "inline-block" }}
                  repeat={0}
                  preRenderFirstString={false}
                  cursor={false}
                />
              </strong>
            </h1>
            <h1 className="my-3 fs-1">
              Talented developer making websites with&nbsp;
              <TypeAnimation
                sequence={[
                  "Html",
                  2000,
                  "Css",
                  2000,
                  "Java Script",
                  3000,
                  "Jqurey",
                  2000,
                  "ReactJs",
                  2000,
                  "PhotoShop",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <button
              className="btn px-4 my-4"
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
          <div className="col-md-6 my-md-auto my-lg-0 my-sm-0">
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
      <div
        className="darkmodebtn"
        style={{ cursor: "pointer" }}
        onClick={props.darkModeHandleClick}
      >
        <BsBrightnessHighFill
          className={`mx-sm-4 my-sm-4 mx-md-4 mx-lg-0 my-md-4 my-lg-0 fs-3 text-${
            props.mode === "bodybg" ? "light" : ""
          }`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
