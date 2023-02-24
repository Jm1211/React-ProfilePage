
import './app.css';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  
  const[myProjects] = useState([
    {id:1, name: 'Project 1'},
    {id: 2, name: 'Project 2'}
  ]);

  return (
    <div className="app">
      <Header/>
      <div id='portfolio'>
      <h2>Projects</h2>
      <ProjectList classProjects={myProjects}/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
