import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';

function UserRecipeCard({ userRecipe, updateUserRecipe }) {
    const {user} = useAuthContext()

    const { recipe: { image, title }, cooked, favorite, user_id } = userRecipe

    const onCookedChange = (e) => {
        updateUserRecipe(userRecipe.id, { cooked: e.target.checked })
    }
    
    const onFavoriteChange = (e) => {
        updateUserRecipe(userRecipe.id, { favorite: e.target.checked })
    }

    const canUpdate = user.id === user_id;
    console.log(user.id, user_id)

    const renderCooked = () => {
        return cooked ? 'Y' : 'N'
    }

    const renderFavorite = () => {
        return favorite ? 'Y' : 'N'
    }

    return(
        <tr>
        <td>{title}</td>
        <td><img src={image} alt={title} className="recipe-row-image" /></td>
        <td>
            {canUpdate ? <input type="checkbox" onChange={onCookedChange} checked={cooked} /> : renderCooked()       }        </td>
        <td>
            {canUpdate ? <input type="checkbox" onChange={onFavoriteChange} checked={favorite} /> : renderFavorite() }
        </td>
      </tr>
  );

}

export default UserRecipeCard;