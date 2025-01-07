import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from 'react-bootstrap';
import BubbleContainer from '../../utils/Bubbles/BubbleContainer';
import { useForm } from 'react-hook-form';
import styles from './FormContainer.module.scss';

const FormContainer = () => {
  const [isLoading, setIsLoading] = useState(false); // State to handle loading state
  const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_FORM_API_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        navigate('/ThankYou');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error(error);
      alert('There was an error submitting the form');
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  const handleBlur = async (field) => {
    setTimeout(async () => {
      await trigger(field);
    }, 200);
  };

  return (
    <Container className={`${styles.contactmeContainer} d-flex flex-column justify-content-center align-items-center px-5`} id="ContactMe">
      <BubbleContainer />
      <h1 className={`${styles.headerform} text-center mt-5`}>Get in touch</h1>
      <Container className={`${styles.formContainer} d-flex flex-column justify-content-center align-items-center mt-3 mb-5`}>
        <Form
          noValidate
          className={`${styles.formfields} d-flex flex-column justify-content-center align-items-center`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className={`${styles.formGroup}`}>
            <Form.Label className={styles.formLabel}>Name*</Form.Label>
            <Form.Control
              className="form-control"
              id="name"
              type="text"
              placeholder="Enter your name"
              required
              {...register('name', { required: 'Name is required.' })}
              onBlur={() => handleBlur('name')}
            />
            {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
          </Form.Group>

          <Form.Group className={`${styles.formGroup}`}>
            <Form.Label className={styles.formLabel}>Email*</Form.Label>
            <Form.Control
              className="form-control"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              {...register('email', {
                required: 'Email is required.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address.',
                },
              })}
              onBlur={() => handleBlur('email')}
            />
            {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
          </Form.Group>

          <Form.Group className={`${styles.formGroup}`}>
            <Form.Label className={styles.formLabel}>Message*</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Type your message"
              className={`${styles.textarea} form-control`}
              id="formmessage"
              required
              {...register('formmessage', {
                required: 'Message is required.',
                minLength: {
                  value: 10,
                  message: 'Message should be at least 10 characters long.',
                },
              })}
              onBlur={() => handleBlur('formmessage')}
            />
            {errors.formmessage && <p className={styles.errorMessage}>{errors.formmessage.message}</p>}
          </Form.Group>

          <Button variant="primary" type="submit" className={styles.formButton} disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Send'}
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default FormContainer;
