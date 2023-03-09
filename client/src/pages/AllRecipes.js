import React, { useState, useEffect } from 'react';
import RecipeRow from '../components/RecipeRow';

function AllRecipes() {
    const [recipes, setRecipes] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch('/recipes')
            .then((resp) => resp.json())
            .then((recipes) => setRecipes(recipes))
    }, [])

    const addRecipe = (recipeId) => {
        fetch("/user_recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ recipe_id: recipeId }),
        })    
        .then((r) => {
            if (r.ok) {
                setRecipes(recipes.filter(recipe => recipe.id !== recipeId))
            } else {
                r.json().then((flaw) => setErrors(flaw.errors))
            }
        })
    }

    let submissionErrors = errors.map((error) => (<span key={error}>{error}</span>))



    return (
        
        <div>
            {submissionErrors}
            <table>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Recipe Image</th>
                        <th>Cookbook</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map(recipe => {
                        return (
                            <RecipeRow key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} handleClick={addRecipe} /> 
                        )}
                    )}
                </tbody>
            </table>
        </div>

    )

}

export default AllRecipes;