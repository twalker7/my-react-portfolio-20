import React from 'react';
import Nav from '../Nav';
import {Row, Col} from 'react-bootstrap';


function Header(props){
    return(
        
      <header >
          
          <div className="header-component-title component-title">
          <h1>
          Full Stack Developer 
          </h1>
           <h3 > Thomas Walker </h3>
           <h5 className = "subheader">MERN Stack, Java, MySQL, Python, C++ </h5>
       
        </div>
        <div className="header-element">
      
        <h2 >
          <Nav setCurrentPage = {props.setCurrentPage} > </Nav>
        </h2>
      
        </div>
    
    
      </header> 
    );
}

export default Header;