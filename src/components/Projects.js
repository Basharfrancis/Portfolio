import React from 'react';
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'

const Projects = () =>{
    return(<section id="projects">
    <div className="container">
      <div className="project-wrapper">
        <h2 className="section-title dark-blue-text">
          Projects
        </h2>
        <Project1/>
        <Project2/>
        <Project3/>
        </div>
        </div>
        </section>
        )
}
export default Projects