import React from 'react';


function Nav(props){
    
    return(
      <nav>
          <ul className="flex-row">
              <li>
                  <a className="" onClick={()=> props.setCurrentPage('home')} >
                      About Me
                  </a>
              </li>
              <li>
                  <a  onClick={()=> props.setCurrentPage('portfolio')}>
                   Portfolio
                  </a>
              </li>   
              <li className="">
            <a className=""  onClick={()=> props.setCurrentPage('contact')}>
              Contact
            </a>
            </li>
            <li>
             <a className="" onClick={()=> props.setCurrentPage('resume')} > 
             Resume
             </a>
            </li>
          </ul>
      </nav>
    
    );
}

export default Nav;