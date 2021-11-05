import { Card, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// styles
import { center_div } from "../styles";
const page_style = {
  paddingTop: "2%",
  paddingBottom: "2%",
};
const row_style = {
  marginTop: "10%",
};
const Home = () => {
  return (
    <Container style={page_style}>
      <div style={center_div}>
        <div>
          <div style={center_div}>
            <h1>Recyclobot</h1>
          </div>

          <div style={row_style}>
            <Card style={center_div}>
              <Card.Body style={{ padding: "75%" }}>Camera</Card.Body>
            </Card>
          </div>

          {/* <Link to="/tutorial" style={{ textDecoration: "none" }}>
            <Card>
              <Card.Body>Tutorial</Card.Body>
            </Card>
          </Link>
          <Link to="/tutorial" style={{ textDecoration: "none" }}>
            <Button>Tutorial</Button>
          </Link> */}

          <div style={row_style}>
            <h2>Tutorial</h2>
            <p>1. Click the camera icon</p>
            <p>2. Take a picture</p>
            <p>3. Find whether it’s recycle or not!</p>
          </div>

          <div style={row_style}>
            <h2>Recycable Materials</h2>
            <ul>
              <li>Paper</li>
              <li>Cardboard</li>
              <li>Metal</li>
              <li>Glass</li>
              <li>Plastics*</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;