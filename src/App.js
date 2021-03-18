import React from "react"
import logo from './logo.svg';
import './App.css';
import Page from "./Page";

function App() {
  return (
    <div className="App">
      <Page>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Hello bees!
      </header>
      </Page>
    </div>
  );
}

export default App;
