import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePageGrid from './HomePageGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          What's on - your TV guide for the 21st century
        </p>
        <p>
          TV Show and web series database. Create personalised schedules. Episode guide, cast, crew and character information.
        </p>        
      </header>
      <HomePageGrid />
    </div>
  );
}

export default App;
