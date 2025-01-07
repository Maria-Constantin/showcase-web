import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.scss';

const NavbarComponent = () => {
  const [active, setActive] = useState('home');

  const handleScroll = () => {
    const sections = {
      home: document.getElementById('Home'),
      projects: document.getElementById('Projects'),
      contactme: document.getElementById('ContactMe'),
    };

    const scrollPosition = window.scrollY + 200;

    for (const [key, section] of Object.entries(sections)) {
      if (
        section &&
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        setActive(key);
      }
    }
  };

  const scrollWithOffset = (el) => {
    const yOffset = -180;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`justify-content-between ${styles.navbar}`} sticky="top" expand="lg" collapseOnSelect>
      <Container fluid="md">
        <Navbar.Brand className="d-flex justify-content-center">
          <p className={styles.name}>MC</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="collapse-nav" className={styles.linkstoggler}>
        <i className={`bi bi-list ${styles.listIcon}`}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="collapse-nav" className={styles.menu}>
          <Nav className="ml-auto" activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)}>
            <Nav.Link
              as={NavHashLink}
              smooth
              to="#Home"
              eventKey="home"
              scroll={scrollWithOffset}
              className={styles.navLink}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavHashLink}
              smooth
              to="#Projects"
              eventKey="projects"
              scroll={scrollWithOffset}
              className={styles.navLink}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={NavHashLink}
              smooth
              to="#ContactMe"
              eventKey="contactme"
              scroll={scrollWithOffset}
              className={styles.navLink}
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
