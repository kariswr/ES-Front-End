import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './style.css';
 
function CustomNavbar() {
 
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Sistem Evaluasi Kemampuan Mandiri</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    <Nav>
      <Nav.Link href="/about">Tentang</Nav.Link>
      <Nav.Link eventKey={2} href="/help">Bantuan</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
 
export default CustomNavbar;