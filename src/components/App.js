import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import 'react-bootstrap';

const App = props => {
  const { data } = props;

  return (
    <div>
      <NavBar />
      <ul>
        {data.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(App);
