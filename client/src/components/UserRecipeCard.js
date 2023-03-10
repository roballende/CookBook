import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

function UserRecipeCard({ userRecipe, updateUserRecipe, onDelete }) {
    const {user} = useAuthContext()

    const { recipe: { id: recipeId, image, title }, cooked, favorite, user_id } = userRecipe

    // Not using
    // const onCookedChange = (e) => {
    //     updateUserRecipe(userRecipe.id, { cooked: e.target.checked })
    // }

    const onCookedClick = (e) => {
        updateUserRecipe(userRecipe.id, { cooked: !cooked })
    }
    
    // Not using
    // const onFavoriteChange = (e) => {
    //     updateUserRecipe(userRecipe.id, { favorite: e.target.checked })
    // }

    const onFavoriteClick = (e) => {
        updateUserRecipe(userRecipe.id, { favorite: !favorite })
    }

    const canUpdate = user.id === user_id;
    console.log(user.id, user_id)

    const renderCooked = () => {
        return "" //cooked ? 'Y' : 'N'
    }

    const renderFavorite = () => {
        return favorite ? <img className="icon mr-2" src={renderFavoriteIconURL()} /> : ''
    }

    const onDeleteClick = () => {
        onDelete(userRecipe.id)    
    }

    const renderCookedIconURL = () => {
        return `/img/icon-plate-${cooked ? 'fill' : 'empty'}.svg`
    }

    const renderFavoriteIconURL = () => {
        return `/img/icon-heart-${favorite ? 'fill' : 'empty'}.svg`
    }

    return(
        <tr>
        <td><NavLink to={`/recipes/${recipeId}`}>{title}</NavLink></td>
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
        <td>
           {canUpdate && <button onClick={onDeleteClick} className="primary btn-remove w-full">
                <img className="icon delete mr-2" src='/img/icon-delete.svg' />
            </button>}
        </td>
        <td className='cell-icon'>
            {/* {canUpdate ? <input type="checkbox" onChange={onCookedChange} checked={cooked} /> : renderCooked()       } */}
            {canUpdate ? <img onClick={onCookedClick} className="icon mr-2" src={renderCookedIconURL()} /> : renderCooked() }  
            {canUpdate ? <span>Cooked</span> : ''}      
        </td>
        <td className='cell-icon'>
            {/* {canUpdate ? <input type="checkbox" onChange={onFavoriteChange} checked={favorite} /> : renderFavorite() } */}
            {canUpdate ? <img onClick={onFavoriteClick} className="icon mr-2" src={renderFavoriteIconURL()} /> : renderFavorite() }    
            {canUpdate ? <span>Favorite</span> : ''}      
        </td>
      </tr>
  );

}

export default UserRecipeCard;