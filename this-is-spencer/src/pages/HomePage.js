import background from "../imgs/redLightbulbMED.jpg";
import "../css/Home.css";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

const HomePage = () => {
  return (
    <div>
      <div>
        <Card inverse color="dark" outline>
          <CardImg alt="Card image cap" src={background} width="100%" />
          <CardImgOverlay>
            <Container fluid className="mt-5">
              <Row>
                <Col>
                  <CardTitle tag="h1">Spencer</CardTitle>
                </Col>
              </Row>
              <Row>
                <Col xs={{ offset: 1 }}>
                  <CardTitle tag="h2">Robinson</CardTitle>
                </Col>
              </Row>
              <Row>
                <Col xs={{ offset: 2 }}>
                  <CardTitle tag="h3">Full Stack</CardTitle>
                </Col>
              </Row>
              <Row>
                <Col xs={{ offset: 3 }}>
                  <CardTitle tag="h5">Web & Mobile Dev</CardTitle>
                </Col>
              </Row>
            </Container>
          </CardImgOverlay>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
