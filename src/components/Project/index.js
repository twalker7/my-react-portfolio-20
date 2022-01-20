import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, CardGroup, Row, Col} from 'react-bootstrap';



function Project(){

   /* if(window.innerWidth < 500){
        alert('turn screen horizontally to view Projects section');
    }
    */
    
     // array of project objects  above return 
     const [projects] = useState([
        {   title: "WeatherAll App",
            link: "https://twalker7.github.io/WeatherAll-pro/",
            repo: "https://github.com/twalker7/WeatherAll-pro",
            description: "Fetches weather information from any city in the United States and returns it to a user-friendly front end." ,
            technologies:"",
        },
        {   title: "PasswordWiz",
            link: "https://twalker7.github.io/03-passwordWiz/",
            repo: "https://github.com/twalker7/03-passwordWiz" ,
            description: "Prompts users for specific constraints and returns a password string that adheres to each specification selected.",
            technologies:"",
        },
        {   title: "Quiz App",
            link: "https://twalker7.github.io/04-QuizTime/" ,
            repo: "https://github.com/twalker7/04-QuizTime",
            description: "Administers a quiz that takes users through a set of 7 multiple choice questions, with buttons for selection.",
            technologies:"",
        },
        {
            title: "Paint-n-Sip",
            link:  "https://twalker7.github.io/DIY-Paint-N-Sip/",
            repo: "https://github.com/twalker7/DIY-Paint-N-Sip",
            description: "Assists users in the execution of a 'Paint and Sip' gathering event" ,
            technologies:"",
        },
        {
            title: "Create Em",
            link:  "https://create-em.herokuapp.com/",
            repo: "https://github.com/abergtra/Create-Em-ecommerce",
            description: "An e-commerce website for charcuterie boards. Users are able to customize boards for specific dietary restrictions." ,
            technologies:"",
        },
     ]);

    return(
       
        <div>
            <Container fluid>
                <Row>
            <h2 className="component-header">Projects</h2>
            <ul className="projects-box">
              {projects.map((project, i)=>{
              return (
                <li> 
                    <div className="project" id ={`project${i + 1}`}>
                      
                       
                         
                            <h4><a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>  </h4>
                        <h6><p className="project-repo"> <a href={project.repo} target="_blank" rel="noreferrer"> Repository Link</a></p> </h6>
                        <p className = "project-description"> {project.description} </p>
                        
                    </div>
                </li>
            )
          })}  
            </ul>
            </Row>
            <br></br>
            <Row>
            <h2 style={{color : "#FFFFF" }} > Algorithm Samples </h2> 
            </Row>
            <Row>
                <Col></Col>
                <Col>
            <CardGroup className="card-group" style={{color : "#000", width: "800px" }} >
                <Card className="code-snippet-card" >
                    <Card.Body className="code-snippet-body">
                        <Card.Title className="code-snippet-title" >
                        Credit Card Validator (Luhn Formula)
                        </Card.Title>
                        <Card.Img className="code-snippet-image" src ={require(`../../assets/luhn-formula-credit-card-validator.jpeg`).default} alt="code snippet"/>
                        <Card.Text style={{fontSize:"10px"}}>
                        A program that utilizes the Luhn formula to validate credit card numbers
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="code-snippet-card">
                    <Card.Body className="code-snippet-body">
                        <Card.Title className="code-snippet-title" >
                            Palindrome Detector
                        </Card.Title>
                        <Card.Img className="code-snippet-image" src ={require(`../../assets/palindrome-code-snippet.jpeg`).default} alt="code snippet"/>
                        <Card.Text style={{fontSize:"10px"}}> A palindrome detection program that takes four strings and returns the amount of palindromes among them. </Card.Text>
                    </Card.Body>        
                </Card>
                
            </CardGroup>
            </Col>
                <Col></Col>
            </Row>
            </Container>
          
        </div>
    );
}
 
export default Project; 

/* removed from around the project div in loop return
<div className="project-info-box">
</div> 
*/