import './App.css';
import React from 'react';
import GoogleMapComponent from './Components/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Maps App</h1>
      </header>
      <main>
        <GoogleMapComponent />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}

export default App;
