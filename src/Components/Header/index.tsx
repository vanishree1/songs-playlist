import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


interface headerProps {
  onChange: (e: any) => void;
  onSubmit: () => any;
  keyword: string;
}

class Header extends Component<headerProps, {}> {
  render() {
    const { onChange, onSubmit, keyword } = this.props;
    return (
      <div className="Header">
       <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Top 200 Songs Playlist</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Form inline>
                  <FormControl value={keyword} onChange={(e: any) => onChange(e)} type="text" placeholder="Search by name" className="mr-sm-2" />
                  <Button variant="outline-secondary" onClick={onSubmit} >Search</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
