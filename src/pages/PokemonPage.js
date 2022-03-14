import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Loader from "../components/Loader";
import PokeCard from "../components/PokeCard";

const PokemonPage = () => {
  let { name } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemon(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPokemon(name);
  }, [name]);
  console.log("ini", pokemon);
  return (
    <>
      <Container>
        {loading ? (
          <div className="app-contaner">
            <Loader />
          </div>
        ) : (
          <div>
            <Row fluid>
              <Col xs={12} md={6}>
                <PokeCard
                  name={pokemon.name}
                  id={pokemon.id}
                  type={pokemon.types[0].type.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                />
              </Col>
              <Col xs={12} md={6}>
                <div className="card-info">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>
                      <h4>Height</h4>
                      <p className="TextInfo">
                        {Math.round(pokemon.height * 10) / 100} m
                      </p>
                      <h4>Weight</h4>
                      <p className="TextInfo">
                        {Math.round(pokemon.weight * 10) / 100} kg
                      </p>
                    </div>
                    <div>
                      <h4>Abilities</h4>
                      {pokemon.abilities &&
                        pokemon.abilities.map((ability, index) => {
                          return (
                            <p className="TextInfo" key={index}>
                              {ability["ability"]["name"]}
                            </p>
                          );
                        })}
                      <h4>Type</h4>
                      {pokemon.types &&
                        pokemon.types.map((type, index) => {
                          return (
                            <p className="TextInfo" key={index}>
                              {type["type"]["name"]}
                            </p>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Col xs={12}>
              <div className="card-stats">
                <h4>Statistics</h4>
                {pokemon.stats &&
                  pokemon.stats.map((stat, index) => {
                    return (
                      <p key={index}>
                        {stat["stat"]["name"]}: 
                        <span className="pokeCard__item">
                          <strong>{stat.base_stat}</strong>
                        </span>
                      </p>
                    );
                  })}
              </div>
            </Col>
          </div>
        )}
      </Container>
    </>
  );
};

export default PokemonPage;
