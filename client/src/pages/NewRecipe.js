import React from "react";
import FormNewRecipe from "../components/FormNewRecipe";
import { useAuthContext } from "../contexts/AuthContext";


function NewRecipe() {
    const { user } = useAuthContext()

    return (
    <div>
        {
            <>
                <h3>Your New Recipe</h3>
                <FormNewRecipe />
            </>
        }
    </div>
    )
}



export default NewRecipe;