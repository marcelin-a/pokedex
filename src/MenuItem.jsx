import React from "react";

function MenuItem(props) {
  //create a state isFavorite that has the inital value of isFavorite that comes from the props

  const [isFavorite, setIsFavorite] = React.useState(props.isFavorite);
  const handleClickFavorite = () => {
    !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
  };

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        {/* the image will receive the url src from the props */}
        <img src={(props.foodImage)} alt="foodImage" />
        <figcaption>
          {/* the h2 will receive the item name from the props */}
          <h2>{props.name}</h2>
          {/* the p will receive the item description from the props */}
          <p>{props.description}</p>
        </figcaption>
      </figure>
      {/* the span will receive the item price from the props */}
      <span>{props.price} EUR</span>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
      {!isFavorite ? <button onClick={handleClickFavorite}>🖤</button> : <button onClick={handleClickFavorite}>❤️</button>}
    </section>
  );
}

export default MenuItem;