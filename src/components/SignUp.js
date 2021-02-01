import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import signUp from '../helpers/signUp';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (stateIdentifier, { target: { value } }) => {
    switch (stateIdentifier) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
    }
  };

  const handleSubmit = () => {
    signUp({ email, name });
  };

  return (
    <Col sm={10} as={Container}>
      <form className="form p-3">
        <h1>Sign Up</h1>
        <div className="form-group">
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              className="form-control"
              onChange={handleChange.bind(this, 'name')}
              value={name}
            />
          </label>
        </div>
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
    </Col>
  );
};

export default SignUp;
