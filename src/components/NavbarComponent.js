import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.scss';

const NavbarComponent = () => {
  return (
    <Navbar className='bo-body-tertiary justify-content-between navbar' sticky='top' expand="lg">
      <Container fluid="md">
        {/* logo */}
        <Navbar.Brand className='d-flex justify-content-center'>
        <img
          src={require("../resources/logo.png")}
          alt="MC logo"
          className='logo'
        />
        </Navbar.Brand>
        {/* links */}
        <Navbar.Toggle aria-controls="collapse-nav"></Navbar.Toggle>
        <Navbar.Collapse id='collapse-nav'>
          <Nav
            className='justify-content-end'
            //activeKey="#home"
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contactme">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
