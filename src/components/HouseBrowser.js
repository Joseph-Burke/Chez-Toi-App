import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import getHousePictureURL from '../helpers/getHousePictureURL';
import styles from './styles/HouseBrowser.module.scss';

const HouseBrowser = props => {
  const { houses } = props;
  return (
    <Col
      sm={10}
      as={Container}
      className={styles["main-column"]}
      data-testid="houseBrowser"
    >
      <h1>HOUSES</h1>
      <h5>Browse through our houses available for a viewing</h5>

      <Carousel
        interval={null}
        className={styles.carousel}
        data-testid="carousel"
      >
        {houses.map(house => (
          <Carousel.Item key={house.id} className={styles["carousel-item"]}>
            <Image
              src={getHousePictureURL(house.id)}
              alt={`A picture of a house at ${house.location}`}
              className={styles.image}
            />
            <Carousel.Caption className={styles["carousel-caption"]}>
              <h3>{house.location}</h3>
              <p>{house.description}</p>
              <Link
                to={`/house/${house.id}`}
                as="button"
                className="btn btn-primary"
              >
                View Details
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  );
};

const mapStateToProps = state => ({
  houses: state.houses,
});

HouseBrowser.propTypes = {
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
};

export default connect(mapStateToProps)(HouseBrowser);
