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
import ThreeCardsHome from "../components/ThreeCardsHome";
import BioHome from "../components/BioHome";

const HomePage = () => {
  return (
    <div className="mt-5">
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

              <Row>
                <Col xs={{ offset: 1 }} className="mt-3">
                  <CardTitle tag="h3" className="extra-bold line-under-purple">
                    Full Stack Development
                  </CardTitle>
                </Col>
              </Row>
            </CardImgOverlay>
          </Card>
        </Container>
      </div>
      <ThreeCardsHome />
      <BioHome />
    </div>
  );
};

export default HomePage;
