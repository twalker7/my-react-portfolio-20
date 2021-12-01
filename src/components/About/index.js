import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardGroup, Row} from 'react-bootstrap';
function About(){
    return(
        <div>
            <Row> 

            </Row>
            <h2 className="component-header"> 
            About
            </h2>
            <img className="profile-image" src ={require(`../../assets/professional-thumbnail-potential.jpg`).default} alt="headshot"/>
           
            <h6 className="about-description"> 
            
            Full Stack Web Developer with experience in multiple programming languages and a passion for problem-solving. A chess teacher with strong communication skills and a collaborative spirit, experienced in handling and conveying complex technical concepts. Polished analytical skills for effective debugging and algorithm design.             
            </h6>
        <CardGroup style={{color : "#000" }} >
            <Card style={{ width: "400px" }}>
                <Card.Body className="code-snippet">
                    <Card.Title className="code-snippet-title" >
                     Credit Card Validator (Luhn Formula)
                    </Card.Title>
                    <Card.Img src ={require(`../../assets/luhn-formula-credit-card-validator.jpeg`).default} alt="code snippet"/>
                    <Card.Text style={{fontSize:"10px"}}>
                    A program that utilizes the Luhn formula to validate credit card numbers
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body className="code-snippet">
                    <Card.Title className="code-snippet-title" >
                        Palindrome Detector
                    </Card.Title>
                    <Card.Img src ={require(`../../assets/palindrome-code-snippet.jpeg`).default} alt="code snippet"/>
                    <Card.Text style={{fontSize:"10px"}}> A palindrome detection program that takes four strings and returns the ammount of are palindromes among them. </Card.Text>
                </Card.Body>        
            </Card>
        </CardGroup>
        </div>
    );
}

export default About;