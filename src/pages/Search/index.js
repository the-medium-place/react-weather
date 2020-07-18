import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import { Form, Col, Row, FormControl, Button, FormGroup, FormLabel } from 'react-bootstrap';
import './style.css';
import API from '../../utils/API';


export default class Search extends Component {

    state = {
        search: ''
    }

    handleInputChange = event =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            search: value
        });
    }

    getResults = (event) => {
        event.preventDefault();
        API.citySearch(this.state.search).then((data) => {console.log(data)})
    }

    


    render() {

        return (
            <div className="search-form">
                <Navbar />
                <Jumbotron />
                <Col md={6}>
                    <Form onSubmit={this.getResults}>
                        <FormGroup>

                        <FormLabel htmlFor="search">Search for Weather by City: </FormLabel>
                        <br />
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search" onChange={this.handleInputChange} />
                        <Button variant="outline-dark" className="mt-2">Search</Button>
                        </FormGroup>
                    </Form>
                </Col>
                <Footer />

            </div>
        )
    }
}
