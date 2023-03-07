import React from 'react';

function UserRecipeCard({image, title, id}) {

    
    return(
    <ul className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      {isInRecipeList ? (
            <button value={id} onClick={handleClick}className="primary">Add to Cookbook</button>
            ) : (
            <button value={id} onClick={handleClick}>In Cookbook</button>
            )}
    </ul>
  );

}

export default UserRecipeCard;