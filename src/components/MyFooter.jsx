import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light">
      <Container className="py-4">
        <Row className="mb-4">
          <Col className="d-flex justify-content-center gap-3">
            <a href="https://www.facebook.com/netflixitalia?locale=it_IT" className="text-light">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/netflixit/" className="text-light">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://x.com/?lang=it" className="text-light">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.youtube.com/@netflixitalia" className="text-light">
              <i className="bi bi-youtube"></i>
            </a>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3">
          <Col>
            <ul className="list-unstyled">
              <li>Audio and Subtitles</li>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="d-flex justify-content-center">
            <Button variant="outline-light" className="border-2 rounded-0">
              Service Code
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <p>&copy; 1997-2019 Netflix, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default MyFooter;
