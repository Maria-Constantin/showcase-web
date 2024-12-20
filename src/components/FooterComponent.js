import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.scss';

const FooterComponent = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className='d-flex align-items-center footer'>
      <Container>
        <h1>Let's connect:</h1>
      </Container>
      <Container>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='btn btn-lg'>
          <FontAwesomeIcon icon={faLinkedin} className='socialmedia' />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='btn btn-lg'>
          <FontAwesomeIcon icon={faGithub} className='socialmedia' />
        </a>
      </Container>
    </Container>
  );
});

export default FooterComponent;
