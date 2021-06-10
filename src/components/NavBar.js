import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";



const NavBar = () => {
 
  return (
    <div>
      <Navbar className="Nav">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:"30px", marginRight:"60px" ,fontWeight:"bolder", color:"white", fontFamily:"'Pattaya', sans-serif"}}>Box Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link" style={{color:"white"}}>  </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
