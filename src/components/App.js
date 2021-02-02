import 'react-bootstrap';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import NavBar from './NavBar';
import HouseBrowser from './HouseBrowser';
import HouseDetails from './HouseDetails';
import ViewingsList from './ViewingsList';
import LogIn from './LogIn';
import SignUp from './SignUp';

import styles from './styles/App.module.scss';

const App = () => (
  <Container fluid className={styles.app} data-testid="app">
    <Row noGutters className={styles.row}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HouseBrowser />
          </Route>
          <Route exact path="/house/:id">
            <HouseDetails />
          </Route>
          <Route exact path="/viewings">
            <ViewingsList />
          </Route>
          <Route exact path="/log_in">
            <LogIn />
          </Route>
          <Route exact path="/sign_up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </Row>
  </Container>
);

export default App;
