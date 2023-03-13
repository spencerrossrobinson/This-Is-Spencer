import profile from "../imgs/srrprofile.jpg";
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
import { AnimationOnScroll } from "react-animation-on-scroll";

const BioHome = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md="4">
            <AnimationOnScroll animateIn="animate__bounceIn">
              <p className="border-under-pink">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, similique nulla natus dignissimos blanditiis optio
                minus? Neque recusandae nesciunt, numquam, explicabo minus
                cumque hic obcaecati reprehenderit accusamus eum pariatur illum!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, similique nulla natus dignissimos blanditiis optio
                minus? Neque recusandae nesciunt, numquam, explicabo minus
                cumque hic obcaecati reprehenderit accusamus eum pariatur illum!
              </p>
            </AnimationOnScroll>
          </Col>
          <Col xs="8" md="4" className="mx-auto pb-3">
            <Card inverse className="all-black">
              <CardImg
                alt="Card image cap"
                src={profile}
                style={{
                  height: 470,
                  border: "3px solid #7209b7",
                }}
                width="100%"
              />
              <CardImgOverlay></CardImgOverlay>
            </Card>
          </Col>
          <Col md="4">
            <AnimationOnScroll animateIn="animate__bounceIn">
              <p className="border-under-pink">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, similique nulla natus dignissimos blanditiis optio
                minus? Neque recusandae nesciunt, numquam, explicabo minus
                cumque hic obcaecati reprehenderit accusamus eum pariatur illum!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, similique nulla natus dignissimos blanditiis optio
                minus? Neque recusandae nesciunt, numquam, explicabo minus
                cumque hic obcaecati reprehenderit accusamus eum pariatur illum!
              </p>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BioHome;
