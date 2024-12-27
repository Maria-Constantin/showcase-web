import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.scss';

const FooterComponent = () => {
  return (
    <Container fluid className='d-flex flex-wrap justify-content-center pt-2 footer'>
      
        <Container className='d-flex align-items-center justify-content-center'>
          
        <h1 className='connecttext'>Let's connect:</h1>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='btn btn-lg'>
          <FontAwesomeIcon icon={faLinkedin} className='socialmedia' />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='btn btn-lg'>
          <FontAwesomeIcon icon={faGithub} className='socialmedia' />
        </a>
        </Container>
      <Container className='d-flex flex-wrapalign-items-center justify-content-center'>
        <p className='copyright'><span>&copy;</span>Copyright 2024</p>
        <p className='author mb-1'>Made by Maria Constantin</p>
      </Container>
    </Container>
  );
};

export default FooterComponent;
