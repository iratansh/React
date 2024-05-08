import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom"
import githubImg from './github.png'; 
import linkedinImg from './linkedin.png';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <p>
          Ishaan Ratanshi Student at Unviersity of Alberta
        </p>
        
        <tr>
          
          <td>
            <a href="https://github.com/iratansh" target='blank' rel='noopener noreferrer'>
              <img src={ githubImg } alt="GitHub" className='github'/>
            </a>

            <a href="https://www.linkedin.com/in/ishaan-ratanshi/" target='blank' rel='noopener noreferrer'>
              <img src={ linkedinImg } alt="LinkedIn" className='linkedin'/>
            </a>
              
    
          </td>

        </tr>
          
          
        
        
      </header>
    </div>
  );
}

export default App;