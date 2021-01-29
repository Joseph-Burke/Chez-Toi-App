import "react-bootstrap";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import NavBar from "./NavBar";
import HouseBrowser from "./HouseBrowser";

import styles from './styles/App.module.scss';

const App = props => {
  return (
    <Container fluid className={styles.app}>
      <Row noGutters className={styles.row}>
        <NavBar />
        <HouseBrowser />
      </Row>
    </Container>
  );
};

export default App;
