import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class GalleriaFilms extends Component {
  state = {
    films: [],
  };
  fetchFilms = () => {
    fetch("http://www.omdbapi.com/?apikey=2f10efb6&s=StarWars")
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
      <Container fluid>
        <Row>
          {/* {this.films.map((movie) => (
            <Col md={6} lg={4} xl={2}>
              <Card.Img src={movie.Poster} alt={movie.Title} className="movie-img" />
            </Col>
          ))} */}
        </Row>
      </Container>
    );
  }
}
export default GalleriaFilms;
