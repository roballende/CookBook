import React, { useState, useEffect, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import NavigBar from '../components/NavigBar';
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

    const onDelete = (userRecipeId) => {
        fetch(`/user_recipes/${userRecipeId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((resp) => resp.json())
            .then(() => {
               
                console.log('userRe', userRecipes, userRecipeId)
                const newUserRecipes = userRecipes.filter((userRecipe) => {
                
                    return userRecipe.id !== userRecipeId
               })
               setUserRecipes(newUserRecipes)
            })
    } 


    console.log(userRecipes)

    return (
        <>
            <NavigBar />
        <div className="p-6">
            <table className="table-recipes w-full">
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th className='image'></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {userRecipes.map(userRecipe => {
                        return (
                            <Fragment key={userRecipe.id}>
                                <UserRecipeCard onDelete={onDelete} userRecipe={userRecipe} updateUserRecipe={updateUserRecipe} /> 
                            </Fragment> 
                        )}
                    )}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default UserRecipes