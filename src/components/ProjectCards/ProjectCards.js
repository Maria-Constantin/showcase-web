import React from 'react';
import { Card, Container } from 'react-bootstrap';
import styles from './ProjectCards.module.scss';

const ProjectCardsComponent = () => {
  const projects = [
    {
      title: "ArcheoChat",
      imgSrc: require('../../resources/ArcheoChat.png'),
      description: "A web application designed to enhance the museum visiting experience at The University of Nottingham Museum of Archaeology. It includes real-time chat updates, collaborative quizzes for group visitors, and custom data preference polls for improved engagement."
    },
    {
      title: "FeelGood",
      imgSrc: require('../../resources/FeelGood.png'),
      description: "A mobile mental health app aimed at supporting users in managing their well-being. Features include guided relaxation activities, mood tracking, and mental health education resources. Functionality was ensured through rigorous testing and performance monitoring."
    },
    {
      title: "Adventurer’s Guide to Nottingham",
      imgSrc: require('../../resources/AGTN.png'),
      description: "A smart travel app that provides tourism advice and recommendations for the city of Nottingham. Includes features like user authentication, personalized travel and restaurant suggestions, real-time location tracking, travel routes, and custom landmark visualization."
    }
  ];

  return (
    <Container>
      <h1 className={styles.header} id='Projects'>Projects</h1>
      <div className={`${styles['rounded-pill']} mb-3`}></div>
      <Container className={styles.projects}>
        {projects.map((project, index) => (
          <Card className={styles.projectcontainer} key={index}>
            <Card.Img variant='top' src={project.imgSrc} className={styles.projectimage} />
            <Card.Body>
              <Card.Title className={styles.cardtitle}>{project.title}</Card.Title>
              <Card.Text className={styles.cardText}>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Container>
  );
}

export default ProjectCardsComponent;
