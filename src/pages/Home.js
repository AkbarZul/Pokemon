import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [loading, setLoading] = useState(true);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentPokemon) => [...currentPokemon, data]);
        setLoading(false);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <>
      {loading ? (
        <div className="app-contaner">
          <h3>Loading</h3>
        </div>
      ) : (
        <div className="app-contaner">
          <h1>Pokemon Evolution</h1>
          <div className="pokemon-container">
            <div className="all-container">
              {allPokemons.map((pokemonStats, index) => (
                <PokemonCard
                  key={index}
                  image={pokemonStats.sprites.other.dream_world.front_default}
                  name={pokemonStats.name}
                  type={pokemonStats.types[0].type.name}
                />
              ))}
            </div>
            <button className="load-more" onClick={() => getAllPokemons()}>
              Load more
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
