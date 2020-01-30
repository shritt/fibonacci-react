import React from 'react';
import Series from './components/series';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className="flex-column align-items-center">
        <h1>Lets Generate a Fibonacci Series</h1>
        <Series />
      </div>
    </div>
  );
}

export default App;
