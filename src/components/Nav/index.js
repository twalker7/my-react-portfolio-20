import React from 'react';


function Nav(props){
    
    return(
      <nav>
          <ul className="flex-row">
              <li>
                  <a className="" onClick={()=> props.setCurrentPage('home')} href={() => false} >
                      About Me
                  </a>
              </li>
              <li>
                  <a  onClick={()=> props.setCurrentPage('portfolio')} href={() => false}>
                   Portfolio
                  </a>
              </li>   
              <li className="">
            <a className=""  onClick={()=> props.setCurrentPage('contact')} href={() => false}>
              Contact
            </a>
            </li>
            <li>
             <a className="" onClick={()=> props.setCurrentPage('resume')} href={() => false}> 
             Resume
             </a>
            </li>
          </ul>
      </nav>
    
    );
}

export default Nav;