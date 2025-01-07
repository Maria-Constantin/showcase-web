import React from 'react';
import ProjectCardsComponent from '../../components/ProjectCards/ProjectCards';
import SkillsComponent from '../../components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './HomeContainer.module.scss';
import BubbleContainer from '../../utils/Bubbles/BubbleContainer';
import FormContainer from '../FormContainer/FormContainer';

const HomeMainContent = () => {
  return (
    <>
      <BubbleContainer />
      <div className={`intro d-flex flex-column align-items-center justify-content-center mb-5 ${styles.intro}`} id='Home'>
        <img src={require('../../resources/poster.jpg')} className={styles.poster} alt="Intro Poster" />
        <div className={`p-2 ${styles.textOverlay}`}>
          <h1 className='m-2'>Hi, I'm <span className={styles.headerName}>Maria Constantin</span></h1>
          <p className={`text-center m-2 ${styles.descriptionMessage}`}>
            Motivated Computer Science graduate with a solid foundation in web development, user experience design, and
            scalable application development. Passionate about building mobile-first, innovative, user-centric digital solutions.
          </p>
        </div>
      </div>

      <ProjectCardsComponent />
      <SkillsComponent />
      <FormContainer />
    </>
  );
};

export default HomeMainContent;
