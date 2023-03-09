import background from "../imgs/flower.jpg";
import mistake from "../imgs/redsand.jpg";
import lightbulb from "../imgs/redLightbulb.jpg";
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
  CardBody,
  CardFooter,
  CardSubtitle,
  Button,
  img,
} from "reactstrap";

const HomePage = () => {
  return (
    <div>
      <div>
        <Card inverse className="all-black">
          <CardImg
            alt="Card image cap"
            src={background}
            style={{ height: 500 }}
            width="100%"
          />
          <CardImgOverlay>
            <Container fluid className="mt-5">
              <Row>
                <Col className="extra-bold">
                  <CardTitle tag="h1" className="extra-bold line-under-blue">
                    Spencer Robinson
                  </CardTitle>
                </Col>
              </Row>
              {/* <Row>
                <Col xs={{ offset: 1 }}>
                  <CardTitle tag="h2" className="extra-bold">
                    Robinson
                  </CardTitle>
                </Col>
              </Row> */}
              <Row>
                <Col xs={{ offset: 1 }} className="mt-3">
                  <CardTitle tag="h3" className="extra-bold line-under-purple">
                    Full Stack Development
                  </CardTitle>
                </Col>
              </Row>
              {/* <Row>
                <Col xs={{ offset: 3 }}>
                  <CardTitle tag="h5" className="extra-bold">
                    Web & Mobile Dev
                  </CardTitle>
                </Col>
              </Row> */}
            </Container>
          </CardImgOverlay>
        </Card>
      </div>
      <Container className="my-5">
        <Row>
          <h1 className="text-center my-3 line-under-pink">
            Successful Full Stack Web and Mobile Development
          </h1>
          <h3 className="text-center">
            Hi. I'm Spencer, a Full Stack Developer with experience building
            projects from Back End to Front End heres some other words.
          </h3>
        </Row>
        <Row className="my-5">
          <Col>
            <Card
              style={{
                width: "20rem",
              }}
              color="dark"
              body
            >
              <img alt="Sample" src={lightbulb} />
              <CardBody>
                <CardTitle tag="h5" className="text-center">
                  MERN Stack Development
                </CardTitle>
                <CardText className="text-center">
                  Responsive websites built for an optimal user experience that
                  achieves your business goals.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "20rem",
              }}
              color="dark"
              body
            >
              <img alt="Sample" src={lightbulb} rounded />
              <CardBody>
                <CardTitle tag="h5" className="text-center">
                  MERN Stack Development
                </CardTitle>
                <CardText>
                  Responsive websites built for an optimal user experience that
                  achieves your business goals.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "20rem",
              }}
              color="dark"
              body
            >
              <img alt="Sample" src={lightbulb} />
              <CardBody>
                <CardTitle tag="h5" className="text-center">
                  MERN Stack Development
                </CardTitle>
                <CardText>
                  Responsive websites built for an optimal user experience that
                  achieves your business goals.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
