import React, { Component } from 'react';
import './App.css';

class Main extends Component {
  state = {  }
  render() { 
    return ( 
    <>
      <section className='head-section'>
        <div className='top-div'>
          <h1 className='name'>Joseph Brown</h1>
          <h3 className='name-intro'>Software Engineer, Musician, Collaborator</h3>
        </div>
      </section>
      <section className="top-section">
        <div className='left-middle'>
          <h2>Languages</h2>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className='right-middle'>
          <h2>Design</h2>
          <h2>Develop</h2>
          <h2>Full-Stack</h2>
          <h2>Collaborate</h2>
            <p className='design-p'>blah</p>
            <p className='develop-p'>blah</p>
            <p className='full-stack-p'>blah</p>
            <p className='collab-p'>blah</p>
        </div>
        <div className='left-bottom'>
          <h2>Contact</h2>
          <ul>
            <li><a>LinkedIn</a></li>
            <li><a>Email</a></li>
            <li><a>Github</a></li>
          </ul>
        </div>      
        <div className='right-bottom'>
          <div>
          <h2>Project 1</h2>
            <p>project 1 description</p>
            <a>project 1 link</a>
            </div>
            <div>
          <h2>Project 2</h2>
            <p>project 2 description</p>
            <a>project 2 link</a>
            </div>
            <div>
          <h2>Project 3</h2>
            <p>project 3 description</p>
            <a>project 3 link</a>
            </div>
            <div>
          <h2>Project 4</h2>
            <p>project 4 description</p>
            <a>project 4 link</a>
            </div>
        </div>
      </section>
   </> 
    );
  }
}
 
export default Main;
