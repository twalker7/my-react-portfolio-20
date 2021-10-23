import React from 'react';

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

        </div>
    );
}

export default About;