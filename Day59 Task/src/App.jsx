import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      setPokemon(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };
  useEffect(()=>{getData()},[])
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <button
        onClick={getData}
        className="px-4 py-2 rounded-3xl bg-orange-500 mb-6"
      >
        GET DATA
      </button>

      {pokemon && (
        <div className="max-w-sm mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="w-full h-56 object-contain bg-white p-2"
          />
          <div className="p-4 text-white">
            <h2 className="text-2xl font-bold capitalize mb-2">
              {pokemon.name} (ID: {pokemon.id})
            </h2>

            <p className="mb-1">
              <span className="font-semibold">Height:</span> {pokemon.height}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Weight:</span> {pokemon.weight}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Base Experience:</span>{" "}
              {pokemon.base_experience}
            </p>

            <p className="mb-1">
              <span className="font-semibold">Types:</span>{" "}
              {pokemon.types.map((t) => t.type.name).join(", ")}
            </p>

            <p className="mb-1">
              <span className="font-semibold">Abilities:</span>{" "}
              {pokemon.abilities.map((a) => a.ability.name).join(", ")}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Stats:</span>{" "}
              {pokemon.stats
                .map((s) => `${s.stat.name}: ${s.base_stat}`)
                .join(", ")}
            </p>

            <div className="flex gap-4 mt-2">
              {pokemon.cries?.latest && (
                <audio controls className="w-full">
                  <source src={pokemon.cries.latest} type="audio/ogg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;