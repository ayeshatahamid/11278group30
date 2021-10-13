import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// styles
import { center_div } from "../styles";

const Home = () => {
  return (
    <div style={center_div}>
      <h1>Recyclobot</h1>
      <Card>
        <Card.Body>Camera</Card.Body>
      </Card>
      <Link to="/tutorial" style={{ textDecoration: "none" }}>
        <Card>
          <Card.Body>Tutorial</Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Home;
