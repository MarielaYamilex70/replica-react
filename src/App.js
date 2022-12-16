import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Soundwave from './pages/Soundwave';
import Discover from './pages/Discover';
import Join from './pages/Join';
import NavM from './components/Nav';
import logo from './images/logo.png';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header_l header_alin">
          <img src={logo} className="header_logo" alt="logo" />
          <Link to="/soundwave" className='link_header link_nav'>  Soundwave</Link>
        </div>
        <div className="header_r">
          <NavM/> 
        </div>
      
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
