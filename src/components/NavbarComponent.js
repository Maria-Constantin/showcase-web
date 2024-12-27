import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.scss';

const NavbarComponent = () => {
  const [active, setActive] = useState('home');
  return (
      <Navbar fluid className='bo-body-tertiary justify-content-between navbar' sticky='top' expand="lg">
        <Container fluid="md">
          {/* logo */}
          <Navbar.Brand className='d-flex justify-content-center'>
            <p className='name'>MC</p>
          </Navbar.Brand>
          {/* links */}
          <Navbar.Toggle aria-controls="collapse-nav" className='linkstoggler'>
            <i className="bi bi-list"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id='collapse-nav' className='menu'>
            <Nav
              className='ml-auto'
              activeKey={active}
              onSelect={(selectedKey) => setActive(selectedKey)}
            >
              <Nav.Link as={Link} to="/HomePage" eventKey='home'>Home</Nav.Link>
              <Nav.Link as={Link} to="/AboutMePage" eventKey='aboutme'>About me</Nav.Link>
              <Nav.Link as={Link} to="/ProjectsPage" eventKey='projects'>Projects</Nav.Link>
              <Nav.Link as={Link} to="/ContactMePage" eventKey='contactme'>Contact me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavbarComponent;
