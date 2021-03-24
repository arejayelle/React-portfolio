import React from "react"
import logo from './logo.svg';
import './App.css';
import Page from "./Page";
import Timeline from "./timeline/Timeline.jsx";

function App() {
  return (
    <div className="App">
      <Page>
        Hello bees!
        <Timeline/>
      </Page>
    </div>
  );
}

export default App;
