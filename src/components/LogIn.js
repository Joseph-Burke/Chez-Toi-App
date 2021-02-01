import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import styles from './styles/LogIn.module.scss';
import logIn from '../helpers/logIn';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const openAlert = () => setShowAlert(true);

  const handleChange = (stateIdentifier, { target: { value } }) => {
    switch (stateIdentifier) {
      case 'email':
        setEmail(value);
        break;
      default:
    }
  };

  const handleSubmit = async () => {
    logIn(email);
    setSubmittedEmail(email);
    openAlert();
  };

  return (
    <Col sm={10} as={Container} className={styles['main-column']}>
      <form className="form p-3">
        <h1>Log In</h1>
        <div className="form-group">
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              type="email"
              className="form-control"
              onChange={handleChange.bind(this, 'email')}
              value={email}
            />
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-primary my-2"
          type="button"
        >
          Submit
        </button>
      </form>
      <Alert show={showAlert} variant="warning">
        {`"${submittedEmail}" does not match any of the users in our database! Double-check your spelling, or try creating a new account instead.`}
      </Alert>
    </Col>
  );
};

export default LogIn;
