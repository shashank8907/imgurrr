import React, { Component } from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap'

class Header extends Component {

  render() {
    return (
        <div className="Navbar">
                <Navbar>
                    <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#home">Imgur</a>
                    </Navbar.Brand>
                    </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                      Add Image
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      Add Image
                    </NavItem>
                </Nav>
                </Navbar>
        </div>
        )
        }

    
    }

export default Header;
