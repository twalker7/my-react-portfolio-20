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
         <Row> <h3> 3-Card role description goes below here : </h3> </Row>
        </div>
    );
}

export default About;