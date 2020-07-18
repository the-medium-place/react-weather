import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

export default function index() {
    return (
        <Navbar fixed="top" variant="dark">
        <Navbar.Brand href="/">Weather React</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/nothing">404 check</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form> */}
      </Navbar>
    )
}
