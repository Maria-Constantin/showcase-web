import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import FooterComponent from '../components/FooterComponent';
import BubbleContainer from '../containers/BubbleContainer';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import '../styles/contactme.scss';

const ContactMePage = () => {
  const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/mbllgbvr', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        navigate('/ThankYou.js');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error(error);
      alert('There was an error submitting the form');
    }
    reset();
  };

  const handleBlur = async (field) => {
    setTimeout(async () => {
      await trigger(field);
    }, 200); 
  };

  return (
    <Container className='contactme-container d-flex flex-column justify-content-center align-items-center px-5'>
      <BubbleContainer />
      <h1 className='name text-center mt-5 headerform'>Get in touch</h1>
      <Container className='form-container d-flex flex-column justify-content-center align-items-center mt-3 mb-5'>

        <Form
          noValidate
          className='formfields d-flex flex-column justify-content-center align-items-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className='formname' controlId='name' hasValidation>
            <Form.Label className='formlabel'>Name*</Form.Label>
            <Form.Control
              id='name'
              type='text'
              placeholder='Enter your name'
              required 
              {...register('name', {required: 'Name is required.'})}
              onBlur={() => handleBlur('name')}
              />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
          </Form.Group>

          <Form.Group className='formemail' controlId='email' hasValidation>
            <Form.Label className='formlabel'>Email*</Form.Label>
            <Form.Control
              id='email'
              type='email'
              placeholder='Enter your email'
              required
              {...register('email', {required: 'Email is required.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address.',
                },
              })}
              onBlur={() => handleBlur('email')}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </Form.Group>

          <Form.Group className='formmessage' controlId='formmessage' hasValidation>
            <Form.Label className='formlabel'>Message*</Form.Label>
            <Form.Control
              as='textarea'
              rows={5}
              placeholder='Type your message'
              className='textarea'
              id='formmessage'
              required
              {...register('formmessage', {required: 'Message is required.',
                minLength: {
                  value: 10,
                  message: 'Message should be at least 10 characters long.',
                },
              })}
              onBlur={() => handleBlur('formmessage')}
            />
            {errors.formmessage && <p className="error-message">{errors.formmessage.message}</p>}
          </Form.Group>

          <Button variant='primary' type='submit' className='formbutton'>Send
          </Button>
        </Form>
      </Container>
      <FooterComponent />
    </Container>
  );
};

export default ContactMePage;
