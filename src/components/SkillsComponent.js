import React, { useState } from 'react';
import { Card, CardHeader, Container, Nav, OverlayTrigger, Tooltip, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSquareJs, faCss, faSass, faReact, faNode, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import '../styles/homemaincontent.scss';

const SkillsComponent = ({ sectionRefs }) => {
  const [key, setKey] = useState('languages'); // Tab state

  const skills = {
    languages: [
      { icon: faHtml5, name: 'HTML 5', percentage: 90 },
      { icon: faSquareJs, name: 'JavaScript', percentage: 80 },
      { icon: faCss, name: 'CSS', percentage: 85 },
      { icon: faSass, name: 'SASS', percentage: 75 },
    ],
    webDev: [
      { icon: faReact, name: 'React', percentage: 85 },
      { icon: faNode, name: 'Node.js', percentage: 70 },
      { icon: faBootstrap, name: 'Bootstrap', percentage: 80 },
    ],
    otherTools: [
      { icon: faDatabase, name: 'MySQL', percentage: 80 },
      { icon: faCodeBranch, name: 'Git', percentage: 90 },
    ],
  };

  return (
    <Container
      className="skills d-flex flex-column align-content-center justify-content-center"
      ref={(el) => (sectionRefs.current[2] = el)}
    >
      <Card>
        <CardHeader>
          <Nav variant="tabs" activeKey={key} onSelect={(k) => setKey(k)}>
            <Nav.Item>
              <Nav.Link eventKey="languages">Languages</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="webDev">Web Dev</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="otherTools">Other Tools</Nav.Link>
            </Nav.Item>
          </Nav>
        </CardHeader>
        <Card.Body>
          {key === 'languages' && (
            <Container>
              {skills.languages.map((skill) => (
                <Container key={skill.name} className="mb-4">
                  <OverlayTrigger placement="top" overlay={<Tooltip id={skill.name}>{skill.name}</Tooltip>}>
                    <FontAwesomeIcon icon={skill.icon} className="icon" />
                  </OverlayTrigger>
                  <ProgressBar now={skill.percentage} label={`${skill.percentage}%`} />
                </Container>
              ))}
            </Container>
          )}

          {key === 'webDev' && (
            <Container>
              {skills.webDev.map((skill) => (
                <Container key={skill.name} className="mb-4">
                  <OverlayTrigger placement="top" overlay={<Tooltip id={skill.name}>{skill.name}</Tooltip>}>
                    <FontAwesomeIcon icon={skill.icon} className="icon" />
                  </OverlayTrigger>
                  <ProgressBar now={skill.percentage} label={`${skill.percentage}%`} />
                </Container>
              ))}
            </Container>
          )}

          {key === 'otherTools' && (
            <Container>
              {skills.otherTools.map((skill) => (
                <Container key={skill.name} className="mb-4">
                  <OverlayTrigger placement="top" overlay={<Tooltip id={skill.name}>{skill.name}</Tooltip>}>
                    <FontAwesomeIcon icon={skill.icon} className="icon" />
                  </OverlayTrigger>
                  <ProgressBar now={skill.percentage} label={`${skill.percentage}%`} />
                </Container>
              ))}
            </Container>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SkillsComponent;
