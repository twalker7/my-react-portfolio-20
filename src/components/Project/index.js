import React, {useState} from 'react';





function Project(){
     // array of project objects  above return 
     const [projects] = useState([
         {title: "WeatherAll App",
        link: "https://twalker7.github.io/WeatherAll-pro/",
        repo: "https://github.com/twalker7/WeatherAll-pro",
        //image: ,
        },
        {title: "Password Generator",
            link: "https://twalker7.github.io/03-passwordWiz/",
            repo: "https://github.com/twalker7/03-passwordWiz" ,
            //image: ,
        },
        {title: "Quiz App",
            link: "https://twalker7.github.io/WeatherAll-pro/" ,
            repo: "https://github.com/twalker7/04-QuizTime",
            //image: ,
        },
        {
            title: "Paint-n-Sip",
            link:  "https://twalker7.github.io/HTeamL-Project/",
            repo: "https://github.com/Narmstrongv/HTeamL-Project-2",
            //image: ,
        },
     ]);
    return(
       
        <div>
            <h2>Projects</h2>
            <ul className="projects-box">
              {projects.map((project, i)=>{
              return (
                <li> 
                    <div className="project">
                        <h4><a href={project.link} target="_blank">{project.title}</a>  </h4>
                        <p className="project-repo"> <a href={project.repo} target="_blank"> App Repository</a></p>
                        <img className="project-image"
                        alt = {project.title} 
                        key={project.title} 
                        src={require(`../../assets/${i}.jpeg`).default}> 
                        </img>
                        
                    </div>
                </li>
            )
          })}  
            </ul>
            
        </div>
    );
}


export default Project; 