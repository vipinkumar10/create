import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './galleries.css';
import Header from './Header';

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
import gallery1c from '../assets/gallery1c.jpeg';
import galleryc2 from '../assets/galleryc2.jpg';
import galleryc3 from '../assets/galleryc3.jpg';
import galleryc4 from '../assets/galleryc4.jpeg';
import Sidebar from './Sidebar';

import Carousel from 'react-bootstrap/Carousel'

import { Roll, LightSpeed, Rotate, Slide } from 'react-reveal'
import { Col,  Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export class Galleries extends Component {
	render() {
		// spet(){
		// 	document.getElementById("pet");
		// }
		return (


			<div id="body">
				{/* carosel */}
				<Carousel fade id="carousl" >
					<Carousel.Item class="carosltext">

						<img
							className="d-block w-100 "
							class="images"
							src={gallery1c}
							alt="First slide"
						/>


						<Carousel.Caption >

							<h3 className="h3">Welcome to Marriage Photography</h3>

							<p className="p"> Abstract photography is truly a way to express your creative vision, to open your eyes to things you've never noticed before and to make the unseen seen</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>


						<img
							className="d-block w-100"
							class="images"
							src={galleryc2}

							alt="Second slide"
						/>

						<Carousel.Caption>
							<LightSpeed left>
								<h3 className="h3">Welcome to Abstract Photography</h3>
							</LightSpeed>
							<p className="p">Abstract photography is truly a way to express your creative vision, to open your eyes to things you've never noticed before and to make the unseen seen.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>

						<img
							className="d-block w-100"
							class="images"
							src={galleryc3}

							alt="Third slide"
						/>

						<Carousel.Caption>
							<Slide Right>
								<h3 className="h3">Welcome to Videography</h3>
							</Slide>
							<p className="p">Abstract photography is truly a way to express your creative vision, to open your eyes to things you've never noticed before and to make the unseen seen.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>

						<img
							className="d-block w-100"
							class="images"
							src={galleryc4}

							alt="Third slide"
						/>

						<Carousel.Caption>

							<h3 className="h33">Welcome to Adventure Photography</h3>

							<p className="p">Abstract photography is truly a way to express your creative vision, to open your eyes to things you've never noticed before and to make the unseen seen.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>


				{/* gallery------------------------------------------------------------------------ */}



				<div className="container-fluid " >
					<div>

						<h1 className="h1Galleries">Our Best Galleries</h1>

					</div>
					<Row>
						<Col xs={4} md={3} >
							<Container style={{paddingTop:'60px'}}>
								<Sidebar />
							</Container>
						</Col>
						<Col xs={8} md={9}>

							<Container>
								<div className="container " id="pet">
									<div>

										<h2 className="h2Galleries">Pet Animal Photography</h2>

									</div>

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

								</div>
								<div>

									<h2 className="h2pre mt-3">PreWedding Photography</h2>

								</div>

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


								<div>

									<h2 className="h2pre ">Wild Animal Photography</h2>

								</div>

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

								<div>

									<h2 className="h2pre"> Food Photography</h2>

								</div>

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

								<div>

									<h2 className="h2pre">Travel Photography</h2>

								</div>

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
								<div>


									<h2 className="h2pre">Business Photography</h2>

								</div>

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


							</Container>
						</Col>
					</Row>
				</div>

			</div>



		)
	}
}

export default Galleries