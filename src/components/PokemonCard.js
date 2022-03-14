import React from "react";

const PokemonCard = ({ image, name, type }) => {
  const style = type + " thumb-container";
  return (
    <div className={style}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <small>{type}</small>
      </div>
    </div>
  );
};

export default PokemonCard;
