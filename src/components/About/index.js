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
                    <img className="profile-image " src ={require(`../../assets/ravi-kumar-unsplash.jpg`).default} alt="chess-illustration"/>
                </Col> 
                <Col></Col>
            </Row>
          <Row>
               
           <div className="about-description-container"> 
                <h5 className="about-description"> 
            
                Full Stack Web Developer with experience in multiple programming languages 
                and a passion for problem-solving. A chess teacher with excellent communication 
                skills and a collaborative spirit, experienced in handling and conveying complex 
                technical concepts. Polished analytical skills for effective debugging and algorithm design.             
                 </h5>  
           </div>
         </Row>
         
        </div>
    );
}
/* Temporarily removed 3-card description of duties -- withheld for mvp to be submitted
<Row> 
             <h3> 3 Role Descriptions </h3>
            <CardGroup style={{color:"black"}}> 
                <Card className="full-stack-developer" >
                    <Card.Title > Full Stack Developer </Card.Title>
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
                    <Card.Title> Programmer </Card.Title>
                </Card>
                <Card className="consultant ">
                    <Card.Title> Consultant </Card.Title>

                </Card>
                
            </CardGroup>
        </Row>
*/
export default About;