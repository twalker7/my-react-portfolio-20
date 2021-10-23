import React, {useState} from 'react';





function Project(){
     // array of project objects  above return 
     const [projects] = useState([
         {title: "WeatherAll App",
        link: "https://twalker7.github.io/WeatherAll-pro/",
        repo: "https://github.com/twalker7/WeatherAll-pro",
        //description: ,
        },
        {title: "Password Generator",
            link: "https://twalker7.github.io/03-passwordWiz/",
            repo: "https://github.com/twalker7/03-passwordWiz" ,
            //description: ,
        },
        {title: "Quiz App",
            link: "https://twalker7.github.io/WeatherAll-pro/" ,
            repo: "https://github.com/twalker7/04-QuizTime",
            //description: ,
        },
        {
            title: "Paint-n-Sip",
            link:  "https://twalker7.github.io/HTeamL-Project/",
            repo: "https://github.com/twalker7/DIY-Paint-N-Sip",
            //description: ,
        },
     ]);
    return(
       
        <div>
            <h2 className="component-header">Projects</h2>
            <ul className="projects-box">
              {projects.map((project, i)=>{
              return (
                <li> 
                    <div className="project" id ={`project${i + 1}`}>
                        <h4><a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>  </h4>
                        <h6><p className="project-repo"> <a href={project.repo} target="_blank" rel="noreferrer"> Repository Link</a></p> </h6>
                        <p className = "project-description"> project description project description project description project description project description project description </p>
                    </div>
                </li>
            )
          })}  
            </ul>
            
        </div>
    );
}


export default Project; 


/* 
removed code from returned jsx: 
<img className="project-image"
                        alt = {project.title} 
                        key={project.title} 
                        src={require(`../../assets/${i}.jpeg`).default}> 
                        </img>
                        
*/