

	  import React, { Component } from 'react';

    import './venue.css';
    import { Card, Button, CardDeck, Container } from 'react-bootstrap';
    import v1 from '../assets/v1.jpg';
    import v2 from '../assets/v2.jpg';
    import v3 from '../assets/v3.jpg';
    import v4 from '../assets/v4.jpg';
    import v5 from '../assets/v5.jpg';
    import v6 from '../assets/v6.jpg';
    import v7 from '../assets/v7.jpg';
    import v8 from '../assets/v8.jpg';
    import  {Roll} from 'react-reveal'

 export class Venue extends Component {
render(){
  return( 
    <div>
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
