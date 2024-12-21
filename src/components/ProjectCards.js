import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import '../styles/projectcards.scss';

const ProjectCardsComponent = () => {
  return (
    <Container className='d-flex flex-column mb-5'>
      <h1 className='header'>Projects</h1>
      <div className='rounded-pill mb-3'></div>
      {/* CCT RECREATION */}
      <Card className='projectcontainer'>
        <Card.Img variant='top' src='#'></Card.Img>
        <Card.Body>
          <Card.Title className='cardtitle'>Title</Card.Title>
          <Card.Text>
            a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here 
          </Card.Text>
          <Button variant="primary" className='cardbutton'>Learn More</Button>
        </Card.Body>
      </Card>

      {/* FEEL GOOD APP */}
      <Card className='projectcontainer'>
        <Card.Img variant='top' src='#'></Card.Img>
        <Card.Body>
          <Card.Title className='cardtitle'>Title</Card.Title>
          <Card.Text>
            a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here 
          </Card.Text>
          <Button variant="primary" className='cardbutton'>Learn More</Button>
        </Card.Body>
      </Card>

      {/* ADVENTURER'S GUIDE TO NOTTINGHAM */}
      <Card className='projectcontainer '>
        <Card.Img variant='top' src='#'></Card.Img>
        <Card.Body>
          <Card.Title className='cardtitle'>Title</Card.Title>
          <Card.Text>
            a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here a bunch of text here 
          </Card.Text>
          <Button variant="primary" className='cardbutton'>Learn More</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProjectCardsComponent;