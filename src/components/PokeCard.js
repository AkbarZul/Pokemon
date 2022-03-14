import React from "react";

const PokeCard = ({ id, name, type, image }) => {
//   const style = type + " type-container";
  const styles = type + " card-container"
  return (
    <div className={styles}>
      <p className="textCard">{name}</p>
      <p className="textCard" style={{ marginTop: "-10px" }}>
        # {id.toString().padStart(3, "0")}
      </p>
      <img src={image} alt={name} />
      <div className='type-container'>
        <p className="textCard" style={{color: 'black', fontSize: '20px'}}>{type}</p>
      </div>
    </div>
  );
};

export default PokeCard;
