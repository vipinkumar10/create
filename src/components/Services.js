import React, { Component } from 'react';

import card from '../assets/card.jpg';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.jpg';
import card7jpg from '../assets/card7jpg.jpg';
import card8 from '../assets/card8.jpg';
import card9 from '../assets/card9.jpg';
import card10 from '../assets/card10.jpg';
import card11 from '../assets/card11.jpg';

import { Card, CardDeck } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';
// import Roll from 'react-reveal/Roll';
import  {Roll} from 'react-reveal'
export class Services extends Component {
    render(){
      return( 
          <div>
               <div class="container" class="ourservices">
                   <Roll Top>
                        <h2 className="h2">Our Services</h2>
                        </Roll>
                 </div>
              <div class ="container" id="cards"  >
                        <CardDeck >
                            <Card className="card1" border="primary" >
                               <Card.Link href ="/Galleries">
                                   <Roll Top>
                                <Card.Img  class="cimg" variant="top" src={card}  />
                                <Card.Body>
                                
                                <Card.Title className="ctitle"><b>Night Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                Abstract photography, also known as conceptual, concrete, or experimental photography, is a genre 
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                                </Card.Link>
                            </Card>

                            <Card className="card1" border="primary">
                                <Roll Top>
                            <Card.Img  className="cimg" variant="top" src={card1}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Fashion Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                Adventure photography is much more self-explanatory than abstract photography.  Taking photos of a family 
                                    
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>

                            <Card className="card1" border="primary">
                                <Roll Top>
                            <Card.Img  class="cimg" variant="top" src={card2}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Macro Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                Taking photos of astronomical objects like stars, planets, and meteors. Taking photos of a family in posed Taking photos of a 
                                    
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>
                                
                            <Card className="card1" border="primary">
                                <Roll Top>
                            <Card.Img  class="cimg" variant="top" src={card3}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Holiday Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                Black and white (B&W) photography focuses on capturing an image with no color.  Taking photos of a 
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>
                        </CardDeck>
                        {/*  2nd card */}
                        <CardDeck>
                        <Card className="card1" border="primary">
                            <Roll Top>
                            <Card.Img  class="cimg" variant="top" src={card4}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Food Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                Taking photos of astronomical objects like stars, planets, and meteors, celestial events like lunar or solar eclipses.
                                Taking photos of a family in posed
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>

                            <Card className="card1" border="primary">
<Roll Top>
                            <Card.Img  class="cimg" variant="top" src={card5}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Indoor Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                focus on the working world, with imagery being captured to support the growth and development of a business
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>

                            <Card className="card1" border="primary">
                                <Roll Top>
                            <Card.Img  class="cimg" variant="top" src={card6}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Candid Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                Most photographs of people are often posed, with the photographer directing the shot and models.
                                Taking photos 
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>
                                
                            <Card className="card1" border="primary">
                                <Roll Top>
                            <Card.Img  class="cimg" variant="top" src={card7jpg}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Sports Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                Commercial photography is that which is taken specifically for commercial use, usually to promote or sell a product or service.
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>
                        </CardDeck>
                        {/* 3rd card */}
                        <CardDeck>
                        <Card className="card1" border="primary">
                            <Roll Top>
                            <Card.Img  class="cimg" variant="top" src={card8}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Product Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                Considered by some to be a part of professional photojournalism, documentary photography captures images.
                                Taking photos of a 
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>

                            <Card className="card1" border="primary">
                                <Roll Top>
                            <Card.Img  class="cimg" variant="top" src={card9}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Drone photography</b></Card.Title>
                                <Card.Text className="ctext">
                                also called aerial photography, captures scenes from high in the sky. It requires access to a helicopter, plane
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>

                            <Card className="card1" border="primary">
                                <Roll Top>
                            <Card.Img  class="cimg" variant="top" src={card10}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Event Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                Event photography captures guests, activities, and the ambiance of a gathering. Taking photos of a family in posed
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>
                                
                            <Card className="card1" border="primary">
                                <Roll Top>
                            <Card.Img  class="cimg" variant="top" src={card11}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Family Photography</b></Card.Title>
                                <Card.Text className="ctext">
                                Taking photos of a family in posed or candid portraiture is known as family photography. Taking photos of a family in posed
                                </Card.Text>
                                </Card.Body>
                                </Roll>
                            </Card>
                        </CardDeck>
                 </div>
            </div>
           
      );
    }
}

export  default Services

