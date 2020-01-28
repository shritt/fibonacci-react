import React from 'react';
import Series from './series';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className="row flex-column align-items-center">
        <h1>Lets Generate a Fibonacci Series</h1>
        <Series />
      </div>
    </div>
  );
}

export default App;
