import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePageGrid from './HomePageGrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ShowPage from './ShowPage';

function App() {
  return (
    <Router>
      <div>
<div className="App">
              <header className="App-header">
                <Link to="/"><p id="Title">
                  What's on - your TV guide for the 21st century
        </p>
        </Link>
              </header>
              <p id="TagLine">
                TV Show and web series database. Create personalised schedules. Episode guide, cast, crew and character information.
        </p>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            
              <HomePageGrid />
            
          </Route>
          <Route exact path="/whats-on">
            
              <Redirect to="/" />
            
          </Route>
          <Route path="/show/:showId" component={ShowPage} />
           <Route>
              <div> 404</div>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
