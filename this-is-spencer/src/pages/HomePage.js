import { useState, useEffect } from "react";
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
import LoginModal from "../components/LoginModal";
import NameContext from "../context/name";
import { useContext } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Zoom } from "react-reveal";

const HomePage = () => {
  const { name } = useContext(NameContext);

  useEffect(() => {
    document.title = `Welcome ${name ? name : "to my website"}`;
  }, [name]);

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
              {/* <AnimationOnScroll animateIn="animate__fadeInLeftBig"> */}
              <Zoom left delay={8000}>
                <Row>
                  <Col className="extra-bold">
                    <CardTitle tag="h1" className="extra-bold line-under-blue">
                      Spencer Robinson
                    </CardTitle>
                  </Col>
                </Row>

                <Row>
                  <Col xs={{ offset: 1 }} className="mt-3">
                    <CardTitle
                      tag="h3"
                      className="extra-bold line-under-purple"
                    >
                      Full Stack Development
                    </CardTitle>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ offset: 2 }} className="mt-3">
                    <CardTitle
                      tag="h3"
                      className="extra-bold line-under-purple"
                    >
                      Welcome {name ? name : "Loyal Guest"}
                    </CardTitle>
                  </Col>
                </Row>
              </Zoom>
              {/* </AnimationOnScroll> */}
            </CardImgOverlay>
          </Card>
        </Container>
        {!name && <LoginModal />}
      </div>
      <ThreeCardsHome />
      <BioHome />
    </div>
  );
};

export default HomePage;
