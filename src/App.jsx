import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './view/home';
import Pokemones from './view/pokemones';
import PokemonDetail from './view/PokemonDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Pokédex</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/pokemones">Pokemones</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
