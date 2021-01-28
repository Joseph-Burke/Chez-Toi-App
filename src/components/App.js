import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "../components/NavBar";

import styles from "./styles/App.module.scss";

const App = ({ data }) => {
  return (
    <Container fluid className={styles.app}>
      <Row noGutters className={styles.row}>
        <Col sm={2} className={styles["nav-column"]}>
          <NavBar />
        </Col>
        <Col sm={10}></Col>
      </Row>
      {/* <BrowserRouter>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </BrowserRouter> */}
    </Container>
  );
};

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(App);
