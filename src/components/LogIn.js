import { useState } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./styles/LogIn.module.scss";
import logIn from '../helpers/logIn';

const LogIn = () => {
  const [email, setEmail] = useState('');

  const handleChange = (stateIdentifier, { target: { value } }) => {
    switch (stateIdentifier) {
      case "email":
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = () => {
    logIn(email);
  };

  return (
    <Col sm={10} as={Container} className={styles["main-column"]}>
      <form className="form p-3">
        <h1>Log In</h1>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            className="form-control"
            onChange={handleChange.bind(this, "email")}
            value={email}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary my-2" type="button">
          Submit
        </button>
      </form>
    </Col>
  );
};

export default LogIn;
