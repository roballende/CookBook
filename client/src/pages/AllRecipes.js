import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';



function AllRecipes({ user }) {
const [recipes, setRecipes] = useState([])
const [isInRecipeList, setIsInRecipeList] = useState(true)
const [errors, setErrors] = useState([])

useEffect(() => {
    fetch('/recipes')
        .then((resp) => resp.json())
        .then((recipes) => setRecipes(recipes))
}, [])

// add a rating

// function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/userrecipes", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         description,  
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((createdList) => setList(createdList));
//       } else {
//         r.json().then((flaw) => setErrors(flaw.errors));
//       }
//     });
//   }

const handleClick = (e) => {
    if (isInRecipeList===true) {
        // console.log(e.target.value)
        const userRecipe = {...recipes.find(rec => {
            return rec.id === parseInt(e.target.value);
          })};
        // console.log(userRecipe.title);

        fetch("/userrecipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: userRecipe.title, 
                image: userRecipe.image, 
                category: userRecipe.category, 
                origin: userRecipe.origin, 
                directions: userRecipe.directions, 
                ing1: userRecipe.ing1, 
                ing2: userRecipe.ing2, 
                ing3: userRecipe.ing3, 
                ing4: userRecipe.ing4, 
                ing5: userRecipe.ing5, 
                ing6: userRecipe.ing6, 
                ing7: userRecipe.ing7, 
                ing8: userRecipe.ing8, 
                ing9: userRecipe.ing9, 
                ing10: userRecipe.ing10, 
                ing11: userRecipe.ing11, 
                ing12: userRecipe.ing12, 
                ing13: userRecipe.ing13, 
                ing14: userRecipe.ing14, 
                ing15: userRecipe.ing15, 
                ing16: userRecipe.ing16, 
                ing17: userRecipe.ing17, 
                ing18: userRecipe.ing18, 
                ing19: userRecipe.ing19, 
                ing20: userRecipe.ing20, 
                meas1: userRecipe.meas1, 
                meas2: userRecipe.meas2, 
                meas3: userRecipe.meas3, 
                meas4: userRecipe.meas4, 
                meas5: userRecipe.meas5, 
                meas6: userRecipe.meas6, 
                meas7: userRecipe.meas7, 
                meas8: userRecipe.meas8, 
                meas9: userRecipe.meas9, 
                meas10: userRecipe.meas10, 
                meas11: userRecipe.meas11, 
                meas12: userRecipe.meas12, 
                meas13: userRecipe.meas13, 
                meas14: userRecipe.meas14, 
                meas15: userRecipe.meas15, 
                meas16: userRecipe.meas16, 
                meas17: userRecipe.meas17, 
                meas18: userRecipe.meas18, 
                meas19: userRecipe.meas19, 
                meas20: userRecipe.meas20 
            }),
        })
        
        .then((r) => {
            if (r.ok) {
                setIsInRecipeList(false);
            } else {
                r.json().then((flaw) => setErrors(flaw.errors))
            }
        })
    }
}

let submissionErrors = errors.map((error) => (<span key={error}>{error}</span>))



return (
    
    <div>
        {submissionErrors}

        {recipes.map(recipe => {
            return (
        <ul>
            <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} handleClick={handleClick} isInRecipeList={isInRecipeList}/> 
        </ul>
        
              
       
        )}
        )}

    </div>

)
        }

export default AllRecipes;