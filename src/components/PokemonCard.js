import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
  const { pokemon } = props;
  const style = pokemon.types[0].type.name + " thumb-container";
  return (
    <Link to={{ pathname: `/pokemon/${pokemon.name}` }} style={{textDecoration: 'none'}}>
      <div className={style}>
        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        <div>
          <h3>{pokemon.name}</h3>
          <small>{pokemon.types[0].type.name}</small>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
