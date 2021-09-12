import React from 'react';
import Nav from '../Nav';


function Header(props){
    return(
        
        <header>
        <h1>
        <a data-testid="link" href="/">
           Thomas Walker<span role="img" aria-label="camera"> ☀️ </span>
        </a>
        

      </h1>
      <h2>
        <Nav setCurrentPage = {props.setCurrentPage} > </Nav>
      </h2>
    
      
    
      
      </header> 
    );
}

export default Header;