import React, { Component } from 'react';
import './Projects.css';
import TicTacToe from './TicTacToe';
import TheWeather from './TheWeather'

export class Projects extends Component {
    render() {
      return (
        <div className="projectsPage"><h1>Projects</h1>
          <div className="list">
            <ul> projectsList.project1
              <li>projectsList.project1.projectName</li> 
              <li>Random Joke</li> 
              <li><TheWeather /></li> 
              <li><TicTacToe /></li> 
            
            </ul>


          </div>
        </div>
      )
    }
  }
  
export default Projects;


const projectsList = {
  project1:{
    projectName:"The Weather",
    pictureURL:"https://www.istockphoto.com/vektor/cartoon-papper-klippa-v%C3%A4der-ikoner-gm1220573261-357456637",
    Description:"React API: fetching Openweathermapd api"
  },
  project2:{
    projectName:"Tic Tac Toe",
    pictureURL:"https://www.istockphoto.com/vektor/tic-tac-toe-m%C3%A5lade-grunge-bl%C3%A4ck-blotting-borsten-konsistens-isolerade-bakgrunden-gm670031790-123862599",
    Description:"Tic Tac Toe Game with React"
  },
  project3:{
    projectName:"Random Joke",
    pictureURL:"https://www.istockphoto.com/vektor/jester-hatt-med-clown-glas%C3%B6gon-och-r%C3%B6d-n%C3%A4sa-gm1135528847-302115863",
    Description:"React API: fetching Random Joke api"
  }
  
}