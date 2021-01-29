import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import NavBar from "../components/NavBar";

import styles from "./styles/HouseBrowser.module.scss";

const placeholderImage =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg";

const HouseBrowser = props => {
  const { houses } = props;
  return (
    <Col sm={10} as={Container} className={styles["main-column"]}>
      <h1>LATEST MODELS</h1>
      <h5>Please select a Vespa model</h5>

      <Carousel interval={null} className={styles.carousel}>
        {houses.map(house => (
          <Carousel.Item>
            <Image
              src={placeholderImage}
              alt={`A picture of a house at ${house.location}`}
              className={styles.image}
            />
            <Carousel.Caption>
              <h3>{house.location}</h3>
              <p>{house.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  );
};

const mapStateToProps = state => ({
  houses: state.houses
});

export default connect(mapStateToProps)(HouseBrowser);
