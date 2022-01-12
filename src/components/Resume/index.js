import React from 'react';
import { Button } from 'react-bootstrap';


function Resume(){
    return(
        <div>
           <br/>
            <img id="resume" alt="resume" src ={require(`../../assets/software-engineer-resume-1-11-22.png`).default} />
            <br/>
            <Button variant="link">                                                                                                                        
            <a href={require(`../../assets/software-engineer-resume-1-11-22.pdf`).default} download> Download Resume </a>
            </Button>
        </div>
        

    );
}

export default Resume;