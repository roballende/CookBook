import React, { useState, useEffect } from 'react';
import UserRecipeCard from '../components/UserRecipeCard'

function UserRecipes() {
    const [recipes, setRecipes] = useState([])

useEffect(() => {
    fetch('/userrecipes')
        .then((resp) => resp.json())
        .then((recipes) => setRecipes(recipes))
}, [])

    return (
    <div>
        {recipes.map(recipe => {
            return (
        <ul>
            <UserRecipeCard id={recipe.id} title={recipe.title} image={recipe.image} handleClick={handleClick} isInRecipeList={isInRecipeList}/> 
        </ul>
        
              
       
        )}
        )}
    </div>
    )
}
export default UserRecipes