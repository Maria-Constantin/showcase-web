import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import '../styles/projectcards.scss';

const ProjectCardsComponent = () => {
  return (
    <Container>
      <h1 className='header'>Projects</h1>
      <div className='rounded-pill mb-3'></div>
      <Container className='projects'>

      
      {/* CCT RECREATION */}
      <Card className='projectcontainer'>
        <Card.Img variant='top' src={require('../resources/ArcheoChat.png')} className='projectimage'></Card.Img>
        <Card.Body>
          <Card.Title className='cardtitle'>ArcheoChat</Card.Title>
          <Card.Text>
          A web application designed to enhance the museum visiting experience at The University of Nottingham Museum of Archaeology. It includes real-time chat updates, collaborative quizzes for group visitors, and custom data preference polls for improved engagement.
          </Card.Text>
          <Button variant="primary" className='cardbutton'>Learn More</Button>
        </Card.Body>
      </Card>

      {/* FEEL GOOD APP */}
      <Card className='projectcontainer'>
        <Card.Img variant='top' src={require('../resources/FeelGood.png')} className='projectimage'></Card.Img>
        <Card.Body>
          <Card.Title className='cardtitle'>FeelGood</Card.Title>
          <Card.Text>
          A mobile mental health app aimed at supporting users in managing their well-being. Features include guided relaxation activities, mood tracking, and mental health education resources. Functionality was ensured through rigorous testing and performance monitoring.
          </Card.Text>
          <Button variant="primary" className='cardbutton'>Learn More</Button>
        </Card.Body>
      </Card>

      {/* ADVENTURER'S GUIDE TO NOTTINGHAM */}
      <Card className='projectcontainer '>
        <Card.Img variant='top' src={require('../resources/AGTN.png')} className='projectimage'></Card.Img>
        <Card.Body>
          <Card.Title className='cardtitle'>Adventurer’s Guide to Nottingham</Card.Title>
          <Card.Text>
          A smart travel app that provides tourism advice and recommendations for the city of Nottingham. Includes features like user authentication, personalized travel and restaurant suggestions, real-time location tracking, travel routes, and custom landmark visualization.
          </Card.Text>
          <Button variant="primary" className='cardbutton'>Learn More</Button>
        </Card.Body>
      </Card>
      </Container>
    </Container>
  );
}

export default ProjectCardsComponent;