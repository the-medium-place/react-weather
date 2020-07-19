import React from 'react'
import CurrentCard from '../../components/CurrentCard';
import './style.css';

export default function index() {

    return(    
            <div className="landing-box">        
                <header>
                    <h1 className="text-center">Current Weather in Your Area</h1>
                </header>
                <CurrentCard />    
            </div>
        )
}





