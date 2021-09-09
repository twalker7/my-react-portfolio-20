import React, {useState} from 'react';
// import photos from '../../assets/app';




function Project(){
     // array of project objects  above return 
     const [projects] = useState([
         {title: "WeatherAll App",
        link: "src/assets/teamproject1.jpeg",
        //repo: ,
        //image: ,
        },
        {title: "Password Generator",
            //link: ,
            //repo: ,
            //image: ,
        },
        {title: "Quiz App"
            //link: ,
            //repo: ,
            //image: ,
        },
        {title: "Paint-n-Sip "
            //link: ,
            //repo: ,
            //image: ,
        },
     ]);
    return(
       
        <div>
            <h2>Projects</h2>
            <ul>
              {projects.map((project, i)=>{
              return (
                <li> 
                    <div className="projects">
                    {project.title} 
                    <img alt = {project.title} 
                    key={project.title} 
                    src={require(`../../assets/${i}.jpeg`).default}></img>
                    </div>
                </li>
            )
          })}  
            </ul>
            
        </div>
    );
}


export default Project; 