import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePageGrid from './HomePageGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="Title">
          What's on - your TV guide for the 21st century
        </p>
      </header>
      <p id="TagLine">
        TV Show and web series database. Create personalised schedules. Episode guide, cast, crew and character information.
        </p>
      <HomePageGrid />
    </div>
  );
}

export default App;
