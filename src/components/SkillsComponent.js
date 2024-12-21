import React from 'react'; 
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSquareJs, faCss, faSass, faReact, faNode, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch, faCode } from '@fortawesome/free-solid-svg-icons';
import '../styles/skillscomponent.scss';

const SkillsComponent = () => {
  return (
    <Container className="skills d-flex justify-content-start flex-column mb-5">
      <h1 className="header">Skills</h1>
      <div className="rounded-pill mb-3"></div>

      <div className="skillscontainer d-flex align-items-start justify-content-start flex-wrap">
        {/* Programming Languages */}
        <div className="skillscontent">
          <FontAwesomeIcon icon={faHtml5} />
          <p className="desc">HTML5</p>
        </div>

        <div className="skillscontent">
          <FontAwesomeIcon icon={faSquareJs} />
          <p className="desc">JavaScript</p>
        </div>

        <div className="skillscontent">
          <FontAwesomeIcon icon={faCss} />
          <p className="desc">CSS</p>
        </div>

        <div className="skillscontent">
          <FontAwesomeIcon icon={faSass} />
          <p className="desc">SASS</p>
        </div>
        
        <div className="skillscontent">
          <FontAwesomeIcon icon={faCode} />
          <p className="desc">RELLAX.js</p>
        </div>

        <div className="skillscontent">
          <FontAwesomeIcon icon={faReact} />
          <p className="desc">React</p>
        </div>

        <div className="skillscontent">
          <FontAwesomeIcon icon={faNode} />
          <p className="desc">Node.js</p>
        </div>

        <div className="skillscontent">
          <FontAwesomeIcon icon={faBootstrap} />
          <p className="desc">Bootstrap</p>
        </div>

        <div className="skillscontent">
          <FontAwesomeIcon icon={faDatabase} />
          <p className="desc">Firebase</p>
        </div>

        <div className="skillscontent">
          <FontAwesomeIcon icon={faDatabase} />
          <p className="desc">MySQL</p>
        </div>

        <div className="skillscontent">
          <FontAwesomeIcon icon={faDatabase} />
          <p className="desc">MariaDB</p>
        </div>

        <div className="skillscontent">
          <FontAwesomeIcon icon={faCodeBranch} />
          <p className="desc">Git</p>
        </div>

      </div>
    </Container>
  );
};

export default SkillsComponent;