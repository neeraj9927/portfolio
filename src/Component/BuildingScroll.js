import React from 'react'

const BuildingScroll = () => {
  return (
    <>
      <section className="building_scroll text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>
                <strong>Call To Action</strong>
              </h3>
              <p>
                <i>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </i>
              </p>
            </div>
            <div className="col-md-4 text-lg-end text-md-center text-center my-4 my-lg-0">
                <button className='btn px-5 py-3 fw-bold callbtn'>
                Call To Action
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuildingScroll
