import React from "react"
import logo from './logo.svg';
import './App.css';
import HeaderBar from "./HeaderBar";

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Hello bees!
      </header>
    </div>
  );
}

export default App;
