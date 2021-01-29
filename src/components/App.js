import "react-bootstrap";

import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import NavBar from "./NavBar";
import HouseBrowser from "./HouseBrowser";
import HouseDetails from "./HouseDetails";

import styles from "./styles/App.module.scss";

const App = props => {
  return (
    <Container fluid className={styles.app}>
      <Row noGutters className={styles.row}>
        <Router>
          <Switch>
            <Route exact path="/">
              <NavBar />
              <HouseBrowser />
            </Route>
            <Route exact path="/house/:id">
              <NavBar />
              <HouseDetails />
            </Route>
          </Switch>
        </Router>
      </Row>
    </Container>
  );
};

export default App;
