import { Grid } from "@mui/material"
import { Box, Container } from "@mui/system";
import axios from "axios"
import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let endpoints = []
    for(let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    console.log(endpoints);
    let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  }

  
  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
