import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSquareJs, faCss3Alt, faSass, faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch, faCode } from '@fortawesome/free-solid-svg-icons';
import styles from './Skills.module.scss';

const skillsData = [
  { icon: faHtml5, label: "HTML5" },
  { icon: faSquareJs, label: "JavaScript" },
  { icon: faCss3Alt, label: "CSS" },
  { icon: faSass, label: "SASS" },
  { icon: faReact, label: "React" },
  { icon: faReact, label: "React-Router" },
  { icon: faReact, label: "React-Bootstrap" },
  { icon: faReact, label: "Redux" },
  { icon: faNodeJs, label: "Node.js" },
  { icon: faBootstrap, label: "Bootstrap" },
  { icon: faCode, label: "RELLAX.js" },
  { icon: faCode, label: "Popper.js" },
  { icon: faDatabase, label: "Firebase" },
  { icon: faDatabase, label: "MySQL" },
  { icon: faDatabase, label: "MariaDB" },
  { icon: faCodeBranch, label: "Git" }
];

const SkillsComponent = () => (
  <Container className={`${styles.skills} d-flex flex-column`}>
    <h1 className={styles.header}>Skills</h1>
    <div className={`${styles['rounded-pill']} mb-3`}></div>
    <div className={`${styles.skillscontainer} d-flex flex-wrap`}>
      {skillsData.map((skill, index) => (
        <div className={styles.skillscontent} key={index}>
          <FontAwesomeIcon icon={skill.icon} />
          <p className={styles.desc}>{skill.label}</p>
        </div>
      ))}
    </div>
  </Container>
);

export default SkillsComponent;
