import React from 'react';
import { NavLink } from 'react-router-dom';

function RecipeRow({ id, image, title, handleClick }) {
  const onAdd = (e) => {
    handleClick(id)
  }

    return(
      <tr>
        <td><NavLink className='underline' to={`/recipes/${id}`}>{title}</NavLink></td>
        <td>
          {
            image ? (
              <img src={image} alt={title} className="recipe-row-image" />
            ): 
            (
              <img src="/img/icon-default-recipe.svg" alt={title} className="recipe-row-image" />
            )
          }
        </td>
        <td className='cell-icon'>
          <button /*onClick={() => handleClick(id)}*/ onClick={onAdd} className="primary btn-add w-full">
            <img className="icon mr-2" src='/img/icon-cookbook.svg' />
            <span className=''>Add to My Cookbook</span>
          </button>
        </td>
      </tr>
  );

}

export default RecipeRow;