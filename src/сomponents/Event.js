import React from "react";
import './Event.css'
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import './Card.css'
import { Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export function Event (){
    

        return (
           
            <>
            
            
           
                <Container>
                    
                    
                    
                        <Nav className="mr-auto">
                            <li>
                           <Link to="/"
                           style={{color:'white', textDecoration: 'none', }}
                           > TidyLev </Link>
                           </li>
                           
                        </Nav>
                 <Carousel>
                <Card number="1"/>
                <Card number="2"/>
                

            </Carousel>
            <div className="text">
            <h2>Description</h2>
            <p>Опис проблеми</p>
            </div>
            <div className="text1">
            <h2>District</h2>
            <p></p>
            </div>
            <div className="text2">
                <h2>Created by</h2>
            
            </div>
                       

                        
                </Container>
            
            </>
        )
    }
