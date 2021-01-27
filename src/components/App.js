import { connect } from "react-redux";

const App = props => {
  const { data } = props;

  return (
    <ul>
      {data.map(user => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(App);
