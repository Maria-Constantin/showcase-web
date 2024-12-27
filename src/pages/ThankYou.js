import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/thankyou.scss'

const ThankYou = () => {
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate('/');
  };

  return (
    <Container className='thank-you-container d-flex flex-column justify-content-center align-items-center mt-5 p-5'>
      <h1 className='thank-you-header'>Thank you for reaching out!</h1>
      <p className='thank-you-message lead mt-3'>I have received your message and will get back to you as soon as possible!</p>
      <p className='button-message'>In the meantime, feel free to explore:</p>

      <Button variant='primary' onClick={redirectToHomePage} className='home-redirect'>
        Go to Home
      </Button>
    </Container>
  )
}


export default ThankYou;