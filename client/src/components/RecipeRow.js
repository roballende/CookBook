import React from 'react';

function RecipeRow({ id, image, title, handleClick }) {
  const onAdd = (e) => {
    handleClick(id)
  }

    return(
      <tr>
        <td>{title}</td>
        <td><img src={image} alt={title} className="recipe-row-image" /></td>
        <td>
          <button /*onClick={() => handleClick(id)}*/ onClick={onAdd} className="primary">Add to My Cookbook</button>
        </td>
      </tr>
  );

}

export default RecipeRow;