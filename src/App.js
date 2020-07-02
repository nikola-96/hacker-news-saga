import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Navbar from './pages/navbar/navbar.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
