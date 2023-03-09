import React, { useState, useEffect, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import UserRecipeCard from '../components/UserRecipeCard'

function UserRecipes() {
    const [searchParams] = useSearchParams()
    const user_id = searchParams.get('user_id')

    const [userRecipes, setUserRecipes] = useState([])

    useEffect(() => {
        fetch(`/user_recipes${user_id ? `?user_id=${user_id}` : ''}`)
            .then((resp) => resp.json())
            .then((userRecipes) => setUserRecipes(userRecipes))
    }, [user_id])

    const updateUserRecipe = (userRecipeId, data) => {
        fetch(`/user_recipes/${userRecipeId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((resp) => resp.json())
            .then((updatedUserRecipe) => {
               const newUserRecipes = userRecipes.map((userRecipe) => {
                    return userRecipe.id === updatedUserRecipe.id ? updatedUserRecipe : userRecipe
               })
               setUserRecipes(newUserRecipes)
            })
    } 

    console.log(userRecipes)

    return (
        <table>
        <thead>
            <tr>
                <th>Recipe Name</th>
                <th>Recipe Image</th>
                <th>Cooked</th>
                <th>Favorite</th>
            </tr>
        </thead>
        <tbody>
        {userRecipes.map(userRecipe => {
                return (
                    <Fragment key={userRecipe.id}>
                        <UserRecipeCard id={userRecipe.id} userRecipe={userRecipe} updateUserRecipe={updateUserRecipe} /> 
                    </Fragment> 
                )}
            )}
        </tbody>
    </table>


    )
}
export default UserRecipes