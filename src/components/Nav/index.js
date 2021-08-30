import React from 'react';


function Nav(){
    
    return(
        <header>
        <h2>
        <a data-testid="link" href="/">
           Thomas Walker<span role="img" aria-label="camera"> ☀️ </span>
        </a>
      </h2>
      <nav>
          <ul className="flex-row">
              <li>
                  <a className="">
                      About Me
                  </a>
              </li>
              <li className="">
            <a>
              Contact
            </a>
            </li>
            <li>
             <a className=""> 
             Resume
             </a>
            </li>
          </ul>
      </nav>
      </header> 
    );
}

export default Nav;