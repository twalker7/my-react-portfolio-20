import React from 'react';
import Nav from '../Nav';

function Header(props){
    return(
        
        <header>
        <h2>
        <a data-testid="link" href="/">
           Thomas Walker<span role="img" aria-label="camera"> ☀️ </span>
        </a>
      </h2>
      <h2>
        <Nav setCurrentPage = {props.setCurrentPage} > </Nav>
      </h2>
      {props.children}
      
      </header> 
    );
}

export default Header;