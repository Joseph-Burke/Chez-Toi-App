import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import getHousePictureURL from '../helpers/getHousePictureURL';
import styles from './styles/ViewingsList.module.scss';
import removeViewing from '../helpers/removeViewing';

library.add(far, fas);

const ViewingsList = ({ houses, viewings }) => {
  const handleRemove = async id => {
    await removeViewing(id);
  };

  return (
    <Col sm={10} className={styles['main-column']}>
      <h1>Your Viewings</h1>
      <CardGroup className={styles['card-group']}>
        {viewings
          .filter(
            viewing => viewing.user_id
            === parseInt(localStorage.getItem('loggedInUserId'), 10),
          )
          .map(viewing => {
            const dateTime = new Date(viewing.when);
            const house = houses.find(house => house.id === viewing.house_id);
            return (
              <Card className={styles.card} key={viewing.id}>
                <Card.Img
                  variant="top"
                  src={getHousePictureURL(house.id)}
                  className={styles.image}
                />
                <Card.Body>
                  <Card.Title>{house.location}</Card.Title>
                  <Card.Text>
                    <p>{house.description}</p>
                    <div className="d-flex">
                      <div>
                        <p>
                          <span className="mr-3">
                            <FontAwesomeIcon
                              icon={['far', 'calendar-alt']}
                              className="mr-2"
                            />
                            {dateTime.toDateString()}
                          </span>
                          <span>
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-2"
                            />
                            {`${dateTime.getHours()}:00`}
                          </span>
                        </p>

                        <p>
                          <span className="mr-3">
                            <FontAwesomeIcon
                              icon={['fas', 'bed']}
                              className="mr-2"
                            />
                            {house.bedrooms}
                          </span>
                          <span>
                            <FontAwesomeIcon
                              icon={['fas', 'bath']}
                              className="mr-2"
                            />
                            {house.bathrooms}
                          </span>
                        </p>
                      </div>
                      <div
                        className="flex-1 d-flex align-items-center justify-content-center"
                        style={{ flex: '1' }}
                      >
                        <Button onClick={() => {
                          handleRemove(viewing.id);
                        }}
                        >
                          Cancel Viewing
                        </Button>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </CardGroup>
    </Col>
  );
};

const mapStateToProps = state => {
  const { viewings, houses } = state;
  return {
    viewings,
    houses,
  };
};

ViewingsList.propTypes = {
  houses: PropTypes.arrayOf(
    PropTypes.shape({
      bathrooms: PropTypes.number.isRequired,
      bedrooms: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    }),
  ).isRequired,
  viewings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      house_id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(ViewingsList);
