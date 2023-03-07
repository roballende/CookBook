import React from "react";
import FormNewRecipe from "../components/FormNewRecipe";


function NewRecipe({ user }) {

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