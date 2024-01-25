import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png'
import compas from '../Assets/Vector (9).png'
import '@fontsource/poppins';



const Nav = () => {
  return (
    <div>
      <Navbar className="bg-[#242526] justify-content-between" style={{ backgroundColor: '#FFFFFF', height: '80px' }}>
        <Form inline>
          <img style={{ width: '293.26px', height: '60px', marginTop: '10px', marginLeft: '97px' }} src={logo} alt="" />
        </Form>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                style={{
                  width: '300px',
                  height: '40px',
                  position: 'absolute',
                  top: '20px',
                  left: '425px',
                  borderRadius: '8px',
                  border: '1px solid #ced4da',
                  backgroundColor: '#EBEDF0',
                  transition: 'background-color 0.3s ease',
                }}
                placeholder="Enter text"
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#F8F9FA';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#EBEDF0';
                }} type="text"


              />
            </Col>
        
           

          </Row>
        </Form>
        <div>
          <div>

            
            <div></div>
            <div></div>

          </div>
          <div>

            <div></div>
            <div></div>

          </div>
          <div>

            <div></div>
            <div></div>

            
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default Nav;