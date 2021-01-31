import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import getHousePictureURL from "../helpers/getHousePictureURL";
import styles from "./styles/HouseDetails.module.scss";

const HouseDetails = ({ houses }) => {
  const { id } = useParams();
  const house = houses.find(house => house.id === parseInt(id, 10));

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const [date, setDate] = useState("2020-02-01");
  const [time, setTime] = useState("20:00:00");

  const handleChange = (stateKey, { target: { value } }) => {
    switch (stateKey) {
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      default:
        return;
    }
  };

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

            <form>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={handleChange.bind(this, "date")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  id="time"
                  type="time"
                  className="form-control"
                  value={time}
                  onChange={handleChange.bind(this, "time")}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={event => {
                const { target } = event;
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
