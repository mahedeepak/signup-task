import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function ColorSchemesExample() {
    return (
        <center>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">SIGN IN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </center>
    )
};

export default ColorSchemesExample;
