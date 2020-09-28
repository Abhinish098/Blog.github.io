import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Media from 'react-bootstrap/Media'

const Shadowlazerbanner = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{backgroundColor:"white"}}>
        <Container fluid>
          <Row >
              <Col sm={7}>
                    <h5>Media Heading</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus.
                    </p>
              </Col>
              <Col fluid style={{alignSelf:"right"}}>
                <img
                  className="ml-3"
                  src="/assets/images/Shadowlazer_white.png"
                  alt="Generic placeholder"
                />
              </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Shadowlazerbanner;