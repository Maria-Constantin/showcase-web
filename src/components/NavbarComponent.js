import React, {useState} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavbarComponent = () => {
  const [active, setActive] = useState('home');
  return (
    <Navbar className='bo-body-tertiary justify-content-between navbar' sticky='top' expand="lg">
      <Container fluid="md">
        {/* logo */}
        <Navbar.Brand className='d-flex justify-content-center'>
          <p className='name'>MC</p>
        </Navbar.Brand>
        {/* links */}
        <Navbar.Toggle aria-controls="collapse-nav" className='toggler'>
        <i className="bi bi-list"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id='collapse-nav' className='menu'>
          <Nav
            className='ml-auto'
            activeKey={active}
            onSelect={(selectedKey) => setActive(selectedKey)}
          >
            <Nav.Link href="#home" eventKey='home'>Home</Nav.Link>
            <Nav.Link href="#aboutme" eventKey='aboutme'>About me</Nav.Link>
            <Nav.Link href="#projects" eventKey='projects'>Projects</Nav.Link>
            <Nav.Link href="#contactme" eventKey='contactme'>Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
