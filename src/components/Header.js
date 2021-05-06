import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import logo from '../assets/logo.png';
import './header.css';
import {Nav, Modal, ModalBody, ModalFooter, Button  } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import {Link } from 'react-router-dom'
function  Header () {

  

  const [mp, setmp] = React.useState(false);
  const [sgm, setsgm] = React.useState(false);

  const closemodal = () => setmp(false);
  const closesignup = () => setsgm(false);
  const openmodal = () => setmp(true);
  const opensignup = () => setsgm(true);
  return ( 

<div >
<Navbar variant="dark" className="header">
  <div className="container-fluid" >
  <Navbar.Brand   Link to="/Home"  ><b><img
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"/>PHOTOGRAPHY</b></Navbar.Brand>
    <Nav>
      <Nav.Link href="/"><b className="bold">Home</b></Nav.Link>
      <Nav.Link href ="/galleries"><b className="bold">Galleries</b></Nav.Link>
      <Nav.Link href="/venue"><b className="bold">Venue</b></Nav.Link>
      <Nav.Link href="/services"><b className="bold">Services</b></Nav.Link>
      <Nav.Link href="/editing"><b className="bold">Editing</b></Nav.Link>
      <Nav.Link onClick={openmodal} border="dark"><b className="bold">Login</b></Nav.Link>
    </Nav>
  </div>
</Navbar>

<Modal id="modallogin" show={mp} onHide={closemodal}>
        <ModalHeader closeButton onClick={closemodal}>login/signup</ModalHeader>
        <ModalBody>
          <form action="/action_page.php">
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" />
            </div>
            <div class="checkbox">
              <label><input type="checkbox" /> Remember me</label>
            </div>
            <Link onClick={opensignup}>don't have an account? signup</Link>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closemodal}>close</Button>
          <Button type="submit">Submit</Button>

        </ModalFooter>
      </Modal>

{/* 2nd modal */}

<Modal id="modalsignup" show={sgm} onHide={closesignup}>
        <ModalHeader closeButton onClick={closesignup}>login/signup</ModalHeader>
        <ModalBody>
          <form action="/action_page.php">
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" />
            </div>
            <div class="form-group">
              <label for="pwd2">Confirm Password:</label>
              <input type="password" class="form-control" id="pwd2" />
            </div>
           
           
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closesignup}>close</Button>
          <Button type="submit">Signup</Button>

        </ModalFooter>
      </Modal>



</div>

)


}

export default Header

