function NavBar({ handleClick, pokemonList, pokemonIndex}) {
  

  if (pokemonList[pokemonIndex].name === "pikachu"){
    alert("pika pikachu !!!");
  }

  return (

      <div>

        {pokemonList.map((pokemonList, Index) => (
          
          <input 
          key={Index}
          type="button" 
          value={pokemonList.name}
          onClick={() =>handleClick(Index)}
          />

         ))}

      </div>

  );

}

export default NavBar;