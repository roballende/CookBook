import React, { useState, useEffect } from 'react';
import NavigBar from '../components/NavigBar';
import RecipeRow from '../components/RecipeRow';

function AllRecipes() {
    const [recipes, setRecipes] = useState([])
    const [errors, setErrors] = useState([])

    const [query, setQuery] = useState('')

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

    const onQuery = (e) => {
        const val = e.target.value;
        setQuery(val);
        fetch(`/recipes/search?query=${val}`)
        .then((resp) => resp.json())
        .then((recipes) => setRecipes(recipes))
    }

    return (
        <>
        <NavigBar />
        <div className="p-6">
            {submissionErrors}

            {/* Search field */}
            <input onChange={onQuery} value={query} className='w-full border-2 mb-6 p-2' type="text" placeholder="Start typing..." />
            <table className="table-recipes w-full">
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th className='image'></th>
                        <th className='cookbook'></th>
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
        </>
    )

}

export default AllRecipes;