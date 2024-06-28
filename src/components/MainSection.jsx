import { Col, Container, Row } from "react-bootstrap";

const MainSection = () => {
  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col>
          <h1 className="text-white">TV Shows</h1>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default MainSection;
