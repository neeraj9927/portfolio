import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import devlope from '../images/why-us.png'

const Skills = (props) => {
  return (
    <section
      className={`section_three  bg-${props.skillsmode}`}
      style={{ padding: "70px 0" }}
    >
      <div className="container">
        <div className={`row text-${props.mode === 'herosectionbg'?'dark':'light'}`}>
          <div className="col-lg-6">
            <h2>
              Eum ipsam laborum deleniti{" "}
              <strong className={`text-${props.mode === 'herosectionbg'? 'blue':'light'}`}>velit pariatur architecto aut nihil</strong>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
            <Accordion defaultActiveKey="0" className="mt-5">
              <Accordion.Item eventKey="0" className="my-3">
                <Accordion.Header>
                  {" "}
                  Non consectetur a erat nam at lectus urna duis?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="my-3">
                <Accordion.Header>
                  {" "}
                  Feugiat scelerisque varius morbi enim nunc?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="my-3">
                <Accordion.Header>
                  {" "}
                  Feugiat scelerisque varius morbi enim nunc?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg-6">
            <img className="w-100" src={devlope}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
