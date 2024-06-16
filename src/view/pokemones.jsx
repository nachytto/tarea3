import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        setPokemones(response.data.results);
      });
  }, []);

  const handleNavigate = () => {
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Selecciona un pokemon</h1>
      <select onChange={(e) => setSelectedPokemon(e.target.value)}>
        <option value="">Pokemones</option>
        {pokemones.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
        ))}
      </select>
      <button onClick={handleNavigate} style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}>Ver Detalle</button>
    </div>
  );
};

export default Pokemones;
