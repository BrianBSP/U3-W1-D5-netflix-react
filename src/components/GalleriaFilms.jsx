import { Component } from "react";
//import { Card, Col, Container, Row } from "react-bootstrap";
import MoviesRow from "./MoviesRow";
import { Container } from "react-bootstrap";

class GalleriaFilms extends Component {
  render() {
    return (
      <Container fluid className="px-0">
        <MoviesRow title="Trending Now" cerca="avengers" />
        <MoviesRow title="Watch It Again" cerca="harry potter" />
        <MoviesRow title="New Releases" cerca="pirates of the caribbean" />
        <MoviesRow title="Fantasy" cerca="lord of the rings" />
      </Container>
    );
  }
}
export default GalleriaFilms;
