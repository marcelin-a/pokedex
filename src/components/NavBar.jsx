function NavBar({ handleClickp, handleClicks, pokemonIndex, pokemonList }) {


    return (
        <div>
    
          {pokemonIndex > 0 ? <button onClick={handleClickp}>précédent</button> : ""}
          {pokemonIndex < pokemonList.length - 1 ?<button onClick={handleClicks}>suivant</button> : ""}
      
        </div>
    );

}

export default NavBar;