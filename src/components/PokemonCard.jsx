function PokemonCard(pokemon) {
  //console.log(pokemon);
 
  // création de la variable pokemon
  //const pokemon = { name: "mew" };

  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
  
}

export default PokemonCard;