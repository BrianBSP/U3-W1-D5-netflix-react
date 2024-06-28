import { Col, Container, Dropdown, Row } from "react-bootstrap";

const MainSection = () => {
  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col>
          <h1 className="text-white">TV Shows</h1>
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border border-white rounded-0">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1">Action Movie</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Commedian</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Love Story</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};
export default MainSection;
