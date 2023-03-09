import background from "../imgs/flower.jpg";
import mistake from "../imgs/redsand.jpg";
import profile from "../imgs/srrprofile.jpg";
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
        <Container fluid className="p-0 m-0">
          <Card inverse className="all-black">
            <CardImg
              alt="Card image cap"
              src={background}
              style={{ height: 500 }}
              width="100%"
            />
            <CardImgOverlay>
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
            </CardImgOverlay>
          </Card>
        </Container>
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
        <Row className="my-5 mx-auto border-under-pink">
          <Col xs="4">
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
          <Col xs="4">
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
          <Col xs="4">
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
      <Container>
        <Row>
          <Col xs="4">
            <p className="border-under-pink">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, similique nulla natus dignissimos blanditiis optio
              minus? Neque recusandae nesciunt, numquam, explicabo minus cumque
              hic obcaecati reprehenderit accusamus eum pariatur illum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, similique nulla natus dignissimos blanditiis optio
              minus? Neque recusandae nesciunt, numquam, explicabo minus cumque
              hic obcaecati reprehenderit accusamus eum pariatur illum!
            </p>
          </Col>
          <Col xs="4">
            <Card inverse className="all-black">
              <CardImg
                alt="Card image cap"
                src={profile}
                style={{
                  height: 470,
                  border: "3px solid #7209b7",
                }}
                width="50%"
              />
              <CardImgOverlay></CardImgOverlay>
            </Card>
          </Col>
          <Col xs="4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, similique nulla natus dignissimos blanditiis optio
            minus? Neque recusandae nesciunt, numquam, explicabo minus cumque
            hic obcaecati reprehenderit accusamus eum pariatur illum!
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
