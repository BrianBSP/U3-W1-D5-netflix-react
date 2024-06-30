import { Button, ButtonGroup, Container, Dropdown } from "react-bootstrap";

const MainSection = () => {
  return (
    <Container fluid className="bg-dark d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <h1 className="text-white">TV Shows</h1>
        <Dropdown className="ms-3">
          <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border border-white rounded-0">
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1">Action Movie</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Commedian</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Love Story</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="dark border border-white rounded-0">
            <i class="bi bi-list"></i>
          </Button>
          <Button variant="dark border border-white rounded-0">
            <i class="bi bi-grid-fill"></i>
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};
export default MainSection;
