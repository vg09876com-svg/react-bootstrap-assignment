import React from "react";
import { Navbar, Container, Nav, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">

        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1 className="text-center my-4">
          Welcome to My React App
        </h1>

        {/* Three Cards */}
        <Container>
          <Row>

            {/* Card 1 */}
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Card One</Card.Title>
                  <Card.Text>
                    This is the first card in my React-Bootstrap project.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Card Two</Card.Title>
                  <Card.Text>
                    This is the second card in my React-Bootstrap project.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Card Three</Card.Title>
                  <Card.Text>
                    This is the third card in my React-Bootstrap project.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>

      </div>
    </>
  );
}

export default App;