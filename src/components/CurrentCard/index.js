import React from 'react'
import { Fade, Bounce } from 'react-awesome-reveal';
import './style.css';
import { motion } from 'framer-motion';
import { Col, Row } from 'react-bootstrap';
// import { Frame } from 'framer';

export default function index(props) {




        return (
                <Fade>
                    <Bounce>
                        <Row>
                            <Col></Col>
                            <Col xs={10} md={4}>
                            <motion.div
                            className="d-flex current-card"
                            whileHover={{ scale: 1.2 }} >
                                <div className="text-center card-content">
                                    {(!props.iconSRC) ?
                                        <h1>Loading Weather...</h1> :
                                        <>
                                            <h1>{props.date.substr(3,12)}</h1>
                                            <h2>{props.temp}&deg; F</h2>
                                            <h4>{props.humidity}% Humidity</h4>
                                                <motion.img 
                                                animate={{ y: "-15px" }}
                                                transition={{ ease: "easeInOut", duration: 0.6, yoyo: Infinity }}
                                                // drag="x" 
                                                // dragConstraints={{ left: -100, right: 100 }} 
                                                // whileHover={{ scale: 1.6 }}
                                                // whileTap={{scale: 0.9}}
                                                src={props.iconSRC} 
                                                alt="weather icon" 
                                                className="weather-icon"
                                                />  
                                            <p>{(props.desc).toUpperCase()}</p>
                                        </>
                                    }
                                </div>
                            </motion.div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Bounce>
                </Fade>               
        )

    


}
