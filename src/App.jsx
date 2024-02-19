import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="heading">WebSwift Internship Assignment</h1>
      </header>
      <main>
        <section className="intro-section">
          <p className="intro">
            Hello WebSwift ,{"\n"}

            My name is <span> Dipuranjan Sethy </span>belongs to <span>Konark Odisha</span>. 
            Currently pursuing my <span> bachelors of technology 
            in computer science engineering from Indian 
            Institute Of Information Technology Ranchi.</span> I am a <span>Full Stack Web Developer(Mern)</span>.
            My recent projects includes <span>seekhoonline app ( learning managament System)</span> , <span>Inventory management(only backend)</span>.
            Currently leading the position of <span>web colead of GDSC IIITRanchi</span>  and also the <span>Coordinator of operation of ecell IIITRanchi</span> .

            My hobbies includes 
            playing badminton and also loves to read novels and Currently reading
            "A Wild Sheep Chase by Murakami". I also loves to write shayris.......
            </p>
        </section>
         <section>

         </section>
        <section className="skills-section">
          <h2>Skills/Interests:</h2>
          <ul className="skills-list">
            <li>Web Development (MERN)</li>
            <li>Public Speaking</li>
            <li>Content Writing</li>
            
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;