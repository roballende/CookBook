import React from "react";
import FormNewRecipe from "../components/FormNewRecipe";
import NavigBar from "../components/NavigBar";

function NewRecipe() {
    return (
        <>
        <NavigBar />
        <div className="p-6">
            <h3 className='text-3xl text-center pb-6'>Your New Recipe</h3>
            <FormNewRecipe />        
        </div>
     </>
    )
}



export default NewRecipe;