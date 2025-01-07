import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './ThankYou.module.scss';

const ThankYou = () => {
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate('/');
  };

  return (
    <Container className={`thank-you-container d-flex flex-column justify-content-center align-items-center mt-5 p-5 ${styles.thankYouContainer}`}>
      <h1 className={`${styles.thankYouHeader}`}>Thank you for reaching out!</h1>
      <p className={`${styles.thankYouMessage} lead mt-3`}>I have received your message and will get back to you as soon as possible!</p>
      <p className={`${styles.buttonMessage}`}>In the meantime, feel free to explore:</p>

      <Button variant='primary' onClick={redirectToHomePage} className={`${styles.homeRedirect}`}>
        Go to Home
      </Button>
    </Container>
  );
};

export default ThankYou;
