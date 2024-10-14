import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "reactstrap";

function NotFound() {
  return (
    <Container fluid className="text-center" style={styles.container}>
      <Row>
        <Col>
          {/* Custom 404 Title */}
          <h2 style={styles.subtitle}>404 - Page Not Found</h2>
          {/* Astronaut Image */}
          {/* Button to go back to the home page */}
          <div>
            <Link to="/">
              <Button color="warning" style={styles.button}>
                Go Back to Home
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

// Inline CSS styles for the page
const styles = {
  container: {
    backgroundColor: '#1b1b1b', // Dark background like the space theme
    height: '100vh',
    color: '#f9c74f', // Text color similar to the image you provided
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: '300px',
    marginTop: '20px',
  },
  title: {
    fontSize: '3rem',
  },
  subtitle: {
    fontSize: '2rem',
    marginTop: '10px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2rem',
  },
};

export default NotFound;
