import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import logo from "../images/favicon.png";

function Header(props) {
  const [scroll, setscroll] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("div");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top py-2 ${
        scroll ? "scroll" : "scroll_none"
      } bg-${props.mode}`}
    >
      <div className="container">
        <a className="navbar-brand text-light" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Scrollspy
              className="navbar-nav"
              items={[
                "herosection",
                "about",
                "service",
                "portfolio",
                "contact",
              ]}
              currentClassName="activeNavbar"
              offset={-10}
              scrollThrottle={800}
              useBoxMethod={true}
            >
              <li className="nav-item">
                <a
                  className="nav-link text-light px-md-4 px-sm-4 px-4 px-lg-3"
                  aria-current="page"
                  href="#herosection"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light px-md-4 px-sm-4 px-4 px-lg-3"
                  href="#about"
                >
                  Abouts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light px-md-4 px-sm-4 px-4 px-lg-3"
                  href="#service"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light px-md-4 px-sm-4 px-4 px-lg-3"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light px-md-4 px-sm-4 px-4 px-lg-3"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </Scrollspy>
            <button
              className="btn navbarbtn text-light px-4"
              style={{ borderRadius: "25px", border: "2px solid #47b2e4" }}
            >
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
