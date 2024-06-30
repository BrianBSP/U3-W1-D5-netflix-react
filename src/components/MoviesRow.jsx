import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class MoviesRow extends Component {
  state = {
    films: [],
  };
  fetchFilms = () => {
    fetch("http://www.omdbapi.com/?apikey=2f10efb6&s=" + this.props.cerca)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel Reperiumento dei dati...");
        }
      })
      .then((filmObj) => {
        console.log(filmObj.Search);
        return this.setState({ films: filmObj.Search });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.fetchFilms();
  }
  render() {
    return (
      <Container fluid className="bg-dark pt-3">
        <h3 className="text-white text-start">{this.props.title}</h3>
        <Row>
          {this.state.films.slice(0, 6).map((movie) => (
            <Col md={6} lg={4} xl={2}>
              <Card.Img src={movie.Poster} alt={movie.Title} className="movie-img" />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default MoviesRow;
