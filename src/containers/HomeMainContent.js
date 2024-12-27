import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homemaincontent.scss';
import SkillsComponent from '../components/SkillsComponent';
import ProjectCardsComponent from '../components/ProjectCards';
import BubbleContainer from './BubbleContainer';
import { useNavigate } from 'react-router-dom';

const HomeMainContent = () => {
  const navigate = useNavigate();
  const redirectToContactPage = () => {
    navigate('/ContactMePage');
  };

  return (
    <Container fluid>
      <BubbleContainer />
      {/* Intro Section */}
      <div
        className="intro d-flex flex-column align-items-center justify-content-center mb-5"
      >
        {/* poster */}
        <img src={require('../resources/poster.jpg')} className='poster' />
        <div className='text-overlay p-2'>
          {/* intro */}
          <h1 className='m-2'>Hi, I'm <span className='headername'>Maria Constantin</span></h1>
          {/* Description */}
          <p className="text-center m-2 description-message">
            Motivated Computer Science graduate with a solid foundation in web development, user experience design, and
            scalable application development. Passionate about building innovative, user-centric digital solutions that drive
            engagement and business success.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <ProjectCardsComponent />
      </div>

      {/* Skills Section */}
      <SkillsComponent />

      {/* CTA Section */}
      <div className='d-flex justify-content-center mb-3'>
        <Button className="ctabutton" onClick={redirectToContactPage}>Contact me</Button>
      </div>

    </Container>

  );
};

export default HomeMainContent;
