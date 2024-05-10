import React from 'react';
import MenuItem from '../MenuItem.jsx';

function MenuList({FoodList}) {
  console.log(FoodList);
  return (
    <>
      {/*render a MenuItem component to each element of the props array*/}
      
      {FoodList.map((identfoodItem, index) => (
        <MenuItem
          key={index}
          name={identfoodItem.itemName}
          description={identfoodItem.description}
          foodImage={identfoodItem.foodImage}
          price={identfoodItem.price}
          isFavorite={identfoodItem.isFavorite}
        />
      ))}

    </>
  );
}

export default MenuList;