import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import Grid2 from './Grid'
import Footer from './Footer'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {Nav, NavItem, Col,Button, Jumbotron,Row,Image,Grid,Form,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
//import About from './About'
//import Button from 'react-bootstrap/lib/Button';

const NavTab  = () => (
    <Router>
        <div>
            <Route default path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </div>
    </Router>
);

const Home = () => (
			<div>
				<div className="App">
					<Navbar/>
				</div>
				<p>
					 <div className="App">
					 		<Col md={12}>
              	<Col md={4}>
                &nbsp;
                </Col>
              	<Col md={4}>
                    <Jumbotron>
                        <h1>Home Page</h1>
                            <p className="center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <p><Button bsStyle="success">Sign Up</Button></p>
                    </Jumbotron>
                </Col>
                <Col md={4}>
                 &nbsp;
                </Col>
            </Col>
							<Grid2/>
							<Footer/>
						</div>
					<hr/>
				</p>
			</div>
)

const Contact = () => (
		<div>
				<div className="App">
					<Navbar/>
				</div>
				<p>
					 <div className="App">
						 	<Col md={12}>
              	<Col md={4}>
                &nbsp;
                </Col>
              	<Col md={4}>
                    <Jumbotron>
                        <h1>Contact Page</h1>
                            <p className="center">Call me.</p>
                            <p><Button bsStyle="success">Contact Us</Button></p>
                    </Jumbotron>
										<hr/>
										  <Form inline>
    										<FormGroup controlId="formInlineName">
                            <ControlLabel>Name</ControlLabel>
                              {' '}
                                <FormControl type="text" placeholder="Your Name" />
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="formInlineEmail">
                          <ControlLabel>Email</ControlLabel>
                            {' '}
                            <FormControl type="email" placeholder="Your Email" />
                        </FormGroup>
                            {' '}
		               <div>
			                &nbsp;
		               </div>
                  <Button bsStyle="primary">
                    Poke
                  </Button>
                </Form>
                </Col>
                <Col md={4}>
                 &nbsp;
                </Col>
            </Col>
						</div>
					<hr/>
				</p>
			</div>
)

const About = () => (
	<div>
				<div className="App">
					<Navbar/>
				</div>
				<p>
					 <div className="App">
						 	<Col md={12}>
              	<Col md={4}>
                &nbsp;
                </Col>
              	<Col md={4}>

                    <Jumbotron>
                        <h1>About Us</h1>
                            <p className="center">More Information</p>

														<p><Button bsStyle="success">Locate Us</Button></p>
                    </Jumbotron>
										  <Grid>
    										<Row>
      										<Col xs={6} md={6}>
        										<Image src="http://www.zawebsdata.co.za/image/large/m_untitled113.jpg" width={400} height={250} rounded />
														<hr/>
														<p><strong>Port Elizabeth is a city on Algoa Bay in South Africa's Eastern Cape Province.
															A major port, it's also known for its numerous beaches. The Donkin Heritage Trail takes in the Old Hill neighbourhood's Victorian landmarks.
															Coastal boat tours spot whales and rare seabirds, while wildlife reserves outside the metropolitan area are home to elephants, rhinos and other big game.</strong></p>
      										</Col>
    										</Row>
												<Row>
													&nbsp;
												</Row>
												<Row>
      										<Col xs={6} md={6}>
        										<Image src="https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg?w=738" width={400} height={250} rounded />
														<hr/>
														<p><strong>Code is our home language.</strong></p>
      										</Col>
    										</Row>
  									</Grid>
                </Col>
                <Col md={4}>
                 &nbsp;
                </Col>
            </Col>
						</div>
					<hr/>
					<Footer/>
				</p>
			</div>


)
export default NavTab;
