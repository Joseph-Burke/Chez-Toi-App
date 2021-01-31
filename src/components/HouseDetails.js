import { useParams } from "react-router-dom";
import { useState } from "react";

import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import NavBar from "../components/NavBar";

import getHousePictureURL from "../helpers/getHousePictureURL";
import styles from "./styles/HouseDetails.module.scss";

const HouseDetails = ({ houses }) => {
  const { id } = useParams();
  const house = houses.find(house => house.id === parseInt(id, 10));

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <Col sm={10} as={Row} className={styles["main-column"]}>
      <Col sm={9}>
        <Image
          className={styles.image}
          src={getHousePictureURL(house.id)}
          fluid
          rounded
        />
      </Col>
      <Col sm={3}>
        <h4>{house.location}</h4>
        <p>{house.description}</p>
        <Button variant="primary" onClick={openModal}>
          Book a Viewing
        </Button>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Book a Viewing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Choose a time and date to view this house:</p>

            <Form>
              <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group controlId="time">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" as="select">
                  {[9, 10, 11, 12, 13, 14, 15, 16].map(num => {
                    return <option>{num}:00</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={event => {
                const { target } = event;
                console.log(event);
              }}
            >
              Book Viewing
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
