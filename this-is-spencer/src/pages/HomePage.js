import background from "../imgs/srrprofile.jpg";
import "../css/Home.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Row className="text-light">
          <Col xs={8} className="head spencer">
            <span className="show h1 border-bottom border-success border-5">
              SPENCER
            </span>
            <span
              className="hide h1 border-bottom border-success border-5"
              as="a"
            >
              ABOUT ME
            </span>
            <Col sm={{ offset: 2 }} className="mt-5">
              <h1 className="border-bottom border-danger border-5">ROSS</h1>
              <Col sm={{ offset: 2 }} className="mt-5">
                <h1 className="border-bottom border-info border-5">ROBINSON</h1>
                <Col sm={{ offset: 2 }} className="mt-5">
                  <h1 className="border-bottom border-warning border-5">
                    FULLSTACK
                  </h1>
                </Col>
              </Col>
            </Col>
          </Col>
          <Col className="mt-5">
            <Image fluid src={background} xs={4} rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
