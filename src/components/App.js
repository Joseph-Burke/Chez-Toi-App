import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import NavBar from "../components/NavBar";

import styles from "./styles/App.module.scss";

const placeholderImage =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg";

const App = props => {
  const { houses } = props;
  console.log(Carousel);
  return (
    <Container fluid className={styles.app}>
      <Row noGutters className={styles.row}>
        <Col sm={2} className={styles["nav-column"]}>
          <NavBar />
        </Col>
        <Col sm={10}>
          <Carousel interval={null} >
            {houses.map(house => (
              <Carousel.Item>
                <Image
                  roundedCircle
                  src={placeholderImage}
                  alt={`A picture of a house at ${house.location}`}
                />
                <Carousel.Caption>
                  <h3>{house.location}</h3>
                  <p>{house.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  houses: state.houses
});

export default connect(mapStateToProps)(App);
