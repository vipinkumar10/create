import React, { Component } from 'react'
import './galleries.css';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import pw from '../assets/pw.jpg';
import pw1 from '../assets/pw1.jpg';
import pw3 from '../assets/pw3.jpg';
import pw4 from '../assets/pw4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.jpg';
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import f4 from '../assets/f4.jpg';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';
import t4 from '../assets/t4.jpg';


import {  Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import  {Roll} from 'react-reveal'
export class Galleries extends Component {
	render() {
		// spet(){
		// 	document.getElementById("pet");
		// }
		return (


			<div id="body">
				<div className="container-fluid" >
					<div className="row">
					<div className="container">

					<div className="container" style={{position:'fixed'}}>

						<div className="column col-2  border  border-primary" style={{marginTop:'130px', marginLeft:'7px',
				textAlign:'left', paddingLeft:'0px'}} >

							
								<ul>
									<div className="h2link ">
                                       <Roll Top>
										<h5>PreWedding Photography</h5>
										<h5>Wild Animal Photography</h5>
										<h5>Food Photography</h5>
										<h5>Travel Photography</h5>
										<h5> Business Photography</h5>
										</Roll>
									</div>
								</ul>
								</div>

						</div>



						<div className="column">
							<div>
								<Roll Top>
								<h1 className="h1Galleries">Our Best Galleries</h1>
								</Roll>
							</div>
							<Container> 
								<div className ="container " id="pet">
								<div>
									<Roll Top>
									<h2 className="h2Galleries">Pet Animal Photography</h2>
									</Roll>
								</div>
                                <Roll Top>
								<Row className="galleryjs">
									<Col xs={6} md={3} lg={3}>
										<Image src={g1} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g2} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g3} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g4} thumbnail />
									</Col>

								</Row>
								</Roll>
								</div>
								<div>
									<Roll Top>
									<h2 className="h2pre mt-3">PreWedding Photography</h2>
									</Roll>
								</div>
								<Roll Top>
								<Row className="galleryjs">
									<Col xs={6} md={3} lg={3}>
										<Image src={pw} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={pw1} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={pw3} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={pw4} thumbnail />
									</Col>
									
								</Row>
								</Roll>

								<div>
									<Roll Top>
									<h2 className="h2pre ">Wild Animal Photography</h2>
									</Roll>
								</div>
								<Roll Top>
								<Row className="galleryjs">
									<Col xs={6} md={3} lg={3}>
										<Image src={g5} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g6} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g7} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g8} thumbnail />
									</Col>

								</Row>
								</Roll>
								<div>
									<Roll Top>
									<h2 className="h2pre"> Food Photography</h2>
									</Roll>
								</div>
								<Roll Top>
								<Row className="galleryjs">
									<Col xs={6} md={3} lg={3}>
										<Image src={f1} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={f2} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={f3} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={f4} thumbnail />
									</Col>

								</Row>
								</Roll>
								<div>
									<Roll>
									<h2 className="h2pre">Travel Photography</h2>
									</Roll>
								</div>
								<Roll Top>
								<Row className="galleryjs" >
									<Col xs={6} md={3} lg={3}>
										<Image src={t1} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={t2} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={t3} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={t4} thumbnail />
									</Col>
								</Row>
								</Roll>
								<div>
								<Roll Top>

									<h2 className="h2pre">Business Photography</h2>
									</Roll>
								</div>
								<Roll Top>
								<Row className="galleryjs">
									<Col xs={6} md={3} lg={3}>
										<Image src={b1} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={b2} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={b3} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={b4} thumbnail />
									</Col>

								</Row>
								</Roll>

							</Container>

						</div>
						</div>
						
					</div>
				</div>
			</div>



		)
	}
}

export default Galleries