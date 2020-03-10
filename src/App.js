import React from 'react';
import {Router} from "@reach/router";
import Hello from "./components/Hello";
import Home from "./components/Home";
// import Number from "./components/Number";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="home"/>
        <Hello path="/:id"/>
        <Hello path="/:id/:color/:background"/>
        {/* <Wrapper path="/Home"/> */}
      </Router>
    </div>
  );
}

export default App;
