function NavBar({ handleClick, pokemonList}) {

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