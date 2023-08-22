import React, {useEffect, useState, useRef} from 'react'
import Isotope from 'isotope-layout';
import 'isotope-layout';

const Portfolio = () => {

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <section className="portfolio py-3 py-lg-5" id='portfolio'>
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="1500">
          <h1 className="text-center">
            <strong className="portfolio_hedding" style={{ color: "#37517e" }}>
              PORTFOLIO
            </strong>
          </h1>
          <p className="text-center mt-3">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          <div className="tab_nav mt-2" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="500">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#!"
                  onClick={handleFilterKeyChange("*")}
                >
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#!"
                  onClick={handleFilterKeyChange("vege")}
                >
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#!"
                  onClick={handleFilterKeyChange("fruit")}
                >
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#!' onClick={handleFilterKeyChange("any")}>Disabled</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row filter-container" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000">
          <div className="col-lg-4 col-md-6 filter-item vege">ravi</div>
          <div className="col-lg-4 col-md-6 filter-item fruit">kabi</div>
          <div className="col-lg-4 col-md-6 filter-item fruit">sabi</div>
          <div className="col-lg-4 col-md-6 filter-item vege">habi</div>
          <div className="col-lg-4 col-md-6 filter-item any">any</div>
          <div className="col-lg-4 col-md-6 filter-item any">any</div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio
