import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
