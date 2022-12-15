import './App.css';
import React from 'react';
import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';
import Soundwave from './pages/Soundwave';
import Discover from './pages/Discover';
import Join from './pages/Join';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <Link to="/soundwave">Soundwave</Link>
          <br/>
          <Link to="/discover">Discover</Link>
          <br/>
          <Link to="/join">Join</Link>
        </header>
        <main className="list-pokemons">

        </main>
        <footer></footer>
      </div>
        
      <Routes>
        <Route path="/soundwave" element={<Soundwave/>} />
        <Route path="/discover" element={<Discover/>} />
        <Route path="/join" element={<Join/>} />
      </Routes>
        
    </BrowserRouter>
    
  );
}

export default App;
