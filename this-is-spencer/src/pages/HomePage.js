import background from "../imgs/flower.jpg";
import mistake from "../imgs/redsand.jpg";
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
                  <CardTitle tag="h1" className="extra-bold">
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
                <Col xs={{ offset: 1 }}>
                  <CardTitle tag="h3" className="extra-bold">
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
    </div>
  );
};

export default HomePage;
