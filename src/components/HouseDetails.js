import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';

import { refreshStore as refreshStoreThunk } from '../reducers/reducer';
import getHousePictureURL from '../helpers/getHousePictureURL';
import styles from './styles/HouseDetails.module.scss';

const HouseDetails = ({ houses, refreshStore }) => {
  const { id } = useParams();
  const house = houses.find(house => house.id === parseInt(id, 10));

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const [showAlert, setShowAlert] = useState(false);
  const openAlert = () => setShowAlert(true);

  const [date, setDate] = useState('2020-02-01');
  const [time, setTime] = useState('20:00:00');

  const handleChange = (stateKey, { target: { value } }) => {
    switch (stateKey) {
      case 'date':
        setDate(value);
        break;
      case 'time':
        setTime(value);
        break;
      default:
    }
  };

  const submitForm = async () => {
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if (!loggedInUserId) {
      openAlert();
      return;
    }

    const params = {
      house_id: house.id,
      user_id: localStorage.getItem('loggedInUserId'),
      date,
      time,
    };
    const paramsString = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');

    await fetch(`http://localhost:3000/viewings?${paramsString}`, {
      method: 'POST',
      mode: 'cors',
    });
    await refreshStore();
    window.location.href = '/viewings';
  };

  return (
    <Col
      sm={10}
      as={Row}
      className={styles['main-column']}
      data-testid="houseDetails"
    >
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
        <Modal show={showModal} onHide={closeModal} data-testid="modal">
          <Modal.Header closeButton>
            <Modal.Title>Book a Viewing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Choose a time and date to view this house:</p>

            <form data-testid="form">
              <div className="form-group">
                <label htmlFor="date">
                  Date
                  <input
                    id="date"
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={handleChange.bind(this, 'date')}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="time">
                  Time
                  <input
                    id="time"
                    type="time"
                    className="form-control"
                    value={time}
                    onChange={handleChange.bind(this, 'time')}
                  />
                </label>
              </div>
            </form>
            <Alert show={showAlert} variant="warning">
              You need to log in before you can make an appointment!
            </Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={submitForm}>
              Book Viewing
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Col>
  );
};

const mapStateToProps = state => ({
  houses: state.houses,
});

const mapDispatchToProps = dispatch => ({
  refreshStore: () => {
    dispatch(refreshStoreThunk());
  },
});

HouseDetails.propTypes = {
  houses: PropTypes.arrayOf(
    PropTypes.shape({
      bathrooms: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      bedrooms: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      created_at: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    }),
  ).isRequired,
  refreshStore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);
