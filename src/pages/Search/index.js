import React, { Component } from 'react'
import './style.css';
import API from '../../utils/API';
import SearchForm from '../../components/SearchForm';


export default class Search extends Component {

    state = {
        search: ''
    }

    handleInputChange = event =>{
        const value = event.target.value;
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
            <div className="d-flex search-box">
         
                <SearchForm getResults={this.getResults} handleInputChange={this.handleInputChange} />
        

            </div>
        )
    }
}
