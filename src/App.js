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
      <section className="main-section">
        <div className='left-middle'>
          <h2>Languages</h2>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        {/* <div className='right-middle'>
          <h2>Design</h2>
            <p className='right-middle-p'>blah</p>
          <h2>Develop</h2>
            <p className='right-middle-p'>blah</p>
          <h2>Full-Stack</h2>
            <p className='right-middle-p'>blah</p>
          <h2>Collaborate</h2>
            <p className='right-middle-p'>blah</p>
        </div> */}
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
      </section>
   </> 
    );
  }
}
 
export default Main;
