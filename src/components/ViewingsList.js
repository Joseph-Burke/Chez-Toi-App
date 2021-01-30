import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

import styles from "./styles/ViewingsList.module.scss";
library.add(far, fas);

const placeholderImage =
  "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg";

const ViewingsList = props => {
  console.log(props.viewings);
  const { houses, viewings } = props;
  return (
    <Col sm={10} className={styles["main-column"]}>
      <h1>Your Viewings</h1>
      <CardGroup className={styles["card-group"]}>
        {props.viewings.map(viewing => {
          const dateTime = new Date(viewing.time);
          const house = houses.find(house => house.id == viewing.house_id);
          console.log(house);
          return (
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src={placeholderImage}
                className={styles.image}
              />
              <Card.Body>
                <Card.Title>{house.location}</Card.Title>
                <Card.Text>
                  <p>{house.description}</p>
                  <p>
                    <span className="mr-3">
                      <FontAwesomeIcon
                        icon={["far", "calendar-alt"]}
                        className="mr-2"
                      />
                      {dateTime.toDateString()}
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={["far", "clock"]}
                        className="mr-2"
                      />
                      {`${dateTime.getHours().toString()}:00`}
                    </span>
                  </p>

                  <p>
                    <span className="mr-3">
                      <FontAwesomeIcon icon={["fas", "bed"]} className="mr-2" />
                      {house.bedrooms}
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={["fas", "bath"]}
                        className="mr-2"
                      />
                      {house.bathrooms}
                    </span>
                  </p>
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
    houses
  };
};

export default connect(mapStateToProps)(ViewingsList);
