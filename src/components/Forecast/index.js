import React from 'react';
import './style.css';
import { Fade, Bounce } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

export default function index(props) {
    console.log(props);
    return (
        <Fade>
            <Bounce>
                <motion.div
                    className="forecast-card d-flex"
                    // className="d-flex"
                    whileHover={{ scale: 1.2 }} >

                    <div className="text-center card-content">
                        {(!props.icon) ?
                            <h3>Loading Weather...</h3> :
                            <>
                                <h4>{new Date(props.date*1000).toLocaleString().substr(0,9)}</h4>
                                <h4>High: {props.tempHI}&deg; F</h4>
                                <h4>Low: {props.tempLO}&deg; F</h4>
                                <h4>{props.humidity}% Humidity</h4>
                                <motion.img
                                    animate={{ y: "-15px" }}
                                    transition={{ ease: "easeInOut", duration: 0.6, yoyo: Infinity }}
                                    // drag="x" 
                                    // dragConstraints={{ left: -100, right: 100 }} 
                                    // whileHover={{ scale: 1.6 }}
                                    // whileTap={{scale: 0.9}}
                                    src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}
                                    alt="weather icon"
                                    className="weather-icon"
                                />
                                <p>{(props.desc).toUpperCase()}</p>
                            </>
                        }
                    </div>
                </motion.div>



            </Bounce>
        </Fade>


    )


}
