import React from 'react';

function About(){
    return(
        <div>
            <img className="profile-image" src ={require(`../../assets/profile-photo.jpeg`).default}/>

            <h3> 
            
            Full Stack Web Developer with experience in multiple programming languages and a passion for problem-solving. A chess teacher with strong communication skills and a collaborative spirit, experienced in handling and conveying complex technical concepts. Polished analytical skills for effective debugging and algorithm design.             </h3>
        </div>
    );
}

export default About;