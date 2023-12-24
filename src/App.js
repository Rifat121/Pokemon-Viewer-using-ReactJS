/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import "./App.css";
import PokeDetails from "./components/PokeDetails";
import PokeCard from "./components/PokeCard";
import Search from "./components/Search";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [inputText, setInputText] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchedData, setSearchedData] = useState([]);

  const [pokeID, setpokeID] = useState(1);
  let pokemon = allPokemons.find((item) => item.id === pokeID);
  const handlePokeID = (index) => {
    setpokeID(index);
    pokemon = allPokemons.find((item) => item.id === pokeID);
  };
  const searchText = (inputText) => {
    if (inputText.length === 0) setSearchedData([]);
    let data = allPokemons.filter((pokemon) => {
      return pokemon.name === inputText;
    });
    setSearchedData(data);
    inputText.length > 0 ? setSearched(true) : setSearched(false);
  };
  const revertSearch = () => {
    setSearchedData([]);
  };
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    // console.log(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="container">
      <Search
        handleSearch={searchText}
        handleRevert={revertSearch}
        inputText={inputText}
        setInputText={setInputText}
      />
      <div className="main-container">
        <div id="left">
          {!searched && searchedData.length === 0 ? (
            allPokemons.map((pokemon, index) => (
              <PokeCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
                handleClick={handlePokeID}
              />
            ))
          ) : searchedData.length === 0 && searched ? (
            <>
              <div>Sorry! No Pokemon found...</div>
            </>
          ) : (
            searchedData.map((pokemon, index) => (
              <PokeCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
                handleClick={handlePokeID}
              />
            ))
          )}
          <button className="load-more" onClick={getAllPokemons}>
            More Pokemons
          </button>
        </div>
        <div id="right">
          {pokemon === undefined ? (
            <></>
          ) : (
            <PokeDetails
              name={pokemon.name}
              image={pokemon.sprites.other.home.front_shiny}
              baseExp={pokemon.base_experience}
              ability={pokemon.abilities[0].ability.name}
              type={pokemon.types[0].type.name}
              height={pokemon.height}
              weight={pokemon.weight}
              stat1={pokemon.stats[0].stat.name}
              stat2={pokemon.stats[1].stat.name}
              stat3={pokemon.stats[2].stat.name}
              stat4={pokemon.stats[3].stat.name}
              stat5={pokemon.stats[4].stat.name}
              stat6={pokemon.stats[5].stat.name}
              bs1={pokemon.stats[0].base_stat}
              bs2={pokemon.stats[1].base_stat}
              bs3={pokemon.stats[2].base_stat}
              bs4={pokemon.stats[3].base_stat}
              bs5={pokemon.stats[4].base_stat}
              bs6={pokemon.stats[5].base_stat}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
