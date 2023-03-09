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

const ThreeCardsHome = () => {
  return (
    <div>
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
        <Row className="my-5 mx-auto border-under-pink">
          <Col xs="auto" className="mx-auto">
            <Card
              style={{
                width: "20rem",
                backgroundColor: "black",
              }}
              body
            >
              <img
                alt="Sample"
                src={lightbulb}
                style={{ border: "1px solid #7209b7" }}
              />
              <CardBody>
                <CardTitle tag="h5" className="text-center">
                  MERN Stack Development
                </CardTitle>
                <CardText className="text-center">
                  Responsive websites built for an optimal user experience that
                  achieves your business goals.
                </CardText>
              </CardBody>
              <Button style={{ backgroundColor: "#7209b7", border: "none" }}>
                Projects
              </Button>
            </Card>
          </Col>
          <Col xs="auto" className="mx-auto">
            <Card
              style={{
                width: "20rem",
                backgroundColor: "black",
              }}
              body
            >
              <img
                alt="Sample"
                src={lightbulb}
                style={{ border: "1px solid #4cc9f0" }}
              />
              <CardBody>
                <CardTitle tag="h5" className="text-center">
                  MERN Stack Development
                </CardTitle>
                <CardText className="text-center">
                  Responsive websites built for an optimal user experience that
                  achieves your business goals.
                </CardText>
              </CardBody>
              <Button style={{ backgroundColor: "#4cc9f0", border: "none" }}>
                Projects
              </Button>
            </Card>
          </Col>
          <Col xs="auto" className="mx-auto">
            <Card
              style={{
                width: "20rem",
                backgroundColor: "black",
              }}
              body
            >
              <img
                alt="Sample"
                src={lightbulb}
                style={{ border: "1px solid #F72585" }}
              />
              <CardBody>
                <CardTitle tag="h5" className="text-center">
                  MERN Stack Development
                </CardTitle>
                <CardText className="text-center">
                  Responsive websites built for an optimal user experience that
                  achieves your business goals.
                </CardText>
              </CardBody>
              <Button style={{ backgroundColor: "#f72585", border: "none" }}>
                Projects
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThreeCardsHome;
