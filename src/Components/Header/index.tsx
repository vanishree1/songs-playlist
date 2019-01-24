import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <div className="Header">
       <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Top 200 Songs Playlist</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
