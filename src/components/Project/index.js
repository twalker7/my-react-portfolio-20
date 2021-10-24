import React, {useState} from 'react';





function Project(){
     // array of project objects  above return 
     const [projects] = useState([
         {title: "WeatherAll App",
        link: "https://twalker7.github.io/WeatherAll-pro/",
        repo: "https://github.com/twalker7/WeatherAll-pro",
        description: "Fetches weather information from any city in the United States and returns it to a user-friendly front end." ,
        },
        {title: "PasswordWiz",
            link: "https://twalker7.github.io/03-passwordWiz/",
            repo: "https://github.com/twalker7/03-passwordWiz" ,
            description: "Prompts users for specific constraints and returns a password string that adheres to each specification selected.",
        },
        {title: "Quiz App",
            link: "https://twalker7.github.io/WeatherAll-pro/" ,
            repo: "https://github.com/twalker7/04-QuizTime",
            description: "Administers a quiz that takes users through a set of 7 multiple choice questions, with buttons for selection.",
        },
        {
            title: "Paint-n-Sip",
            link:  "https://twalker7.github.io/DIY-Paint-N-Sip/",
            repo: "https://github.com/twalker7/DIY-Paint-N-Sip",
            description: "Assists users in the execution of a 'Paint and Sip' gathering event" ,
        },
        {
            title: "Create Em",
            link:  "https://create-em.herokuapp.com/",
            repo: "https://github.com/abergtra/Create-Em-ecommerce",
            description: "An e-commerce website for charcuterie boards. Users are able to customize boards for specific dietary restrictions." ,
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
                        <p className = "project-description"> {project.description} </p>
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