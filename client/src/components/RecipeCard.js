import React, { useState } from 'react';

function RecipeCard({id, image, title, handleClick, isInRecipeList}) {

    
    return(
    <ul className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      {isInRecipeList ? (
            <button value={id} onClick={handleClick}className="primary">Add to my Recipes</button>
            ) : (
            <button value={id} onClick={handleClick}>In your Recipes</button>
            )}
      {/* <h5>{recipeButton}</h5> */}
    </ul>
  );

}

export default RecipeCard;