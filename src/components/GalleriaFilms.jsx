import { Component } from "react";
//import { Card, Col, Container, Row } from "react-bootstrap";
import MoviesRow from "./MoviesRow";
import { Container } from "react-bootstrap";

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
      <Container fluid className="px-0">
        <MoviesRow title="Trending Now" cerca="avengers" />
        <MoviesRow title="Watch It Again" cerca="dragonball" />
        <MoviesRow title="New Releases" cerca="pirates of the caribbean" />
      </Container>
    );
  }
}
export default GalleriaFilms;
