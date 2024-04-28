import { useState } from "react";
import './App.css';
import NavBar from './components/NavBar.jsx';
import PokemonCard from "./components/PokemonCard.jsx";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  const handleClick = (Index) => {
    setpokemonIndex(Index)
  }

    // *** Insertion tableau pokemonList
    const pokemonList = [
      {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "charmander",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        },
        {
          name: "squirtle",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        },
        {
          name: "pikachu",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        },
        {
          name: "mew",
        },
      ];  

      return (
       <div>
        
          <PokemonCard name={pokemonList[pokemonIndex].name} imgSrc={pokemonList[pokemonIndex].imgSrc}/>
          
          <NavBar handleClick={handleClick} pokemonIndex={pokemonIndex} pokemonList={pokemonList}/>

        </div>
      );
    
}

export default App;