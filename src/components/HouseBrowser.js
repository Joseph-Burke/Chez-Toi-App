import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import getHousePictureURL from '../helpers/getHousePictureURL';
import { Link } from 'react-router-dom';

import NavBar from "../components/NavBar";

import styles from "./styles/HouseBrowser.module.scss";

const HouseBrowser = props => {
  const { houses } = props;
  return (
    <Col sm={10} as={Container} className={styles["main-column"]}>
      <h1>HOUSES</h1>
      <h5>Browse through our houses available for a viewing</h5>

      <Carousel interval={null} className={styles.carousel}>
        {houses.map(house => (
          <Carousel.Item className={styles['carousel-item']}>
            <Image
              src={getHousePictureURL(house.id)}
              alt={`A picture of a house at ${house.location}`}
              className={styles.image}
              />
            <Carousel.Caption
              className={styles['carousel-caption']}
            >
              <h3>{house.location}</h3>
              <p>{house.description}</p>
              <Link to={`/house/${house.id}`} as={'button'} className="btn btn-primary">View Details</Link>
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
