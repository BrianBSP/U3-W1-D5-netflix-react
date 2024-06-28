import { Card, Col, Container, Row } from "react-bootstrap";

const MoviesRow = (title, movies) => {
  return (
    <Container>
      <h3 className="text-white fs-5">{title}</h3>
      <Row className="g-2">
        {movies.map((movie) => (
          <Col key={movie.imdbID}>
            <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="movie-img" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MoviesRow;
