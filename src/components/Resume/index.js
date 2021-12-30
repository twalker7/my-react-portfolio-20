import React from 'react';
import { Button } from 'react-bootstrap';


function Resume(){
    return(
        <div>
           <br/>
            <img id="resume" alt="resume" src ={require(`../../assets/software-engineer-resume-12-28-21.png`).default} />
            <br/>
            <Button variant="link">                                                                                                                        
            <a href={require(`../../assets/software-engineer-resume-12-28-21.pdf`).default} download> Download Resume </a>
            </Button>
        </div>
        

    );
}

export default Resume;