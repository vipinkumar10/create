

	  import React, { Component } from 'react';
    import Home from './Home';
    import './venue.css';
    import { Card, Button, CardDeck, Container } from 'react-bootstrap';
    import v1 from '../assets/v1.jpg';
    import v2 from '../assets/v2.jpg';
    import v3 from '../assets/v3.jpg';
    import v4 from '../assets/v4.jpg';
    import v5 from '../assets/v5.jpg';
    import v6 from '../assets/v6.jpg';
    import v7 from '../assets/v7.jpg';
    import venuec1 from '../assets/venuec1.jpeg';
    import venuec2 from '../assets/venuec2.jpeg';
    import venuec3 from '../assets/venuec3.jpeg';
    import venuec4 from '../assets/venuec4.jpeg';
  import v8 from '../assets/v8.jpg';
  

    import Carousel from 'react-bootstrap/Carousel'

    import  {Roll,LightSpeed,Rotate,Slide} from 'react-reveal'
 export class Venue extends Component {
render(){
  return( 
    <div>

      {/* --------------------------------------------------------venue------------------------ */}
      <Carousel fade id="carousl" >
                            <Carousel.Item class="carosltext">
                                <Roll Top>
                                <img
                                    className="d-block w-100 "
                                    class="images"
                                    src={venuec1}
                                    alt="First slide"
                                />
                                </Roll>
                              
                                <Carousel.Caption >
                                    <Roll Top>
                                    <h3 className="h3">Welcome to Marriage Photography</h3>
                                    </Roll>
                                    <p className="p"> Abstract photography is truly a way to express your creative vision, to open your eyes to things you've never noticed before and to make the unseen seen</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Roll Top>
                                
                                <img
                                    className="d-block w-100"
                                    class="images"
                                    src={venuec2}

                                    alt="Second slide"
                                />
</Roll>
                                <Carousel.Caption>
                                <LightSpeed left>
                                    <h3 className="h3">Welcome to Abstract Photography</h3>
                                    </LightSpeed>
                                    <p className="p">Abstract photography is truly a way to express your creative vision, to open your eyes to things you've never noticed before and to make the unseen seen.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Roll Top>
                                <img
                                    className="d-block w-100"
                                    class="images"
                                    src={venuec3}

                                    alt="Third slide"
                                />
</Roll>
                                <Carousel.Caption>
                                    <Slide Right>
                                    <h3 className="h3">Welcome to Videography</h3>
                                    </Slide>
                                    <p className="p">Abstract photography is truly a way to express your creative vision, to open your eyes to things you've never noticed before and to make the unseen seen.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Roll Bottom>
                                <img
                                    className="d-block w-100"
                                    class="images"
                                    src={venuec4}

                                    alt="Third slide"
                                />
</Roll>
                                <Carousel.Caption>
                                    <Rotate left>
                                    <h3 className="h33">Welcome to Adventure Photography</h3>
                                    </Rotate>
                                    <p className="p">Abstract photography is truly a way to express your creative vision, to open your eyes to things you've never noticed before and to make the unseen seen.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
      {/* ----------------------------------------------------------venue--------------------------------- */}
    <Container>
      <CardDeck >
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary" className="vc">
        <Roll Top> 
          <Card.Img className="cimg" variant="top" src={v1} />
          <Card.Body>
      
            <Card.Title className="vtitle"><b>Address</b></Card.Title>
            <Card.Text className="ctext" >

              108/12, Patnipura, New Devas Road, Patnipura, Indore, Madhya Pradesh 452001
              </Card.Text>

<Button style={{backgroundColor:'#13274F'}}>Connect with us</Button>

          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
          <Card.Img className="cimg" variant="top" src={v2} />
          <Card.Body>
            <Card.Title className="vtitle"><b>Address</b></Card.Title>
            <Card.Text className="ctext">
              108/12, Patnipura, New Devas Road, Patnipura, Indore, Madhya Pradesh 452001
</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Connect with us</Button>
          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
        <Roll Top>
          <Card.Img className="cimg" variant="top" src={v3} />
          <Card.Body>
            <Card.Title className="vtitle"><b>Address</b></Card.Title>
            <Card.Text className="ctext">
              108/12, Patnipura, New Devas Road, Patnipura, Indore, Madhya Pradesh 452001
</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Connect with us</Button>
          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
          <Card.Img className="cimg" variant="top" src={v4} />
          <Card.Body>
            <Card.Title className="vtitle"><b>Address</b></Card.Title>
            <Card.Text className="ctext">
              108/12, Patnipura, New Devas Road, Patnipura, Indore, Madhya Pradesh 452001
</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Connect with us</Button>
          </Card.Body>
          </Roll>
        </Card>
      </CardDeck>
      <CardDeck style={{ marginTop: '10px' }}>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
        <Roll Top>
          <Card.Img className="cimg" variant="top" src={v5} />
          <Card.Body>
            <Card.Title className="vtitle"><b>Address</b></Card.Title>
            <Card.Text className="ctext">
              108/12, Patnipura, New Devas Road, Patnipura, Indore, Madhya Pradesh 452001
</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Connect with us</Button>
          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
          <Card.Img className="cimg" variant="top" src={v6} />
          <Card.Body>
            <Card.Title className="vtitle"><b>Address</b></Card.Title>
            <Card.Text className="ctext">
              108/12, Patnipura, New Devas Road, Patnipura, Indore, Madhya Pradesh 452001
</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Connect with us</Button>
          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
        <Roll Top>
          <Card.Img className="cimg" variant="top" src={v7} />
          <Card.Body>
            <Card.Title className="vtitle"><b>Address</b></Card.Title>
            <Card.Text className="ctext">
              108/12, Patnipura, New Devas Road, Patnipura, Indore, Madhya Pradesh 452001
</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Connect with us</Button>

          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px'  }} border="primary">
<Roll Top>
          <Card.Img className="cimg" variant="top" src={v8} />
          <Card.Body>
            <Card.Title className="vtitle"><b> Address</b></Card.Title>
            <Card.Text className="ctext">
              108/12, Patnipura, New Devas Road, Patnipura, Indore, Madhya Pradesh 452001
</Card.Text>
            <Button style={{backgroundColor:'#13274F'}}>Connect with us</Button>
          </Card.Body>
          </Roll>
        </Card>


      </CardDeck>
    </Container>
  </div>


)
}

 }
export default Venue;
