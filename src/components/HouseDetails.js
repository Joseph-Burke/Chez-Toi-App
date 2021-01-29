import { useParams } from "react-router-dom";
import { useState } from "react";

import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import NavBar from "../components/NavBar";

import styles from "./styles/HouseDetails.module.scss";

const placeholderImage =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg";

const HouseDetails = ({ houses }) => {
  const { id } = useParams();
  const house = houses.find(house => house.id === parseInt(id, 10));

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <Col sm={10} as={Row} className={styles["main-column"]}>
      <Col sm={9}>
        <Image className={styles.image} src={placeholderImage} fluid rounded />
      </Col>
      <Col sm={3}>
        <h4>{house.location}</h4>
        <p>{house.description}</p>
        <Button variant="primary" onClick={openModal}>
          Book a Viewing
        </Button>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={closeModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Col>
  );
};

const mapStateToProps = state => ({
  houses: state.houses
});

export default connect(mapStateToProps)(HouseDetails);
