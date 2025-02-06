import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/home")
  }

  return (
    <>
    {localStorage.getItem("username")?(
      <>
        <Navbar expand="lg" className="" id='navbar'>
      <Container>
        <Navbar.Brand href="home">Authentication</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
          </Nav>
          <b>Welcome {localStorage.getItem("username")}</b>
          <Button className='ms-3 fw-bold' size="sm" variant='danger' onClick={logout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    ):(
      <>
        <Navbar expand="lg" className="" id='navbar'>
      <Container>
        <Navbar.Brand href="home">Authentication</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to="registration">Registration</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    )}
        
    </>
  )
}

export default Header