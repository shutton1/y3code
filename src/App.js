import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./ebay-logo.png')} className="logo" alt="logo" />
        <p>تسوق حسب الاقسام</p>
        <input className="searchbar"></input>
        <a href="#">Sign Up</a>
      </header>
    </div>
  );
}

export default App;
