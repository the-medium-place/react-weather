import React from 'react'
import Jumbotron from '../../components/Jumbotron';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';

export default function index() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <h1>404 page not found</h1>
            <Footer />
            
        </div>
    )
}
