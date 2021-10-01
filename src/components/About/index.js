import React from 'react';

function About(){
    return(
        <div>
            <img className="profile-image" src ={require(`../../assets/profile-photo.jpeg`).default}/>

            <h3> 
            
            My name is Thomas Walker and I am a software engineer. I have experience building programs in various programming languages such as Java, C++, and Python, as well as a full-stack web development portfolio that demonstrates my skills in building dynamic and user-friendly web applications. 
            </h3>
        </div>
    );
}

export default About;