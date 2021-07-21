import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavBar = () =>{
   return<>
   <div className="myNavBar">
    <Navbar collapseOnSelect expand="sm" sticky="top" bg="dark" variant="dark" >
    <Container className="container">
    <Navbar.Brand href="#home" className="title">DEE'S SHOP</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    </div>
    </>
}
export default NavBar 