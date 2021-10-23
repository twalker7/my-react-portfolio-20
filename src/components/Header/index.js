import React from 'react';
import Nav from '../Nav';


function Header(props){
    return(
        
        <header>
        <h1 className="component-header">
           Thomas Walker
           <p className = "subheader "> Full Stack Developer (MERN)</p>
           <p className = "subheader "> Java, MySQL, Python, C++, TypeScript </p>
       
      </h1>
      
      <h2>
        <Nav setCurrentPage = {props.setCurrentPage} > </Nav>
      </h2>
    
      
    
      
      </header> 
    );
}

export default Header;