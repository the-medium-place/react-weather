import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron';
import Footer from '../../components/Footer';
import CurrentCard from '../../components/CurrentCard';
import Navbar from '../../components/NavBar';

export default class Landing extends Component {

    state = {

    }


    render() {
        return (


            <div>
             
                <header>
                    <h1 className="text-center">Your Current Weather</h1>
                </header>
                <CurrentCard />
             
            </div>
        )
    }

}
