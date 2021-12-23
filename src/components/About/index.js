import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardGroup, Row, Col} from 'react-bootstrap';
function About(){
    return(
        <div>
              <h2 className="component-header"> 
            About 
            </h2>
            <Row> 
          
                <Col></Col> 
                <Col>             
                    <img className="profile-image " src ={require(`../../assets/professional-thumbnail-potential.jpg`).default} alt="headshot"/>
                </Col> 
                <Col></Col>
            </Row>
          <Row>
               
           <div className="about-description-container"> 
                <h6 className="about-description"> 
            
                Full Stack Web Developer with experience in multiple programming languages 
                and a passion for problem-solving. A chess teacher with strong communication 
                skills and a collaborative spirit, experienced in handling and conveying complex 
                technical concepts. Polished analytical skills for effective debugging and algorithm design.             
                 </h6>  
           </div>
         </Row>

         <Row> 
            <CardGroup className="card-group-roles"> 
           
                <Card className="full-stack-developer" >
                <h6> SYMBOL </h6> 
                    <Card.Title > Full Stack Developer </Card.Title>
                    <Card.Subtitle> Vanilla JS, MERN Stack</Card.Subtitle>
                    <Card.Body >
                        <ul>
                            <li className="fullstack-list-item"> abc </li>
                            <li className="fullstack-list-item"> abc </li>
                            <li className="fullstack-list-item"> abc </li>
                            <li className="fullstack-list-item"> abc </li>
                            
                        </ul>
                    </Card.Body>
                </Card>
                <Card className="programmer">
                <h6> SYMBOL </h6> 
                    <Card.Title> Programmer </Card.Title>
                    <Card.Subtitle> Vanilla JS, MERN Stack</Card.Subtitle>
                    <Card.Body >
                        <ul>
                            <li className="fullstack-list-item"> abc </li>
                            <li className="fullstack-list-item"> abc </li>
                            <li className="fullstack-list-item"> abc </li>
                            <li className="fullstack-list-item"> abc </li>
                            
                        </ul>
                    </Card.Body>
                </Card>
                
                
            </CardGroup>
        </Row>

         
        </div>
    );
}

export default About;