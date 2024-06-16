import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        const data = response.data;
        const formattedPokemon = {
          name: data.name,
          image: data.sprites.front_default,
          abilities: data.abilities.map(ability => ability.ability.name),
          stats: data.stats.map(stat => ({ name: stat.stat.name, value: stat.base_stat })),
        };
        setPokemon(formattedPokemon);
      });
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div>
        <h1>{pokemon.name}</h1>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={pokemon.image} alt={pokemon.name} style={{ width: '300px', height: 'auto' }} />
          <div style={{ marginLeft: '20px' }}>
            <h2>Habilidades:</h2>
            <ul>
              {pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability}</li>
              ))}
            </ul>
          </div>
        </div>
        <h2>Características:</h2>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>{stat.name}: {stat.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;
