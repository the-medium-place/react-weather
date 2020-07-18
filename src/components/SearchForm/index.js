import React from 'react';
import { Col, Form, FormGroup, FormLabel, Button } from 'react-bootstrap';


export default function index(props) {
    return (
        <Col md={6}>
        <Form>
            <FormGroup>

            <FormLabel for="search">Search for Weather by City: </FormLabel>
            <br />
            <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search" value="test"/>
            <Button variant="outline-dark" className="mt-2" onClick={API.citySearch(this.state.search).then((data) => {console.log(data)})}>Search</Button>
            </FormGroup>
        </Form>
    </Col>
    )
}
