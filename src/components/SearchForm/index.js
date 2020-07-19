import React from 'react';
import { Form, FormControl, Button, FormGroup, FormLabel } from 'react-bootstrap';
import './style.css';

export default function index(props) {
    return (
<div className="searchbar-wrapper d-flex">

            <Form onSubmit={props.getResults} className="search-form">
                <FormGroup>

                    <FormLabel htmlFor="search">Search for Weather by City: </FormLabel>
                    <br />
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search" onChange={props.handleInputChange} />
                    <Button variant="outline-light" className="mt-2">Search</Button>
                </FormGroup>
            </Form>
</div>
    )
}
