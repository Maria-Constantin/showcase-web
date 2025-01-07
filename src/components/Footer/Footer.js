import React from 'react';
import { Container, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Footer.module.scss';

const FooterComponent = () => {
  return (
    <Container fluid className={`d-flex flex-wrap justify-content-center pt-2 ${styles.footer}`}>
      <Container className="d-flex align-items-center justify-content-center">
        <h1 className={styles.connecttext}>Let's connect:</h1>

        <OverlayTrigger
          placement="top"
          overlay={<span className={styles.tooltipText}>LinkedIn</span>}
        >
          <a 
            href="https://www.linkedin.com/in/maria-constantin-72b820209/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.overbutton} btn btn-lg`}
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.socialmedia} />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="top"
          overlay={<span className={styles.tooltipText}>GitHub</span>}
        >
          <a 
            href="https://github.com/Maria-Constantin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.overbutton} btn btn-lg`}
          >
            <FontAwesomeIcon icon={faGithub} className={styles.socialmedia} />
          </a>
        </OverlayTrigger>
      </Container>

      <Container className="d-flex flex-wrap align-items-center justify-content-center">
        <p className={styles.copyright}>
          <span>&copy;</span> Copyright 2024
        </p>
        <p className={styles.author}>Made by Maria Constantin</p>
      </Container>
    </Container>
  );
};

export default FooterComponent;
