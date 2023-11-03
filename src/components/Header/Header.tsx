import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* <Navbar.Brand href="">Mi App</Navbar.Brand> */}
          <Nav className="container">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/componentes">Componentes</Nav.Link>
            <Nav.Link href="/adminitracion">Administracion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
