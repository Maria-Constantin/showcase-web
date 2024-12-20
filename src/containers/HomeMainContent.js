import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homemaincontent.scss';
import ScrollManager from '../components/ScrollManager';
import FooterComponent from '../components/FooterComponent';
import SkillsComponent from '../components/SkillsComponent';

const HomeMainContent = () => {
  const footerRef = useRef(null);

  return (
    <Container fluid>
      <ScrollManager footerRef={footerRef}>
        {({ sectionRefs, scrollToSection, scrollToFooter }) => (
          <>
            {/* Intro Section */}
            <Container
              className='intro d-flex flex-column align-content-center justify-content-center'
              ref={(el) => (sectionRefs.current[0] = el)}
            >
              <img
                src={require('../resources/profilepicture.jpg')}
                alt='Profile Picture'
                className='profilepicture mb-3'
              />
              <h1 className='mb-3'>Maria Aurelia Constantin</h1>
              <h2 className='lead'>
                Aspiring Web Developer | Computer Science Graduate | Passionate About Creating Scalable, User-Centric Websites
              </h2>
            </Container>

            {/* Description Section */}
            <Container
              className="lead description d-flex align-items-center justify-content-center"
              ref={(el) => (sectionRefs.current[1] = el)}
            >
              <p className="text-center">
                Hi there! I'm Maria, a passionate and results-driven front-end developer specializing in React and JavaScript.
                I have a keen eye for detail and a love for building user-centric, responsive web applications.
              </p>
            </Container>

            {/* Skills Section */}
            <SkillsComponent sectionRefs={sectionRefs} />

            {/* Footer Section */}
            <div ref={footerRef}>
              <FooterComponent />
            </div>
          </>
        )}
      </ScrollManager>
    </Container>
  );
};

export default HomeMainContent;
