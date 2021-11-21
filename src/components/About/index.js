import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
function About(){
    return(
        <div>
            <h2 className="component-header"> 
            About
            </h2>
            <img className="profile-image" src ={require(`../../assets/professional-thumbnail-potential.jpg`).default} alt="headshot"/>
           
            <h6 className="about-description"> 
            
            Full Stack Web Developer with experience in multiple programming languages and a passion for problem-solving. A chess teacher with strong communication skills and a collaborative spirit, experienced in handling and conveying complex technical concepts. Polished analytical skills for effective debugging and algorithm design.             
            </h6>
        <Card style={{color : "#000", width: "400px" }}>
            <Card.Body>
                <Card.Title>
                    Luhn Formula Credit Card Validator
                </Card.Title>
                <Card.Text style={{color: "red"}}> text sample lorem lorem ipsum baby </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Title>
                    Code Snippet 2
                </Card.Title>
                <Card.Text style={{color: "red"}}> text sample lorem lorem ipsum baby </Card.Text>
            </Card.Body>

        </Card>
        </div>
    );
}

export default About;