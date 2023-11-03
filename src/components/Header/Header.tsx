import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          <Nav className="container">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/componentes")}>
              Componentes
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/administracion")}>
              Administracion
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
