import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import NavBar from "../components/NavBar";

import styles from "./styles/HouseDetails.module.scss";

const placeholderImage =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg";

const HouseDetails = ({ houses }) => {
  const { id } = useParams();
  const house = houses.find(house => house.id === parseInt(id, 10));
  return (
    <Col sm={10} as={Row} className={styles["main-column"]}>
      <Col sm={9}>
        <Image className={styles.image} src={placeholderImage} fluid rounded />
      </Col>
      <Col sm={3}>
        <h4>{house.location}</h4>
        <p>{house.description}</p>
      </Col>
    </Col>
  );
};

const mapStateToProps = state => ({
  houses: state.houses
});

export default connect(mapStateToProps)(HouseDetails);
