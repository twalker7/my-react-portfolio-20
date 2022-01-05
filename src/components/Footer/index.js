import React from 'react';

function Footer(){
    return(
        <h5 className="footer"> 
             <a className="component-title" target="_blank" rel="noreferrer" href="mailto: twalker@onetechadvanced.com"> twalker@onetechadvanced.com </a>
             <br/> <br/>
            <div>
            <a className="component-title" target="_blank" rel="noreferrer" href="https://github.com/twalker7">
                <img src={require(`../../assets/github-image.png`).default}/>
              
            </a> 
            &emsp; &emsp;
            <a className="component-title" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/thomas-walker-7360ba8a/">
               <img src={require(`../../assets/linkedin-image.png`).default}/>
                
            </a> 
            </div>
        </h5>
    );
}

export default Footer;