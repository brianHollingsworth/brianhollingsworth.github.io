import React from 'react';
import BHLogo from './BHLogo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BHLogo className="App-logo" />
        <p>
          <code>I am currently refactoring brian.hollingsworth.codes into a <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">React</a> app.<br></br>
          In the meantime, have a gander at my resume's <a
          className="App-link"
          href="https://github.com/brianHollingsworth/brian.hollingsworth.codes"
          target="_blank"
          rel="noopener noreferrer">original form</a>.</code>
          </p>
      </header>
    </div>
  );
}

export default App;
