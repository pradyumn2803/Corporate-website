import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../assets/images/img1.jpg"
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Appabout() {
const html = 80;
const responsive = 95;
const photoshop = 60;
  return (
    <section className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About us</h2>
          <div className="subtitle">Learn more About us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit,
              nec luctus magna felis sollicitudin mauris.
            </p>
            <div className="progress-block">
              <h4>HTML - CSS - JS</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>PHOTOSHOP</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
            <div className="progress-block">
              <h4>RESPONSIVE</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
